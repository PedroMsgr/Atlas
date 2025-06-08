// src/db/repositories/files.repo.ts
// Repositorio para gestión de archivos (File) en la base de datos.
// Permite obtener, crear, actualizar y eliminar archivos, así como filtrar por caso, cliente, profesional o tipo.

import { File } from "../../generated/prisma";
import { prisma } from "../prisma-client";

export class FilesRepository {
  // Obtiene todos los archivos, incluyendo relaciones principales
  async findAll(): Promise<File[]> {
    return prisma.file.findMany({
      include: {
        case: true,
        client: true,
        professional: true,
      },
    });
  }

  // Busca un archivo por su ID
  async findById(id: string): Promise<File | null> {
    return prisma.file.findUnique({
      where: { id },
      include: {
        case: true,
        client: true,
        professional: true,
      },
    });
  }

  // Busca archivos asociados a un caso
  async findByCaseId(caseId: string): Promise<File[]> {
    return prisma.file.findMany({
      where: { caseId },
      include: {
        client: true,
        professional: true,
      },
    });
  }

  // Busca archivos asociados a un cliente
  async findByClientId(clientId: string): Promise<File[]> {
    return prisma.file.findMany({
      where: { clientId },
      include: {
        case: true,
        professional: true,
      },
    });
  }

  // Busca archivos asociados a un profesional
  async findByProfessionalId(professionalId: string): Promise<File[]> {
    return prisma.file.findMany({
      where: { professionalId },
      include: {
        case: true,
        client: true,
      },
    });
  }

  // Crea un nuevo archivo
  async create(data: Omit<File, "id" | "date">): Promise<File> {
    return prisma.file.create({
      data,
      include: {
        case: true,
        client: true,
        professional: true,
      },
    });
  }

  // Actualiza un archivo existente
  async update(id: string, data: Partial<File>): Promise<File> {
    return prisma.file.update({
      where: { id },
      data,
      include: {
        case: true,
        client: true,
        professional: true,
      },
    });
  }

  // Elimina un archivo por su ID
  async delete(id: string): Promise<File> {
    return prisma.file.delete({
      where: { id },
    });
  }

  // Busca archivos por tipo
  async findByType(type: string): Promise<File[]> {
    return prisma.file.findMany({
      where: { type },
      include: {
        case: true,
        client: true,
        professional: true,
      },
    });
  }
}
