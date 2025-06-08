// src/db/repositories/articles.repo.ts
// Repositorio para gestión de artículos (Article) en la base de datos.
// Proporciona métodos CRUD y consultas por configuración.

import { Article } from "../../generated/prisma";
import { prisma } from "../prisma-client";

export class ArticlesRepository {
  // Obtiene todos los artículos
  async findAll(): Promise<Article[]> {
    return prisma.article.findMany();
  }

  // Busca un artículo por su ID
  async findById(id: string): Promise<Article | null> {
    return prisma.article.findUnique({ where: { id } });
  }

  // Busca artículos asociados a una configuración específica, ordenados por 'order'
  async findByConfigId(configId: string): Promise<Article[]> {
    return prisma.article.findMany({
      where: { configId },
      orderBy: { order: "asc" },
    });
  }

  // Crea un nuevo artículo (publicado en el momento de creación)
  async create(data: Omit<Article, "id" | "publishedAt">): Promise<Article> {
    return prisma.article.create({
      data: { ...data, publishedAt: new Date(), url: data.url ?? null },
    });
  }

  // Actualiza un artículo existente
  async update(id: string, data: Partial<Article>): Promise<Article> {
    return prisma.article.update({
      where: { id },
      data: { ...data, url: data.url ?? null },
    });
  }

  // Elimina un artículo por su ID
  async delete(id: string): Promise<Article> {
    return prisma.article.delete({ where: { id } });
  }
}
