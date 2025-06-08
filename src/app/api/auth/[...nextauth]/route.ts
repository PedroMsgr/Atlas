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

import NextAuth, { DefaultSession, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authService } from "@/services/auth.service";

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

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const { email, password } = credentials;
        const authResult = await authService.authenticateUser({
          email,
          password,
        });

        if (authResult.success && authResult.user) {
          return {
            id: authResult.user.id,
            email: authResult.user.email,
            role: authResult.user.role,
            name: authResult.user.name,
            image: authResult.user.image || undefined,
            token: authResult.token || "",
          };
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt" as const,
  },
  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.role = user.role;
        token.image = user.image;
        token.jwt = user.token;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.role = token.role as string;
        session.user.image = token.image as string | undefined;
        session.user.jwt = token.jwt as string;
      }
      return session;
    },
  },
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/auth/signin", // Redirige a la página de login personalizada
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
