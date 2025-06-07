"use client";

import { useState } from "react";
import { Box, Heading, Flex, Button as RadixButton } from "@radix-ui/themes";
import ProfessionalList from "@/components/user/ProfessionalList";

export default function ProfessionalsPage() {
  const [refreshKey, setRefreshKey] = useState(0);
  return (
    <Box className="p-8">
      <Flex justify="between" align="center" className="mb-4">
        <Heading size="6">Gestión de Profesionales y Admins</Heading>
        <RadixButton
          onClick={() => setRefreshKey((k) => k + 1)}
          variant="outline"
        >
          Actualizar
        </RadixButton>
      </Flex>
      <ProfessionalList key={refreshKey} />
    </Box>
  );
}
