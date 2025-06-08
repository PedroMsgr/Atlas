// src/graphql/context.ts
// Contexto GraphQL: provee dependencias y servicios a los resolvers
// Incluye Prisma, sesión de usuario, y servicios de dominio (case, server, config, etc.)

import { NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/db/prisma-client";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { caseService } from "@/services/case.service";
import { serverService } from "@/services/server.service";
import { configService } from "@/services/config.service";
import { imageService } from "@/services/image.service";
import { tokenService } from "@/services/token.service";
import { authService } from "@/services/auth.service";
import { userService } from "@/services/user.service";
import { GraphQLContext } from "@/types/context.types";

/**
 * Crea el contexto para cada request GraphQL.
 * - Incluye sesión autenticada (si existe)
 * - Inyecta Prisma y todos los servicios de dominio
 * - Permite acceso a datos y lógica de negocio en los resolvers
 */
export async function createContext({
  req,
}: {
  req: NextRequest;
}): Promise<GraphQLContext> {
  try {
    // Obtiene la sesión autenticada (si existe)
    const session = await getServerSession(authOptions);
    return {
      prisma,
      session: session || null,
      user: session?.user
        ? {
            ...session.user,
            role:
              (session.user.role as "client" | "professional" | "admin") ??
              null,
          }
        : null,
      // Servicios de dominio
      caseService,
      serverService,
      configService,
      imageService,
      tokenService,
      authService,
      userService,
    };
  } catch (error) {
    console.error("Error creating context:", error);
    return {
      prisma,
      session: null,
      user: null,
      caseService,
      serverService,
      configService,
      imageService,
      tokenService,
      authService,
      userService,
    };
  }
}
