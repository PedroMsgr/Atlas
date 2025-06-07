"use client";

import { Box, Heading, Flex, Card } from "@radix-ui/themes";
import ServerList from "@/components/server/ServerList";

export default function ServersPage() {
  return (
    <Box className="p-8">
      <Heading size="5" mb="4">
        Gestión de Servidores Unitarios
      </Heading>
      <Box p="2">
        <ServerList />
      </Box>
    </Box>
  );
}
