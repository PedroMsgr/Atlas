'use client';

import { useQuery, useMutation, useLazyQuery } from '@apollo/client';
import { Box, Card, Heading, Text, Badge, Flex, Separator, Button, IconButton, Tooltip } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { GET_SERVER_BY_ID, GENERATE_SERVER_TOKENS } from '@/graphql-client/queries/server.queries';
import { UPDATE_SERVER_TOKENS } from '@/graphql-client/mutations/server.mutations';
import { formatDate } from '@/utils/date-formatter';

interface ServerDetailProps {
  serverId: string;
}

export default function ServerDetail({ serverId }: ServerDetailProps) {
  const router = useRouter();
  const [isRestarting, setIsRestarting] = useState(false);
  const [isCopied, setIsCopied] = useState<{[key: string]: boolean}>({});
  const [isRegeneratingTokens, setIsRegeneratingTokens] = useState(false);
  const [tokensChanged, setTokensChanged] = useState(false);
  const [newTokens, setNewTokens] = useState<{orchestratorToken?: string, unitToken?: string}>({});
  const [updateError, setUpdateError] = useState<string | null>(null);
  
  // Consultar los detalles del servidor
  const { data, loading, error, refetch } = useQuery(GET_SERVER_BY_ID, {
    variables: { id: serverId },
    fetchPolicy: 'cache-and-network',
  });
  
  // Query para generar nuevos tokens
  const [generateTokens, { loading: generatingTokens }] = useLazyQuery(GENERATE_SERVER_TOKENS, {
    onCompleted: (data) => {
      if (data.generateServerTokens) {
        setNewTokens({
          orchestratorToken: data.generateServerTokens.orchestratorToken,
          unitToken: data.generateServerTokens.unitToken
        });
        setTokensChanged(true);
        setUpdateError(null);
      }
    },
    onError: (error) => {
      console.error('Error al generar tokens:', error);
      setUpdateError(`Error al generar tokens: ${error.message}`);
    }
  });
  
  // Mutación para actualizar los tokens
  const [updateServerTokens, { loading: updatingTokens }] = useMutation(UPDATE_SERVER_TOKENS, {
    onCompleted: () => {
      setTokensChanged(false);
      setNewTokens({});
      setUpdateError(null);
      refetch();
    },
    onError: (error) => {
      console.error('Error al actualizar tokens:', error);
      setUpdateError(error.message);
    }
  });
  
  // Función para copiar al portapapeles
  const handleCopyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied({ ...isCopied, [field]: true });
      setTimeout(() => {
        setIsCopied({ ...isCopied, [field]: false });
      }, 2000);
    } catch (err) {
      console.error('Error al copiar al portapapeles:', err);
    }
  };
  
  // Función para regenerar tokens usando la query
  const handleRegenerateTokens = async () => {
    setIsRegeneratingTokens(true);
    setUpdateError(null);
    
    try {
      await generateTokens({
        variables: { id: serverId }
      });
    } catch (err) {
      console.error('Error al generar tokens:', err);
      setUpdateError('Error al generar tokens. Inténtalo de nuevo.');
    } finally {
      setIsRegeneratingTokens(false);
    }
  };
  
  // Función para guardar los nuevos tokens
  const handleSaveTokens = async () => {
    if (!newTokens.orchestratorToken || !newTokens.unitToken) {
      setUpdateError('No hay tokens nuevos para guardar');
      return;
    }
    
    try {
      await updateServerTokens({
        variables: {
          id: serverId,
          orchestratorToken: newTokens.orchestratorToken,
          unitToken: newTokens.unitToken
        }
      });
    } catch (error) {
      console.error('Error al actualizar los tokens:', error);
    }
  };
  
  // Función para simular el reinicio del servidor
  const handleRestart = async () => {
    try {
      setIsRestarting(true);
      // Simular un reinicio con un temporizador
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Refrescar los datos después del reinicio
      await refetch();
      setIsRestarting(false);
    } catch (error) {
      console.error('Error al reiniciar el servidor:', error);
      setIsRestarting(false);
    }
  };

  if (loading) return <Text>Cargando información del servidor...</Text>;
  if (error) return <Text color="red">Error: {error.message}</Text>;
  if (!data?.server) return <Text>No se encontró el servidor.</Text>;
  
  const server = data.server;
  // Utilizamos nuestra función de formateo de fechas
  const dateCreated = formatDate(server.createdAt, 'full');
  const dateUpdated = formatDate(server.updatedAt, 'full');
    
  return (
    <Card>
      <Flex direction="column" gap="4">
        {/* Encabezado */}
        <Flex justify="between" align="center">
          <Heading size="5">{server.name}</Heading>
          <Badge color={server.isActive ? "green" : "red"}>
            {server.isActive ? "Activo" : "Inactivo"}
          </Badge>
        </Flex>
        
        <Separator size="4" />
        
        {/* Información básica */}
        <Box>
          <Flex gap="4" direction="column">
            <Box>
              <Text weight="bold">Dominio:</Text>
              <Text>{server.domain}</Text>
            </Box>
            
            <Box>
              <Text weight="bold">Estado de actualización:</Text>
              <Badge color={server.requiresUpdate ? "amber" : "blue"}>
                {server.requiresUpdate ? "Requiere actualización" : "Actualizado"}
              </Badge>
            </Box>
            
            <Box>
              <Text weight="bold">Constelación:</Text>
              <Text>{server.constellation?.name || "Sin constelación"}</Text>
            </Box>

            <Box>
              <Text weight="bold">Configuración activa:</Text>
              <Text>{server.activeConfig?.name || "Sin configuración"}</Text>
            </Box>
            
            {/* Tokens */}
            <Box className="mt-4">
              <Text weight="bold" size="3" className="mb-2">Tokens de acceso:</Text>
              
              <div className="space-y-3">
                {/* Token de orquestador */}
                <div className="bg-gray-50 p-3 rounded-md">
                  <Flex justify="between" align="center">
                    <div>
                      <Text weight="bold" size="2">Token de Orquestador:</Text>
                      <div className="bg-white p-2 rounded border mt-1 font-mono text-sm overflow-x-auto">
                        {tokensChanged ? newTokens.orchestratorToken : server.orchestratorToken}
                      </div>
                    </div>
                    <Button 
                      size="1" 
                      variant="soft" 
                      onClick={() => handleCopyToClipboard(tokensChanged ? newTokens.orchestratorToken! : server.orchestratorToken, 'orchestratorToken')}
                    >
                      {isCopied.orchestratorToken ? '✓ Copiado' : 'Copiar'}
                    </Button>
                  </Flex>
                </div>
                
                {/* Token de unidad */}
                <div className="bg-gray-50 p-3 rounded-md">
                  <Flex justify="between" align="center">
                    <div>
                      <Text weight="bold" size="2">Token de Unidad:</Text>
                      <div className="bg-white p-2 rounded border mt-1 font-mono text-sm overflow-x-auto">
                        {tokensChanged ? newTokens.unitToken : server.unitToken}
                      </div>
                    </div>
                    <Button 
                      size="1" 
                      variant="soft" 
                      onClick={() => handleCopyToClipboard(tokensChanged ? newTokens.unitToken! : server.unitToken, 'unitToken')}
                    >
                      {isCopied.unitToken ? '✓ Copiado' : 'Copiar'}
                    </Button>
                  </Flex>
                </div>
                
                {/* Botones para regenerar tokens */}
                <Flex direction="column" gap="2">
                  {updateError && (
                    <Text color="red" size="1">{updateError}</Text>
                  )}
                  
                  <Flex gap="3" justify="end" className="mt-2">
                    {!tokensChanged ? (
                      <Button 
                        size="2" 
                        color="amber" 
                        variant="soft" 
                        disabled={isRegeneratingTokens || generatingTokens}
                        onClick={handleRegenerateTokens}
                      >
                        {isRegeneratingTokens || generatingTokens ? 'Generando...' : 'Regenerar tokens'}
                      </Button>
                    ) : (
                      <Flex gap="2">
                        <Button 
                          size="2" 
                          color="green" 
                          onClick={handleSaveTokens}
                          disabled={updatingTokens}
                        >
                          {updatingTokens ? 'Guardando...' : 'Guardar cambios'}
                        </Button>
                        <Button 
                          size="2" 
                          variant="soft" 
                          onClick={() => {
                            setTokensChanged(false);
                            setNewTokens({});
                            setUpdateError(null);
                          }}
                          disabled={updatingTokens}
                        >
                          Cancelar
                        </Button>
                      </Flex>
                    )}
                  </Flex>
                </Flex>
              </div>
            </Box>
            
            <Flex gap="4">
                <Box>
                  <Text weight="bold">Creado:</Text>
                  <Text size="2">{dateCreated}</Text>
                </Box>
                
                <Box>
                  <Text weight="bold">Última actualización:</Text>
                  <Text size="2">{dateUpdated}</Text>
                </Box>
            </Flex>
          </Flex>
        </Box>
        
        <Separator size="4" />
        
        {/* Acciones */}
        <Flex gap="3" justify="end">
          <Button 
            color="amber" 
            onClick={handleRestart} 
            disabled={isRestarting}
          >
            {isRestarting ? "Reiniciando..." : "Reiniciar servidor"}
          </Button>
          
          <Button 
            color="blue" 
            onClick={() => router.push('/admin/servers')}
          >
            Volver a la lista
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
}

