'use client';

import { Box, Heading } from '@radix-ui/themes';
import ServerList from '@/components/examples/ServerList';
import CreateServer from '@/components/examples/CreateServer';

export default function ServersPage() {
  return (
    <>
      <Box className="p-8">
        <Heading size="6">Gestión de Servidores Unitarios</Heading>
      </Box>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-8">Administración de Servidores</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ServerList />
          </div>
          <div className="lg:col-span-1">
            <CreateServer />
          </div>
        </div>
      </div>
    </>
  );
}