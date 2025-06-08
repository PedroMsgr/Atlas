"use client";
// src/app/admin/configs/create/page.tsx

import { Box, Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import ConfigCreate from "@/components/config/ConfigCreate";
import { AtlasButton } from "@/components/ui/AtlasButton";

/**
 * Página de creación de configuración de servidor unitario.
 * Permite crear una nueva configuración y navegar al detalle tras crearla.
 */
export default function CreateConfigPage() {
  const router = useRouter();

  return (
    <Box className="p-8">
      <AtlasButton
        variant="back"
        onClick={() => router.back()}
        className="mb-4"
      >
        &larr; Volver a la lista
      </AtlasButton>
      {/* Fomrulario de creación de configuración con la información básica */}
      <ConfigCreate onSuccess={(id) => router.push(`/admin/configs/${id}`)} />
    </Box>
  );
}
