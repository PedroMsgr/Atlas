import { ConfigsRepository } from '@/db/repositories/configs.repo';
import { ServersRepository } from '@/db/repositories/servers.repo';
import { SectionsRepository } from '@/db/repositories/sections.repo';
import { ArticlesRepository } from '@/db/repositories/articles';
import { ImagesRepository } from '@/db/repositories/images.repo';

export class ConfigService {
  private configsRepo: ConfigsRepository;
  private serversRepo: ServersRepository;
  private sectionsRepo: SectionsRepository;
  private articlesRepo: ArticlesRepository;
  private imagesRepo: ImagesRepository;
  
  constructor() {
    this.configsRepo = new ConfigsRepository();
    this.serversRepo = new ServersRepository();
    this.sectionsRepo = new SectionsRepository();
    this.articlesRepo = new ArticlesRepository();
    this.imagesRepo = new ImagesRepository();
  }
    /**
   * Obtiene todas las configuraciones
   */
  async getAllConfigs() {
    const configs = await this.configsRepo.findAll();
    return configs;
  }

  /**
   * Obtiene una configuración por ID
   */
  async getConfigById(id: string) {
    return this.configsRepo.findById(id);
  }

  /**
   * Crea una nueva configuración
   */
  async createConfig(data: Parameters<ConfigsRepository['create']>[0]) {
    return this.configsRepo.create(data);
  }

  /**
   * Actualiza una configuración existente
   */
  async updateConfig(id: string, data: Parameters<ConfigsRepository['update']>[1]) {
    return this.configsRepo.update(id, data);
  }

  /**
   * Elimina una configuración por ID
   */
  async deleteConfig(id: string) {
    return this.configsRepo.delete(id);
  }
}
export const configService = new ConfigService();
