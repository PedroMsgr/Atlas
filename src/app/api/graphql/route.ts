// src/app/api/graphql/route.ts

import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { schema } from '../../../graphql/schema';
import { createContext } from '../../../graphql/context';
import { NextRequest } from 'next/server';

const server = new ApolloServer({
  schema,
  introspection: process.env.NODE_ENV !== 'production',
});

const handler = startServerAndCreateNextHandler(server, {
  context: async (req: NextRequest) => {
    return createContext({ req });
  },
});

export { handler as GET, handler as POST };