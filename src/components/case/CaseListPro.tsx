import { useQuery } from "@apollo/client";
import { Box, Table, Spinner, Flex, Select, Badge } from "@radix-ui/themes";
import { useState } from "react";
import { GET_CASES } from "@/graphql/queries/case.queries";
import type { CaseListItem, CaseListResponse } from "@/types/case.types";
import { AtlasButton } from "../ui/AtlasButton";

const CASE_STATUS = [
  { value: "open", label: "Abierto", color: "blue" },
  { value: "inProgress", label: "En progreso", color: "orange" },
  { value: "pending", label: "Pendiente", color: "yellow" },
  { value: "closed", label: "Cerrado", color: "gray" },
];

export default function CaseListPro({ user }: { user: any }) {
  const [filters, setFilters] = useState({ search: "", status: "all" });
  const [page, setPage] = useState(1);
  const pageSize = 10;

  // Solo filtrar por professionalId si el usuario es profesional
  const professionalId = user?.role === "professional" ? user.id : undefined;

  const { data, loading } = useQuery<{ cases: CaseListResponse }>(GET_CASES, {
    variables: {
      filters: {
        search: filters.search,
        status: filters.status === "all" ? undefined : filters.status,
        professionalId,
        page,
        pageSize,
        onlyClient: true, // Solo filtrar por cliente en pro
      },
    },
    fetchPolicy: "cache-and-network",
  });

  const cases = data?.cases?.cases || [];
  const total = data?.cases?.total || 0;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  return (
    <Box>
      <Flex
        mb="4"
        align="center"
        gap="3"
        className="flex flex-col gap-2 sm:flex-row sm:items-center"
      >
        <input
          type="text"
          placeholder="Buscar por cliente..."
          value={filters.search}
          onChange={(e) =>
            setFilters((f) => ({ ...f, search: e.target.value }))
          }
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
          onValueChange={(status) => setFilters((f) => ({ ...f, status }))}
        >
          <Select.Trigger
            style={{ minWidth: 120 }}
            className="w-full sm:w-auto"
          />
          <Select.Content>
            <Select.Item value="all">Todos</Select.Item>
            {CASE_STATUS.map((s) => (
              <Select.Item key={s.value} value={s.value}>
                {s.label}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
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
              <Table.ColumnHeaderCell>Servidor</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Creado</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {cases.length === 0 ? (
              <Table.Row>
                <Table.Cell colSpan={5} style={{ textAlign: "center" }}>
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
                    onClick={() => window.open(`/pro/cases/${c.id}`, "_self")}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        window.open(`/pro/cases/${c.id}`, "_self");
                      }
                    }}
                  >
                    <Table.Cell>
                      <Badge color={statusObj.color as any}>
                        {statusObj.label}
                      </Badge>
                    </Table.Cell>
                    <Table.Cell>
                      {c.client?.user?.firstName} {c.client?.user?.lastName}
                    </Table.Cell>
                    <Table.Cell>{c.server?.name}</Table.Cell>
                    <Table.Cell>
                      {new Date(c.createdAt).toLocaleDateString()}
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
    </Box>
  );
}
