'use client';

import { Theme, Card, Flex, Heading, Text, Box } from '@radix-ui/themes';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

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
        <Box className="p-8">
          <Card>
            <Heading size="5" mb="4">Información de la cuenta</Heading>
            <Flex direction="column" gap="3" p="4">
              <Text>Email: {session.user.email}</Text>
              <Text>Rol: {session.user.role}</Text>
            </Flex>
          </Card>
          
          {/* Aquí puedes agregar más tarjetas con información administrativa */}
          <Card className="mt-6">
            <Heading size="5" mb="4">Estadísticas de la plataforma</Heading>
            <Flex direction="column" gap="3" p="4">
              <Text>Esta sección mostrará estadísticas de uso</Text>
            </Flex>
          </Card>
        </Box>
      </main>
    </Theme>
  );
}