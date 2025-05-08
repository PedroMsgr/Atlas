import { NextApiHandler } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '@/lib/prisma';
import bcrypt from 'bcryptjs';

// Ampliación de los tipos para incluir el rol en el usuario
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      role?: string;
      image?: string | null;
    }
  }
}

// Configuración de autenticación
export const authOptions: NextAuthOptions = {
  providers: [ // Proveedor de credenciales
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      // Autorización de credenciales
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        
        // Búsqueda de usuario en la base de datos
        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });
        
        // Verificación de usuario activo
        if (!user || !user.isActive) {
          return null;
        }

        // Restringir acceso de clientes al orquestador
        if (user.role === 'client') {
          throw new Error('Los clientes no pueden acceder al orquestador');
        }
        // Comparación de contraseñas
        const passwordMatch = await bcrypt.compare(credentials.password, user.password);
        
        if (!passwordMatch) {
          return null;
        }

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
          image: user.avatarUrl
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
  callbacks: { // Callback para manejar el token JWT y la sesión cuando se crea o actualiza
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub!;
        session.user.role = token.role as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
      }
      return token;
    }
  }
};

const authHandler: NextApiHandler = NextAuth(authOptions);
export default authHandler;