"use client";

import { Flex, Text, Card, Heading } from "@radix-ui/themes";
import { useSession } from "next-auth/react";

// Página principal del portal profesional.
// Muestra información básica del usuario profesional autenticado (email y rol).
// El control de acceso se realiza por middleware, no aquí.

export default function ProfessionalDashboard() {
  // El control de acceso lo hace el middleware, no es necesario aquí
  const { data: session } = useSession();

  return (
    <main className="min-h-screen">
      <div className="p-8">
        <Card>
          <Heading size="5" mb="4">
            Portal Profesional
          </Heading>
          <Flex direction="column" gap="3" p="4">
            <Text>Email: {session?.user?.email}</Text>
            <Text>Rol: {session?.user?.role}</Text>
          </Flex>
        </Card>
      </div>
    </main>
  );
}
