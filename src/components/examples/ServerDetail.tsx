'use client';

import { useQuery, gql } from '@apollo/client';
import { Box, Card, Heading, Text, Badge, Flex, Separator, Button } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// Query para obtener los detalles de un servidor
const GET_SERVER = gql`
  query GetServer($id: ID!) {
    server(id: $id) {
      id
      name
      domain
      requiresUpdate
      isActive
      createdAt
      updatedAt
      constellation {
        id
        name
      }
    }
  }
`;

interface ServerDetailProps {
  serverId: string;
}

export default function ServerDetail({ serverId }: ServerDetailProps) {
  const router = useRouter();
  const [isRestarting, setIsRestarting] = useState(false);
  
  // Consultar los detalles del servidor
  const { data, loading, error, refetch } = useQuery(GET_SERVER, {
    variables: { id: serverId },
    fetchPolicy: 'cache-and-network',
  });
  
  if (loading) return <Text>Cargando información del servidor...</Text>;
  if (error) return <Text color="red">Error: {error.message}</Text>;
  if (!data?.server) return <Text>No se encontró el servidor.</Text>;
  
  const server = data.server;
  const dateCreated = new Date(server.createdAt).toLocaleString();
  const dateUpdated = new Date(server.updatedAt).toLocaleString();
  
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
