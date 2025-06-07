"use client";

import { useSession } from "next-auth/react";
import { Box, Card, Heading, Flex, Text } from "@radix-ui/themes";
import CaseListPro from "@/components/case/CaseListPro";

export default function ProCasesPage() {
  const { data: session } = useSession();

  return (
    <main className="min-h-screen">
      <Box className="p-8">
        <Card>
          <Heading size="5" mb="4">
            Mis casos
          </Heading>
          <Box p="2">
            <CaseListPro user={session?.user} />
          </Box>
        </Card>
      </Box>
    </main>
  );
}
