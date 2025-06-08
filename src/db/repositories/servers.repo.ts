// src/db/repositories/servers.repo.ts
// Repositorio para gestión de servidores (UnitServer) en la base de datos.
// Permite obtener, crear, actualizar y eliminar servidores, así como búsquedas por dominio, tokens y configuración.
// Incluye métodos para estadísticas de servidores activos/inactivos y lógica para verificar unicidad de tokens y desasociar servidores de configuraciones.

import { UnitServer } from "../../generated/prisma";
import { prisma } from "../prisma-client";

export class ServersRepository {
  // Obtiene todos los servidores, incluyendo datos de constelación y configuración asociada
  async findAll(): Promise<UnitServer[]> {
    return prisma.unitServer.findMany({
      select: {
        id: true,
        name: true,
        domain: true,
        isActive: true,
        constellation: {
          select: {
            id: true,
            name: true,
          },
        },
        configId: true,
        config: {
          select: {
            id: true,
            name: true,
          },
        },
        updatedAt: true,
        createdAt: true,
        orchestratorToken: true,
        unitToken: true,
        constellationId: true,
      },
    });
  }

  // Busca un servidor por su ID
  async findById(id: string): Promise<UnitServer | null> {
    return prisma.unitServer.findUnique({
      where: { id },
      include: {
        constellation: true,
        clients: true,
        cases: true,
        config: true,
      },
    });
  }

  // Busca un servidor por su dominio
  async findByDomain(domain: string): Promise<UnitServer | null> {
    return prisma.unitServer.findUnique({
      where: { domain },
    });
  }

  // Crea un nuevo servidor en la base de datos
  async create(data: Omit<UnitServer, "id">): Promise<UnitServer> {
    return prisma.unitServer.create({
      data,
    });
  }

  // Actualiza un servidor en la base de datos
  async update(id: string, data: Partial<UnitServer>): Promise<UnitServer> {
    return prisma.unitServer.update({
      where: { id },
      data,
    });
  }

  // Elimina un servidor de la base de datos
  async delete(id: string): Promise<UnitServer> {
    return prisma.unitServer.delete({
      where: { id },
    });
  }

  // Verifica si un token de orquestador ya existe en la base de datos
  async orchestratorTokenExists(token: string): Promise<boolean> {
    const count = await prisma.unitServer.count({
      where: { orchestratorToken: token },
    });
    return count > 0;
  }

  // Verifica si un token de unidad ya existe en la base de datos
  async unitTokenExists(token: string): Promise<boolean> {
    const count = await prisma.unitServer.count({
      where: { unitToken: token },
    });
    return count > 0;
  }

  // Verifica si un servidor ya existe en la base de datos
  async countServers(): Promise<number> {
    return prisma.unitServer.count();
  }

  // Cuenta los servidores activos
  async countActiveServers(): Promise<number> {
    return prisma.unitServer.count({
      where: {
        isActive: true,
      },
    });
  }

  // Cuenta los servidores inactivos
  async countInactiveServers(): Promise<number> {
    return prisma.unitServer.count({
      where: {
        isActive: false,
      },
    });
  }

  // Cuenta los servidores por ID de configuración
  async countByConfigId(configId: string): Promise<number> {
    return prisma.unitServer.count({
      where: { configId },
    });
  }

  // Busca servidores por ID de configuración
  async findByConfigId(
    configId: string
  ): Promise<{ id: string; name: string }[]> {
    return prisma.unitServer.findMany({
      where: { configId },
      select: {
        id: true,
        name: true,
      },
    });
  }

  // Busca un servidor por unitToken
  async findByUnitToken(token: string): Promise<UnitServer | null> {
    return prisma.unitServer.findUnique({
      where: { unitToken: token },
    });
  }

  // Desasocia todos los servidores de una configuración (pone configId a null)
  async updateManyByConfigId(configId: string, data: Partial<UnitServer>) {
    return prisma.unitServer.updateMany({
      where: { configId },
      data,
    });
  }
}
