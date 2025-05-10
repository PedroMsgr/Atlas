import { ManualArticle } from '../../generated/prisma';
import { prisma } from '../prisma-client';

export class ManualArticlesRepository {
  async findAll(): Promise<ManualArticle[]> {
    return prisma.manualArticle.findMany({
      include: {
        config: true,
        server: true,
      },
    });
  }

  async findById(id: string): Promise<ManualArticle | null> {
    return prisma.manualArticle.findUnique({
      where: { id },
      include: {
        config: true,
        server: true,
      },
    });
  }

  async findByConfigId(configId: string): Promise<ManualArticle[]> {
    return prisma.manualArticle.findMany({
      where: { configId },
      orderBy: {
        publishedAt: 'desc',
      },
      include: {
        server: true,
      },
    });
  }

  async findByServerId(serverId: string): Promise<ManualArticle[]> {
    return prisma.manualArticle.findMany({
      where: { serverId },
      orderBy: {
        publishedAt: 'desc',
      },
      include: {
        config: true,
      },
    });
  }

  async create(data: Omit<ManualArticle, 'id' | 'publishedAt'>): Promise<ManualArticle> {
    return prisma.manualArticle.create({
      data,
      include: {
        config: true,
        server: true,
      },
    });
  }

  async update(id: string, data: Partial<ManualArticle>): Promise<ManualArticle> {
    return prisma.manualArticle.update({
      where: { id },
      data,
      include: {
        config: true,
        server: true,
      },
    });
  }

  async delete(id: string): Promise<ManualArticle> {
    return prisma.manualArticle.delete({
      where: { id },
    });
  }

  async findByTitle(title: string): Promise<ManualArticle[]> {
    return prisma.manualArticle.findMany({
      where: {
        title: {
          contains: title,
          mode: 'insensitive',
        },
      },
      include: {
        config: true,
        server: true,
      },
    });
  }

  async getLatestArticles(limit: number = 10): Promise<ManualArticle[]> {
    return prisma.manualArticle.findMany({
      take: limit,
      orderBy: {
        publishedAt: 'desc',
      },
      include: {
        config: true,
        server: true,
      },
    });
  }
} 