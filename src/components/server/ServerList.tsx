import { useMutation, useQuery } from '@apollo/client';
import { Box, Button as RadixButton, Heading, Table, Text, Flex } from '@radix-ui/themes';
import { TrashIcon } from '@radix-ui/react-icons';
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from '@/components/ui/alert-dialog';
import Link from 'next/link';
import { useState } from 'react';
import { SearchAndPaginateList } from '@/components/SearchFrontend';
import { GET_SERVERS } from '@/graphql/queries/server.querys';
import { DELETE_SERVER } from '@/graphql/mutations/server.mutations';
import { UnitServerListItem } from '@/types/server.types';
import { formatDate } from '@/lib/date-formatter';

export default function ServerList() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [paginated, setPaginated] = useState<UnitServerListItem[]>([]);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleteName, setDeleteName] = useState<string | null>(null);
  const [showDialog, setShowDialog] = useState(false);

  const { data, loading, error, refetch } = useQuery<{ servers: UnitServerListItem[] }>(GET_SERVERS, {
    fetchPolicy: 'cache-and-network',
    notifyOnNetworkStatusChange: true,
    onError: (error) => {
      console.error('Error en la consulta de servidores:', error);
    }
  });

  const [deleteServer, { loading: deleting }] = useMutation(DELETE_SERVER, {
    onCompleted: () => {
      setShowDialog(false);
      setDeleteId(null);
      setDeleteName(null);
      refetch();
    },
    onError: (error) => {
      setShowDialog(false);
      setDeleteId(null);
      setDeleteName(null);
      console.error('Error al eliminar servidor:', error);
    }
  });

  const servers = data?.servers || [];

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      await refetch();
    } catch (error) {
      console.error('Error al refrescar servidores:', error);
    } finally {
      setIsRefreshing(false);
    }
  };

  if (loading && !data) return <Box className="text-center py-4"><Text>Cargando servidores...</Text></Box>;
  if (error) return (
    <Box className="text-center py-4">
      <Text color="red" className="mb-2" as="p">
        Error al cargar servidores: {error.message}
        {error.graphQLErrors && error.graphQLErrors.length > 0 && (
          <span className="block mt-2 text-sm">
            Detalles: {error.graphQLErrors.map((e: any) => e.message).join(', ')}
          </span>
        )}
      </Text>
      <RadixButton onClick={handleRefresh} variant="outline">Reintentar</RadixButton>
    </Box>
  );

  return (
    <Box className="p-4">
      <Flex justify="between" align="center" className="mb-4">
        <Heading size="5">Servidores unitarios</Heading>
        <RadixButton onClick={handleRefresh} disabled={loading || isRefreshing} variant="outline">
          {isRefreshing ? 'Actualizando...' : 'Actualizar lista'}
        </RadixButton>
      </Flex>
      <SearchAndPaginateList
        data={servers}
        searchField="name"
        placeholder="Buscar servidor..."
        onChange={(_filtered: UnitServerListItem[], paginated: UnitServerListItem[]) => setPaginated(paginated)}
        pageSize={10}
      />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Nombre</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Dominio</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Constelación</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Estado</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Última modificación</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Configuración activa</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Acciones</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {paginated.length === 0 ? (
            <Table.Row>
              <Table.Cell colSpan={7} align="center">
                <Text color="gray">No hay resultados.</Text>
              </Table.Cell>
            </Table.Row>
          ) : paginated.map((server) => (
            <Table.Row key={server.id} className="hover:bg-gray-50 transition duration-150">
              <Table.Cell>
                <Link href={`/admin/servers/${server.id}`} className="text-blue-600 hover:underline">
                  {server.name}
                </Link>
              </Table.Cell>
              <Table.Cell>{server.domain}</Table.Cell>
              <Table.Cell>{server.constellation?.name || '-'}</Table.Cell>
              <Table.Cell>
                <span className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${server.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {server.isActive ? 'Activo' : 'Inactivo'}
                </span>
              </Table.Cell>
              <Table.Cell>
                <Text size="2" color="gray">{formatDate(server.updatedAt, 'date')}</Text>
              </Table.Cell>
              <Table.Cell>{server.config?.name || '-'}</Table.Cell>
              <Table.Cell onClick={e => e.stopPropagation()}>
                <AlertDialog open={showDialog && deleteId === server.id} onOpenChange={open => { if (!open) setShowDialog(false); }}>
                  <AlertDialogTrigger asChild>
                    <RadixButton
                      color="red"
                      variant="soft"
                      size="1"
                      onClick={e => { setDeleteId(server.id); setDeleteName(server.name); setShowDialog(true); }}
                      disabled={deleting}
                      aria-label={`Eliminar servidor ${server.name}`}
                    >
                      <TrashIcon />
                    </RadixButton>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>¿Eliminar servidor?</AlertDialogTitle>
                      <AlertDialogDescription>
                        ¿Estás seguro de que deseas eliminar el servidor "{deleteName}"? Esta acción no se puede deshacer.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel disabled={deleting}>Cancelar</AlertDialogCancel>
                      <AlertDialogAction
                        disabled={deleting}
                        onClick={() => deleteServer({ variables: { id: server.id } })}
                      >
                        {deleting ? 'Eliminando...' : 'Eliminar'}
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}
