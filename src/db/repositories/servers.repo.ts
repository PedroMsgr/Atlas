import { UnitServer } from '../../generated/prisma';
import { prisma } from '../prisma-client';

export class ServersRepository {
  async findAll(): Promise<UnitServer[]> {
    return prisma.unitServer.findMany({
      select: {
        id: true,
        name: true,
        domain: true,
        requiresUpdate: true,
        isActive: true,
        constellation: {
          select: {
            name: true
          }
        },
        updatedAt: true,
        createdAt: true,
        orchestratorToken: true,
        unitToken: true,
        constellationId: true,
        activeConfigId: true
      }
    });
  }

  async findById(id: string): Promise<UnitServer | null> {
    return prisma.unitServer.findUnique({
      where: { id },
      include: {
        constellation: true,
        activeConfig: true,
        clients: true,
        professionals: true,
        cases: true,
        sections: true,
        manualArticles: true,
        autoSources: true,
        updateLogs: true,
      },
    });
  }

  async findByDomain(domain: string): Promise<UnitServer | null> {
    return prisma.unitServer.findUnique({
      where: { domain },
    });
  }

  async create(data: Omit<UnitServer, 'id'>): Promise<UnitServer> {
    return prisma.unitServer.create({
      data,
    });
  }

  async update(id: string, data: Partial<UnitServer>): Promise<UnitServer> {
    return prisma.unitServer.update({
      where: { id },
      data,
    });
  }
  async delete(id: string): Promise<UnitServer> {
    return prisma.unitServer.delete({
      where: { id },
    });
  }

  async updateActiveConfig(serverId: string, configId: string): Promise<UnitServer> {
    return prisma.unitServer.update({
      where: { id: serverId },
      data: { activeConfigId: configId },
    });
  }
  
  /**
   * Verifica si un token de orquestador ya existe en la base de datos
   * @param token El token a verificar
   * @returns true si el token ya existe, false en caso contrario
   */
  async orchestratorTokenExists(token: string): Promise<boolean> {
    const count = await prisma.unitServer.count({
      where: { orchestratorToken: token }
    });
    return count > 0;
  }
  
  /**
   * Verifica si un token de unidad ya existe en la base de datos
   * @param token El token a verificar
   * @returns true si el token ya existe, false en caso contrario
   */
  async unitTokenExists(token: string): Promise<boolean> {
    const count = await prisma.unitServer.count({
      where: { unitToken: token }
    });
    return count > 0;
  }

  async markForUpdate(id: string, requiresUpdate: boolean): Promise<UnitServer> {
    return prisma.unitServer.update({
      where: { id },
      data: { requiresUpdate },
    });
  }
} 