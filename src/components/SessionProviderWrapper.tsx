"use client";

// Proveedor de contexto de sesión para NextAuth.
// Permite que los componentes hijos accedan a la sesión de usuario.

import { SessionProvider } from "next-auth/react";

export default function SessionProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
