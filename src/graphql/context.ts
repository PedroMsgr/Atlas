import { NextRequest } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export type Context = {
  prisma: typeof prisma;
  session: any;
  user: any;
};

export async function createContext({ req }: { req: NextRequest }): Promise<Context> {
  // Obtener la sesión del servidor
  const session = await getServerSession(req);
  
  return {
    prisma,
    session: session?.accessToken || null,
    user: session?.user || null
  };
}