// Tipos para el contexto de GraphQL en la aplicación.
// Permiten tipar el contexto que se pasa a los resolvers, incluyendo Prisma, sesión, usuario y servicios de negocio.
// Facilitan la inyección de dependencias y el acceso seguro a los servicios y datos en resolvers GraphQL.

import { PrismaClient } from "@/db/prisma-client";
import { Session } from "next-auth";
import { caseService } from "@/services/case.service";
import { serverService } from "@/services/server.service";
import { configService } from "@/services/config.service";
import { imageService } from "@/services/image.service";
import { tokenService } from "@/services/token.service";
import { authService } from "@/services/auth.service";
import { userService } from "@/services/user.service";
import type { User } from "@/generated/prisma";

// Tipos para el usuario en la sesión de NextAuth.
export type NullableUser = {
  [K in keyof (Session["user"] & Partial<User>)]:
    | (Session["user"] & Partial<User>)[K]
    | null
    | undefined;
};

// Contexto de GraphQL que se pasa a los resolvers y pueda
// acceder a los servicios y datos necesarios para resolver las consultas y mutaciones.
export interface GraphQLContext {
  prisma: PrismaClient;
  session: Session | null;
  user: NullableUser | null;
  caseService: typeof caseService;
  serverService: typeof serverService;
  configService: typeof configService;
  imageService: typeof imageService;
  tokenService: typeof tokenService;
  authService: typeof authService;
  userService: typeof userService;
}
