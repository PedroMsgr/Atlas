"use client";

// Componente de lista de clientes para administración.
// Permite buscar, filtrar y eliminar usuarios con rol cliente.

import { useState, useMemo } from "react";
import { Box, Table, Text, Spinner, Flex, Card } from "@radix-ui/themes";
import { useQuery, useMutation } from "@apollo/client";
import { DELETE_USER } from "@/graphql/mutations/user.mutations";
import { GET_USERS } from "@/graphql/queries";
import { Role } from "@/types/user.types";
import DeleteButtonWithConfirm from "@/components/ui/DeleteButtonWithConfirm";
import { useRouter } from "next/navigation";
import { AtlasButton } from "../ui/AtlasButton";

export default function ClientList() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const { data, loading, error, refetch } = useQuery(GET_USERS, {
    variables: { role: [Role.CLIENT], search, page, pageSize },
    fetchPolicy: "cache-and-network",
  });
  const [deleteUser, { loading: deleting }] = useMutation(DELETE_USER, {
    onCompleted: () => {
      refetch();
    },
    onError: () => {},
  });
  const users = data?.users?.results || [];
  const total = data?.users?.total || 0;
  const totalPages = data?.users?.totalPages || 1;

  return (
    <Box>
      <Card>
        <Flex
          mb="4"
          align="center"
          gap="3"
          className="flex flex-col gap-2 sm:flex-row sm:items-center"
        >
          <input
            type="text"
            placeholder="Buscar por nombre o email..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="w-full sm:w-auto"
            style={{
              minWidth: 220,
              background: "#fff",
              border: "1px solid #ddd",
              borderRadius: 6,
              padding: "8px 12px",
            }}
          />
          <AtlasButton
            variant="success"
            onClick={() => router.push("/admin/clients/create")}
            className="w-full sm:w-auto"
          >
            Crear cliente
          </AtlasButton>
        </Flex>
        {loading ? (
          <Spinner />
        ) : error ? (
          <Text color="red">Error al cargar clientes</Text>
        ) : (
          <>
            <Table.Root
              variant="surface"
              className="border rounded-lg overflow-hidden"
              style={{ marginTop: 16 }}
            >
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>Nombre</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Estado</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Acciones</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {users.length === 0 ? (
                  <Table.Row>
                    <Table.Cell colSpan={4} align="center">
                      <Text color="gray">No hay resultados.</Text>
                    </Table.Cell>
                  </Table.Row>
                ) : (
                  users.map((u: any) => (
                    <Table.Row key={u.id}>
                      <Table.Cell>
                        {u.firstName} {u.lastName}
                      </Table.Cell>
                      <Table.Cell>{u.email}</Table.Cell>
                      <Table.Cell>
                        {u.isActive ? "Activo" : "Inactivo"}
                      </Table.Cell>
                      <Table.Cell>
                        <DeleteButtonWithConfirm
                          id={u.id}
                          name={`${u.firstName} ${u.lastName}`}
                          loading={deleting}
                          onConfirm={() =>
                            deleteUser({ variables: { id: u.id } })
                          }
                          title="¿Eliminar usuario?"
                          description={`¿Estás seguro de que deseas eliminar al usuario "${u.firstName} ${u.lastName}"? Esta acción no se puede deshacer.`}
                          ariaLabel={`Eliminar usuario ${u.firstName} ${u.lastName}`}
                        />
                      </Table.Cell>
                    </Table.Row>
                  ))
                )}
              </Table.Body>
            </Table.Root>
            <Flex
              mt="4"
              gap="2"
              align="center"
              className="flex flex-col gap-2 sm:flex-row sm:items-center w-full"
            >
              <AtlasButton
                variant="back"
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="w-full sm:w-auto"
              >
                Anterior
              </AtlasButton>
              <span className="w-full text-center sm:w-auto">
                Página {page} de {totalPages}
              </span>
              <AtlasButton
                variant="next"
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
                className="w-full sm:w-auto"
              >
                Siguiente
              </AtlasButton>
            </Flex>
          </>
        )}
      </Card>
    </Box>
  );
}
