// src/services/config-service.ts

import {
  ConfigsRepository,
  ServersRepository,
  SectionsRepository,
  ArticlesRepository,
  ImagesRepository,
  FooterLinksRepository,
  LegalStepsRepository,
} from "@/db/repositories";
import { LegalStep, FooterLink } from "@/generated/prisma";

class ConfigService {
  
  private configsRepo: ConfigsRepository;
  private serversRepo: ServersRepository;
  private sectionsRepo: SectionsRepository;
  private articlesRepo: ArticlesRepository;
  private imagesRepo: ImagesRepository;
  private legalStepsRepo: LegalStepsRepository;
  private footerLinksRepo: FooterLinksRepository;

  constructor() {
    this.configsRepo = new ConfigsRepository();
    this.serversRepo = new ServersRepository();
    this.sectionsRepo = new SectionsRepository();
    this.articlesRepo = new ArticlesRepository();
    this.imagesRepo = new ImagesRepository();
    this.legalStepsRepo = new LegalStepsRepository();
    this.footerLinksRepo = new FooterLinksRepository();
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
  async createConfig(data: Parameters<ConfigsRepository["create"]>[0]) {
    return this.configsRepo.create(data);
  }

  /**
   * Actualiza una configuración existente
   */
  async updateConfig(
    id: string,
    data: Parameters<ConfigsRepository["update"]>[1]
  ) {
    return this.configsRepo.update(id, data);
  }

  /**
   * Elimina una configuración por ID (borrado en cascada manual)
   */
  async deleteConfig(id: string) {
    // 1. Desasociar UnitServers (poner configId a null)
    await this.serversRepo.updateManyByConfigId(id, { configId: null });

    // 2. Borrar LegalSteps
    const legalSteps = await this.legalStepsRepo.findByConfigId(id);
    for (const step of legalSteps) {
      await this.legalStepsRepo.delete(step.id);
    }

    // 3. Borrar FooterLinks
    const footerLinks = await this.footerLinksRepo.findByConfigId(id);
    for (const link of footerLinks) {
      await this.footerLinksRepo.delete(link.id);
    }

    // 4. Borrar Imágenes
    const images = await this.imagesRepo.findByConfigId(id);
    for (const img of images) {
      await this.imagesRepo.delete(img.id);
    }

    // 5. Borrar Secciones (y sus imágenes si aplica)
    const sections = await this.sectionsRepo.findByConfigId(id);
    for (const section of sections) {
      // Si tienes imágenes de sección, bórralas aquí si no se borraron antes
      await this.sectionsRepo.delete(section.id);
    }

    // 6. Borrar Artículos
    const articles = await this.articlesRepo.findByConfigId(id);
    for (const art of articles) {
      await this.articlesRepo.delete(art.id);
    }

    // 7. Finalmente, borrar la config
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
        const createdSection = await this.sectionsRepo.create({
          ...sectionData,
          configId: config.id,
        });
        // Crear imágenes de sección
        if (sectionImages && Array.isArray(sectionImages)) {
          for (const img of sectionImages) {
            await this.imagesRepo.create({
              ...img,
              configId: config.id,
              sectionId: createdSection.id,
            });
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
        await this.articlesRepo.create(art);
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
    const current = (await this.configsRepo.findById(id)) as any;
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
        const createdSection = await this.sectionsRepo.create({
          ...sectionData,
          configId: config.id,
        });
        if (sectionImages && Array.isArray(sectionImages)) {
          for (const img of sectionImages) {
            await this.imagesRepo.create({
              ...img,
              configId: config.id,
              sectionId: createdSection.id,
            });
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
        await this.articlesRepo.create(art);
      }
    }
    return this.configsRepo.findById(id);
  }

  // --- LEGAL STEPS ---
  async getAllLegalSteps() {
    return this.legalStepsRepo.findAll();
  }
  async getLegalStepById(id: string) {
    return this.legalStepsRepo.findById(id);
  }
  async getLegalStepsByConfig(configId: string) {
    return this.legalStepsRepo.findByConfigId(configId);
  }
  async createLegalStep(data: Omit<LegalStep, "id">) {
    return this.legalStepsRepo.create(data);
  }
  async updateLegalStep(id: string, data: Partial<LegalStep>) {
    return this.legalStepsRepo.update(id, data);
  }
  async deleteLegalStep(id: string) {
    return this.legalStepsRepo.delete(id);
  }

  // --- FOOTER LINKS ---
  async getAllFooterLinks() {
    return this.footerLinksRepo.findAll();
  }
  async getFooterLinkById(id: string) {
    return this.footerLinksRepo.findById(id);
  }
  async getFooterLinksByConfig(configId: string) {
    return this.footerLinksRepo.findByConfigId(configId);
  }
  async createFooterLink(data: Omit<FooterLink, "id">) {
    return this.footerLinksRepo.create(data);
  }
  async updateFooterLink(id: string, data: Partial<FooterLink>) {
    return this.footerLinksRepo.update(id, data);
  }
  async deleteFooterLink(id: string) {
    return this.footerLinksRepo.delete(id);
  }

  // --- SECTIONS ---
  async getAllSections() {
    return this.sectionsRepo.findAll();
  }
  async getSectionById(id: string) {
    return this.sectionsRepo.findById(id);
  }
  async getSectionsByConfigId(configId: string) {
    return this.sectionsRepo.findByConfigId(configId);
  }
  async createSection(data: any) {
    return this.sectionsRepo.create(data);
  }
  async updateSection(id: string, data: any) {
    // Verificar existencia antes de actualizar para evitar error de prisma
    const section = await this.sectionsRepo.findById(id);
    if (!section) {
      throw new Error('No se encontró la sección a actualizar');
    }
    return this.sectionsRepo.update(id, data);
  }
  async deleteSection(id: string) {
    return this.sectionsRepo.delete(id);
  }

  // --- ARTICLES ---
  async getAllArticles() {
    return this.articlesRepo.findAll();
  }
  async getArticleById(id: string) {
    return this.articlesRepo.findById(id);
  }
  async getArticlesByConfigId(configId: string) {
    return this.articlesRepo.findByConfigId(configId);
  }
  async createArticle(data: any) {
    return this.articlesRepo.create(data);
  }
  async updateArticle(id: string, data: any) {
    return this.articlesRepo.update(id, data);
  }
  async deleteArticle(id: string) {
    return this.articlesRepo.delete(id);
  }

  // --- IMAGES ---
  async getAllImages() {
    return this.imagesRepo.findAll();
  }
  async getImageById(id: string) {
    return this.imagesRepo.findById(id);
  }
  async getImagesByConfigId(configId: string) {
    return this.imagesRepo.findByConfigId(configId);
  }
  async createImage(data: any) {
    return this.imagesRepo.create(data);
  }
  async updateImage(id: string, data: any) {
    return this.imagesRepo.update(id, data);
  }
  async deleteImage(id: string) {
    return this.imagesRepo.delete(id);
  }
}
export const configService = new ConfigService();
