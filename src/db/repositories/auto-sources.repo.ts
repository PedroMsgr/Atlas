import { AutoSource } from '../../generated/prisma';
import { prisma } from '../prisma-client';

export class AutoSourcesRepository {
  async findAll(): Promise<AutoSource[]> {
    return prisma.autoSource.findMany({
      include: {
        config: true,
        server: true,
      },
    });
  }

  async findById(id: string): Promise<AutoSource | null> {
    return prisma.autoSource.findUnique({
      where: { id },
      include: {
        config: true,
        server: true,
      },
    });
  }

  async findByConfigId(configId: string): Promise<AutoSource[]> {
    return prisma.autoSource.findMany({
      where: { configId },
      include: {
        server: true,
      },
    });
  }

  async findByServerId(serverId: string): Promise<AutoSource[]> {
    return prisma.autoSource.findMany({
      where: { serverId },
      include: {
        config: true,
      },
    });
  }

  async create(data: Omit<AutoSource, 'id' | 'createdAt'>): Promise<AutoSource> {
    return prisma.autoSource.create({
      data,
      include: {
        config: true,
        server: true,
      },
    });
  }

  async update(id: string, data: Partial<AutoSource>): Promise<AutoSource> {
    return prisma.autoSource.update({
      where: { id },
      data,
      include: {
        config: true,
        server: true,
      },
    });
  }

  async delete(id: string): Promise<AutoSource> {
    return prisma.autoSource.delete({
      where: { id },
    });
  }

  async findByType(type: string): Promise<AutoSource[]> {
    return prisma.autoSource.findMany({
      where: { type },
      include: {
        config: true,
        server: true,
      },
    });
  }

  async findByUrl(url: string): Promise<AutoSource[]> {
    return prisma.autoSource.findMany({
      where: {
        url: {
          contains: url,
          mode: 'insensitive',
        },
      },
      include: {
        config: true,
        server: true,
      },
    });
  }
} 