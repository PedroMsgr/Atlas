import { Box, Table, Text, Flex, Select, Card } from "@radix-ui/themes";
import DeleteButtonWithConfirm from "@/components/ui/DeleteButtonWithConfirm";
import { useState, useMemo } from "react";
import { GET_SERVERS } from "@/graphql/queries/server.queries";
import { DELETE_SERVER } from "@/graphql/mutations/server.mutations";
import { UnitServerListItem } from "@/types/server.types";
import { formatDate } from "@/lib/date-formatter";
import { useQuery, useMutation } from "@apollo/client";
import { AtlasButton } from "@/components/ui/AtlasButton";

const ORDER_OPTIONS = [
  { value: "name-az", label: "Nombre A-Z" },
  { value: "name-za", label: "Nombre Z-A" },
];

export default function ServerList() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [deleteName, setDeleteName] = useState<string | null>(null);
  const [showDialog, setShowDialog] = useState(false);

  // Filtros locales
  const [search, setSearch] = useState("");
  const [constellation, setConstellation] = useState("all");
  const [config, setConfig] = useState("all");
  const [order, setOrder] = useState("name-az");

  const { data, loading, error, refetch } = useQuery<{
    servers: UnitServerListItem[];
  }>(GET_SERVERS, {
    fetchPolicy: "cache-and-network",
    notifyOnNetworkStatusChange: true,
    onError: (error) => {
      console.error("Error en la consulta de servidores:", error);
    },
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
      console.error("Error al eliminar servidor:", error);
    },
  });

  const servers = data?.servers || [];

  // Obtener constelaciones y configuraciones únicas de los datos
  const constellations = useMemo(() => {
    const set = new Set<string>();
    const arr: { id: string; name: string }[] = [];
    servers.forEach((s) => {
      if (
        s.constellation &&
        s.constellation.id &&
        s.constellation.name &&
        !set.has(s.constellation.id)
      ) {
        set.add(s.constellation.id);
        arr.push({ id: s.constellation.id, name: s.constellation.name });
      }
    });
    return arr;
  }, [servers]);
  const configs = useMemo(() => {
    const set = new Set<string>();
    const arr: { id: string; name: string }[] = [];
    servers.forEach((s) => {
      if (s.config && s.config.id && s.config.name && !set.has(s.config.id)) {
        set.add(s.config.id);
        arr.push({ id: s.config.id, name: s.config.name });
      }
    });
    return arr;
  }, [servers]);

  // Filtrado y ordenación
  const processed = useMemo(() => {
    let result = servers;
    if (constellation !== "all") {
      result = result.filter(
        (s) => s.constellation && s.constellation.id === constellation
      );
    }
    if (config !== "all") {
      result = result.filter((s) => s.config && s.config.id === config);
    }
    if (search.trim()) {
      result = result.filter((s) =>
        s.name.toLowerCase().includes(search.trim().toLowerCase())
      );
    }
    switch (order) {
      case "name-az":
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-za":
        result = [...result].sort((a, b) => b.name.localeCompare(a.name));
        break;
    }
    return result;
  }, [servers, constellation, config, order, search]);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      await refetch();
    } catch (error) {
      console.error("Error al refrescar servidores:", error);
    } finally {
      setIsRefreshing(false);
    }
  };

  if (loading && !data)
    return (
      <Box className="text-center py-4">
        <Text>Cargando servidores...</Text>
      </Box>
    );
  if (error)
    return (
      <Box className="text-center py-4">
        <Text color="red" className="mb-2" as="p">
          Error al cargar servidores: {error.message}
          {error.graphQLErrors && error.graphQLErrors.length > 0 && (
            <span className="block mt-2 text-sm">
              Detalles:{" "}
              {error.graphQLErrors.map((e: any) => e.message).join(", ")}
            </span>
          )}
        </Text>
        <AtlasButton onClick={handleRefresh} variant="update">
          Reintentar
        </AtlasButton>
      </Box>
    );

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
            placeholder="Buscar servidor..."
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
          <Select.Root
            value={constellation}
            onValueChange={setConstellation}
            size="2"
          >
            <Select.Trigger
              placeholder="Filtrar por constelación"
              style={{ minWidth: 160 }}
              className="w-full sm:w-auto"
            />
            <Select.Content>
              <Select.Item value="all">Todas las constelaciones</Select.Item>
              {constellations.map((c) => (
                <Select.Item key={c.id} value={c.id}>
                  {c.name}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
          <Select.Root value={config} onValueChange={setConfig} size="2">
            <Select.Trigger
              placeholder="Filtrar por configuración"
              style={{ minWidth: 160 }}
              className="w-full sm:w-auto"
            />
            <Select.Content>
              <Select.Item value="all">Todas las configuraciones</Select.Item>
              {configs.map((c) => (
                <Select.Item key={c.id} value={c.id}>
                  {c.name}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
          <Select.Root value={order} onValueChange={setOrder} size="2">
            <Select.Trigger
              placeholder="Ordenar por"
              style={{ minWidth: 140 }}
              className="w-full sm:w-auto"
            />
            <Select.Content>
              {ORDER_OPTIONS.map((opt) => (
                <Select.Item key={opt.value} value={opt.value}>
                  {opt.label}
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
          <AtlasButton
            variant="success"
            onClick={() => window.location.assign("/admin/servers/create")}
            className="w-full sm:w-auto"
          >
            Nuevo Servidor
          </AtlasButton>
        </Flex>
        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Nombre</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Dominio</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Constelación</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Estado</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                Última modificación
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>
                Configuración activa
              </Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Acciones</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {processed.length === 0 ? (
              <Table.Row>
                <Table.Cell colSpan={7} align="center">
                  <Text color="gray">No hay resultados.</Text>
                </Table.Cell>
              </Table.Row>
            ) : (
              processed.map((server) => (
                <Table.Row
                  key={server.id}
                  className="hover:bg-gray-50 transition duration-150 cursor-pointer"
                  onClick={() =>
                    window.location.assign(`/admin/servers/${server.id}`)
                  }
                >
                  <Table.Cell>
                    <span className="text-blue-600 hover:underline">
                      {server.name}
                    </span>
                  </Table.Cell>
                  <Table.Cell>{server.domain}</Table.Cell>
                  <Table.Cell>{server.constellation?.name || "-"}</Table.Cell>
                  <Table.Cell>
                    <span
                      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${
                        server.isActive
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {server.isActive ? "Activo" : "Inactivo"}
                    </span>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2" color="gray">
                      {formatDate(server.updatedAt, "date")}
                    </Text>
                  </Table.Cell>
                  <Table.Cell>{server.config?.name || "-"}</Table.Cell>
                  <Table.Cell
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <DeleteButtonWithConfirm
                      id={server.id}
                      name={server.name}
                      loading={deleting}
                      onConfirm={() =>
                        deleteServer({ variables: { id: server.id } })
                      }
                      title="¿Eliminar servidor?"
                      description={`¿Estás seguro de que deseas eliminar el servidor \"${server.name}\"? Esta acción no se puede deshacer.`}
                      ariaLabel={`Eliminar servidor ${server.name}`}
                    />
                  </Table.Cell>
                </Table.Row>
              ))
            )}
          </Table.Body>
        </Table.Root>
      </Card>
    </Box>
  );
}
