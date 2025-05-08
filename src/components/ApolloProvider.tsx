import { ApolloProvider as ApolloClientProvider } from '@apollo/client';
import { createApolloClient } from '../lib/apollo-client';
import { ReactNode, useMemo } from 'react';

interface ApolloProviderProps {
  children: ReactNode;
}

export function ApolloProvider({ children }: ApolloProviderProps) {
  const client = useMemo(() => createApolloClient(), []);
  
  return (
    <ApolloClientProvider client={client}>
      {children}
    </ApolloClientProvider>
  );
}