// src/services/config-service.ts

import { ConfigsRepository } from '@/db/repositories/configs.repo';
import { ServersRepository } from '@/db/repositories/servers.repo';
import { SectionsRepository } from '@/db/repositories/sections.repo';
import { ArticlesRepository } from '@/db/repositories/articles.repo';
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

  /**
   * Crea una configuración completa con secciones, imágenes y artículos anidados
   */
  async createFullConfig(data: any) {
    const { sections, articles, images, ...configData } = data;
    const config = await this.configsRepo.create(configData);
    // Crear secciones (sin artículos)
    if (sections && Array.isArray(sections)) {
      for (const section of sections) {
        const { images: sectionImages, ...sectionData } = section;
        const createdSection = await this.sectionsRepo.create({ ...sectionData, configId: config.id });
        // Crear imágenes de sección
        if (sectionImages && Array.isArray(sectionImages)) {
          for (const img of sectionImages) {
            await this.imagesRepo.create({ ...img, configId: config.id, sectionId: createdSection.id });
          }
        }
      }
    }
    // Crear imágenes globales
    if (images && Array.isArray(images)) {
      for (const img of images) {
        await this.imagesRepo.create({ ...img, configId: config.id });
      }
    }
    // Crear artículos globales (no en secciones)
    if (articles && Array.isArray(articles)) {
      for (const art of articles) {
        await this.articlesRepo.create(art, [config.id]);
      }
    }
    return this.configsRepo.findById(config.id);
  }

  /**
   * Actualiza una configuración completa con secciones, imágenes y artículos anidados
   */
  async updateFullConfig(id: string, data: any) {
    const { sections, articles, images, ...configData } = data;
    const config = await this.configsRepo.update(id, configData);
    const current = await this.configsRepo.findById(id) as any;
    if (current) {
      // Eliminar secciones y sus imágenes
      if (current.sections) {
        for (const section of current.sections) {
          if (section.images) {
            for (const img of section.images) {
              await this.imagesRepo.delete(img.id);
            }
          }
          await this.sectionsRepo.delete(section.id);
        }
      }
      // Eliminar imágenes globales
      if (current.images) {
        for (const img of current.images) {
          await this.imagesRepo.delete(img.id);
        }
      }
      // Eliminar artículos globales
      if (current.articles) {
        for (const art of current.articles) {
          await this.articlesRepo.delete(art.id);
        }
      }
    }
    // Crear secciones nuevas (sin artículos)
    if (sections && Array.isArray(sections)) {
      for (const section of sections) {
        const { images: sectionImages, ...sectionData } = section;
        const createdSection = await this.sectionsRepo.create({ ...sectionData, configId: config.id });
        if (sectionImages && Array.isArray(sectionImages)) {
          for (const img of sectionImages) {
            await this.imagesRepo.create({ ...img, configId: config.id, sectionId: createdSection.id });
          }
        }
      }
    }
    // Crear imágenes globales
    if (images && Array.isArray(images)) {
      for (const img of images) {
        await this.imagesRepo.create({ ...img, configId: config.id });
      }
    }
    // Crear artículos globales (no en secciones)
    if (articles && Array.isArray(articles)) {
      for (const art of articles) {
        await this.articlesRepo.create(art, [config.id]);
      }
    }
    return this.configsRepo.findById(id);
  }
}
export const configService = new ConfigService();
