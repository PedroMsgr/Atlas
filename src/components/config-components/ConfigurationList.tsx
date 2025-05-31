'use client';

import { useQuery } from '@apollo/client';
import { Box, Card, Heading, Text, Flex, Badge, Table, Link, Button } from '@radix-ui/themes';
import { formatDate } from '@/utils/date-formatter';
import { GET_ALL_CONFIGURATIONS } from '@/graphql-client/queries/configs.queries';
import { useState } from 'react';
import NextLink from 'next/link';

interface Configuration {
  id: string;
  name: string;
  pageTitle: string;
  pageType: string;
  updatedAt: string;
  activeInServers: Server[];
}

interface Server {
  id: string;
  name: string;
  domain: string;
}

export default function ConfigurationList() {
  const [selectedConfig, setSelectedConfig] = useState<Configuration | null>(null);

  const { data, loading, error, refetch } = useQuery(GET_ALL_CONFIGURATIONS, {
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
          {data?.configurations?.map((config: Configuration) => (
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
                {config.activeInServers?.length === 0 ? (
                  <Text size="2" color="gray">No asignada</Text>
                ) : config.activeInServers?.length === 1 ? (
                  <NextLink href={`/admin/servers/detail/${config.activeInServers[0].id}`} passHref>
                    <Link>
                      <Text size="2">{config.activeInServers[0].name}</Text>
                    </Link>
                  </NextLink>
                ) : (
                  <Text size="2" weight="bold">{config.activeInServers?.length} servidores</Text>
                )}
              </Table.Cell>
              <Table.Cell>
                <Text size="2">{config.updatedAt ? formatDate(config.updatedAt) : 'N/A'}</Text>
              </Table.Cell>
              <Table.Cell>
                <Flex gap="2">
                  <NextLink href={`/admin/configs/detail/${config.id}`} passHref>
                    <Button size="1" variant="soft">
                      Ver detalles
                    </Button>
                  </NextLink>
                  {config.activeInServers?.length > 0 && (
                    <Button 
                      size="1" 
                      variant="soft" 
                      color="blue"
                      onClick={() => setSelectedConfig(config)}
                    >
                      Ver servidores
                    </Button>
                  )}
                </Flex>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      {selectedConfig && selectedConfig.activeInServers.length > 0 && (
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
                  <Table.ColumnHeaderCell>Acciones</Table.ColumnHeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {selectedConfig.activeInServers.map(server => (
                  <Table.Row key={server.id}>
                    <Table.Cell>{server.name}</Table.Cell>
                    <Table.Cell>{server.domain}</Table.Cell>
                    <Table.Cell>
                      <NextLink href={`/admin/servers/detail/${server.id}`} passHref legacyBehavior>
                        <Button size="1" variant="soft">
                          Ver servidor
                        </Button>
                      </NextLink>
                    </Table.Cell>
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
