"use client";

import { Box, Heading } from "@radix-ui/themes";
import ProfessionalList from "@/components/user/ProfessionalList";

export default function ProfessionalsPage() {
  return (
    <Box className="p-8">
      <Heading size="6" mb="4">
        Gestión de Profesionales y Admins
      </Heading>
      <ProfessionalList />
    </Box>
  );
}
