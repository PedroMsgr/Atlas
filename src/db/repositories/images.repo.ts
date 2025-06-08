// src/db/repositories/images.repo.ts
// Repositorio para gestión de imágenes (Image) en la base de datos.
// Permite obtener, crear, actualizar y eliminar imágenes, así como filtrar por configuración, tipo o texto alternativo.

import { prisma } from "../prisma-client";
import { Image } from "../../generated/prisma";

export class ImagesRepository {
  // Obtiene todas las imágenes, incluyendo la configuración asociada
  async findAll(): Promise<Image[]> {
    return prisma.image.findMany({
      include: {
        config: true,
      },
    });
  }

  // Busca una imagen por su ID
  async findById(id: string): Promise<Image | null> {
    return prisma.image.findUnique({
      where: { id },
      include: {
        config: true,
      },
    });
  }

  // Busca imágenes asociadas a una configuración, ordenadas por 'order'
  async findByConfigId(configId: string): Promise<Image[]> {
    return prisma.image.findMany({
      where: { configId },
      orderBy: {
        order: "asc",
      },
    });
  }

  // Crea una nueva imagen (puede asociarse a una sección)
  async create(
    data: Omit<Image, "id"> & { sectionId?: string | null }
  ): Promise<Image> {
    return prisma.image.create({
      data,
      include: {
        config: true,
      },
    });
  }

  // Actualiza una imagen existente
  async update(id: string, data: Partial<Image>): Promise<Image> {
    return prisma.image.update({
      where: { id },
      data,
      include: {
        config: true,
      },
    });
  }

  // Elimina una imagen por su ID
  async delete(id: string): Promise<Image> {
    return prisma.image.delete({
      where: { id },
    });
  }

  // Busca imágenes por tipo
  async findByType(type: string): Promise<Image[]> {
    return prisma.image.findMany({
      where: { type },
      include: {
        config: true,
      },
    });
  }

  // Actualiza el orden de una imagen
  async updateOrder(id: string, order: number): Promise<Image> {
    return prisma.image.update({
      where: { id },
      data: { order },
    });
  }

  // Busca imágenes por texto alternativo (altText)
  async findByAltText(altText: string): Promise<Image[]> {
    return prisma.image.findMany({
      where: {
        altText: {
          contains: altText,
          mode: "insensitive",
        },
      },
      include: {
        config: true,
      },
    });
  }
}
