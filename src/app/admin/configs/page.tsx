'use client';
// src/app/admin/configs/page.tsx

import { Box, Heading, Flex, Button } from '@radix-ui/themes';
import ListConfig from '@/components/config-components/ListConfig';
import { useRouter } from 'next/navigation';

export default function ConfigsPage() {
  const router = useRouter();
  
  return (
    <Box className="p-8">
      <Flex justify="between" align="center" className="mb-6">
        <Heading size="6">Gestión de Configuraciones</Heading>
        <Button color="green" onClick={() => router.push('/admin/configs/create')}>
          Nueva Configuración
        </Button>
      </Flex>
      
      <ListConfig />
    </Box>
  );
}