/**
 * API Route para autenticación NextAuth en la app.
 * - Proveedor principal: Credentials (usuario/contraseña).
 * - Extiende los tipos de sesión y usuario para incluir id, rol y JWT personalizado.
 * - Implementa callbacks para propagar datos de usuario y token a la sesión.
 * - Redirige a página de login personalizada en caso de signIn.
 * - Usa JWT como estrategia de sesión.
 *
 * Seguridad:
 * - El secreto se toma de JWT_SECRET en variables de entorno.
 * - El token JWT se propaga en la sesión para uso en llamadas autenticadas.
 */

import NextAuth, { DefaultSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: string;
      jwt: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    email: string;
    role: string;
    name: string;
    image?: string;
    token: string;
  }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
