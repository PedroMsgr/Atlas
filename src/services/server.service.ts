// Servicio para la gestión de servidores unitarios y constelaciones.
// Centraliza la lógica para crear, actualizar, eliminar y consultar servidores y constelaciones, así como la generación y actualización de tokens.
// Permite validar unicidad de dominios y tokens, y expone métodos de alto nivel para resolvers y controladores.

import { ServersRepository } from "@/db/repositories/servers.repo";
import { ConstellationsRepository } from "@/db/repositories/constellations.repo";
import { tokenService } from "@/services/token.service";

class ServerService {
  private serversRepo: ServersRepository;
  private constellationsRepo: ConstellationsRepository;

  constructor() {
    this.serversRepo = new ServersRepository();
    this.constellationsRepo = new ConstellationsRepository();
  }
  async getAllServers() {
    const servers = await this.serversRepo.findAll();
    return servers.map((server) => ({
      ...server,
      isActive: true,
      // Asegurarse de que las fechas estén en formato ISO
      createdAt: server.createdAt ? server.createdAt.toISOString() : null,
      updatedAt: server.updatedAt ? server.updatedAt.toISOString() : null,
    }));
  }

  async getServerById(id: string) {
    const server = await this.serversRepo.findById(id);
    if (server) {
      return {
        ...server,
        isActive: true,
        // Asegurarse de que las fechas estén en formato ISO
        createdAt: server.createdAt ? server.createdAt.toISOString() : null,
        updatedAt: server.updatedAt ? server.updatedAt.toISOString() : null,
      };
    }
    return null;
  }

  async createServer(data: {
    name: string;
    domain: string;
    constellationId?: string;
  }) {
    const { name, domain, constellationId } = data;

    // Verificar si el dominio ya existe
    const existingServer = await this.serversRepo.findByDomain(domain);

    if (existingServer) {
      throw new Error(`Ya existe un servidor con el dominio ${domain}`);
    }

    // Usar generación asíncrona de tokens para garantizar unicidad
    const orchestratorToken = await tokenService.generateOrchestratorTokenAsync();
    const unitToken = await tokenService.generateUnitTokenAsync();

    // Crear servidor con los campos básicos y tokens seguros
    const serverData: any = {
      name,
      domain,
      orchestratorToken,
      unitToken,
      isActive: true,
      constellationId: null,
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    };

    // Agregar constelación si existe ID
    if (constellationId) {
      serverData.constellationId = constellationId;
    }

    const createdServer = await this.serversRepo.create(serverData);

    // Obtener el servidor con sus relaciones
    const server = await this.serversRepo.findById(createdServer.id);
    if (server) {
      return {
        ...server,
        isActive: true, // Siempre devolvemos true por ahora
        createdAt: server.createdAt ? server.createdAt.toISOString() : null,
        updatedAt: server.updatedAt ? server.updatedAt.toISOString() : null,
      };
    }
    return null;
  }
  async updateServer(
    id: string,
    data: {
      name?: string;
      domain?: string;
      constellationId?: string;
      isActive?: boolean;
      activeConfigId?: string;
      configId?: string;
    }
  ) {
    // Si se está actualizando el dominio, verificar que no exista
    if (data.domain) {
      const existingServer = await this.serversRepo.findByDomain(data.domain);
      if (existingServer && existingServer.id !== id) {
        throw new Error(`Ya existe un servidor con el dominio ${data.domain}`);
      }
    }

    // Mapeo de activeConfigId o configId a configId para Prisma
    const updateData: any = {
      ...data,
      updatedAt: new Date(),
    };
    if (data.activeConfigId !== undefined) {
      updateData.configId = data.activeConfigId;
      delete updateData.activeConfigId;
    }
    if (data.configId !== undefined) {
      updateData.configId = data.configId;
      delete updateData.configId;
    }

    // Actualizamos el servidor con los nuevos datos
    const updatedServer = await this.serversRepo.update(id, updateData);

    // Obtenemos el servidor con sus relaciones actualizadas
    const serverWithRelations = await this.serversRepo.findById(id);

    // Si el servidor existe, lo devolvemos con las relaciones
    if (serverWithRelations) {
      return {
        ...serverWithRelations,
        isActive: true,
        // Asegurarse de que las fechas estén en formato ISO
        createdAt: serverWithRelations.createdAt
          ? serverWithRelations.createdAt.toISOString()
          : null,
        updatedAt: serverWithRelations.updatedAt
          ? serverWithRelations.updatedAt.toISOString()
          : null,
      };
    }

    return updatedServer;
  }
  async deleteServer(id: string) {
    return await this.serversRepo.delete(id);
  }

  async updateServerTokens(
    id: string,
    orchestratorToken: string,
    unitToken: string
  ) {
    // Verificar que el servidor exista
    const server = await this.serversRepo.findById(id);
    if (!server) {
      throw new Error(`No se encontró el servidor con ID: ${id}`);
    }

    // Actualizar los tokens y la fecha de actualización
    const updatedServer = await this.serversRepo.update(id, {
      orchestratorToken,
      unitToken,
      updatedAt: new Date(),
    });

    return {
      ...updatedServer,
      isActive: true,
      createdAt: updatedServer.createdAt
        ? updatedServer.createdAt.toISOString()
        : null,
      updatedAt: updatedServer.updatedAt
        ? updatedServer.updatedAt.toISOString()
        : null,
    };
  }
  async getAllConstellations() {
    return await this.constellationsRepo.findAll();
  }

  async getConstellationById(id: string) {
    return await this.constellationsRepo.findById(id);
  }

  async getServerByUnitToken(token: string) {
    return await this.serversRepo.findByUnitToken(token);
  }

  async createConstellation(data: { name: string; description?: string }) {
    return this.constellationsRepo.create({
      name: data.name,
      description: data.description ?? null,
    });
  }
  async updateConstellation(
    id: string,
    data: { name?: string; description?: string }
  ) {
    return this.constellationsRepo.update(id, {
      ...data,
      description: data.description ?? null,
    });
  }
  async deleteConstellation(id: string) {
    return this.constellationsRepo.delete(id);
  }

  async countAllServers() {
    return this.serversRepo.countServers();
  }
  async countActiveServers() {
    return this.serversRepo.countActiveServers();
  }
}

export const serverService = new ServerService();
