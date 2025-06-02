"use client";
// src/app/admin/configs/create/page.tsx

import { Box, Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import CreateConfigBasicForm from "@/components/config-components/CreateConfig";

export default function CreateConfigPage() {
  const router = useRouter();

  return (
    <Box className="p-8">
      <Button
        variant="soft"
        onClick={() => router.push("/admin/configs")}
        className="mb-4"
      >
        &larr; Volver a la lista
      </Button>
      {/* Usar el formulario básico para crear la configuración */}
      <CreateConfigBasicForm />
    </Box>
  );
}
