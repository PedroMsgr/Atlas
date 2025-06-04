// src/graphql/resolvers.ts

// import { serverService } from '@/services/server.service';
// import { tokenService } from '@/services/token.service';
// import { configService } from '@/services/config.service';
// import { caseService } from '@/services/case.service';
// import { userService } from '@/services/user.service'; // Descomenta cuando implementes userService
import GraphQLJSON from 'graphql-type-json';

const resolvers = {
  JSON: GraphQLJSON,

  Query: {
    servers: async (_: any, args: any, context: any) => {
      return context.serverService.getAllServers();
    },
    server: async (_: any, { id }: { id: string }, context: any) => {
      return context.serverService.getServerById(id);
    },
    constellations: async (_: any, args: any, context: any) => {
      return context.serverService.getAllConstellations();
    },
    constellation: async (_: any, { id }: { id: string }, context: any) => {
      return context.serverService.getConstellationById(id);
    },
    configurations: async (_: any, args: any, context: any) => {
      return context.configService.getAllConfigs();
    },
    configuration: async (_: any, { id }: { id: string }, context: any) => {
      return context.configService.getConfigById(id);
    },
    landingData: async (_: any, { token }: { token: string }, context: any) => {
      // No requiere sesión, solo token válido
      const server = await context.serverService.getServerByUnitToken(token);
      if (!server || !server.configId)
        throw new Error('Token inválido o sin configuración');
      const config = await context.configService.getConfigById(server.configId);
      if (!config) throw new Error('Config no encontrada');
      return config;
    },
    sections: async (_: any, args: any, context: any) => {
      return context.configService.getAllSections();
    },
    section: async (_: any, { id }: { id: string }, context: any) => {
      return context.configService.getSectionById(id);
    },
    sectionsByConfig: async (_: any, { configId }: { configId: string }, context: any) => {
      return context.configService.getSectionsByConfigId(configId);
    },
    articles: async (_: any, args: any, context: any) => {
      return context.configService.getAllArticles();
    },
    article: async (_: any, { id }: { id: string }, context: any) => {
      return context.configService.getArticleById(id);
    },
    articlesByConfig: async (_: any, { configId }: { configId: string }, context: any) => {
      return context.configService.getArticlesByConfigId(configId);
    },
    images: async (_: any, args: any, context: any) => {
      return context.configService.getAllImages();
    },
    image: async (_: any, { id }: { id: string }, context: any) => {
      return context.configService.getImageById(id);
    },
    imagesByConfig: async (_: any, { configId }: { configId: string }, context: any) => {
      return context.configService.getImagesByConfigId(configId);
    },
    legalSteps: async (_: any, args: any, context: any) => {
      return context.configService.getAllLegalSteps();
    },
    legalStep: async (_: any, { id }: { id: string }, context: any) => {
      return context.configService.getLegalStepById(id);
    },
    legalStepsByConfig: async (_: any, { configId }: { configId: string }, context: any) => {
      return context.configService.getLegalStepsByConfig(configId);
    },
    footerLinks: async (_: any, args: any, context: any) => {
      return context.configService.getAllFooterLinks();
    },
    footerLink: async (_: any, { id }: { id: string }, context: any) => {
      return context.configService.getFooterLinkById(id);
    },
    footerLinksByConfig: async (_: any, { configId }: { configId: string }, context: any) => {
      return context.configService.getFooterLinksByConfig(configId);
    },
    generateServerTokens: async (_: any, { id }: { id: string }, context: any) => {
      const serverExists = await context.serverService.getServerById(id);
      if (!serverExists)
        throw new Error(`No se encontró ningún servidor con ID: ${id}`);
      const orchestratorToken = await context.tokenService.generateOrchestratorTokenAsync();
      const unitToken = await context.tokenService.generateUnitTokenAsync();
      return { orchestratorToken, unitToken };
    },
    cases: async (_parent: unknown, args: { filters: any }, context: any) => {
      return context.caseService.getCasesPaginated(args.filters);
    },
    case: async (_parent: unknown, { id }: { id: string }, context: any) => {
      return context.caseService.getCaseById(id);
    },
    // clients: async () => context.userService.getAllClients(),
    // client: async (_: any, { id }: { id: string }) => context.userService.getClientById(id),
    // professionals: async () => context.userService.getAllProfessionals(),
    // professional: async (_: any, { id }: { id: string }) => context.userService.getProfessionalById(id),
  },

  Mutation: {
    // UnitServer CRUD
    createServer: async (
      _: any,
      { name, domain, constellationId }: { name: string; domain: string; constellationId?: string },
      context: any
    ) => context.serverService.createServer({ name, domain, constellationId }),

    updateServer: async (_: any, { id, data }: { id: string; data: any }, context: any) =>
      context.serverService.updateServer(id, data),

    deleteServer: async (_: any, { id }: { id: string }, context: any) => {
      await context.serverService.deleteServer(id);
      return true;
    },

    updateServerTokens: async (
      _: any,
      { id, orchestratorToken, unitToken }: { id: string; orchestratorToken: string; unitToken: string },
      context: any
    ) => context.serverService.updateServerTokens(id, orchestratorToken, unitToken),

    // Constellation CRUD
    createConstellation: async (
      _: any,
      { name, description }: { name: string; description?: string },
      context: any
    ) => {
      return context.serverService.createConstellation({ name, description });
    },

    updateConstellation: async (
      _: any,
      { id, name, description }: { id: string; name?: string; description?: string },
      context: any
    ) => {
      return context.serverService.updateConstellation(id, { name, description });
    },

    deleteConstellation: async (_: any, { id }: { id: string }, context: any) => {
      await context.serverService.deleteConstellation(id);
      return true;
    },

    // UnitConfig CRUD
    createConfig: async (_: any, { data }: { data: any }, context: any) =>
      context.configService.createConfig(data),

    updateConfig: async (_: any, { id, data }: { id: string; data: any }, context: any) =>
      context.configService.updateConfig(id, data),

    deleteConfig: async (_: any, { id }: { id: string }, context: any) => {
      await context.configService.deleteConfig(id);
      return true;
    },

    createFullConfig: async (_: any, { data }: { data: any }, context: any) =>
      context.configService.createFullConfig(data),

    updateFullConfig: async (
      _: any,
      { id, data }: { id: string; data: any },
      context: any
    ) => context.configService.updateFullConfig(id, data),

    // Section CRUD
    createSection: async (_: any, { data }: any, context: any) => context.configService.createSection(data),
    updateSection: async (_: any, { id, data }: any, context: any) => context.configService.updateSection(id, data),
    deleteSection: async (_: any, { id }: any, context: any) => {
      await context.configService.deleteSection(id);
      return true;
    },

    // Article CRUD
    createArticle: async (_: any, { data }: any, context: any) => context.configService.createArticle(data),
    updateArticle: async (_: any, { id, data }: any, context: any) => context.configService.updateArticle(id, data),
    deleteArticle: async (_: any, { id }: any, context: any) => {
      await context.configService.deleteArticle(id);
      return true;
    },

    // Image CRUD
    createImage: async (_: any, { data }: any, context: any) => context.configService.createImage(data),
    updateImage: async (_: any, { id, data }: any, context: any) => context.configService.updateImage(id, data),
    deleteImage: async (_: any, { id }: any, context: any) => {
      await context.configService.deleteImage(id);
      return true;
    },

    // LegalStep CRUD
    createLegalStep: async (_: any, { data }: any, context: any) => context.configService.createLegalStep(data),
    updateLegalStep: async (_: any, { id, data }: any, context: any) => context.configService.updateLegalStep(id, data),
    deleteLegalStep: async (_: any, { id }: any, context: any) => {
      await context.configService.deleteLegalStep(id);
      return true;
    },

    // FooterLink CRUD
    createFooterLink: async (_: any, { data }: any, context: any) => context.configService.createFooterLink(data),
    updateFooterLink: async (_: any, { id, data }: any, context: any) => context.configService.updateFooterLink(id, data),
    deleteFooterLink: async (_: any, { id }: any, context: any) => {
      await context.configService.deleteFooterLink(id);
      return true;
    },

    // Case CRUD
    createCase: async (_: any, { data }: any, context: any) => context.caseService.createCase(data),
    updateCase: async (_: any, { id, data }: any, context: any) => context.caseService.updateCase(id, data),
    deleteCase: async (_: any, { id }: any, context: any) => {
      await context.caseService.deleteCase(id);
      return true;
    },
    updateCaseStatus: async (_: any, { id, status }: any, context: any) => context.caseService.updateStatus(id, status),
    assignProfessional: async (_: any, { id, professionalId }: any, context: any) => context.caseService.assignProfessional(id, professionalId),
    addCaseFile: async (_: any, { caseId, file }: any, context: any) => context.caseService.addFile(caseId, file),
    removeCaseFile: async (_: any, { fileId }: any, context: any) => {
      await context.caseService.removeFile(fileId);
      return true;
    },
    addCaseReport: async (_: any, { caseId, clientId, reason }: any, context: any) => context.caseService.addReport(caseId, clientId, reason),
    removeCaseReport: async (_: any, { reportId }: any, context: any) => {
      await context.caseService.removeReport(reportId);
      return true;
    },
    // File CRUD
    deleteFile: async (_: any, { id }: { id: string }, context: any) => {
      return true;
    },
  },

  UnitConfig: {
    sections: (parent: any, _args: any, context: any) => context.configService.getSectionsByConfigId(parent.id),
    articles: (parent: any, _args: any, context: any) => context.configService.getArticlesByConfigId(parent.id),
    images: (parent: any, _args: any, context: any) => context.configService.getImagesByConfigId(parent.id),
    legalSteps: (parent: any, _args: any, context: any) => context.configService.getLegalStepsByConfig(parent.id),
    footerLinks: (parent: any, _args: any, context: any) => context.configService.getFooterLinksByConfig(parent.id),
    servers: (parent: any, _args: any, context: any) => context.serverService.getAllServers().then((servers: any[]) => servers.filter((s: any) => s.configId === parent.id)),
  },
  Section: {
    config: (parent: any, _args: any, context: any) => context.configService.getConfigById(parent.configId),
    images: (parent: any, _args: any, context: any) => context.configService.getImagesByConfigId(parent.configId).then((imgs: any[]) => imgs.filter((img) => img.sectionId === parent.id)),
  },
  Article: {
    config: (parent: any, _args: any, context: any) => context.configService.getConfigById(parent.configId),
  },
  Image: {
    config: (parent: any, _args: any, context: any) => context.configService.getConfigById(parent.configId),
    section: (parent: any, _args: any, context: any) => parent.sectionId ? context.configService.getSectionById(parent.sectionId) : null,
  },
  LegalStep: {
    config: (parent: any, _args: any, context: any) => context.configService.getConfigById(parent.configId),
  },
  FooterLink: {
    config: (parent: any, _args: any, context: any) => context.configService.getConfigById(parent.configId),
  },
  UnitServer: {
    constellation: (parent: any, _args: any, context: any) => parent.constellationId ? context.serverService.getConstellationById(parent.constellationId) : null,
    config: (parent: any, _args: any, context: any) => parent.configId ? context.configService.getConfigById(parent.configId) : null,
  },
  Constellation: {
    servers: (parent: any, _args: any, context: any) => context.serverService.getAllServers().then((servers: any[]) => servers.filter((s: any) => s.constellationId === parent.id)),
  },
  Case: {
    // client: (parent: any, _args: any, context: any) => context.userService.getClientById(parent.clientId),
    // professional: (parent: any, _args: any, context: any) => context.userService.getProfessionalById(parent.professionalId),
    server: (parent: any, _args: any, context: any) => context.serverService.getServerById(parent.serverId),
    // files: (parent: any, _args: any, context: any) => context.caseService.getFilesByCaseId(parent.id),
    // reports: (parent: any, _args: any, context: any) => context.caseService.getReportsByCaseId(parent.id),
  },
  Client: {
    // user: (parent: any, _args: any, context: any) => context.userService.getUserById(parent.userId),
    // files: (parent: any, _args: any, context: any) => context.caseService.getFilesByClientId(parent.id),
    // reports: (parent: any, _args: any, context: any) => context.caseService.getReportsByClientId(parent.id),
  },
  Professional: {
    // user: (parent: any, _args: any, context: any) => context.userService.getUserById(parent.userId),
    // files: (parent: any, _args: any, context: any) => context.caseService.getFilesByProfessionalId(parent.id),
  },
  Chat: {
    messages: (parent: any) => parent.messages || [],
  },
};

export default resolvers;
