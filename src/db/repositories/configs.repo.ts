import { UnitConfig, Prisma } from '../../generated/prisma';
import { prisma } from '../prisma-client';

export class ConfigsRepository {
  async findAll(): Promise<UnitConfig[]> {
    return prisma.unitConfig.findMany({
      include: {
        sections: true,
        manualArticles: true,
        autoSources: true,
        images: true,
        activeInServers: true,
        updates: true,
        previousUpdates: true,
      },
    });
  }

  async findById(id: string): Promise<UnitConfig | null> {
    return prisma.unitConfig.findUnique({
      where: { id },
      include: {
        sections: true,
        manualArticles: true,
        autoSources: true,
        images: true,
        activeInServers: true,
        updates: true,
        previousUpdates: true,
      },
    });
  }

  async findByName(name: string): Promise<UnitConfig | null> {
    return prisma.unitConfig.findUnique({
      where: { name },
      include: {
        sections: true,
        manualArticles: true,
        autoSources: true,
        images: true,
      },
    });
  }

  async create(data: Prisma.UnitConfigCreateInput): Promise<UnitConfig> {
    return prisma.unitConfig.create({
      data,
      include: {
        sections: true,
        manualArticles: true,
        autoSources: true,
        images: true,
      },
    });
  }

  async update(id: string, data: Prisma.UnitConfigUpdateInput): Promise<UnitConfig> {
    return prisma.unitConfig.update({
      where: { id },
      data,
      include: {
        sections: true,
        manualArticles: true,
        autoSources: true,
        images: true,
      },
    });
  }

  async delete(id: string): Promise<UnitConfig> {
    return prisma.unitConfig.delete({
      where: { id },
    });
  }

  async findByPageType(pageType: string): Promise<UnitConfig[]> {
    return prisma.unitConfig.findMany({
      where: { pageType },
      include: {
        sections: true,
        manualArticles: true,
        autoSources: true,
        images: true,
      },
    });
  }

  async getActiveConfigs(): Promise<UnitConfig[]> {
    return prisma.unitConfig.findMany({
      where: {
        activeInServers: {
          some: {},
        },
      },
      include: {
        activeInServers: true,
      },
    });
  }
} 