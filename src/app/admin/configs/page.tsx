"use client";
// src/app/admin/configs/page.tsx

import { Box, Heading } from "@radix-ui/themes";
import ConfigList from "@/components/config/ConfigList";

/**
 * Página de listado de configuraciones para administración.
 * Muestra la lista de configuraciones y permite su gestión.
 */
export default function ConfigsPage() {
  return (
    <Box className="px-2 py-4 sm:px-8 sm:py-8">
      <Heading size="6" style={{ marginBottom: "1em" }}>
        Gestión de Configuraciones
      </Heading>
      <ConfigList />
    </Box>
  );
}
