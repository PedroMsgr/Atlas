"use client";
import { Box, Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import ServerCreate from "@/components/server/ServerCreate";

/**
 * Página de creación de servidor unitario en el panel de administración.
 * Permite crear un nuevo servidor y navegar al detalle tras crearlo.
 */
export default function CreateServerPage() {
  const router = useRouter();
  return (
    <Box className="p-8">
      <Button
        variant="soft"
        onClick={() => router.push("/admin/servers")}
        className="mb-4"
      >
        &larr; Volver a la lista
      </Button>
      <ServerCreate onSuccess={(id) => router.push(`/admin/servers/${id}`)} />
    </Box>
  );
}
