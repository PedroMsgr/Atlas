// src/graphql/resolvers.ts

import { serverService } from '@/services/server.service';
import { tokenService } from '@/services/token.service';
import { configService } from '@/services/config.service';
import { generateLandingTSX } from '@/lib/landing-generator';
import { UnitConfigWithRelations } from '@/types/config.types';
import { SectionsRepository } from '@/db/repositories/sections.repo';
import { ImagesRepository } from '@/db/repositories/images.repo';
import { ArticlesRepository } from '@/db/repositories/articles.repo';
import { LegalStepsRepository } from '../db/repositories/legalsteps.repo';
import { FooterLinksRepository } from '../db/repositories/footerlinks.repo';
import { ConfigsRepository } from '../db/repositories/configs.repo';

const sectionsRepo = new SectionsRepository();
const imagesRepo = new ImagesRepository();
const articlesRepo = new ArticlesRepository();
const legalStepsRepo = new LegalStepsRepository();
const footerLinksRepo = new FooterLinksRepository();
const configsRepo = new ConfigsRepository();

export const resolvers = {
  Query: {
    servers: async () => {
      return await serverService.getAllServers();
    },
    server: async (_: any, { id }: { id: string }) => {
      return await serverService.getServerById(id);
    },
    constellations: async () => {
      return await serverService.getAllConstellations();
    },
    constellation: async (_: any, { id }: { id: string }) => {
      return await serverService.getConstellationById(id);
    },    configurations: async () => {
      return await configService.getAllConfigs();
    },
    configuration: async (_: any, { id }: { id: string }) => {
      return await configService.getConfigById(id);
    },
    generateServerTokens: async (_: any, { id }: { id: string }) => {
      // Verificar que el servidor existe pero no guardar los tokens todavía
      const serverExists = await serverService.getServerById(id);
      if (!serverExists) {
        throw new Error(`No se encontró ningún servidor con ID: ${id}`);
      }
      
      // Generar nuevos tokens únicos utilizando el tokenService importado
      const orchestratorToken = await tokenService.generateOrchestratorTokenAsync();
      const unitToken = await tokenService.generateUnitTokenAsync();
      
      // Devolver los tokens generados (sin guardar)
      return {
        orchestratorToken,
        unitToken
      };
    },
    landingData: async (_: any, { token }: { token: string }) => {
      // 1) Validar token del unitario
      const server = await serverService.getServerByUnitToken(token);
      if (!server || !server.configId) throw new Error("Token inválido o sin configuración");
      // 2) Obtener la configuración completa
      const config = await configService.getConfigById(server.configId);
      if (!config) throw new Error("Config no encontrada");
      // 3) Devuelve el objeto con todos los campos necesarios
      return config;
    },
    section: async (_: any, { id }: { id: string }) => sectionsRepo.findById(id),
    sectionsByConfig: async (_: any, { configId }: { configId: string }) => sectionsRepo.findByConfigId(configId),
    sections: async () => sectionsRepo.findAll(),
    image: async (_: any, { id }: { id: string }) => imagesRepo.findById(id),
    imagesByConfig: async (_: any, { configId }: { configId: string }) => imagesRepo.findByConfigId(configId),
    images: async () => imagesRepo.findAll(),
    article: async (_: any, { id }: { id: string }) => articlesRepo.findById(id),
    articlesByConfig: async (_: any, { configId }: { configId: string }) => articlesRepo.findByConfigId(configId),
    articles: async () => articlesRepo.findAll(),
    legalStep: async (_: any, { id }: { id: string }) => legalStepsRepo.findById(id),
    legalStepsByConfig: async (_: any, { configId }: { configId: string }) => legalStepsRepo.findByConfigId(configId),
    legalSteps: async () => legalStepsRepo.findAll(),
    footerLink: async (_: any, { id }: { id: string }) => footerLinksRepo.findById(id),
    footerLinksByConfig: async (_: any, { configId }: { configId: string }) => footerLinksRepo.findByConfigId(configId),
    footerLinks: async () => footerLinksRepo.findAll(),
  },
  Mutation: {
    createServer: async (_: any, { name, domain, constellationId }: { 
      name: string; 
      domain: string; 
      constellationId?: string;
    }) => {
      return await serverService.createServer({ name, domain, constellationId });
    },    updateServer: async (_: any, { id, data }: { 
      id: string; 
      data: {
        name?: string;
        domain?: string;
        constellationId?: string;
        configId?: string;
        requiresUpdate?: boolean;
        isActive?: boolean;
        orchestratorToken?: string;
        unitToken?: string;
      };
    }) => {
      return await serverService.updateServer(id, data);
    },deleteServer: async (_: any, { id }: { id: string }) => {
      return await serverService.deleteServer(id);
    },    updateServerTokens: async (_: any, { id, orchestratorToken, unitToken }: { 
      id: string;
      orchestratorToken: string;
      unitToken: string;
    }) => {
      return await serverService.updateServerTokens(id, orchestratorToken, unitToken);
    },
    // Añadimos las mutaciones para las constelaciones aquí
    createConstellation: async (_: any, { name, description }: { name: string; description?: string }) => {
      const { prisma } = await import('@/db/prisma-client');
      return await prisma.constellation.create({
        data: { name, description }
      });
    },
    updateConstellation: async (_: any, { id, name, description }: { id: string; name?: string; description?: string }) => {
      const { prisma } = await import('@/db/prisma-client');
      return await prisma.constellation.update({
        where: { id },
        data: { name, description }
      });
    },    deleteConstellation: async (_: any, { id }: { id: string }) => {
      const { prisma } = await import('@/db/prisma-client');
      return await prisma.constellation.delete({
        where: { id }
      });
    },
    createConfig: async (_: any, { 
      name, 
      pageTitle, 
      pageDescription,
      servicesDescription,
      footerInfo
    }: { 
      name: string; 
      pageTitle: string;
      pageDescription: string;
      servicesDescription: string;
      footerInfo?: string;
    }) => {
      return await configService.createConfig({ 
        name, 
        pageTitle, 
        pageDescription,
        servicesDescription,
        footerInfo
      });
    },
    updateConfig: async (_: any, { 
      id, 
      name, 
      pageTitle, 
      pageDescription,
      servicesDescription,
      footerInfo
    }: { 
      id: string;
      name?: string;
      pageTitle?: string;
      pageDescription?: string;
      servicesDescription?: string;
      footerInfo?: string;
    }) => {
      return await configService.updateConfig(id, { 
        name, 
        pageTitle, 
        pageDescription,
        servicesDescription,
        footerInfo
      });
    },
    deleteConfig: async (_: any, { id }: { id: string }) => {
      return await configService.deleteConfig(id);
    },
    createFullConfig: async (_: any, { data }: { data: any }) => {
      return await configService.createFullConfig(data);
    },
    updateFullConfig: async (_: any, { id, data }: { id: string, data: any }) => {
      return await configService.updateFullConfig(id, data);
    },
    createSection: async (_: any, { data }: any) => sectionsRepo.create(data),
    updateSection: async (_: any, { id, data }: any) => sectionsRepo.update(id, data),
    deleteSection: async (_: any, { id }: any) => sectionsRepo.delete(id),
    createImage: async (_: any, { data }: any) => imagesRepo.create(data),
    updateImage: async (_: any, { id, data }: any) => imagesRepo.update(id, data),
    deleteImage: async (_: any, { id }: any) => imagesRepo.delete(id),
    createArticle: async (_: any, { data }: any) => articlesRepo.create(data),
    updateArticle: async (_: any, { id, data }: any) => articlesRepo.update(id, data),
    deleteArticle: async (_: any, { id }: any) => articlesRepo.delete(id),
    createLegalStep: async (_: any, { data }: any) => legalStepsRepo.create(data),
    updateLegalStep: async (_: any, { id, data }: any) => legalStepsRepo.update(id, data),
    deleteLegalStep: async (_: any, { id }: any) => legalStepsRepo.delete(id),
    createFooterLink: async (_: any, { data }: any) => footerLinksRepo.create(data),
    updateFooterLink: async (_: any, { id, data }: any) => footerLinksRepo.update(id, data),
    deleteFooterLink: async (_: any, { id }: any) => footerLinksRepo.delete(id),
    createUnitConfig: async (_: any, { data }: any) => configsRepo.create({ ...data }),
    updateUnitConfig: async (_: any, { id, data }: any) => configsRepo.update(id, { ...data }),
  },
};