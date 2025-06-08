"use client";

// Componente para listar, buscar y seleccionar configuraciones de unidad.
// Permite filtrar por nombre, eliminar y refrescar la lista de configuraciones.

import { UnitConfigBase } from "@/types/config.types";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ALL_CONFIGURATIONS } from "@/graphql/queries/config.queries";
import { DELETE_CONFIG } from "@/graphql/mutations/config.mutations";
import { Box, Table, Text, Flex, Card } from "@radix-ui/themes";
import DeleteButtonWithConfirm from "@/components/ui/DeleteButtonWithConfirm";
import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import { AtlasButton } from "../ui/AtlasButton";

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
  const [search, setSearch] = useState("");
  const [selectedConfig, setSelectedConfig] = useState<Configuration | null>(
    null
  );

  const { data, loading, error, refetch } = useQuery<{
    configurations: Configuration[];
  }>(GET_ALL_CONFIGURATIONS, {
    fetchPolicy: "cache-and-network",
  });

  const [deleteConfig, { loading: deleting }] = useMutation(DELETE_CONFIG, {
    onCompleted: () => {
      setSelectedConfig(null);
      refetch();
    },
    onError: (error) => {
      setSelectedConfig(null);
      console.error("Error al eliminar configuración:", error);
    },
  });

  const configurations = data?.configurations || [];
  // Filtro local por nombre
  const filtered = useMemo(() => {
    if (!search.trim()) return configurations;
    return configurations.filter((c: any) =>
      c.name.toLowerCase().includes(search.trim().toLowerCase())
    );
  }, [configurations, search]);

  const handleRefresh = async () => {
    try {
      await refetch();
    } catch (error) {
      console.error("Error al refrescar configuraciones:", error);
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
        <Text color="red">
          Error al cargar las configuraciones: {error.message}
        </Text>
        <AtlasButton variant="update" onClick={handleRefresh} className="mt-2">
          Reintentar
        </AtlasButton>
      </Box>
    );
  }

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
            placeholder="Buscar por nombre..."
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
            onClick={() => router.push("/admin/configs/create")}
            className="w-full sm:w-auto"
          >
            Crear configuración
          </AtlasButton>
        </Flex>
        <Table.Root
          variant="surface"
          className="border rounded-lg overflow-hidden"
        >
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Nombre</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                Servidores asignados
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                Última actualización
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Acciones</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {filtered.length === 0 ? (
              <Table.Row>
                <Table.Cell colSpan={4} align="center">
                  <Text color="gray">No hay resultados.</Text>
                </Table.Cell>
              </Table.Row>
            ) : (
              filtered.map((config: any) => {
                const servers = config.servers ?? [];
                return (
                  <Table.Row
                    key={config.id}
                    onClick={() => router.push(`/admin/configs/${config.id}`)}
                    style={{
                      cursor: "pointer",
                      background:
                        selectedConfig?.id === config.id
                          ? "#f0f4ff"
                          : undefined,
                    }}
                    onMouseEnter={() => setSelectedConfig(config)}
                    onMouseLeave={() => setSelectedConfig(null)}
                  >
                    <Table.Cell>
                      <Text weight="bold">{config.name}</Text>
                    </Table.Cell>
                    <Table.Cell>
                      {servers.length === 0 ? (
                        <Text size="2" color="gray">
                          No asignada
                        </Text>
                      ) : servers.length === 1 ? (
                        <Text size="2">{servers[0].name}</Text>
                      ) : (
                        <AtlasButton
                          variant="dashboard-secondary"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedConfig(config);
                          }}
                        >
                          {servers.length} servidores
                        </AtlasButton>
                      )}
                    </Table.Cell>
                    <Table.Cell>
                      <Text size="2">
                        {new Date(config.updatedAt).toLocaleString()}
                      </Text>
                    </Table.Cell>
                    <Table.Cell onClick={(e) => e.stopPropagation()}>
                      <DeleteButtonWithConfirm
                        id={config.id}
                        name={config.name}
                        loading={deleting}
                        onConfirm={() =>
                          deleteConfig({ variables: { id: config.id } })
                        }
                        title="¿Eliminar configuración?"
                        description={`¿Estás seguro de que deseas eliminar la configuración \"${config.name}\"? Esta acción no se puede deshacer.`}
                        ariaLabel={`Eliminar configuración ${config.name}`}
                      />
                    </Table.Cell>
                  </Table.Row>
                );
              })
            )}
          </Table.Body>
        </Table.Root>
      </Card>
    </Box>
  );
}
