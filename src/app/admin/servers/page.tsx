"use client";

/**
 * Página de listado de servidores unitarios para administración.
 * Muestra la lista de servidores y permite su gestión.
 */

import { Box, Heading } from "@radix-ui/themes";
import ServerList from "@/components/server/ServerList";

export default function ServersPage() {
  return (
    <Box className="px-2 py-4 sm:px-8 sm:py-8">
      <Heading size="6" style={{ marginBottom: "1em" }}>
        Gestión de Servidores Unitarios
      </Heading>
      <Box p="2">
        <ServerList />
      </Box>
    </Box>
  );
}
