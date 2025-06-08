// src/db/repositories/configs.repo.ts
// Repositorio para gestión de configuraciones de landing (UnitConfig) y sus relaciones.
// Permite obtener, crear, actualizar y eliminar configuraciones, incluyendo secciones, artículos, imágenes, pasos legales, enlaces de footer y servidores asociados.

import { UnitConfig, Prisma } from "../../generated/prisma";
import { prisma } from "../prisma-client";

export class ConfigsRepository {
  // Obtiene todas las configuraciones, incluyendo relaciones completas
  async findAll(): Promise<UnitConfig[]> {
    return prisma.unitConfig.findMany({
      include: {
        sections: { include: { images: true } },
        articles: true,
        images: true,
        legalSteps: true,
        footerLinks: true,
        servers: { select: { id: true, name: true, domain: true } },
      },
    });
  }

  // Busca una configuración por su ID, incluyendo relaciones completas
  async findById(id: string): Promise<UnitConfig | null> {
    return prisma.unitConfig.findUnique({
      where: { id },
      include: {
        sections: { include: { images: true } },
        articles: true,
        images: true,
        legalSteps: true,
        footerLinks: true,
        servers: { select: { id: true, name: true, domain: true } },
      },
    });
  }

  // Busca una configuración por su nombre
  async findByName(name: string): Promise<UnitConfig | null> {
    return prisma.unitConfig.findUnique({
      where: { name },
      include: {
        sections: true,
        articles: true,
        images: true,
        legalSteps: true,
        footerLinks: true,
      },
    });
  }

  // Crea una nueva configuración
  async create(data: Prisma.UnitConfigCreateInput): Promise<UnitConfig> {
    return prisma.unitConfig.create({
      data,
      include: {
        sections: true,
        articles: true,
        images: true,
        legalSteps: true,
        footerLinks: true,
      },
    });
  }

  // Actualiza una configuración existente
  async update(
    id: string,
    data: Prisma.UnitConfigUpdateInput
  ): Promise<UnitConfig> {
    return prisma.unitConfig.update({
      where: { id },
      data,
      include: {
        sections: true,
        articles: true,
        images: true,
        legalSteps: true,
        footerLinks: true,
      },
    });
  }

  // Elimina una configuración por su ID
  async delete(id: string): Promise<UnitConfig> {
    return prisma.unitConfig.delete({ where: { id } });
  }
}
