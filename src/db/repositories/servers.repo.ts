import { UnitServer } from '../../generated/prisma';
import { prisma } from '../prisma-client';

export class ServersRepository {

  async findAll(): Promise<UnitServer[]> {
    return prisma.unitServer.findMany({
      select: {
        id: true,
        name: true,
        domain: true,
        isActive: true,
        constellation: {
          select: {
            name: true
          }
        },
        configId: true,
        config: {
          select: {
            id: true,
            name: true
          }
        },
        updatedAt: true,
        createdAt: true,
        orchestratorToken: true,
        unitToken: true,
        constellationId: true
      }
    });
  }

  /**
   * Busca un servidor por su ID
   * @param id El ID del servidor a buscar
   * @returns El servidor encontrado o null si no se encuentra
   */
  async findById(id: string): Promise<UnitServer | null> {
    return prisma.unitServer.findUnique({
      where: { id },
      include: {
        constellation: true,
        clients: true,
        professionals: true,
        cases: true,
        config: true,
      },
    });
  }

  /**
   * Busca un servidor por su dominio
   * @param domain El dominio del servidor a buscar
   * @returns El servidor encontrado o null si no se encuentra
   */
  async findByDomain(domain: string): Promise<UnitServer | null> {
    return prisma.unitServer.findUnique({
      where: { domain }
    });
  }


  /**
   * Crea un nuevo servidor en la base de datos
   * @param data Los datos del servidor a crear
   * @returns El servidor creado
  */
  async create(data: Omit<UnitServer, 'id'>): Promise<UnitServer> {
    return prisma.unitServer.create({
      data,
    });
  }

  /**
   * Actualiza un servidor en la base de datos
   * @param id El ID del servidor a actualizar
   * @param data Los datos a actualizar
   * @returns El servidor actualizado
  */
  async update(id: string, data: Partial<UnitServer>): Promise<UnitServer> {
    return prisma.unitServer.update({
      where: { id },
      data,
    });
  }

  /**
   * Elimina un servidor de la base de datos
   * @param id El ID del servidor a eliminar
   * @returns El servidor eliminado
   */
  async delete(id: string): Promise<UnitServer> {
    return prisma.unitServer.delete({
      where: { id },
    });
  }

  /**
   * Verifica si un token de orquestador ya existe en la base de datos
   * @param token El token a verificar
   * @returns true si el token ya existe, false en caso contrario
   */
  async orchestratorTokenExists(token: string): Promise<boolean> {
    const count = await prisma.unitServer.count({
      where: { orchestratorToken: token }
    });
    return count > 0;
  }
  
  /**
   * Verifica si un token de unidad ya existe en la base de datos
   * @param token El token a verificar
   * @returns true si el token ya existe, false en caso contrario
   */
  async unitTokenExists(token: string): Promise<boolean> {
    const count = await prisma.unitServer.count({
      where: { unitToken: token }
    });
    return count > 0;
  }

  /**
   * Verifica si un servidor ya existe en la base de datos
   * @param id El ID del servidor a verificar
   * @returns true si el servidor ya existe, false en caso contrario
   */
  async countServers(): Promise<number> {
    return prisma.unitServer.count();
  }

  /**
   * Cuenta los servidores activos
   * @returns El número de servidores activos
   */
  async countActiveServers(): Promise<number> {
    return prisma.unitServer.count({
      where: {
        isActive: true,
      },
    });
  }

  /**
   * Cuenta los servidores inactivos
   * @returns El número de servidores inactivos
   */
  async countInactiveServers(): Promise<number> {
    return prisma.unitServer.count({
      where: {
        isActive: false,
      },
    });
  }

  /**
   * Cuenta los servidores por ID de configuración
   * @param configId El ID de la configuración a contar
   * @returns El número de servidores asociados a esa configuración
   */
  async countByConfigId(configId: string): Promise<number> {
  return prisma.unitServer.count({
    where: { configId }
  });
}

async findByConfigId(configId: string): Promise<{ id: string; name: string }[]> {
  return prisma.unitServer.findMany({
    where: { configId },
    select: {
      id: true,
      name: true
    }
  });
}

/**
   * Busca un servidor por unitToken
   * @param token unitToken a buscar
   * @returns El servidor encontrado o null si no existe
   */
  async findByUnitToken(token: string): Promise<UnitServer | null> {
    return prisma.unitServer.findUnique({
      where: { unitToken: token },
    });
  }

}