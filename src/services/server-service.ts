import { ServersRepository } from '@/db/repositories/servers.repo';
import { tokenService } from '@/services/token-service';

export class ServerService {
  private serversRepo: ServersRepository;
  
  constructor() {
    this.serversRepo = new ServersRepository();
  }
  async getAllServers() {
    const servers = await this.serversRepo.findAll();
    return servers.map(server => ({
      ...server,
      isActive: true,
      // Asegurarse de que las fechas estén en formato ISO
      createdAt: server.createdAt ? server.createdAt.toISOString() : null,
      updatedAt: server.updatedAt ? server.updatedAt.toISOString() : null
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
        updatedAt: server.updatedAt ? server.updatedAt.toISOString() : null
      };
    }
    return null;
  }

  async createServer(data: { name: string; domain: string; constellationId?: string }) {
    const { name, domain, constellationId } = data;

    // Verificar si el dominio ya existe
    const existingServer = await this.serversRepo.findByDomain(domain);

    if (existingServer) {
      throw new Error(`Ya existe un servidor con el dominio ${domain}`);
    }

    // Crear servidor con los campos básicos y tokens seguros
    const serverData: any = {
      name,
      domain,
      orchestratorToken: tokenService.generateOrchestratorToken(),
      unitToken: tokenService.generateUnitToken(),
      requiresUpdate: false,
      isActive: true,
      constellationId: null,
      activeConfigId: null,
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
        isActive: true // Siempre devolvemos true por ahora
      };
    }
    return null;
  }

  async updateServer(id: string, data: { 
    name?: string; 
    domain?: string; 
    constellationId?: string;
    requiresUpdate?: boolean;
    isActive?: boolean;
  }) {
    // Si se está actualizando el dominio, verificar que no exista
    if (data.domain) {
      const existingServer = await this.serversRepo.findByDomain(data.domain);
      if (existingServer && existingServer.id !== id) {
        throw new Error(`Ya existe un servidor con el dominio ${data.domain}`);
      }
    }

    return await this.serversRepo.update(id, data);
  }

  async deleteServer(id: string) {
    return await this.serversRepo.delete(id);
  }

  async getAllConstellations() {
    const { prisma } = await import('@/db/prisma-client');
    return await prisma.constellation.findMany();
  }

  async getConstellationById(id: string) {
    const { prisma } = await import('@/db/prisma-client');
    return await prisma.constellation.findUnique({
      where: { id },
    });
  }
}

export const serverService = new ServerService();