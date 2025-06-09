// Proveedor global de contexto para sesión y Apollo Client.
// Permite que toda la aplicación acceda a la sesión de usuario y a la cache de Apollo para GraphQL.

"use client";

import { SessionProvider } from "next-auth/react";
import { ApolloProvider } from "@/components/ApolloProvider";
import { ReactNode } from "react";

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <ApolloProvider>{children}</ApolloProvider>
    </SessionProvider>
  );
}
