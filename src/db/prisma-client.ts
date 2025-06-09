// src/db/prisma-client.ts
// Prisma Client: inicializa y exporta una instancia singleton de Prisma
// para acceso a la base de datos.
// El bloque 'eslint-disable-next-line no-var' permite declarar la
//  variable global 'prisma' en modo desarrollo sin que ESLint
//  marque error por uso de 'var'.
// Esto previene la creación de múltiples instancias de Prisma en
// desarrollo (hot reload).

import { PrismaClient as GeneratedPrismaClient } from "../generated/prisma";

export type PrismaClient = GeneratedPrismaClient;

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Usa la instancia global si existe, o crea una nueva
export const prisma = global.prisma || new GeneratedPrismaClient();

// En desarrollo, guarda la instancia en global para evitar fugas de
// conexión por hot reload
if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
