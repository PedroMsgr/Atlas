"use client";

import { Theme, Box, Heading } from "@radix-ui/themes";
import CaseList from "@/components/case/CaseList";

/**
 * Página de listado de casos para administración.
 * Muestra la lista de casos y permite supervisión y navegación a detalles.
 */

export default function CasesPage() {
  return (
    <Theme>
      <Box className="px-2 py-4 sm:px-8 sm:py-8">
        <Heading size="6" style={{ marginBottom: "1em" }}>
          Supervisión de Casos
        </Heading>
        <CaseList />
      </Box>
    </Theme>
  );
}
