// src/graphql/resolvers.ts

import GraphQLJSON from 'graphql-type-json';
import { GraphQLContext } from '@/types/context.types';

// Helper para exigir autenticación en resolvers privados
function requireAuth(
  resolver: (
    parent: unknown,
    args: any,
    context: GraphQLContext,
    info: any
  ) => any
) {
  return (parent: unknown, args: any, context: GraphQLContext, info: any) => {
    if (!context.user) throw new Error('No autorizado');
    return resolver(parent, args, context, info);
  };
}

const resolvers = {
  JSON: GraphQLJSON,

  Query: {
    // --- Servidores y constelaciones ---
    servers: requireAuth(async (_parent: unknown, _args: any, context: GraphQLContext) => context.serverService.getAllServers()),
    server: requireAuth(async (_parent: unknown, args: { id: string }, context: GraphQLContext) => context.serverService.getServerById(args.id)),
    constellations: requireAuth(async (_parent: unknown, _args: any, context: GraphQLContext) => context.serverService.getAllConstellations()),
    constellation: requireAuth(async (_parent: unknown, args: { id: string }, context: GraphQLContext) => context.serverService.getConstellationById(args.id)),

    // --- Configuraciones ---
    configurations: requireAuth(async (_parent: unknown, _args: any, context: GraphQLContext) => context.configService.getAllConfigs()),
    configuration: requireAuth(async (_parent: unknown, args: { id: string }, context: GraphQLContext) => context.configService.getConfigById(args.id)),

    // --- Landing pública por token ---
    landingData: async (_parent: unknown, args: { token: string }, context: GraphQLContext) => {
      const server = await context.serverService.getServerByUnitToken(args.token);
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
    sections: requireAuth(async (_parent: unknown, _args: any, context: GraphQLContext) => context.configService.getAllSections()),
    section: requireAuth(async (_parent: unknown, args: { id: string }, context: GraphQLContext) => context.configService.getSectionById(args.id)),
    sectionsByConfig: requireAuth(async (_parent: unknown, args: { configId: string }, context: GraphQLContext) => context.configService.getSectionsByConfigId(args.configId)),

    // --- Artículos ---
    articles: requireAuth(async (_parent: unknown, _args: any, context: GraphQLContext) => context.configService.getAllArticles()),
    article: requireAuth(async (_parent: unknown, args: { id: string }, context: GraphQLContext) => context.configService.getArticleById(args.id)),
    articlesByConfig: requireAuth(async (_parent: unknown, args: { configId: string }, context: GraphQLContext) => context.configService.getArticlesByConfigId(args.configId)),

    // --- Imágenes ---
    images: requireAuth(async (_parent: unknown, _args: any, context: GraphQLContext) => context.configService.getAllImages()),
    image: requireAuth(async (_parent: unknown, args: { id: string }, context: GraphQLContext) => context.configService.getImageById(args.id)),
    imagesByConfig: requireAuth(async (_parent: unknown, args: { configId: string }, context: GraphQLContext) => context.configService.getImagesByConfigId(args.configId)),

    // --- Pasos legales ---
    legalSteps: requireAuth(async (_parent: unknown, _args: any, context: GraphQLContext) => context.configService.getAllLegalSteps()),
    legalStep: requireAuth(async (_parent: unknown, args: { id: string }, context: GraphQLContext) => context.configService.getLegalStepById(args.id)),
    legalStepsByConfig: requireAuth(async (_parent: unknown, args: { configId: string }, context: GraphQLContext) => context.configService.getLegalStepsByConfig(args.configId)),

    // --- Enlaces de footer ---
    footerLinks: requireAuth(async (_parent: unknown, _args: any, context: GraphQLContext) => context.configService.getAllFooterLinks()),
    footerLink: requireAuth(async (_parent: unknown, args: { id: string }, context: GraphQLContext) => context.configService.getFooterLinkById(args.id)),
    footerLinksByConfig: requireAuth(async (_parent: unknown, args: { configId: string }, context: GraphQLContext) => context.configService.getFooterLinksByConfig(args.configId)),

    // --- Generación de tokens de servidor ---
    generateServerTokens: requireAuth(async (_parent: unknown, args: { id: string }, context: GraphQLContext) => {
      const serverExists = await context.serverService.getServerById(args.id);
      if (!serverExists) {
        throw new Error(`No existe servidor con ID: ${args.id}`);
      }
      const orchestratorToken = await context.tokenService.generateOrchestratorTokenAsync();
      const unitToken = await context.tokenService.generateUnitTokenAsync();
      return { orchestratorToken, unitToken };
    }),

    // --- Casos legales ---
    cases: requireAuth(async (_parent: unknown, args: { filters: any }, context: GraphQLContext) => context.caseService.getCasesPaginated(args.filters)),
    case: requireAuth(async (_parent: unknown, args: { id: string }, context: GraphQLContext) => context.caseService.getCaseById(args.id)),

    // --- Usuarios ---
    users: requireAuth(async (_parent: unknown, args: { role?: string[]; search?: string }, context: GraphQLContext) => context.userService.getUsers(args.role, args.search)),
    me: requireAuth(async (_parent, _args, context) => {
      if (!context.user?.id) throw new Error('No autorizado');
      return await context.authService.getCurrentUserById(context.user.id);
    }),
  },

  // MUTATION RESOLVERS
  Mutation: {
    // ---- UnitConfig CRUD ----
    createConfig: requireAuth(async (_parent: unknown, args: { data: any }, context: GraphQLContext) => context.configService.createConfig(args.data)),
    updateConfig: requireAuth(async (_parent: unknown, args: { id: string; data: any }, context: GraphQLContext) => context.configService.updateConfig(args.id, args.data)),
    deleteConfig: requireAuth(async (_parent: unknown, args: { id: string }, context: GraphQLContext) => {
      try {
        await context.configService.deleteConfig(args.id);
        return true;
      } catch (e) {
        return false;
      }
    }),
    createServer: requireAuth(async (_parent: unknown, args: { name: string; domain: string; constellationId: string }, context: GraphQLContext) => context.serverService.createServer({ name: args.name, domain: args.domain, constellationId: args.constellationId })),
    updateServer: requireAuth(async (_parent: unknown, args: { id: string; data: any }, context: GraphQLContext) => context.serverService.updateServer(args.id, args.data)),
    deleteServer: requireAuth(async (_parent: unknown, args: { id: string }, context: GraphQLContext) => {
      try {
        await context.serverService.deleteServer(args.id);
        return true;
      } catch (e) {
        return false;
      }
    }),
    updateServerTokens: requireAuth(async (_parent: unknown, args: { id: string; orchestratorToken: string; unitToken: string }, context: GraphQLContext) => context.serverService.updateServerTokens(args.id, args.orchestratorToken, args.unitToken)),
    createConstellation: requireAuth(async (_parent: unknown, args: { name: string; description?: string }, context: GraphQLContext) => context.serverService.createConstellation({ name: args.name, description: args.description })),
    updateConstellation: requireAuth(async (_parent: unknown, args: { id: string; name?: string; description?: string }, context: GraphQLContext) => context.serverService.updateConstellation(args.id, { name: args.name, description: args.description })),
    deleteConstellation: requireAuth(async (_parent: unknown, args: { id: string }, context: GraphQLContext) => {
      try {
        await context.serverService.deleteConstellation(args.id);
        return true;
      } catch (e) {
        return false;
      }
    }),
    createSection: requireAuth(async (_parent: unknown, args: { data: any }, context: GraphQLContext) => context.configService.createSection(args.data)),
    updateSection: requireAuth(async (_parent: unknown, args: { id: string; data: any }, context: GraphQLContext) => context.configService.updateSection(args.id, args.data)),
    deleteSection: requireAuth(async (_parent: unknown, args: { id: string }, context: GraphQLContext) => {
      try {
        await context.configService.deleteSection(args.id);
        return true;
      } catch (e) {
        return false;
      }
    }),
    createArticle: requireAuth(async (_parent: unknown, args: { data: any }, context: GraphQLContext) => context.configService.createArticle(args.data)),
    updateArticle: requireAuth(async (_parent: unknown, args: { id: string; data: any }, context: GraphQLContext) => context.configService.updateArticle(args.id, args.data)),
    deleteArticle: requireAuth(async (_parent: unknown, args: { id: string }, context: GraphQLContext) => {
      try {
        await context.configService.deleteArticle(args.id);
        return true;
      } catch (e) {
        return false;
      }
    }),
    createImage: requireAuth(async (_parent: unknown, args: { data: any }, context: GraphQLContext) => context.configService.createImage(args.data)),
    updateImage: requireAuth(async (_parent: unknown, args: { id: string; data: any }, context: GraphQLContext) => context.configService.updateImage(args.id, args.data)),
    deleteImage: requireAuth(async (_parent: unknown, args: { id: string }, context: GraphQLContext) => {
      try {
        await context.configService.deleteImage(args.id);
        return true;
      } catch (e) {
        return false;
      }
    }),
    createLegalStep: requireAuth(async (_parent: unknown, args: { data: any }, context: GraphQLContext) => context.configService.createLegalStep(args.data)),
    updateLegalStep: requireAuth(async (_parent: unknown, args: { id: string; data: any }, context: GraphQLContext) => context.configService.updateLegalStep(args.id, args.data)),
    deleteLegalStep: requireAuth(async (_parent: unknown, args: { id: string }, context: GraphQLContext) => {
      try {
        await context.configService.deleteLegalStep(args.id);
        return true;
      } catch (e) {
        return false;
      }
    }),
    createFooterLink: requireAuth(async (_parent: unknown, args: { data: any }, context: GraphQLContext) => context.configService.createFooterLink(args.data)),
    updateFooterLink: requireAuth(async (_parent: unknown, args: { id: string; data: any }, context: GraphQLContext) => context.configService.updateFooterLink(args.id, args.data)),
    deleteFooterLink: requireAuth(async (_parent: unknown, args: { id: string }, context: GraphQLContext) => {
      try {
        await context.configService.deleteFooterLink(args.id);
        return true;
      } catch (e) {
        return false;
      }
    }),
    createFullConfig: requireAuth(async (_parent: unknown, args: { data: any }, context: GraphQLContext) => context.configService.createFullConfig(args.data)),
    updateFullConfig: requireAuth(async (_parent: unknown, args: { id: string; data: any }, context: GraphQLContext) => context.configService.updateFullConfig(args.id, args.data)),
    createCase: requireAuth(async (_parent: unknown, args: { data: any }, context: GraphQLContext) => context.caseService.createCase(args.data)),
    updateCase: requireAuth(async (_parent: unknown, args: { id: string; data: any }, context: GraphQLContext) => context.caseService.updateCase(args.id, args.data)),
    deleteCase: requireAuth(async (_parent: unknown, args: { id: string }, context: GraphQLContext) => {
      try {
        await context.caseService.deleteCase(args.id);
        return true;
      } catch (e) {
        return false;
      }
    }),
    updateCaseStatus: requireAuth(async (_parent: unknown, args: { id: string; status: string }, context: GraphQLContext) => context.caseService.updateStatus(args.id, args.status)),
    assignProfessional: requireAuth(async (_parent: unknown, args: { id: string; professionalId: string }, context: GraphQLContext) => context.caseService.assignProfessional(args.id, args.professionalId)),
    addCaseFile: requireAuth(async (_parent: unknown, args: { caseId: string; file: any }, context: GraphQLContext) => context.caseService.addFile(args.caseId, args.file)),
    removeCaseFile: requireAuth(async (_parent: unknown, args: { fileId: string }, context: GraphQLContext) => {
      try {
        await context.caseService.removeFile(args.fileId);
        return true;
      } catch (e) {
        return false;
      }
    }),
    addCaseReport: requireAuth(async (_parent: unknown, args: { caseId: string; clientId: string; reason: string }, context: GraphQLContext) => context.caseService.addReport(args.caseId, args.clientId, args.reason)),
    removeCaseReport: requireAuth(async (_parent: unknown, args: { reportId: string }, context: GraphQLContext) => {
      try {
        await context.caseService.removeReport(args.reportId);
        return true;
      } catch (e) {
        return false;
      }
    }),
    deleteUser: requireAuth(async (_parent: unknown, args: { id: string }, context: GraphQLContext) => context.userService.deleteUser(args.id)),
    updateMe: requireAuth(async (_parent, { data }, context) => {
      if (!context.user?.id) {
        return {
          status: false,
          message: 'No autorizado',
          user: null,
        };
      }
      try {
        const updatedUser = await context.authService.updateCurrentUser(context.user.id, data);
        return {
          status: true,
          message: data.newPassword
            ? 'Perfil actualizado correctamente. Debes volver a iniciar sesión por seguridad.'
            : 'Perfil actualizado correctamente.',
          user: {
            id: updatedUser.id,
            email: updatedUser.email,
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            role: updatedUser.role,
            avatarUrl: updatedUser.avatarUrl,
            isActive: updatedUser.isActive,
            createdAt: updatedUser.createdAt,
            updatedAt: updatedUser.updatedAt,
          },
        };
      } catch (error: any) {
        return {
          status: false,
          message: error.message || 'Error al actualizar el perfil',
          user: null,
        };
      }
    }),
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
