"use client";

import { Box, Heading } from "@radix-ui/themes";
import ClientList from "@/components/user/ClientList";

export default function ClientsPage() {
  return (
    <Box className="px-2 py-4 sm:px-8 sm:py-8">
      <Heading size="6" style={{ marginBottom: "1em" }}>
        Gestión de Clientes
      </Heading>
      <ClientList />
    </Box>
  );
}
