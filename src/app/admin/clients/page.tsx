"use client";

import { useState } from "react";
import { Box, Heading, Flex, Button as RadixButton } from "@radix-ui/themes";
import ClientList from "@/components/user/ClientList";

export default function ClientsPage() {
  const [refreshKey, setRefreshKey] = useState(0);
  return (
    <Box className="p-8">
      <Flex justify="between" align="center" className="mb-4">
        <Heading size="6">Gestión de Clientes</Heading>
        <RadixButton
          onClick={() => setRefreshKey((k) => k + 1)}
          variant="outline"
        >
          Actualizar
        </RadixButton>
      </Flex>
      <ClientList key={refreshKey} />
    </Box>
  );
}
