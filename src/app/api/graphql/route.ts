import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { schema } from '../../../graphql/schema';
import { createContext } from '../../../graphql/context';
import { NextRequest } from 'next/server';
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authService } from "@/services/auth-service";

const server = new ApolloServer({
  schema,
});

const handler = startServerAndCreateNextHandler(server, {
  context: async (req: NextRequest) => {
    return createContext({ req: req as any });
  },
});

export { handler as GET, handler as POST }

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credenciales",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Contraseña", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        
        const result = await authService.authenticateUser({
          email: credentials.email,
          password: credentials.password
        });

        if (!result.success) {
          throw new Error(result.message);
        }

        // Devolver usuario con token JWT incluido
        return {
          id: result.user.id,
          name: result.user.name,
          email: result.user.email,
          role: result.user.role,
          image: result.user.image,
          accessToken: result.token
        };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Pasar datos del usuario al token
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        // Agregar información adicional a la sesión
        session.user.id = token.id;
        session.user.role = token.role;
        session.accessToken = token.accessToken;
      }
      return session;
    }
  },
  pages: {
    signIn: "/auth/signin",
  },
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 horas
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const authHandler = NextAuth(authOptions);
export { authHandler as GET, authHandler as POST };