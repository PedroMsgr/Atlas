// src/db/repositories/sections.repo.ts
// Repositorio para gestión de secciones de landing (Section) en la base de datos.
// Permite obtener, crear, actualizar y eliminar secciones, así como filtrar por configuración. Incluye imágenes asociadas.

import { Section } from "../../generated/prisma";
import { prisma } from "../prisma-client";

export class SectionsRepository {
  // Obtiene todas las secciones, incluyendo configuración e imágenes asociadas
  async findAll(): Promise<Section[]> {
    return prisma.section.findMany({
      include: { config: true, images: true },
    });
  }

  // Busca una sección por su ID, incluyendo configuración e imágenes
  async findById(id: string): Promise<Section | null> {
    return prisma.section.findUnique({
      where: { id },
      include: { config: true, images: true },
    });
  }

  // Busca secciones asociadas a una configuración, ordenadas por 'order', incluyendo imágenes
  async findByConfigId(configId: string): Promise<Section[]> {
    return prisma.section.findMany({
      where: { configId },
      orderBy: { order: "asc" },
      include: { config: true, images: true },
    });
  }

  // Crea una nueva sección
  async create(data: Omit<Section, "id">): Promise<Section> {
    return prisma.section.create({
      data,
      include: { config: true, images: true },
    });
  }

  // Actualiza una sección existente
  async update(id: string, data: Partial<Section>): Promise<Section> {
    return prisma.section.update({
      where: { id },
      data,
      include: { config: true, images: true },
    });
  }

  // Elimina una sección por su ID
  async delete(id: string): Promise<Section> {
    return prisma.section.delete({ where: { id } });
  }
}
