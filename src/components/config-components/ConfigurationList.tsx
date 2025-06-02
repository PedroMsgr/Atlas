'use client';
// src/components/config-components/ConfigurationList.tsx

import { UnitConfigBase } from '@/types/config.types';
import { useQuery } from '@apollo/client';
import { GET_ALL_CONFIGURATIONS } from '@/graphql-client/queries/configs.querys';
import { Box, Button, Heading, Table, Text, Badge, Card, Flex } from '@radix-ui/themes';
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

export default function ConfigurationList() {
  const [selectedConfig, setSelectedConfig] = useState<Configuration | null>(null);

  const { data, loading, error, refetch } = useQuery<{ configurations: Configuration[] }>(GET_ALL_CONFIGURATIONS, {
    fetchPolicy: 'cache-and-network',
  });

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
        <Button onClick={() => refetch()} className="mt-2">
          Reintentar
        </Button>
      </Box>
    );
  }

  return (
    <Box className="p-4">
      <Heading size="5" className="mb-4">
        Configuraciones disponibles
      </Heading>

      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Nombre</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Tipo de página</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Servidores asignados</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Última actualización</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Acciones</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data?.configurations?.map((config) => {
            const servers = config.servers ?? [];
            return (
              <Table.Row key={config.id}>
                <Table.Cell>
                  <Text weight="bold">{config.name}</Text>
                  <Text size="1" color="gray">{config.pageTitle}</Text>
                </Table.Cell>
                <Table.Cell>
                  <Badge color="blue" variant="soft">
                    {config.pageType}
                  </Badge>
                </Table.Cell>
                <Table.Cell>
                  {servers.length === 0 ? (
                    <Text size="2" color="gray">No asignada</Text>
                  ) : servers.length === 1 ? (
                    <Text size="2">{servers[0].name}</Text>
                  ) : (
                    <Button variant="ghost" size="1" onClick={() => setSelectedConfig(config)}>
                      {servers.length} servidores
                    </Button>
                  )}
                </Table.Cell>
                <Table.Cell>
                  <Text size="2">{new Date(config.updatedAt).toLocaleString()}</Text>
                </Table.Cell>
                <Table.Cell>
                  {/* Aquí puedes agregar acciones como editar/eliminar */}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table.Root>

      {selectedConfig && (selectedConfig.servers ?? []).length > 1 && (
        <Card className="mt-4 p-4">
          <Flex direction="column" gap="3">
            <Flex justify="between" align="center">
              <Heading size="3">
                Servidores usando la configuración "{selectedConfig.name}"
              </Heading>
              <Button 
                size="1" 
                variant="soft" 
                color="gray"
                onClick={() => setSelectedConfig(null)}
              >
                Cerrar
              </Button>
            </Flex>
            <Table.Root variant="surface">
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeaderCell>Nombre</Table.ColumnHeaderCell>
                  <Table.ColumnHeaderCell>Dominio</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {(selectedConfig.servers ?? []).map(server => (
                  <Table.Row key={server.id}>
                    <Table.Cell>{server.name}</Table.Cell>
                    <Table.Cell>{server.domain}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          </Flex>
        </Card>
      )}
    </Box>
  );
}
