/**
 * API Route para exponer el endpoint GraphQL de Apollo Server en Next.js.
 * - Inicializa ApolloServer con el schema y contexto personalizado.
 * - Permite introspección en desarrollo.
 * - Soporta métodos GET y POST para compatibilidad con clientes GraphQL.
 *
 * Seguridad:
 * - El contexto se construye por request, permitiendo autenticación y autorización por request.
 */

// src/app/api/graphql/route.ts

import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { schema } from "../../../graphql/schema";
import { createContext } from "../../../graphql/context";
import { NextRequest } from "next/server";

// Importa el schema de GraphQL y el contexto
const server = new ApolloServer({
  schema,
  introspection: process.env.NODE_ENV !== "production", // Permite introspección en desarrollo
  // npm run dev -- abre desarrollo con introspección habilitada
  // npm run build && npm start -- abre producción sin introspección
  // Despliegue en Vercel es producción por defecto
});

// Maneja el servidor Apollo y crea un handler para Next.js
const handler = startServerAndCreateNextHandler(server, {
  context: async (req: NextRequest) => {
    return createContext({ req });
  },
});

export async function GET(req: NextRequest) {
  return handler(req);
}

export async function POST(req: NextRequest) {
  return handler(req);
}
