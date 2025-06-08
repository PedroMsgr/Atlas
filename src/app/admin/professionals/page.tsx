"use client";

/**
 * Página de listado de profesionales y administradores para administración.
 * Muestra la lista de profesionales y permite su gestión.
 */

import { Box, Heading } from "@radix-ui/themes";
import ProfessionalList from "@/components/user/ProfessionalList";

export default function ProfessionalsPage() {
  return (
    <Box className="px-2 py-4 sm:px-8 sm:py-8">
      <Heading size="6" style={{ marginBottom: "1em" }}>
        Gestión de Profesionales y Admins
      </Heading>
      <ProfessionalList />
    </Box>
  );
}
