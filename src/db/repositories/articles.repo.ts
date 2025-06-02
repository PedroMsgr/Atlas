// src/db/repositories/articles.repo.ts

import { Article } from '../../generated/prisma';
import { prisma } from '../prisma-client';

export class ArticlesRepository {
  async findAll(): Promise<Article[]> {
    return prisma.article.findMany({
      include: {
        configs: true,
      },
    });
  }

  async findById(id: string): Promise<Article | null> {
    return prisma.article.findUnique({
      where: { id },
      include: {
        configs: true,
      },
    });
  }

  async findByConfigId(configId: string): Promise<Article[]> {
    return prisma.article.findMany({
      where: {
        configs: {
          some: { id: configId },
        },
      },
      orderBy: {
        publishedAt: 'desc',
      },
      include: {
        configs: true,
      },
    });
  }

  async create(data: Omit<Article, 'id' | 'publishedAt'>, configIds: string[]): Promise<Article> {
    return prisma.article.create({
      data: {
        ...data,
        configs: {
          connect: configIds.map(id => ({ id })),
        },
      },
      include: {
        configs: true,
      },
    });
  }

  async update(id: string, data: Partial<Article>, configIds?: string[]): Promise<Article> {
    return prisma.article.update({
      where: { id },
      data: {
        ...data,
        ...(configIds && { configs: { set: configIds.map(id => ({ id })) } }),
      },
      include: {
        configs: true,
      },
    });
  }

  async delete(id: string): Promise<Article> {
    return prisma.article.delete({
      where: { id },
    });
  }

  async findByTitle(title: string): Promise<Article[]> {
    return prisma.article.findMany({
      where: {
        title: {
          contains: title,
          mode: 'insensitive',
        },
      },
      include: {
        configs: true,
      },
    });
  }

  async getLatestArticles(limit: number = 10): Promise<Article[]> {
    return prisma.article.findMany({
      take: limit,
      orderBy: {
        publishedAt: 'desc',
      },
      include: {
        configs: true,
      },
    });
  }
}