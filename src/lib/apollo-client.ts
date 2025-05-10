import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

// Manejo de errores
const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors) {
    // Manejar errores GraphQL
    graphQLErrors.forEach(({ message, locations, path, extensions }) => {
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
      
      // Si es un error de autenticación, podemos redirigir al login
      if (
        extensions?.code === 'UNAUTHENTICATED' || 
        message.includes('no tienes permisos') || 
        message.includes('no autenticado')
      ) {
        // Redirigir solo si estamos en el cliente
        if (typeof window !== 'undefined') {
          window.location.href = `/auth/signin?callbackUrl=${encodeURIComponent(window.location.href)}&error=SessionRequired`;
        }
      }
    });
  }
  
  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
    // También manejamos errores de red como timeouts o servidor caído
    if ((networkError as any).statusCode === 401) {
      if (typeof window !== 'undefined') {
        window.location.href = '/auth/signin?error=SessionRequired';
      }
    }
  }
});

// Enlace HTTP para conectar con el servidor GraphQL
const httpLink = new HttpLink({
  uri: '/api/graphql', // URL relativa al endpoint que acabamos de crear
  credentials: 'same-origin', // Importante: enviar cookies con cada solicitud
});

// Función para crear un cliente Apollo
export function createApolloClient() {
  return new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache(),
    ssrMode: typeof window === 'undefined',
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
  });
}