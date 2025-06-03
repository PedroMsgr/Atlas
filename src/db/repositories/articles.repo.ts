// src/db/repositories/articles.repo.ts

import { Article } from '../../generated/prisma';
import { prisma } from '../prisma-client';

export class ArticlesRepository {
  async findAll(): Promise<Article[]> {
    return prisma.article.findMany();
  }

  async findById(id: string): Promise<Article | null> {
    return prisma.article.findUnique({ where: { id } });
  }

  async findByConfigId(configId: string): Promise<Article[]> {
    return prisma.article.findMany({
      where: { configId },
      orderBy: { order: 'asc' },
    });
  }

  async create(data: Omit<Article, 'id' | 'publishedAt'>): Promise<Article> {
    return prisma.article.create({
      data: { ...data, publishedAt: new Date(), url: data.url ?? null },
    });
  }

  async update(id: string, data: Partial<Article>): Promise<Article> {
    return prisma.article.update({
      where: { id },
      data: { ...data, url: data.url ?? null },
    });
  }

  async delete(id: string): Promise<Article> {
    return prisma.article.delete({ where: { id } });
  }
}