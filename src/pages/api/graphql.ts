import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { schema } from '../../graphql/schema';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from 'next';

export type Context = {
  prisma: PrismaClient;
  session: any;
};

// Inicializa Prisma Client
const prisma = new PrismaClient();

// Crea una instancia de Apollo Server
const server = new ApolloServer({
  schema,
  introspection: process.env.NODE_ENV !== 'production',
});

// Define la función que crea el contexto para cada solicitud
const createContext = async (req: NextApiRequest, res: NextApiResponse): Promise<Context> => {
  const session = await getServerSession(req, res, authOptions);
  
  return {
    prisma,
    session,
  };
};

// Exporta el handler para Next.js
export default startServerAndCreateNextHandler(server, {
  context: async (req, res) => createContext(req, res),
});