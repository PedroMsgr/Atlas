// src/graphql/resolvers.ts

import GraphQLJSON from 'graphql-type-json';
import { GraphQLContext } from '@/types/context.types';

const resolvers = {
  JSON: GraphQLJSON,

  Query: {
    // --- Servidores y constelaciones ---
    servers: async (_parent: unknown, _args: unknown, context: GraphQLContext) => {
      return context.serverService.getAllServers();
    },
    server: async (_parent: unknown, { id }: { id: string }, context: GraphQLContext) => {
      return context.serverService.getServerById(id);
    },
    constellations: async (_parent: unknown, _args: unknown, context: GraphQLContext) => {
      return context.serverService.getAllConstellations();
    },
    constellation: async (_parent: unknown, { id }: { id: string }, context: GraphQLContext) => {
      return context.serverService.getConstellationById(id);
    },

    // --- Configuraciones ---
    configurations: async (_parent: unknown, _args: unknown, context: GraphQLContext) => {
      return context.configService.getAllConfigs();
    },
    configuration: async (_parent: unknown, { id }: { id: string }, context: GraphQLContext) => {
      return context.configService.getConfigById(id);
    },

    // --- Landing pública por token ---
    landingData: async (_: any, { token }: { token: string }, context: GraphQLContext) => {
      const server = await context.serverService.getServerByUnitToken(token);
      if (!server || !server.configId) {
        throw new Error('Token inválido o servidor sin configuración asociada');
      }
      const config = await context.configService.getConfigById(server.configId);
      if (!config) {
        throw new Error('Configuración no encontrada para ese servidor');
      }
      return config;
    },

    // --- Secciones ---
    sections: async (_: any, _args: any, context: GraphQLContext) => {
      return context.configService.getAllSections();
    },
    section: async (_: any, { id }: { id: string }, context: GraphQLContext) => {
      return context.configService.getSectionById(id);
    },
    sectionsByConfig: async (_: any, { configId }: { configId: string }, context: GraphQLContext) => {
      return context.configService.getSectionsByConfigId(configId);
    },

    // --- Artículos ---
    articles: async (_: any, _args: any, context: GraphQLContext) => {
      return context.configService.getAllArticles();
    },
    article: async (_: any, { id }: { id: string }, context: GraphQLContext) => {
      return context.configService.getArticleById(id);
    },
    articlesByConfig: async (_: any, { configId }: { configId: string }, context: GraphQLContext) => {
      return context.configService.getArticlesByConfigId(configId);
    },

    // --- Imágenes ---
    images: async (_: any, _args: any, context: GraphQLContext) => {
      return context.configService.getAllImages();
    },
    image: async (_: any, { id }: { id: string }, context: GraphQLContext) => {
      return context.configService.getImageById(id);
    },
    imagesByConfig: async (_: any, { configId }: { configId: string }, context: GraphQLContext) => {
      return context.configService.getImagesByConfigId(configId);
    },

    // --- Pasos legales ---
    legalSteps: async (_: any, _args: any, context: GraphQLContext) => {
      return context.configService.getAllLegalSteps();
    },
    legalStep: async (_: any, { id }: { id: string }, context: GraphQLContext) => {
      return context.configService.getLegalStepById(id);
    },
    legalStepsByConfig: async (_: any, { configId }: { configId: string }, context: GraphQLContext) => {
      return context.configService.getLegalStepsByConfig(configId);
    },

    // --- Enlaces de footer ---
    footerLinks: async (_: any, _args: any, context: GraphQLContext) => {
      return context.configService.getAllFooterLinks();
    },
    footerLink: async (_: any, { id }: { id: string }, context: GraphQLContext) => {
      return context.configService.getFooterLinkById(id);
    },
    footerLinksByConfig: async (_: any, { configId }: { configId: string }, context: GraphQLContext) => {
      return context.configService.getFooterLinksByConfig(configId);
    },

    // --- Generación de tokens de servidor ---
    generateServerTokens: async (_: any, { id }: { id: string }, context: GraphQLContext) => {
      const serverExists = await context.serverService.getServerById(id);
      if (!serverExists) {
        throw new Error(`No existe servidor con ID: ${id}`);
      }
      const orchestratorToken = await context.tokenService.generateOrchestratorTokenAsync();
      const unitToken = await context.tokenService.generateUnitTokenAsync();
      return { orchestratorToken, unitToken };
    },

    // --- Casos legales ---
    cases: async (_: any, args: { filters: any }, context: GraphQLContext) => {
      return context.caseService.getCasesPaginated(args.filters);
    },
    case: async (_: any, { id }: { id: string }, context: GraphQLContext) => {
      return context.caseService.getCaseById(id);
    },

    // --- Usuarios ---
    users: async (_parent: any, args: { role?: string[]; search?: string }, context: GraphQLContext) => {
      return context.userService.getUsers(args.role, args.search);
    },
  },

  // MUTATION RESOLVERS
  Mutation: {
    // ---- UnitConfig CRUD ----
    createConfig: async (_parent: unknown, { data }: { data: any }, context: GraphQLContext) => {
      return context.configService.createConfig(data);
    },
    updateConfig: async (_parent: unknown, { id, data }: { id: string; data: any }, context: GraphQLContext) => {
      return context.configService.updateConfig(id, data);
    },
    deleteConfig: async (_parent: unknown, { id }: { id: string }, context: GraphQLContext) => {
      try {
        await context.configService.deleteConfig(id);
        return true;
      } catch (e) {
        return false;
      }
    },
    createServer: async (
      _parent: unknown,
      { name, domain, constellationId }: { name: string; domain: string; constellationId: string },
      context: GraphQLContext
    ) => {
      return context.serverService.createServer({ name, domain, constellationId });
    },
    updateServer: async (_parent: unknown, { id, data }: { id: string; data: any }, context: GraphQLContext) => {
      return context.serverService.updateServer(id, data);
    },
    deleteServer: async (_parent: unknown, { id }: { id: string }, context: GraphQLContext) => {
      try {
        await context.serverService.deleteServer(id);
        return true;
      } catch (e) {
        return false;
      }
    },
    updateServerTokens: async (
      _parent: unknown,
      { id, orchestratorToken, unitToken }: { id: string; orchestratorToken: string; unitToken: string },
      context: GraphQLContext
    ) => {
      return context.serverService.updateServerTokens(id, orchestratorToken, unitToken);
    },
    createConstellation: async (_parent: unknown, { name, description }: { name: string; description?: string }, context: GraphQLContext) => {
      return context.serverService.createConstellation({ name, description });
    },
    updateConstellation: async (
      _parent: unknown,
      { id, name, description }: { id: string; name?: string; description?: string },
      context: GraphQLContext
    ) => {
      return context.serverService.updateConstellation(id, { name, description });
    },
    deleteConstellation: async (_parent: unknown, { id }: { id: string }, context: GraphQLContext) => {
      try {
        await context.serverService.deleteConstellation(id);
        return true;
      } catch (e) {
        return false;
      }
    },
    createSection: async (_parent: unknown, { data }: { data: any }, context: GraphQLContext) => {
      return context.configService.createSection(data);
    },
    updateSection: async (_parent: unknown, { id, data }: { id: string; data: any }, context: GraphQLContext) => {
      return context.configService.updateSection(id, data);
    },
    deleteSection: async (_parent: unknown, { id }: { id: string }, context: GraphQLContext) => {
      try {
        await context.configService.deleteSection(id);
        return true;
      } catch (e) {
        return false;
      }
    },
    createArticle: async (_parent: unknown, { data }: { data: any }, context: GraphQLContext) => {
      return context.configService.createArticle(data);
    },
    updateArticle: async (_parent: unknown, { id, data }: { id: string; data: any }, context: GraphQLContext) => {
      return context.configService.updateArticle(id, data);
    },
    deleteArticle: async (_parent: unknown, { id }: { id: string }, context: GraphQLContext) => {
      try {
        await context.configService.deleteArticle(id);
        return true;
      } catch (e) {
        return false;
      }
    },
    createImage: async (_parent: unknown, { data }: { data: any }, context: GraphQLContext) => {
      return context.configService.createImage(data);
    },
    updateImage: async (_parent: unknown, { id, data }: { id: string; data: any }, context: GraphQLContext) => {
      return context.configService.updateImage(id, data);
    },
    deleteImage: async (_parent: unknown, { id }: { id: string }, context: GraphQLContext) => {
      try {
        await context.configService.deleteImage(id);
        return true;
      } catch (e) {
        return false;
      }
    },
    createLegalStep: async (_parent: unknown, { data }: { data: any }, context: GraphQLContext) => {
      return context.configService.createLegalStep(data);
    },
    updateLegalStep: async (_parent: unknown, { id, data }: { id: string; data: any }, context: GraphQLContext) => {
      return context.configService.updateLegalStep(id, data);
    },
    deleteLegalStep: async (_parent: unknown, { id }: { id: string }, context: GraphQLContext) => {
      try {
        await context.configService.deleteLegalStep(id);
        return true;
      } catch (e) {
        return false;
      }
    },
    createFooterLink: async (_parent: unknown, { data }: { data: any }, context: GraphQLContext) => {
      return context.configService.createFooterLink(data);
    },
    updateFooterLink: async (_parent: unknown, { id, data }: { id: string; data: any }, context: GraphQLContext) => {
      return context.configService.updateFooterLink(id, data);
    },
    deleteFooterLink: async (_parent: unknown, { id }: { id: string }, context: GraphQLContext) => {
      try {
        await context.configService.deleteFooterLink(id);
        return true;
      } catch (e) {
        return false;
      }
    },
    createFullConfig: async (_parent: unknown, { data }: { data: any }, context: GraphQLContext) => {
      return context.configService.createFullConfig(data);
    },
    updateFullConfig: async (_parent: unknown, { id, data }: { id: string; data: any }, context: GraphQLContext) => {
      return context.configService.updateFullConfig(id, data);
    },
    createCase: async (_parent: unknown, { data }: { data: any }, context: GraphQLContext) => {
      return context.caseService.createCase(data);
    },
    updateCase: async (_parent: unknown, { id, data }: { id: string; data: any }, context: GraphQLContext) => {
      return context.caseService.updateCase(id, data);
    },
    deleteCase: async (_parent: unknown, { id }: { id: string }, context: GraphQLContext) => {
      try {
        await context.caseService.deleteCase(id);
        return true;
      } catch (e) {
        return false;
      }
    },
    updateCaseStatus: async (_parent: unknown, { id, status }: { id: string; status: string }, context: GraphQLContext) => {
      return context.caseService.updateStatus(id, status);
    },
    assignProfessional: async (_parent: unknown, { id, professionalId }: { id: string; professionalId: string }, context: GraphQLContext) => {
      return context.caseService.assignProfessional(id, professionalId);
    },
    addCaseFile: async (_parent: unknown, { caseId, file }: { caseId: string; file: any }, context: GraphQLContext) => {
      return context.caseService.addFile(caseId, file);
    },
    removeCaseFile: async (_parent: unknown, { fileId }: { fileId: string }, context: GraphQLContext) => {
      try {
        await context.caseService.removeFile(fileId);
        return true;
      } catch (e) {
        return false;
      }
    },
    addCaseReport: async (_parent: unknown, { caseId, clientId, reason }: { caseId: string; clientId: string; reason: string }, context: GraphQLContext) => {
      return context.caseService.addReport(caseId, clientId, reason);
    },
    removeCaseReport: async (_parent: unknown, { reportId }: { reportId: string }, context: GraphQLContext) => {
      try {
        await context.caseService.removeReport(reportId);
        return true;
      } catch (e) {
        return false;
      }
    },
    deleteUser: async (_parent: unknown, args: { id: string }, context: GraphQLContext) => {
      return context.userService.deleteUser(args.id);
    },
  },

  // TYPE-LEVEL RESOLVERS
  UnitConfig: {
    sections: (parent: any, _args: unknown, context: GraphQLContext) =>
      context.configService.getSectionsByConfigId(parent.id),
    articles: (parent: any, _args: unknown, context: GraphQLContext) =>
      context.configService.getArticlesByConfigId(parent.id),
    images: (parent: any, _args: unknown, context: GraphQLContext) =>
      context.configService.getImagesByConfigId(parent.id),
    legalSteps: (parent: any, _args: unknown, context: GraphQLContext) =>
      context.configService.getLegalStepsByConfig(parent.id),
    footerLinks: (parent: any, _args: unknown, context: GraphQLContext) =>
      context.configService.getFooterLinksByConfig(parent.id),
    servers: (parent: any, _args: unknown, context: GraphQLContext) =>
      context.serverService.getAllServers().then((all: any[]) =>
        all.filter((srv) => srv.configId === parent.id)
      ),
  },

  Section: {
    config: (parent: any, _args: unknown, context: GraphQLContext) =>
      context.configService.getConfigById(parent.configId),
    images: (parent: any, _args: unknown, context: GraphQLContext) =>
      context.configService
        .getImagesByConfigId(parent.configId)
        .then((imgs: any[]) => imgs.filter((img) => img.sectionId === parent.id)),
  },

  Article: {
    config: (parent: any, _args: unknown, context: GraphQLContext) =>
      context.configService.getConfigById(parent.configId),
  },

  Image: {
    config: (parent: any, _args: unknown, context: GraphQLContext) =>
      context.configService.getConfigById(parent.configId),
    section: (parent: any, _args: unknown, context: GraphQLContext) =>
      parent.sectionId ? context.configService.getSectionById(parent.sectionId) : null,
  },

  LegalStep: {
    config: (parent: any, _args: unknown, context: GraphQLContext) =>
      context.configService.getConfigById(parent.configId),
  },

  FooterLink: {
    config: (parent: any, _args: unknown, context: GraphQLContext) =>
      context.configService.getConfigById(parent.configId),
  },

  UnitServer: {
    constellation: (parent: any, _args: unknown, context: GraphQLContext) =>
      parent.constellationId
        ? context.serverService.getConstellationById(parent.constellationId)
        : null,
    config: (parent: any, _args: unknown, context: GraphQLContext) =>
      parent.configId ? context.configService.getConfigById(parent.configId) : null,
  },

  Constellation: {
    servers: (parent: any, _args: unknown, context: GraphQLContext) =>
      context.serverService.getAllServers().then((all: any[]) =>
        all.filter((srv) => srv.constellationId === parent.id)
      ),
  },

  Case: {
    server: (parent: any, _args: unknown, context: GraphQLContext) =>
      context.serverService.getServerById(parent.serverId),
  },

  Client: {
    server: (parent: any, _args: unknown, context: GraphQLContext) =>
      context.serverService.getServerById(parent.serverId),
  },

  Professional: {
    server: (parent: any, _args: unknown, context: GraphQLContext) =>
      context.serverService.getServerById(parent.serverId),
  },

  Chat: {
    messages: (parent: { messages?: unknown[] }) => parent.messages || [],
  },
};

export default resolvers;
