import { useQuery, useMutation } from '@apollo/client';
import { Box, Table, Button, Spinner, Flex } from '@radix-ui/themes';
import { useState } from 'react';
import { GET_CASES } from '@/graphql/queries/case.queries';
import type { CaseListItem, CaseListResponse } from '@/types/case.types';
import { TrashIcon } from '@radix-ui/react-icons';
import { DELETE_CASE } from '@/graphql/mutations/case.mutations';
import CaseSearchBackend from './CaseSearchBackend';
import { useRouter } from 'next/navigation';
import DeleteButtonWithConfirm from '@/components/ui/DeleteButtonWithConfirm';

const CASE_STATUS = [
  { value: 'all', label: 'Todos' },
  { value: 'open', label: 'Abierto' },
  { value: 'inProgress', label: 'En progreso' },
  { value: 'pending', label: 'Pendiente' },
  { value: 'closed', label: 'Cerrado' },
];

export default function CaseList() {
  const router = useRouter();
  const [filters, setFilters] = useState({ search: '', status: 'all' });
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const { data, loading, refetch } = useQuery<{ cases: CaseListResponse }>(GET_CASES, {
    variables: { filters: { search: filters.search, status: filters.status === 'all' ? undefined : filters.status, page, pageSize } },
    fetchPolicy: 'cache-and-network',
  });

  const cases = data?.cases?.cases || [];
  const total = data?.cases?.total || 0;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  // Cuando cambian los filtros, resetea la página
  const handleFiltersChange = (newFilters: { search: string; status: string }) => {
    setFilters(newFilters);
    setPage(1);
  };

  const [deleteCase, { loading: deleting }] = useMutation(DELETE_CASE, {
    onCompleted: () => {
      refetch();
    },
    onError: () => {
    }
  });

  return (
    <Box>
      <Flex justify="between" align="center" mb="4">
        <CaseSearchBackend filters={filters} onChange={handleFiltersChange}  />
        <Button color="green" onClick={() => router.push('/admin/cases/create')}>
          Crear caso
        </Button>
      </Flex>
      {loading ? (
        <Spinner />
      ) : (
        <Table.Root variant="surface" className="border rounded-lg overflow-hidden">
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
                <Table.Cell colSpan={6} style={{ textAlign: 'center' }}>No hay casos encontrados.</Table.Cell>
              </Table.Row>
            ) : (
              cases.map((c: CaseListItem) => (
                <Table.Row key={c.id} style={{ cursor: 'pointer' }} onClick={() => router.push(`/admin/cases/${c.id}`)}>
                  <Table.Cell>
                    <span
                      style={{
                        display: 'inline-block',
                        borderRadius: 8,
                        padding: '2px 10px',
                        fontWeight: 500,
                        fontSize: 13,
                        background:
                          c.status === 'open' ? '#e0f7fa' :
                          c.status === 'inProgress' ? '#fff3e0' :
                          c.status === 'pending' ? '#f3e5f5' :
                          c.status === 'closed' ? '#e0e0e0' : '#eee',
                        color:
                          c.status === 'open' ? '#00796b' :
                          c.status === 'inProgress' ? '#ef6c00' :
                          c.status === 'pending' ? '#6a1b9a' :
                          c.status === 'closed' ? '#616161' : '#333',
                      }}
                    >
                      {CASE_STATUS.find(s => s.value === c.status)?.label || c.status}
                    </span>
                  </Table.Cell>
                  <Table.Cell>{c.client?.user?.firstName} {c.client?.user?.lastName}</Table.Cell>
                  <Table.Cell>{c.professional?.user?.firstName} {c.professional?.user?.lastName}</Table.Cell>
                  <Table.Cell>{c.server?.name}</Table.Cell>
                  <Table.Cell>{new Date(c.createdAt).toLocaleDateString()}</Table.Cell>
                  <Table.Cell>
                    <DeleteButtonWithConfirm
                      id={c.id}
                      name={`${c.client?.user?.firstName} ${c.client?.user?.lastName}`}
                      loading={deleting}
                      onConfirm={() => deleteCase({ variables: { id: c.id } })}
                      title="¿Eliminar caso?"
                      description={`¿Estás seguro de que deseas eliminar el caso de \"${c.client?.user?.firstName} ${c.client?.user?.lastName}\"? Esta acción no se puede deshacer.`}
                      ariaLabel={`Eliminar caso de ${c.client?.user?.firstName} ${c.client?.user?.lastName}`}
                    />
                  </Table.Cell>
                </Table.Row>
              ))
            )}
          </Table.Body>
        </Table.Root>
      )}
      <Flex mt="4" gap="2" align="center">
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>Anterior</Button>
        <span>Página {page} de {totalPages}</span>
        <Button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Siguiente</Button>
      </Flex>
    </Box>
  );
}
