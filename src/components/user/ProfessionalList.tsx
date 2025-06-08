"use client";

// Componente de lista de profesionales y administradores.
// Permite buscar, filtrar y eliminar usuarios con rol profesional o admin.

import { useState, useMemo } from "react";
import { Box, Table, Text, Spinner, Flex, Card } from "@radix-ui/themes";
import { useQuery, useMutation } from "@apollo/client";
import { DELETE_USER } from "@/graphql/mutations/user.mutations";
import { GET_USERS } from "@/graphql/queries";
import { Role } from "@/types/user.types";
import DeleteButtonWithConfirm from "@/components/ui/DeleteButtonWithConfirm";
import { useRouter } from "next/navigation";
import { AtlasButton } from "../ui/AtlasButton";

export default function ProfessionalList() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const { data, loading, error, refetch } = useQuery(GET_USERS, {
    variables: { role: [Role.PROFESSIONAL, Role.ADMIN] },
    fetchPolicy: "cache-and-network",
  });
  const [deleteUser, { loading: deleting }] = useMutation(DELETE_USER, {
    onCompleted: () => {
      refetch();
    },
    onError: () => {},
  });
  const users = data?.users || [];
  // Filtro local por nombre o email
  const filtered = useMemo(() => {
    if (!search.trim()) return users;
    return users.filter(
      (u: any) =>
        `${u.firstName} ${u.lastName}`
          .toLowerCase()
          .includes(search.trim().toLowerCase()) ||
        (u.email || "").toLowerCase().includes(search.trim().toLowerCase())
    );
  }, [users, search]);

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
            onChange={(e) => setSearch(e.target.value)}
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
            onClick={() => router.push("/admin/professionals/create")}
            className="w-full sm:w-auto"
          >
            Crear profesional
          </AtlasButton>
        </Flex>
        {loading ? (
          <Spinner />
        ) : error ? (
          <Text color="red">Error al cargar profesionales</Text>
        ) : (
          <Table.Root
            variant="surface"
            className="border rounded-lg overflow-hidden"
            style={{ marginTop: 16 }}
          >
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Nombre</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Rol</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Estado</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Acciones</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {filtered.length === 0 ? (
                <Table.Row>
                  <Table.Cell colSpan={5} align="center">
                    <Text color="gray">No hay resultados.</Text>
                  </Table.Cell>
                </Table.Row>
              ) : (
                filtered.map((u: any) => (
                  <Table.Row key={u.id}>
                    <Table.Cell>
                      {u.firstName} {u.lastName}
                    </Table.Cell>
                    <Table.Cell>{u.email}</Table.Cell>
                    <Table.Cell>{u.role}</Table.Cell>
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
        )}
      </Card>
    </Box>
  );
}
