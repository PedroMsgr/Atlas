"use client";
// src/app/admin/configs/page.tsx

import { Box, Heading } from "@radix-ui/themes";
import ConfigList from "@/components/config/ConfigList";
import { useRouter } from "next/navigation";

export default function ConfigsPage() {
  const router = useRouter();

  return (
    <Box className="p-8">
      <Heading size="6" mb="4">
        Gestión de Configuraciones
      </Heading>
      <ConfigList />
    </Box>
  );
}
