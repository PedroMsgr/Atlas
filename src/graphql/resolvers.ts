// src/graphql/resolvers.ts

import { serverService } from '@/services/server.service';
import { tokenService } from '@/services/token.service';
import { configService } from '@/services/config.service';
import { CaseService } from '@/services/case.service';

import { SectionsRepository } from '@/db/repositories/sections.repo';
import { ImagesRepository } from '@/db/repositories/images.repo';
import { ArticlesRepository } from '@/db/repositories/articles.repo';
import { LegalStepsRepository } from '../db/repositories/legalsteps.repo';
import { FooterLinksRepository } from '../db/repositories/footerlinks.repo';
import { ConfigsRepository } from '../db/repositories/configs.repo';
import { ConstellationsRepository } from '@/db/repositories/constellations.repo';
import GraphQLJSON from 'graphql-type-json';
import { imageService } from '@/services/image.service';

const sectionsRepo = new SectionsRepository();
const imagesRepo = new ImagesRepository();
const articlesRepo = new ArticlesRepository();
const legalStepsRepo = new LegalStepsRepository();
const footerLinksRepo = new FooterLinksRepository();
const configsRepo = new ConfigsRepository();
const constellationsRepo = new ConstellationsRepository();

export const resolvers = {
  JSON: GraphQLJSON,

  Query: {
    servers: async () => serverService.getAllServers(),
    server: async (_: any, { id }: { id: string }) => serverService.getServerById(id),

    constellations: async () => serverService.getAllConstellations(),
    constellation: async (_: any, { id }: { id: string }) =>
      serverService.getConstellationById(id),

    configurations: async () => configService.getAllConfigs(),
    configuration: async (_: any, { id }: { id: string }) =>
      configService.getConfigById(id),

    landingData: async (_: any, { token }: { token: string }) => {
      const server = await serverService.getServerByUnitToken(token);
      if (!server || !server.configId)
        throw new Error('Token inválido o sin configuración');
      const config = await configService.getConfigById(server.configId);
      if (!config) throw new Error('Config no encontrada');
      return config;
    },

    sections: async () => sectionsRepo.findAll(),
    section: async (_: any, { id }: { id: string }) =>
      sectionsRepo.findById(id),
    sectionsByConfig: async (_: any, { configId }: { configId: string }) =>
      sectionsRepo.findByConfigId(configId),

    articles: async () => articlesRepo.findAll(),
    article: async (_: any, { id }: { id: string }) =>
      articlesRepo.findById(id),
    articlesByConfig: async (_: any, { configId }: { configId: string }) =>
      articlesRepo.findByConfigId(configId),

    images: async () => imageService.getImagesByType("global"),
    image: async (_: any, { id }: { id: string }) => imagesRepo.findById(id),
    imagesByConfig: async (_: any, { configId }: { configId: string }) =>
      imageService.getImagesByConfig(configId),

    legalSteps: async () => legalStepsRepo.findAll(),
    legalStep: async (_: any, { id }: { id: string }) =>
      legalStepsRepo.findById(id),
    legalStepsByConfig: async (_: any, { configId }: { configId: string }) =>
      legalStepsRepo.findByConfigId(configId),

    footerLinks: async () => footerLinksRepo.findAll(),
    footerLink: async (_: any, { id }: { id: string }) =>
      footerLinksRepo.findById(id),
    footerLinksByConfig: async (_: any, { configId }: { configId: string }) =>
      footerLinksRepo.findByConfigId(configId),

    generateServerTokens: async (_: any, { id }: { id: string }) => {
      const serverExists = await serverService.getServerById(id);
      if (!serverExists)
        throw new Error(`No se encontró ningún servidor con ID: ${id}`);
      const orchestratorToken = await tokenService.generateOrchestratorTokenAsync();
      const unitToken = await tokenService.generateUnitTokenAsync();
      return { orchestratorToken, unitToken };
    },

    cases: async (_parent: unknown, args: { filters: any }, context: any) => {
      // Llama al servicio que ya hace el include correcto
      return await context.caseService.getCasesPaginated(args.filters);
    },
    case: async (_parent: unknown, { id }: { id: string }, context: any) => {
      return await context.caseService.getCaseById(id);
    },
  },

  Mutation: {
    // UnitServer CRUD
    createServer: async (
      _: any,
      { name, domain, constellationId }: { name: string; domain: string; constellationId?: string }
    ) => serverService.createServer({ name, domain, constellationId }),

    updateServer: async (_: any, { id, data }: { id: string; data: any }) =>
      serverService.updateServer(id, data),

    deleteServer: async (_: any, { id }: { id: string }) =>
      serverService.deleteServer(id),

    updateServerTokens: async (
      _: any,
      { id, orchestratorToken, unitToken }: { id: string; orchestratorToken: string; unitToken: string }
    ) => serverService.updateServerTokens(id, orchestratorToken, unitToken),

    // Constellation CRUD
    createConstellation: async (
      _: any,
      { name, description }: { name: string; description?: string }
    ) => {
      return constellationsRepo.create({ name, description: description ?? null });
    },

    updateConstellation: async (
      _: any,
      { id, name, description }: { id: string; name?: string; description?: string }
    ) => {
      return constellationsRepo.update(id, {
        name,
        description: description ?? null,
      });
    },

    deleteConstellation: async (_: any, { id }: { id: string }) => {
      return constellationsRepo.delete(id);
    },

    // UnitConfig CRUD
    createConfig: async (_: any, { data }: { data: any }) =>
      configService.createConfig(data),

    updateConfig: async (_: any, { id, data }: { id: string; data: any }) =>
      configService.updateConfig(id, data),

    deleteConfig: async (_: any, { id }: { id: string }) =>
      configService.deleteConfig(id),

    createFullConfig: async (_: any, { data }: { data: any }) =>
      configService.createFullConfig(data),

    updateFullConfig: async (
      _: any,
      { id, data }: { id: string; data: any }
    ) => configService.updateFullConfig(id, data),

    // Section CRUD
    createSection: async (_: any, { data }: any) => sectionsRepo.create(data),
    updateSection: async (_: any, { id, data }: any) => sectionsRepo.update(id, data),
    deleteSection: async (_: any, { id }: any) => sectionsRepo.delete(id),

    // Article CRUD
    createArticle: async (_: any, { data }: any) => articlesRepo.create(data),
    updateArticle: async (_: any, { id, data }: any) => articlesRepo.update(id, data),
    deleteArticle: async (_: any, { id }: any) => articlesRepo.delete(id),

    // Image CRUD
    createImage: async (_: any, { data }: any) => imageService.registerImage(data),
    updateImage: async (_: any, { id, data }: any) => imageService.updateImage(id, data),
    deleteImage: async (_: any, { id }: any) => imageService.deleteImage(id),

    // LegalStep CRUD
    createLegalStep: async (_: any, { data }: any) => legalStepsRepo.create(data),
    updateLegalStep: async (_: any, { id, data }: any) => legalStepsRepo.update(id, data),
    deleteLegalStep: async (_: any, { id }: any) => legalStepsRepo.delete(id),

    // FooterLink CRUD
    createFooterLink: async (_: any, { data }: any) => footerLinksRepo.create(data),
    updateFooterLink: async (_: any, { id, data }: any) => footerLinksRepo.update(id, data),
    deleteFooterLink: async (_: any, { id }: any) => footerLinksRepo.delete(id),

    // Case CRUD
    createCase: async (_: any, { data }: any) => CaseService.createCase(data),
    updateCase: async (_: any, { id, data }: any) => CaseService.updateCase(id, data),
    deleteCase: async (_: any, { id }: any) => { await CaseService.deleteCase(id); return true; },
    updateCaseStatus: async (_: any, { id, status }: any) => CaseService.updateStatus(id, status),
    assignProfessional: async (_: any, { id, professionalId }: any) => CaseService.assignProfessional(id, professionalId),
    addCaseFile: async (_: any, { caseId, file }: any) => CaseService.addFile(caseId, file),
    removeCaseFile: async (_: any, { fileId }: any) => { await CaseService.removeFile(fileId); return true; },
    addCaseReport: async (_: any, { caseId, clientId, reason }: any) => CaseService.addReport(caseId, clientId, reason),
    removeCaseReport: async (_: any, { reportId }: any) => { await CaseService.removeReport(reportId); return true; },
  },

  UnitConfig: {
    sections: (parent: any) => sectionsRepo.findByConfigId(parent.id),
    articles: (parent: any) => articlesRepo.findByConfigId(parent.id),
    images: (parent: any) => imagesRepo.findByConfigId(parent.id),
    legalSteps: (parent: any) => legalStepsRepo.findByConfigId(parent.id),
    footerLinks: (parent: any) => footerLinksRepo.findByConfigId(parent.id),
    servers: (parent: any) =>
      serverService.getAllServers().then((servers: any[]) =>
        servers.filter((s: any) => s.configId === parent.id)
      ),
  },

  Section: {
    config: (parent: any) => configsRepo.findById(parent.configId),
    images: (parent: any) =>
      imagesRepo.findByConfigId(parent.configId).then((imgs: any[]) =>
        imgs.filter((img) => img.sectionId === parent.id)
      ),
  },

  Article: {
    config: (parent: any) => configsRepo.findById(parent.configId),
  },

  Image: {
    config: (parent: any) => configsRepo.findById(parent.configId),
    section: (parent: any) =>
      parent.sectionId ? sectionsRepo.findById(parent.sectionId) : null,
  },

  LegalStep: {
    config: (parent: any) => configsRepo.findById(parent.configId),
  },

  FooterLink: {
    config: (parent: any) => configsRepo.findById(parent.configId),
  },

  UnitServer: {
    constellation: (parent: any) =>
      parent.constellationId
        ? serverService.getConstellationById(parent.constellationId)
        : null,
    config: (parent: any) =>
      parent.configId ? configsRepo.findById(parent.configId) : null,
  },

  Constellation: {
    servers: (parent: any) =>
      serverService.getAllServers().then((servers: any[]) =>
        servers.filter((s: any) => s.constellationId === parent.id)
      ),
  },

  Case: {
    client: (parent: any) => parent.client || null,
    professional: (parent: any) => parent.professional || null,
    server: (parent: any) => parent.server || null,
  },
  Client: {
    user: (parent: any) => parent.user || null,
  },
  Professional: {
    user: (parent: any) => parent.user || null,
  },
  Chat: {
    messages: (parent: any) => parent.messages || [],
  },
};

export default resolvers;
