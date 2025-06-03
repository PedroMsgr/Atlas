'use client';

import { Heading, Box } from '@radix-ui/themes';
import ServerDetail from '@/components/server/ServerDetail';
import { use } from 'react';

interface ServerDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ServerDetailPage({ params }: ServerDetailPageProps) {
  const resolvedParams = use(params);
  
  return (
    <Box className="p-8">
      <Heading size="6" className="mb-6">Detalles del servidor</Heading>
      <ServerDetail serverId={resolvedParams.id} />
    </Box>
  );
} 