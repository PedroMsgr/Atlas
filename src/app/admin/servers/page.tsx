"use client";

import { Box, Heading, Flex, Button } from "@radix-ui/themes";
import ServerList from "@/components/server/ServerList";
import { useRouter } from "next/navigation";

export default function ServersPage() {
  const router = useRouter();
  return (
    <Box className="p-8">
      <Flex justify="between" align="center" className="mb-6">
        <Heading size="6">Gestión de Servidores Unitarios</Heading>
        <Button
          color="green"
          onClick={() => router.push("/admin/servers/create")}
        >
          Nuevo Servidor
        </Button>
      </Flex>
      <ServerList />
    </Box>
  );
}
