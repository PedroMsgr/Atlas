// src/db/prisma-client.ts

import { PrismaClient as GeneratedPrismaClient } from "../generated/prisma";

export type PrismaClient = GeneratedPrismaClient;

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma = global.prisma || new GeneratedPrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
