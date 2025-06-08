// src/graphql/schema.ts
// Archivo principal de esquema GraphQL: une typeDefs y resolvers
// Exporta el esquema ejecutable para Apollo Server

import { makeExecutableSchema } from "@graphql-tools/schema";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
