'use client';
// src/components/config-components/ConfigurationList.tsx

import { UnitConfigBase } from '@/types/config.types';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_CONFIGURATIONS } from '@/graphql/queries/config.queries';
import { DELETE_CONFIG } from '@/graphql/mutations/config.mutations';
import { Box, Button as RadixButton, Heading, Table, Text, Flex } from '@radix-ui/themes';
import { TrashIcon } from '@radix-ui/react-icons';
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from '@/components/ui/alert-dialog';
import ConfigListFilters from './ConfigListFilters';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Server {
  id: string;
  name: string;
  domain: string;
}

interface Configuration extends UnitConfigBase {
  updatedAt: string;
  servers: Server[];
}

export default function ConfigList() {
  const router = useRouter();
  const [selectedConfig, setSelectedConfig] = useState<Configuration | null>(null);
  const [paginated, setPaginated] = useState<Configuration[]>([]);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleteName, setDeleteName] = useState<string | null>(null);
  const [showDialog, setShowDialog] = useState(false);

  const { data, loading, error, refetch } = useQuery<{ configurations: Configuration[] }>(GET_ALL_CONFIGURATIONS, {
    fetchPolicy: 'cache-and-network',
  });

  const [deleteConfig, { loading: deleting }] = useMutation(DELETE_CONFIG, {
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
      console.error('Error al eliminar configuración:', error);
    }
  });

  const handleRefresh = async () => {
    try {
      await refetch();
    } catch (error) {
      console.error('Error al refrescar configuraciones:', error);
    }
  };

  if (loading) {
    return (
      <Box className="p-4">
        <Text>Cargando configuraciones...</Text>
      </Box>
    );
  }

  if (error) {
    return (
      <Box className="p-4">
        <Text color="red">Error al cargar las configuraciones: {error.message}</Text>
        <RadixButton onClick={handleRefresh} className="mt-2" variant="outline">
          Reintentar
        </RadixButton>
      </Box>
    );
  }

  return (
    <Box className="p-4">
      <Flex justify="between" align="center" className="mb-4">
        <Heading size="5">Configuraciones disponibles</Heading>
        <RadixButton onClick={handleRefresh} variant="outline">
          Actualizar lista
        </RadixButton>
      </Flex>
      <ConfigListFilters data={data?.configurations || []} onChange={(_filtered, paginated) => setPaginated(paginated)} />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Nombre</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Servidores asignados</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Última actualización</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Acciones</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {paginated.length === 0 ? (
            <Table.Row>
              <Table.Cell colSpan={4} align="center">
                <Text color="gray">No hay resultados.</Text>
              </Table.Cell>
            </Table.Row>
          ) : paginated.map((config) => {
            const servers = config.servers ?? [];
            return (
              <Table.Row
                key={config.id}
                onClick={() => router.push(`/admin/configs/${config.id}`)}
                style={{ cursor: 'pointer', background: selectedConfig?.id === config.id ? '#f0f4ff' : undefined }}
                onMouseEnter={() => setSelectedConfig(config)}
                onMouseLeave={() => setSelectedConfig(null)}
              >
                <Table.Cell>
                  <Text weight="bold">{config.name}</Text>
                  <Text size="1" color="gray">{config.pageTitle}</Text>
                </Table.Cell>
                <Table.Cell>
                  {servers.length === 0 ? (
                    <Text size="2" color="gray">No asignada</Text>
                  ) : servers.length === 1 ? (
                    <Text size="2">{servers[0].name}</Text>
                  ) : (
                    <RadixButton variant="ghost" size="1" onClick={e => { e.stopPropagation(); setSelectedConfig(config); }}>
                      {servers.length} servidores
                    </RadixButton>
                  )}
                </Table.Cell>
                <Table.Cell>
                  <Text size="2">{new Date(config.updatedAt).toLocaleString()}</Text>
                </Table.Cell>
                <Table.Cell onClick={e => e.stopPropagation()}>
                  <AlertDialog open={showDialog && deleteId === config.id} onOpenChange={open => { if (!open) setShowDialog(false); }}>
                    <AlertDialogTrigger asChild>
                      <RadixButton
                        color="red"
                        variant="soft"
                        size="1"
                        onClick={e => { setDeleteId(config.id); setDeleteName(config.name); setShowDialog(true); }}
                        disabled={deleting}
                        aria-label={`Eliminar configuración ${config.name}`}
                      >
                        <TrashIcon />
                      </RadixButton>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>¿Eliminar configuración?</AlertDialogTitle>
                        <AlertDialogDescription>
                          ¿Estás seguro de que deseas eliminar la configuración &quot;{deleteName}&quot;? Esta acción no se puede deshacer.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel disabled={deleting}>Cancelar</AlertDialogCancel>
                        <AlertDialogAction
                          disabled={deleting}
                          onClick={() => deleteConfig({ variables: { id: config.id } })}
                        >
                          {deleting ? 'Eliminando...' : 'Eliminar'}
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}
