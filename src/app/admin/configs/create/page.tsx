"use client";
// src/app/admin/configs/create/page.tsx

import { Box, Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import CreateConfigForm from "@/components/config-components/CreateConfigForm";

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
      <CreateConfigForm onSuccess={() => router.push("/admin/configs")} />
    </Box>
  );
}
