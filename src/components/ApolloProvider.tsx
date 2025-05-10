import { ApolloProvider as ApolloClientProvider } from '@apollo/client';
import { createApolloClient } from '../lib/apollo-client';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import { useSession } from 'next-auth/react';

interface ApolloProviderProps {
  children: ReactNode;
}

export function ApolloProvider({ children }: ApolloProviderProps) {
  // Obtener la sesión actual de NextAuth
  const { data: session, status } = useSession();
  const [client] = useState(() => createApolloClient());
  
  // Reiniciar la cache de Apollo cuando cambie el usuario
  useEffect(() => {
    // Limpiar la caché al cambiar de sesión para evitar datos de otro usuario
    if (status !== 'loading') {
      client.resetStore().catch(error => {
        console.error('Error resetting Apollo client store:', error);
      });
    }
  }, [client, session, status]);
  
  return (
    <ApolloClientProvider client={client}>
      {children}
    </ApolloClientProvider>
  );
}