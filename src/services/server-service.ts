import { ServersRepository } from '@/db/repositories/servers.repo';
import { tokenService } from '@/services/token-service';

export class ServerService {
  private serversRepo: ServersRepository;
  
  constructor() {
    this.serversRepo = new ServersRepository();
  }

  async getAllServers() {
    return await this.serversRepo.findAll();
  }

  async getServerById(id: string) {
    return await this.serversRepo.findById(id);
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
      isActive: true,
      requiresUpdate: false,
    };

    // Agregar constelación si existe ID
    if (constellationId) {
      serverData.constellationId = constellationId;
    }

    const createdServer = await this.serversRepo.create(serverData);
    
    // Obtener el servidor con sus relaciones
    return await this.serversRepo.findById(createdServer.id);
  }  async getAllConstellations() {
    // Importamos prisma aquí para mantener la compatibilidad hasta que tengamos un repositorio de constelaciones
    const { prisma } = await import('@/db/prisma-client');
    return await prisma.constellation.findMany();
  }
}

export const serverService = new ServerService();