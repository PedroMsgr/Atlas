// src/db/repositories/footerlinks.repo.ts
// Repositorio para gestión de enlaces de footer (FooterLink) en la base de datos.
// Permite obtener, crear, actualizar y eliminar enlaces de footer, así como filtrar por configuración.

import { prisma } from "../prisma-client";
import { FooterLink } from "../../generated/prisma";

export class FooterLinksRepository {
  // Obtiene todos los enlaces de footer
  async findAll(): Promise<FooterLink[]> {
    return prisma.footerLink.findMany();
  }

  // Busca un enlace de footer por su ID
  async findById(id: string): Promise<FooterLink | null> {
    return prisma.footerLink.findUnique({ where: { id } });
  }

  // Busca enlaces de footer asociados a una configuración, ordenados por 'order'
  async findByConfigId(configId: string): Promise<FooterLink[]> {
    return prisma.footerLink.findMany({
      where: { configId },
      orderBy: { order: "asc" },
    });
  }

  // Crea un nuevo enlace de footer
  async create(data: Omit<FooterLink, "id">): Promise<FooterLink> {
    return prisma.footerLink.create({ data });
  }

  // Actualiza un enlace de footer existente
  async update(id: string, data: Partial<FooterLink>): Promise<FooterLink> {
    return prisma.footerLink.update({ where: { id }, data });
  }

  // Elimina un enlace de footer por su ID
  async delete(id: string): Promise<FooterLink> {
    return prisma.footerLink.delete({ where: { id } });
  }
}
