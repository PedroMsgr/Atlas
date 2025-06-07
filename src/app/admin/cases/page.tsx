"use client";

import { Theme, Box, Heading } from "@radix-ui/themes";
import CaseList from "@/components/case/CaseList";

export default function CasesPage() {
  return (
    <Theme>
      <Box className="p-8">
        <Heading size="6">Supervisión de Casos</Heading>
        <CaseList />
      </Box>
    </Theme>
  );
}
