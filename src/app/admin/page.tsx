'use client';

import { Theme, Card, Flex, Heading, Text, Button, Avatar, Box } from '@radix-ui/themes';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { ExitIcon } from '@radix-ui/react-icons';

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    } else if (status === 'authenticated' && session?.user?.role !== 'admin') {
      router.push('/');
    }
  }, [status, session, router]);
  
  if (status === 'loading' || status === 'unauthenticated' || !session) {
    return (
      <Flex align="center" justify="center" className="min-h-screen">
        <Text>Cargando...</Text>
      </Flex>
    );
  }
  
  return (
    <Theme>
      <main className="min-h-screen">
        <Box className="bg-blue-600 text-white p-6">
          <Flex justify="between" align="center">
            <Heading size="6">Panel de Administración</Heading>
            <Flex align="center" gap="4">
              <Flex align="center" gap="2">
                <Avatar
                  fallback={(session.user.name?.[0] || 'A') as string}
                  color="blue"
                  variant="solid"
                />
                <Text>{session.user.name || 'Administrador'}</Text>
              </Flex>
              <Button 
                variant="soft" 
                onClick={() => router.push('/api/auth/signout')}
              >
                <ExitIcon />
                Salir
              </Button>
            </Flex>
          </Flex>
        </Box>
        
        <Box className="p-8">
          <Card>
            <Flex direction="column" gap="3" p="4">
              <Text>Email: {session.user.email}</Text>
              <Text>Rol: {session.user.role}</Text>
            </Flex>
          </Card>
        </Box>
      </main>
    </Theme>
  );
}