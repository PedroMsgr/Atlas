'use client';

import { useParams } from 'next/navigation';
import { Box, Heading, Button, Flex } from '@radix-ui/themes';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import ServerDetail from '@/components/examples/ServerDetail';

export default function ServerDetailPage() {
  // Verificar autenticación y permisos
  const { isLoading: authLoading } = useAuth({ allowedRoles: ['admin'] });
  
  const params = useParams();
  const serverId = params.id as string;
  
  if (authLoading) return (
    <Box className="p-8">
      <p className="text-center">Cargando...</p>
    </Box>
  );
  
  return (
    <Box className="p-8">
      <Flex justify="between" align="center" mb="6">
        <Heading size="6">Detalles del Servidor</Heading>
        <Link href="/admin/servers">
          <Button variant="outline">Volver a la lista</Button>
        </Link>
      </Flex>

      <ServerDetail serverId={serverId} />
    </Box>
  );
}
