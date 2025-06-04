// src/graphql/resolvers.ts

import GraphQLJSON from 'graphql-type-json';

const resolvers = {
  JSON: GraphQLJSON,

  Query: {
    // --- Servidores y constelaciones ---
    servers: async (_: any, _args: any, context: any) => {
      return context.serverService.getAllServers();
    },
    server: async (_: any, { id }: { id: string }, context: any) => {
      return context.serverService.getServerById(id);
    },
    constellations: async (_: any, _args: any, context: any) => {
      return context.serverService.getAllConstellations();
    },
    constellation: async (_: any, { id }: { id: string }, context: any) => {
      return context.serverService.getConstellationById(id);
    },

    // --- Configuraciones ---
    configurations: async (_: any, _args: any, context: any) => {
      return context.configService.getAllConfigs();
    },
    configuration: async (_: any, { id }: { id: string }, context: any) => {
      return context.configService.getConfigById(id);
    },

    // --- Landing pública por token ---
    landingData: async (_: any, { token }: { token: string }, context: any) => {
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
    sections: async (_: any, _args: any, context: any) => {
      return context.configService.getAllSections();
    },
    section: async (_: any, { id }: { id: string }, context: any) => {
      return context.configService.getSectionById(id);
    },
    sectionsByConfig: async (_: any, { configId }: { configId: string }, context: any) => {
      return context.configService.getSectionsByConfigId(configId);
    },

    // --- Artículos ---
    articles: async (_: any, _args: any, context: any) => {
      return context.configService.getAllArticles();
    },
    article: async (_: any, { id }: { id: string }, context: any) => {
      return context.configService.getArticleById(id);
    },
    articlesByConfig: async (_: any, { configId }: { configId: string }, context: any) => {
      return context.configService.getArticlesByConfigId(configId);
    },

    // --- Imágenes ---
    images: async (_: any, _args: any, context: any) => {
      return context.configService.getAllImages();
    },
    image: async (_: any, { id }: { id: string }, context: any) => {
      return context.configService.getImageById(id);
    },
    imagesByConfig: async (_: any, { configId }: { configId: string }, context: any) => {
      return context.configService.getImagesByConfigId(configId);
    },

    // --- Pasos legales ---
    legalSteps: async (_: any, _args: any, context: any) => {
      return context.configService.getAllLegalSteps();
    },
    legalStep: async (_: any, { id }: { id: string }, context: any) => {
      return context.configService.getLegalStepById(id);
    },
    legalStepsByConfig: async (_: any, { configId }: { configId: string }, context: any) => {
      return context.configService.getLegalStepsByConfig(configId);
    },

    // --- Enlaces de footer ---
    footerLinks: async (_: any, _args: any, context: any) => {
      return context.configService.getAllFooterLinks();
    },
    footerLink: async (_: any, { id }: { id: string }, context: any) => {
      return context.configService.getFooterLinkById(id);
    },
    footerLinksByConfig: async (_: any, { configId }: { configId: string }, context: any) => {
      return context.configService.getFooterLinksByConfig(configId);
    },

    // --- Generación de tokens de servidor ---
    generateServerTokens: async (_: any, { id }: { id: string }, context: any) => {
      const serverExists = await context.serverService.getServerById(id);
      if (!serverExists) {
        throw new Error(`No existe servidor con ID: ${id}`);
      }
      const orchestratorToken = await context.tokenService.generateOrchestratorTokenAsync();
      const unitToken = await context.tokenService.generateUnitTokenAsync();
      return { orchestratorToken, unitToken };
    },

    // --- Casos legales ---
    cases: async (_: any, args: { filters: any }, context: any) => {
      return context.caseService.getCasesPaginated(args.filters);
    },
    case: async (_: any, { id }: { id: string }, context: any) => {
      return context.caseService.getCaseById(id);
    },
  },

  // MUTATION RESOLVERS
  Mutation: {
    // ---- UnitConfig CRUD ----
    createConfig: async (_: any, { data }: { data: any }, context: any) => {
      return context.configService.createConfig(data);
    },
    updateConfig: async (_: any, { id, data }: { id: string; data: any }, context: any) => {
      return context.configService.updateConfig(id, data);
    },
    deleteConfig: async (_: any, { id }: { id: string }, context: any) => {
      await context.configService.deleteConfig(id);
      return true;
    },

    // ---- UnitServer CRUD ----
    createServer: async (
      _: any,
      { name, domain, constellationId }: { name: string; domain: string; constellationId: string },
      context: any
    ) => {
      return context.serverService.createServer({ name, domain, constellationId });
    },
    updateServer: async (_: any, { id, data }: { id: string; data: any }, context: any) => {
      return context.serverService.updateServer(id, data);
    },
    deleteServer: async (_: any, { id }: { id: string }, context: any) => {
      await context.serverService.deleteServer(id);
      return true;
    },
    updateServerTokens: async (
      _: any,
      { id, orchestratorToken, unitToken }: { id: string; orchestratorToken: string; unitToken: string },
      context: any
    ) => {
      return context.serverService.updateServerTokens(id, orchestratorToken, unitToken);
    },

    // ---- Constellation CRUD ----
    createConstellation: async (_: any, { name, description }: { name: string; description?: string }, context: any) => {
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

    // ---- Section CRUD ----
    createSection: async (_: any, { data }: { data: any }, context: any) => {
      return context.configService.createSection(data);
    },
    updateSection: async (_: any, { id, data }: { id: string; data: any }, context: any) => {
      return context.configService.updateSection(id, data);
    },
    deleteSection: async (_: any, { id }: { id: string }, context: any) => {
      await context.configService.deleteSection(id);
      return true;
    },

    // ---- Article CRUD ----
    createArticle: async (_: any, { data }: { data: any }, context: any) => {
      return context.configService.createArticle(data);
    },
    updateArticle: async (_: any, { id, data }: { id: string; data: any }, context: any) => {
      return context.configService.updateArticle(id, data);
    },
    deleteArticle: async (_: any, { id }: { id: string }, context: any) => {
      await context.configService.deleteArticle(id);
      return true;
    },

    // ---- Image CRUD ----
    createImage: async (_: any, { data }: { data: any }, context: any) => {
      return context.configService.createImage(data);
    },
    updateImage: async (_: any, { id, data }: { id: string; data: any }, context: any) => {
      return context.configService.updateImage(id, data);
    },
    deleteImage: async (_: any, { id }: { id: string }, context: any) => {
      await context.configService.deleteImage(id);
      return true;
    },

    // ---- LegalStep CRUD (sin iconUrl) ----
    createLegalStep: async (_: any, { data }: { data: any }, context: any) => {
      return context.configService.createLegalStep(data);
    },
    updateLegalStep: async (_: any, { id, data }: { id: string; data: any }, context: any) => {
      return context.configService.updateLegalStep(id, data);
    },
    deleteLegalStep: async (_: any, { id }: { id: string }, context: any) => {
      await context.configService.deleteLegalStep(id);
      return true;
    },

    // ---- FooterLink CRUD ----
    createFooterLink: async (_: any, { data }: { data: any }, context: any) => {
      return context.configService.createFooterLink(data);
    },
    updateFooterLink: async (_: any, { id, data }: { id: string; data: any }, context: any) => {
      return context.configService.updateFooterLink(id, data);
    },
    deleteFooterLink: async (_: any, { id }: { id: string }, context: any) => {
      await context.configService.deleteFooterLink(id);
      return true;
    },

    // ---- FullConfig (JSON) ----
    createFullConfig: async (_: any, { data }: { data: any }, context: any) => {
      return context.configService.createFullConfig(data);
    },
    updateFullConfig: async (_: any, { id, data }: { id: string; data: any }, context: any) => {
      return context.configService.updateFullConfig(id, data);
    },

    // ---- Caso CRUD ----
    createCase: async (_: any, { data }: { data: any }, context: any) => {
      return context.caseService.createCase(data);
    },
    updateCase: async (_: any, { id, data }: { id: string; data: any }, context: any) => {
      return context.caseService.updateCase(id, data);
    },
    deleteCase: async (_: any, { id }: { id: string }, context: any) => {
      await context.caseService.deleteCase(id);
      return true;
    },
    updateCaseStatus: async (_: any, { id, status }: { id: string; status: string }, context: any) => {
      return context.caseService.updateStatus(id, status);
    },
    assignProfessional: async (_: any, { id, professionalId }: { id: string; professionalId: string }, context: any) => {
      return context.caseService.assignProfessional(id, professionalId);
    },

    // ---- Archivos y reportes de caso ----
    addCaseFile: async (_: any, { caseId, file }: { caseId: string; file: any }, context: any) => {
      return context.caseService.addFile(caseId, file);
    },
    removeCaseFile: async (_: any, { fileId }: { fileId: string }, context: any) => {
      await context.caseService.removeFile(fileId);
      return true;
    },
    addCaseReport: async (_: any, { caseId, clientId, reason }: { caseId: string; clientId: string; reason: string }, context: any) => {
      return context.caseService.addReport(caseId, clientId, reason);
    },
    removeCaseReport: async (_: any, { reportId }: { reportId: string }, context: any) => {
      await context.caseService.removeReport(reportId);
      return true;
    },
  },

  // TYPE-LEVEL RESOLVERS
  UnitConfig: {
    sections: (parent: any, _args: any, context: any) =>
      context.configService.getSectionsByConfigId(parent.id),
    articles: (parent: any, _args: any, context: any) =>
      context.configService.getArticlesByConfigId(parent.id),
    images: (parent: any, _args: any, context: any) =>
      context.configService.getImagesByConfigId(parent.id),
    legalSteps: (parent: any, _args: any, context: any) =>
      context.configService.getLegalStepsByConfig(parent.id),
    footerLinks: (parent: any, _args: any, context: any) =>
      context.configService.getFooterLinksByConfig(parent.id),
    servers: (parent: any, _args: any, context: any) =>
      context.serverService.getAllServers().then((all: any[]) =>
        all.filter((srv) => srv.configId === parent.id)
      ),
  },

  Section: {
    config: (parent: any, _args: any, context: any) =>
      context.configService.getConfigById(parent.configId),
    images: (parent: any, _args: any, context: any) =>
      context.configService
        .getImagesByConfigId(parent.configId)
        .then((imgs: any[]) => imgs.filter((img) => img.sectionId === parent.id)),
  },

  Article: {
    config: (parent: any, _args: any, context: any) =>
      context.configService.getConfigById(parent.configId),
  },

  Image: {
    config: (parent: any, _args: any, context: any) =>
      context.configService.getConfigById(parent.configId),
    section: (parent: any, _args: any, context: any) =>
      parent.sectionId ? context.configService.getSectionById(parent.sectionId) : null,
  },

  LegalStep: {
    config: (parent: any, _args: any, context: any) =>
      context.configService.getConfigById(parent.configId),
  },

  FooterLink: {
    config: (parent: any, _args: any, context: any) =>
      context.configService.getConfigById(parent.configId),
  },

  UnitServer: {
    constellation: (parent: any, _args: any, context: any) =>
      parent.constellationId
        ? context.serverService.getConstellationById(parent.constellationId)
        : null,
    config: (parent: any, _args: any, context: any) =>
      parent.configId ? context.configService.getConfigById(parent.configId) : null,
  },

  Constellation: {
    servers: (parent: any, _args: any, context: any) =>
      context.serverService.getAllServers().then((all: any[]) =>
        all.filter((srv) => srv.constellationId === parent.id)
      ),
  },

  Case: {
    server: (parent: any, _args: any, context: any) =>
      context.serverService.getServerById(parent.serverId),
    // Si necesitas campos 'client' o 'professional', puedes descomentarlos e implementar el userService
    // client: (parent: any, _args: any, context: any) => context.userService.getClientById(parent.clientId),
    // professional: (parent: any, _args: any, context: any) => context.userService.getProfessionalById(parent.professionalId),
  },

  Client: {
    server: (parent: any, _args: any, context: any) =>
      context.serverService.getServerById(parent.serverId),
    // Si necesitas exponer 'user', descomenta e implementa:
    // user: (parent: any, _args: any, context: any) => context.userService.getUserById(parent.userId),
  },

  Professional: {
    server: (parent: any, _args: any, context: any) =>
      context.serverService.getServerById(parent.serverId),
    // Si necesitas exponer 'user', descomenta e implementa:
    // user: (parent: any, _args: any, context: any) => context.userService.getUserById(parent.userId),
  },

  Chat: {
    messages: (parent: any) => parent.messages || [],
  },
};

export default resolvers;
