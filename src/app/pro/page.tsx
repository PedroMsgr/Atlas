'use client';

import { Card, Flex, Heading, Text, Box } from '@radix-ui/themes';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProfessionalDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    } else if (status === 'authenticated' && session?.user?.role !== 'professional') {
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
    <main className="min-h-screen">
      <Box className="p-8">
        <Card>
          <Heading size="5" mb="4">Portal Profesional</Heading>
          <Flex direction="column" gap="3" p="4">
            <Text>Email: {session.user.email}</Text>
            <Text>Rol: {session.user.role}</Text>
          </Flex>
        </Card>
        
        {/* Aquí puedes agregar más tarjetas con información para profesionales */}
        <Card className="mt-6">
          <Heading size="5" mb="4">Mis casos</Heading>
          <Flex direction="column" gap="3" p="4">
            <Text>Esta sección mostrará los casos asignados</Text>
          </Flex>
        </Card>
      </Box>
    </main>
  );
}