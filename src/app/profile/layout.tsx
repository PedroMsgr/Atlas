// Layout para la sección de perfil de usuario.
// Envuelve el contenido del perfil con el layout global y aplica estilos de altura mínima.

import { Box } from "@radix-ui/themes";
import Layout from "@/components/layout/Layout";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <Box className="min-h-screen ">{children}</Box>
    </Layout>
  );
}
