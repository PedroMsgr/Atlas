// src/db/repositories/constellations.repo.ts
// Repositorio para gestión de constelaciones (agrupaciones de servidores) en la base de datos.
// Permite obtener, crear, actualizar y eliminar constelaciones, incluyendo servidores asociados.

import { Constellation } from "../../generated/prisma";
import { prisma } from "../prisma-client";

export class ConstellationsRepository {
  // Obtiene todas las constelaciones, incluyendo servidores asociados
  async findAll(): Promise<Constellation[]> {
    return prisma.constellation.findMany({
      include: {
        servers: true,
      },
    });
  }

  // Busca una constelación por su ID
  async findById(id: string): Promise<Constellation | null> {
    return prisma.constellation.findUnique({
      where: { id },
      include: {
        servers: true,
      },
    });
  }

  // Busca una constelación por su nombre
  async findByName(name: string): Promise<Constellation | null> {
    return prisma.constellation.findUnique({
      where: { name },
      include: {
        servers: true,
      },
    });
  }

  // Crea una nueva constelación
  async create(data: Omit<Constellation, "id">): Promise<Constellation> {
    return prisma.constellation.create({
      data,
      include: {
        servers: true,
      },
    });
  }

  // Actualiza una constelación existente
  async update(
    id: string,
    data: Partial<Constellation>
  ): Promise<Constellation> {
    return prisma.constellation.update({
      where: { id },
      data,
      include: {
        servers: true,
      },
    });
  }

  // Elimina una constelación por su ID
  async delete(id: string): Promise<Constellation> {
    return prisma.constellation.delete({
      where: { id },
    });
  }

  // Obtiene los servidores asociados a una constelación
  async getServers(id: string): Promise<Constellation | null> {
    return prisma.constellation.findUnique({
      where: { id },
      include: {
        servers: true,
      },
    });
  }
}
