"use client";

// Componente de detalle de servidor unitario.
// Permite ver información, regenerar tokens y cambiar configuración activa del servidor.
// Requiere el ID del servidor como prop (`serverId`).
// Utiliza queries y mutations de Apollo para obtener y modificar datos en el servidor GraphQL.

import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
import {
  Box,
  Card,
  Heading,
  Text,
  Badge,
  Flex,
  Separator,
  Select,
} from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import useIsMobile from "@/hooks/useIsMobile";
import {
  GET_SERVER_BY_ID,
  GENERATE_SERVER_TOKENS,
} from "@/graphql/queries/server.queries";
import {
  UPDATE_SERVER_TOKENS,
  UPDATE_SERVER_CONFIG,
} from "@/graphql/mutations/server.mutations";
import { GET_ALL_CONFIGURATIONS } from "@/graphql/queries/config.queries";
import { formatDate } from "@/lib/date-formatter";
import { AtlasButton } from "../ui/AtlasButton";

interface ServerDetailProps {
  serverId: string;
}

export default function ServerDetail({ serverId }: ServerDetailProps) {
  const isMobile = useIsMobile(768);
  const router = useRouter();
  const [isRestarting, setIsRestarting] = useState(false);
  const [isCopied, setIsCopied] = useState<{ [key: string]: boolean }>({});
  const [isRegeneratingTokens, setIsRegeneratingTokens] = useState(false);
  const [tokensChanged, setTokensChanged] = useState(false);
  const [newTokens, setNewTokens] = useState<{
    orchestratorToken?: string;
    unitToken?: string;
  }>({});
  const [updateError, setUpdateError] = useState<string | null>(null);
  const [selectedConfigId, setSelectedConfigId] = useState<string | null>(null);

  // Queries y Mutations idénticos a tu código original...
  const { data, loading, error, refetch } = useQuery(GET_SERVER_BY_ID, {
    variables: { id: serverId },
    fetchPolicy: "cache-and-network",
  });
  const { data: configsData, loading: loadingConfigs } = useQuery(
    GET_ALL_CONFIGURATIONS
  );
  const [generateTokens, { loading: generatingTokens }] = useLazyQuery(
    GENERATE_SERVER_TOKENS,
    {
      onCompleted: (data) => {
        if (data.generateServerTokens) {
          setNewTokens({
            orchestratorToken: data.generateServerTokens.orchestratorToken,
            unitToken: data.generateServerTokens.unitToken,
          });
          setTokensChanged(true);
          setUpdateError(null);
        }
      },
      onError: (error) =>
        setUpdateError(`Error al generar tokens: ${error.message}`),
    }
  );
  const [updateServerTokens, { loading: updatingTokens }] = useMutation(
    UPDATE_SERVER_TOKENS,
    {
      onCompleted: () => {
        setTokensChanged(false);
        setNewTokens({});
        setUpdateError(null);
        refetch();
      },
      onError: (error) => setUpdateError(error.message),
    }
  );
  const [updateServerConfig, { loading: updatingConfig }] = useMutation(
    UPDATE_SERVER_CONFIG,
    {
      onCompleted: () => {
        setUpdateError(null);
        refetch();
      },
      onError: (error) =>
        setUpdateError(
          `Error al actualizar la configuración: ${error.message}`
        ),
    }
  );
  useEffect(() => {
    if (data?.server?.config?.id) setSelectedConfigId(data.server.config.id);
  }, [data]);

  const handleCopyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied({ ...isCopied, [field]: true });
      setTimeout(() => {
        setIsCopied({ ...isCopied, [field]: false });
      }, 2000);
    } catch {}
  };
  const handleRegenerateTokens = async () => {
    setIsRegeneratingTokens(true);
    setUpdateError(null);
    try {
      await generateTokens({ variables: { id: serverId } });
    } catch {
      setUpdateError("Error al generar tokens. Inténtalo de nuevo.");
    } finally {
      setIsRegeneratingTokens(false);
    }
  };
  const handleSaveTokens = async () => {
    if (!newTokens.orchestratorToken || !newTokens.unitToken) {
      setUpdateError("No hay tokens nuevos para guardar");
      return;
    }
    try {
      await updateServerTokens({
        variables: {
          id: serverId,
          orchestratorToken: newTokens.orchestratorToken,
          unitToken: newTokens.unitToken,
        },
      });
    } catch {}
  };
  const handleConfigChange = async (configId: string) => {
    if (configId === selectedConfigId) return;
    setSelectedConfigId(configId);
    setUpdateError(null);
    try {
      await updateServerConfig({
        variables: { id: serverId, configId: configId },
      });
    } catch {}
  };
  const handleRestart = async () => {
    try {
      setIsRestarting(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await refetch();
      setIsRestarting(false);
    } catch {
      setIsRestarting(false);
    }
  };

  if (loading) return <Text>Cargando información del servidor...</Text>;
  if (error) return <Text color="red">Error: {error.message}</Text>;
  if (!data?.server) return <Text>No se encontró el servidor.</Text>;

  const server = data.server;
  const dateCreated = formatDate(server.createdAt, "full");
  const dateUpdated = formatDate(server.updatedAt, "full");

  // --- LAYOUT MÓVIL ---
  if (isMobile) {
    return (
      <Card className="w-full rounded-xl p-3 sm:p-4 shadow bg-white/95 dark:bg-gray-900/95 border border-blue-100 dark:border-gray-800">
        <Flex direction="column" gap="4">
          <Flex justify="between" align="center">
            <Heading size="5" className="text-center">
              {server.name}
            </Heading>
            <Badge color={server.isActive ? "green" : "red"}>
              {server.isActive ? "Activo" : "Inactivo"}
            </Badge>
          </Flex>
          <Separator />
          <Box>
            <Text weight="bold">Dominio: </Text>
            <Text>{server.domain}</Text>
          </Box>
          <Box>
            <Text weight="bold">Constelación: </Text>
            <Text>{server.constellation?.name || "Sin constelación"}</Text>
          </Box>
          <Box>
            <Text weight="bold">Configuración activa: </Text>
            {loadingConfigs ? (
              <Text size="2">Cargando...</Text>
            ) : configsData?.configurations?.length > 0 ? (
              <Select.Root
                value={selectedConfigId || ""}
                onValueChange={handleConfigChange}
                disabled={updatingConfig}
              >
                <Select.Trigger
                  className="w-full"
                  placeholder="Selecciona una configuración"
                />
                <Select.Content>
                  <Select.Group>
                    {configsData.configurations.map((config: any) => (
                      <Select.Item key={config.id} value={config.id}>
                        {config.name}
                      </Select.Item>
                    ))}
                  </Select.Group>
                </Select.Content>
              </Select.Root>
            ) : (
              <Text>No hay configuraciones disponibles</Text>
            )}
          </Box>
          <Separator />
          <Box>
            <Text weight="bold">Tokens de acceso:</Text>
            <div className="mt-2 space-y-2">
              <div className="bg-gray-50 p-2 rounded">
                <Text weight="bold" size="2">
                  Token de Orquestador:
                </Text>
                <div className="bg-white p-1 rounded border mt-1 font-mono text-xs overflow-x-auto">
                  {tokensChanged
                    ? newTokens.orchestratorToken
                    : server.orchestratorToken}
                </div>
                <AtlasButton
                  variant="dashboard-secondary"
                  className="mt-1 w-full"
                  onClick={() =>
                    handleCopyToClipboard(
                      tokensChanged
                        ? newTokens.orchestratorToken!
                        : server.orchestratorToken,
                      "orchestratorToken"
                    )
                  }
                >
                  {isCopied.orchestratorToken ? "Copiado!" : "Copiar token"}
                </AtlasButton>
              </div>
              <div className="bg-gray-50 p-2 rounded">
                <Text weight="bold" size="2">
                  Token de Unidad:
                </Text>
                <div className="bg-white p-1 rounded border mt-1 font-mono text-xs overflow-x-auto">
                  {tokensChanged ? newTokens.unitToken : server.unitToken}
                </div>
                <AtlasButton
                  variant="dashboard-secondary"
                  className="mt-1 w-full"
                  onClick={() =>
                    handleCopyToClipboard(
                      tokensChanged ? newTokens.unitToken! : server.unitToken,
                      "unitToken"
                    )
                  }
                >
                  {isCopied.unitToken ? "Copiado!" : "Copiar token"}
                </AtlasButton>
              </div>
            </div>
            <Flex direction="column" gap="2" className="mt-2">
              {updateError && (
                <Text color="red" size="1">
                  {updateError}
                </Text>
              )}
              {!tokensChanged ? (
                <AtlasButton
                  variant="success"
                  disabled={isRegeneratingTokens || generatingTokens}
                  onClick={handleRegenerateTokens}
                  className="w-full"
                >
                  {isRegeneratingTokens || generatingTokens
                    ? "Generando..."
                    : "Regenerar tokens"}
                </AtlasButton>
              ) : (
                <Flex gap="2">
                  <AtlasButton
                    variant="success"
                    onClick={handleSaveTokens}
                    disabled={updatingTokens}
                    className="w-full"
                  >
                    {updatingTokens ? "Guardando..." : "Guardar tokens"}
                  </AtlasButton>
                  <AtlasButton
                    variant="cancel"
                    onClick={() => {
                      setTokensChanged(false);
                      setNewTokens({});
                      setUpdateError(null);
                    }}
                    className="w-full"
                  >
                    Cancelar
                  </AtlasButton>
                </Flex>
              )}
            </Flex>
          </Box>
          <Separator />
          <Flex direction="row" gap="2">
            <Box>
              <Text weight="bold">Creado:</Text>
              <Text size="2"> {dateCreated}</Text>
            </Box>
            <Box>
              <Text weight="bold">Última actualización:</Text>
              <Text size="2"> {dateUpdated}</Text>
            </Box>
          </Flex>
          <Separator />
          <Flex direction="column" gap="2">
            <AtlasButton
              variant="update"
              onClick={handleRestart}
              disabled={isRestarting}
              className="w-full"
            >
              {isRestarting ? "Reiniciando..." : "Reiniciar servidor"}
            </AtlasButton>
          </Flex>
        </Flex>
      </Card>
    );
  }

  // --- LAYOUT DESKTOP ---
  return (
    <Card className="w-full rounded-2xl p-10 shadow-xl bg-white/95 dark:bg-gray-900/95 border border-blue-100 dark:border-gray-800">
      <Flex direction="column" gap="6">
        <Flex justify="between" align="center">
          <Heading size="5">{server.name}</Heading>
          <Badge color={server.isActive ? "green" : "red"}>
            {server.isActive ? "Activo" : "Inactivo"}
          </Badge>
        </Flex>
        <Separator size="4" />
        <Flex direction="row" gap="10" wrap="wrap">
          {/* Columna izquierda: datos */}
          <Box className="flex-1 min-w-[260px] max-w-[400px]">
            <Box className="mb-3">
              <Text weight="bold">Dominio: </Text>
              <Text>{server.domain}</Text>
            </Box>
            <Box className="mb-3">
              <Text weight="bold">Constelación: </Text>
              <Text>{server.constellation?.name || "Sin constelación"}</Text>
            </Box>
            <Box className="mb-3">
              <Text weight="bold">Configuración activa: </Text>
              {loadingConfigs ? (
                <Text size="2">Cargando configuraciones...</Text>
              ) : configsData?.configurations?.length > 0 ? (
                <Select.Root
                  value={selectedConfigId || ""}
                  onValueChange={handleConfigChange}
                  disabled={updatingConfig}
                >
                  <Select.Trigger
                    className="w-full max-w-[250px]"
                    placeholder="Selecciona una configuración"
                  />
                  <Select.Content>
                    <Select.Group>
                      {configsData.configurations.map((config: any) => (
                        <Select.Item key={config.id} value={config.id}>
                          {config.name}
                        </Select.Item>
                      ))}
                    </Select.Group>
                  </Select.Content>
                </Select.Root>
              ) : (
                <Text>No hay configuraciones disponibles</Text>
              )}
            </Box>
            <Box className="mb-2">
              <Text weight="bold">Tokens de acceso:</Text>
              <div className="mt-2 space-y-2">
                {/* Token de orquestador */}
                <div className="bg-gray-50 p-2 rounded">
                  <Text weight="bold" size="2">
                    Token de Orquestador:
                  </Text>
                  <div className="bg-white p-1 rounded border mt-1 font-mono text-xs overflow-x-auto">
                    {tokensChanged
                      ? newTokens.orchestratorToken
                      : server.orchestratorToken}
                  </div>
                  <AtlasButton
                    variant="upload"
                    className="mt-1"
                    onClick={() =>
                      handleCopyToClipboard(
                        tokensChanged
                          ? newTokens.orchestratorToken!
                          : server.orchestratorToken,
                        "orchestratorToken"
                      )
                    }
                  >
                    {isCopied.orchestratorToken ? "Copiado!" : "Copiar token"}
                  </AtlasButton>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <Text weight="bold" size="2">
                    Token de Unidad:
                  </Text>
                  <div className="bg-white p-1 rounded border mt-1 font-mono text-xs overflow-x-auto">
                    {tokensChanged ? newTokens.unitToken : server.unitToken}
                  </div>
                  <AtlasButton
                    variant="upload"
                    className="mt-1"
                    onClick={() =>
                      handleCopyToClipboard(
                        tokensChanged ? newTokens.unitToken! : server.unitToken,
                        "unitToken"
                      )
                    }
                  >
                    {isCopied.unitToken ? "Copiado!" : "Copiar token"}
                  </AtlasButton>
                </div>
              </div>
            </Box>
            <Flex gap="4" className="mt-3">
              <Box>
                {!tokensChanged ? (
                  <AtlasButton
                    variant="dashboard-primary"
                    disabled={isRegeneratingTokens || generatingTokens}
                    onClick={handleRegenerateTokens}
                  >
                    {isRegeneratingTokens || generatingTokens
                      ? "Generando..."
                      : "Regenerar tokens"}
                  </AtlasButton>
                ) : (
                  <Flex gap="2">
                    <AtlasButton
                      variant="success"
                      onClick={handleSaveTokens}
                      disabled={updatingTokens}
                    >
                      {updatingTokens ? "Guardando..." : "Guardar tokens"}
                    </AtlasButton>
                    <AtlasButton
                      variant="cancel"
                      onClick={() => {
                        setTokensChanged(false);
                        setNewTokens({});
                        setUpdateError(null);
                      }}
                    >
                      Cancelar
                    </AtlasButton>
                  </Flex>
                )}
              </Box>
              <Box>
                {updateError && (
                  <Text color="red" size="2">
                    {updateError}
                  </Text>
                )}
              </Box>
            </Flex>
          </Box>
          {/* Columna derecha: Acciones */}
          <Box className="flex flex-col justify-between min-w-[220px] gap-4">
            <AtlasButton
              variant="update"
              onClick={handleRestart}
              disabled={isRestarting}
              className="mb-2"
            >
              {isRestarting ? "Reiniciando..." : "Reiniciar servidor"}
            </AtlasButton>
          </Box>
        </Flex>
      </Flex>
    </Card>
  );
}
