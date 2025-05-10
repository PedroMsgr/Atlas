import { UnitServer } from '../../generated/prisma';
import { prisma } from '../prisma-client';

export class ServersRepository {
  async findAll(): Promise<UnitServer[]> {
    return prisma.unitServer.findMany();
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

  async markForUpdate(id: string, requiresUpdate: boolean): Promise<UnitServer> {
    return prisma.unitServer.update({
      where: { id },
      data: { requiresUpdate },
    });
  }
} 