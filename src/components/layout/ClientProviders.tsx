'use client';

import { SessionProvider } from "next-auth/react";
import { ApolloProvider } from "@/components/ApolloProvider";
import { ReactNode } from "react";

export default function ClientProviders({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <SessionProvider>
      <ApolloProvider>
        {children}
      </ApolloProvider>
    </SessionProvider>
  );
}