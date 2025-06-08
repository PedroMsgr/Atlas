import { useQuery, useMutation } from "@apollo/client";
import {
  Box,
  Table,
  Spinner,
  Flex,
  Select,
  Badge,
  Card,
} from "@radix-ui/themes";
import { useState } from "react";
import { GET_CASES } from "@/graphql/queries/case.queries";
import type { CaseListItem, CaseListResponse } from "@/types/case.types";
import { DELETE_CASE } from "@/graphql/mutations/case.mutations";
import { useRouter } from "next/navigation";
import DeleteButtonWithConfirm from "@/components/ui/DeleteButtonWithConfirm";
import { AtlasButton } from "../ui/AtlasButton";

const CASE_STATUS = [
  { value: "all", label: "Todos", color: "gray" },
  { value: "open", label: "Abierto", color: "blue" },
  { value: "inProgress", label: "En progreso", color: "orange" },
  { value: "pending", label: "Pendiente", color: "yellow" },
  { value: "closed", label: "Cerrado", color: "gray" },
];

export default function CaseList() {
  const router = useRouter();
  const [filters, setFilters] = useState({ search: "", status: "all" });
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const { data, loading, refetch } = useQuery<{ cases: CaseListResponse }>(
    GET_CASES,
    {
      variables: {
        filters: {
          search: filters.search,
          status: filters.status === "all" ? undefined : filters.status,
          page,
          pageSize,
        },
      },
      fetchPolicy: "cache-and-network",
    }
  );

  const cases = data?.cases?.cases || [];
  const total = data?.cases?.total || 0;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  // Cuando cambian los filtros, resetea la página
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((f) => ({ ...f, search: e.target.value }));
    setPage(1);
  };
  const handleStatusChange = (status: string) => {
    setFilters((f) => ({ ...f, status }));
    setPage(1);
  };

  const [deleteCase, { loading: deleting }] = useMutation(DELETE_CASE, {
    onCompleted: () => {
      refetch();
    },
    onError: () => {},
  });

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
            placeholder="Buscar por cliente o profesional..."
            value={filters.search}
            onChange={handleInputChange}
            className="w-full sm:w-auto"
            style={{
              minWidth: 220,
              background: "#fff",
              border: "1px solid #ddd",
              borderRadius: 6,
              padding: "8px 12px",
            }}
          />
          <Select.Root
            value={filters.status}
            onValueChange={handleStatusChange}
          >
            <Select.Trigger
              style={{ minWidth: 120 }}
              className="w-full sm:w-auto"
            />
            <Select.Content>
              {CASE_STATUS.map((s) => (
                <Select.Item key={s.value} value={s.value}>
                  {s.label}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
          <AtlasButton
            variant="success"
            onClick={() => router.push("/admin/cases/create")}
            className="w-full sm:w-auto"
          >
            Crear caso
          </AtlasButton>
        </Flex>
        {loading ? (
          <Spinner />
        ) : (
          <Table.Root
            variant="surface"
            className="border rounded-lg overflow-hidden"
          >
            <Table.Header>
              <Table.Row className="bg-slate-50 dark:bg-slate-900">
                <Table.ColumnHeaderCell>Estado</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Cliente</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Profesional</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Servidor</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Creado</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Acciones</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {cases.length === 0 ? (
                <Table.Row>
                  <Table.Cell colSpan={6} style={{ textAlign: "center" }}>
                    No hay casos encontrados.
                  </Table.Cell>
                </Table.Row>
              ) : (
                cases.map((c: CaseListItem) => {
                  const statusObj =
                    CASE_STATUS.find((s) => s.value === c.status) ||
                    CASE_STATUS[0];
                  return (
                    <Table.Row
                      key={c.id}
                      style={{ cursor: "pointer" }}
                      onClick={() => router.push(`/admin/cases/${c.id}`)}
                    >
                      <Table.Cell>
                        <Badge color={statusObj.color as any}>
                          {statusObj.label}
                        </Badge>
                      </Table.Cell>
                      <Table.Cell>
                        {c.client?.user?.firstName} {c.client?.user?.lastName}
                      </Table.Cell>
                      <Table.Cell>
                        {c.professional?.user?.firstName}{" "}
                        {c.professional?.user?.lastName}
                      </Table.Cell>
                      <Table.Cell>{c.server?.name}</Table.Cell>
                      <Table.Cell>
                        {new Date(c.createdAt).toLocaleDateString()}
                      </Table.Cell>
                      <Table.Cell>
                        <span
                          onClick={(e) => e.stopPropagation()}
                          style={{ display: "inline-block", width: "100%" }}
                        >
                          <DeleteButtonWithConfirm
                            id={c.id}
                            name={`${c.client?.user?.firstName} ${c.client?.user?.lastName}`}
                            loading={deleting}
                            onConfirm={() =>
                              deleteCase({ variables: { id: c.id } })
                            }
                            title="¿Eliminar caso?"
                            description={`¿Estás seguro de que deseas eliminar el caso de \"${c.client?.user?.firstName} ${c.client?.user?.lastName}\"? Esta acción no se puede deshacer.`}
                            ariaLabel={`Eliminar caso de ${c.client?.user?.firstName} ${c.client?.user?.lastName}`}
                          />
                        </span>
                      </Table.Cell>
                    </Table.Row>
                  );
                })
              )}
            </Table.Body>
          </Table.Root>
        )}
        <Flex mt="4" gap="2" align="center">
          <AtlasButton
            variant="back"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Anterior
          </AtlasButton>
          <span>
            Página {page} de {totalPages}
          </span>
          <AtlasButton
            variant="next"
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            Siguiente
          </AtlasButton>
        </Flex>
      </Card>
    </Box>
  );
}
