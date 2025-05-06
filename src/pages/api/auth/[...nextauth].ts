import { NextApiHandler } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

// Ampliación de los tipos para incluir el rol en el usuario
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      role?: string;
      image?: string | null;
      sessionId?: string;
    }
  }
}

export const authOptions: NextAuthOptions = {
  // Removemos el adaptador de Prisma ya que estamos usando credenciales y JWT
  // El adaptador es para proveedores OAuth principalmente
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        
        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });
        
        if (!user || !user.isActive) {
          return null;
        }

        // Restringir acceso de clientes al orquestador
        if (user.role === 'client') {
          throw new Error('Los clientes no pueden acceder al orquestador');
        }
        
        const passwordMatch = await bcrypt.compare(credentials.password, user.password);
        
        if (!passwordMatch) {
          return null;
        }

        // Crear nueva sesión en la base de datos
        const sessionId = uuidv4();
        const session = await prisma.session.create({
          data: {
            id: sessionId,
            token: sessionId, // Usamos el UUID como token
            userId: user.id,
            sessionType: 'local',
            userAgent: 'next-auth',
            ip: '127.0.0.1', // Esto se actualizará en el callback
            createdAt: new Date(),
            expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 días
            isActive: true,
            lastUsedAt: new Date()
          }
        });
        
        // Actualizar última fecha de inicio de sesión
        await prisma.user.update({
          where: { id: user.id },
          data: { lastLoginAt: new Date() }
        });
        
        return {
          id: user.id,
          email: user.email,
          role: user.role,
          name: `${user.firstName} ${user.lastName}`,
          image: user.avatarUrl,
          sessionId: session.id
        };
      }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 7 * 24 * 60 * 60, // 7 días
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  callbacks: {
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub!;
        session.user.role = token.role as string;
        session.user.sessionId = token.sessionId as string;

        // Actualizar lastUsedAt de la sesión
        if (token.sessionId) {
          await prisma.session.update({
            where: { id: token.sessionId as string },
            data: { lastUsedAt: new Date() }
          });
        }
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
        token.sessionId = (user as any).sessionId;
      }
      return token;
    }
  },
  events: {
    async signOut({ token }) {
      // Invalidar sesión en la base de datos
      if (token.sessionId) {
        await prisma.session.update({
          where: { id: token.sessionId as string },
          data: { isActive: false }
        });
      }
    }
  }
};

const authHandler: NextApiHandler = NextAuth(authOptions);
export default authHandler;