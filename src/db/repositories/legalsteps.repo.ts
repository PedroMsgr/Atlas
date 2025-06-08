// src/db/repositories/legalsteps.repo.ts
// Repositorio para gestión de pasos legales (LegalStep) en la base de datos.
// Permite obtener, crear, actualizar y eliminar pasos legales, así como filtrar por configuración.

import { prisma } from "../prisma-client";
import { LegalStep } from "../../generated/prisma";

export class LegalStepsRepository {
  // Obtiene todos los pasos legales
  async findAll(): Promise<LegalStep[]> {
    return prisma.legalStep.findMany();
  }

  // Busca un paso legal por su ID
  async findById(id: string): Promise<LegalStep | null> {
    return prisma.legalStep.findUnique({ where: { id } });
  }

  // Busca pasos legales asociados a una configuración, ordenados por 'order'
  async findByConfigId(configId: string): Promise<LegalStep[]> {
    return prisma.legalStep.findMany({
      where: { configId },
      orderBy: { order: "asc" },
    });
  }

  // Crea un nuevo paso legal
  async create(data: Omit<LegalStep, "id">): Promise<LegalStep> {
    return prisma.legalStep.create({ data });
  }

  // Actualiza un paso legal existente
  async update(id: string, data: Partial<LegalStep>): Promise<LegalStep> {
    return prisma.legalStep.update({ where: { id }, data });
  }

  // Elimina un paso legal por su ID
  async delete(id: string): Promise<LegalStep> {
    return prisma.legalStep.delete({ where: { id } });
  }
}
