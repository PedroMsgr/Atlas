import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';

// Inicializar Prisma
const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Verificar autenticación
  const session = await getServerSession(req, res, authOptions);
  
  if (!session) {
    return res.status(401).json({ error: 'No autenticado' });
  }

  if (req.method === 'GET') {
    try {
      // Consultar todas las constelaciones
      const constellations = await prisma.constellation.findMany({
        select: {
          id: true,
          name: true
        }
      });
      
      return res.status(200).json(constellations);
    } catch (error) {
      console.error('Error al obtener constelaciones:', error);
      return res.status(500).json({ error: 'Error al obtener las constelaciones' });
    }
  } else {
    return res.status(405).json({ error: 'Método no permitido' });
  }
}