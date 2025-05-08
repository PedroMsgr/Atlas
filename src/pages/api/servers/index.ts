import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';
import { randomUUID, createHash, randomBytes } from 'crypto';

// Inicializar Prisma
const prisma = new PrismaClient();

/**
 * Genera un token seguro usando una combinación de técnicas criptográficas
 * @param prefix Prefijo para identificar el tipo de token ('orch' o 'unit')
 * @param secret Información adicional para aumentar la entropía
 */
function generateSecureToken(prefix: 'orch' | 'unit', secret: string): string {
  // Generar bytes aleatorios para aumentar la entropía
  const randomSalt = randomBytes(16).toString('hex');
  
  // Combinar con UUID y el dominio para hacerlo único
  const baseString = `${randomUUID()}_${secret}_${randomSalt}_${Date.now()}`;
  
  // Crear hash SHA-256 para obtener una cadena determinista pero irreversible
  const hash = createHash('sha256').update(baseString).digest('hex');
  
  // Tomar solo una parte del hash para hacerlo manejable (32 caracteres)
  const shortHash = hash.substring(0, 24);
  
  // Construir el token final con el prefijo
  return `${prefix}_${shortHash}`;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Verificar autenticación
  const session = await getServerSession(req, res, authOptions);
  
  if (!session) {
    return res.status(401).json({ error: 'No autenticado' });
  }

  // Manejar diferentes métodos HTTP
  if (req.method === 'GET') {
    try {
      // Consultar todos los servidores con sus constelaciones
      const servers = await prisma.unitServer.findMany({
        include: {
          constellation: {
            select: {
              name: true
            }
          }
        }
      });
      
      return res.status(200).json(servers);
    } catch (error) {
      console.error('Error al obtener servidores:', error);
      return res.status(500).json({ error: 'Error al obtener los servidores' });
    }
  } else if (req.method === 'POST') {
    try {
      const { name, domain, constellationId } = req.body;
      
      // Validar datos
      if (!name || !domain) {
        return res.status(400).json({ error: 'El nombre y dominio son obligatorios' });
      }
      
      // Generar tokens seguros y únicos para el servidor
      // Utilizamos el dominio como parte del "secreto" para aumentar la unicidad
      const orchestratorToken = generateSecureToken('orch', domain);
      const unitToken = generateSecureToken('unit', domain);
      
      // Crear nuevo servidor con todos los campos requeridos
      const newServer = await prisma.unitServer.create({
        data: {
          name,
          domain,
          constellationId: constellationId || undefined,
          orchestratorToken,
          unitToken,
          requiresUpdate: false
        }
      });
      
      return res.status(201).json(newServer);
    } catch (error) {
      console.error('Error al crear servidor:', error);
      return res.status(500).json({ error: 'Error al crear el servidor' });
    }
  } else {
    return res.status(405).json({ error: 'Método no permitido' });
  }
}