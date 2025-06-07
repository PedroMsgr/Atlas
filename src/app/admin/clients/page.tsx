"use client";

import { Box, Heading } from "@radix-ui/themes";
import ClientList from "@/components/user/ClientList";

export default function ClientsPage() {
  return (
    <Box className="p-8">
      <Heading size="6" mb="4">
        Gestión de Clientes
      </Heading>
      <ClientList />
    </Box>
  );
}
