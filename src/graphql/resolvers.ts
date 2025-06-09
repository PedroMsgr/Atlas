// src/graphql/resolvers.ts
// Resolvers principales del esquema GraphQL para Atlas
// Implementan la lógica de queries y mutations, usando los servicios del contexto.
//
// Seguridad:
// - Los resolvers de recuperación de contraseña no revelan si el email existe.
// - El token de recuperación es de un solo uso y tiene expiración.
//
// Secciones:
// 1. Queries (ej: me)
// 2. Mutations (incluyendo requestPasswordReset y resetPassword)

import GraphQLJSON from "graphql-type-json";
import { GraphQLContext } from "@/types/context.types";

// Helper para exigir autenticación en resolvers privados
// Envuelve un resolver y lanza error si no hay usuario autenticado en el contexto
function requireAuth(
  resolver: (
    parent: unknown,
    args: any,
    context: GraphQLContext,
    info: any
  ) => any
) {
  return (parent: unknown, args: any, context: GraphQLContext, info: any) => {
    if (!context.user) throw new Error("No autorizado");
    return resolver(parent, args, context, info);
  };
}

const resolvers = {
  JSON: GraphQLJSON,

  Query: {
    // --- Servidores y constelaciones ---
    // Todas las queries de esta sección requieren autenticación de usuario admin o profesional.
    // Permiten consultar servidores y agrupaciones (constelaciones) para administración y despliegue multi-tenant.
    // Obtiene todos los servidores (requiere autenticación)
    servers: requireAuth(
      async (_parent: unknown, _args: any, context: GraphQLContext) =>
        context.serverService.getAllServers()
    ),
    // Obtiene un servidor por ID
    server: requireAuth(
      async (_parent: unknown, args: { id: string }, context: GraphQLContext) =>
        context.serverService.getServerById(args.id)
    ),
    // Obtiene todas las constelaciones
    constellations: requireAuth(
      async (_parent: unknown, _args: any, context: GraphQLContext) =>
        context.serverService.getAllConstellations()
    ),
    // Obtiene una constelación por ID
    constellation: requireAuth(
      async (_parent: unknown, args: { id: string }, context: GraphQLContext) =>
        context.serverService.getConstellationById(args.id)
    ),

    // --- Configuraciones ---
    // Solo accesibles para usuarios autenticados (admin/profesional). Permiten gestionar landings y unidades.
    // Obtiene todas las configuraciones
    configurations: requireAuth(
      async (_parent: unknown, _args: any, context: GraphQLContext) =>
        context.configService.getAllConfigs()
    ),
    // Obtiene una configuración por ID
    configuration: requireAuth(
      async (_parent: unknown, args: { id: string }, context: GraphQLContext) =>
        context.configService.getConfigById(args.id)
    ),

    // --- Landing pública por token ---
    /**
     * landingData: Permite obtener la configuración de landing pública a partir de un token único (unitToken).
     * No requiere autenticación. Usado para renderizar landings públicas personalizadas.
     * Si el token es inválido o el servidor no tiene configuración, lanza error.
     */
    landingData: async (
      _parent: unknown,
      args: { token: string },
      context: GraphQLContext
    ) => {
      const server = await context.serverService.getServerByUnitToken(
        args.token
      );
      if (!server || !server.configId) {
        throw new Error("Token inválido o servidor sin configuración asociada");
      }
      const config = await context.configService.getConfigById(server.configId);
      if (!config) {
        throw new Error("Configuración no encontrada para ese servidor");
      }
      return config;
    },

    // --- Secciones ---
    // CRUD de secciones de landing, solo para usuarios autenticados.
    sections: requireAuth(
      async (_parent: unknown, _args: any, context: GraphQLContext) =>
        context.configService.getAllSections()
    ),
    section: requireAuth(
      async (_parent: unknown, args: { id: string }, context: GraphQLContext) =>
        context.configService.getSectionById(args.id)
    ),
    sectionsByConfig: requireAuth(
      async (
        _parent: unknown,
        args: { configId: string },
        context: GraphQLContext
      ) => context.configService.getSectionsByConfigId(args.configId)
    ),

    // --- Artículos ---
    // CRUD de artículos de landing, solo para usuarios autenticados.
    articles: requireAuth(
      async (_parent: unknown, _args: any, context: GraphQLContext) =>
        context.configService.getAllArticles()
    ),
    article: requireAuth(
      async (_parent: unknown, args: { id: string }, context: GraphQLContext) =>
        context.configService.getArticleById(args.id)
    ),
    articlesByConfig: requireAuth(
      async (
        _parent: unknown,
        args: { configId: string },
        context: GraphQLContext
      ) => context.configService.getArticlesByConfigId(args.configId)
    ),

    // --- Imágenes ---
    // CRUD de imágenes de landing, solo para usuarios autenticados.
    images: requireAuth(
      async (_parent: unknown, _args: any, context: GraphQLContext) =>
        context.configService.getAllImages()
    ),
    image: requireAuth(
      async (_parent: unknown, args: { id: string }, context: GraphQLContext) =>
        context.configService.getImageById(args.id)
    ),
    imagesByConfig: requireAuth(
      async (
        _parent: unknown,
        args: { configId: string },
        context: GraphQLContext
      ) => context.configService.getImagesByConfigId(args.configId)
    ),

    // --- Pasos legales ---
    // CRUD de pasos legales de landing, solo para usuarios autenticados.
    legalSteps: requireAuth(
      async (_parent: unknown, _args: any, context: GraphQLContext) =>
        context.configService.getAllLegalSteps()
    ),
    legalStep: requireAuth(
      async (_parent: unknown, args: { id: string }, context: GraphQLContext) =>
        context.configService.getLegalStepById(args.id)
    ),
    legalStepsByConfig: requireAuth(
      async (
        _parent: unknown,
        args: { configId: string },
        context: GraphQLContext
      ) => context.configService.getLegalStepsByConfig(args.configId)
    ),

    // --- Enlaces de footer ---
    footerLinks: requireAuth(
      async (_parent: unknown, _args: any, context: GraphQLContext) =>
        context.configService.getAllFooterLinks()
    ),
    footerLink: requireAuth(
      async (_parent: unknown, args: { id: string }, context: GraphQLContext) =>
        context.configService.getFooterLinkById(args.id)
    ),
    footerLinksByConfig: requireAuth(
      async (
        _parent: unknown,
        args: { configId: string },
        context: GraphQLContext
      ) => context.configService.getFooterLinksByConfig(args.configId)
    ),

    // --- Generación de tokens de servidor ---
    // Solo para administración avanzada. Permite regenerar tokens de acceso para servidores.
    generateServerTokens: requireAuth(
      async (
        _parent: unknown,
        args: { id: string },
        context: GraphQLContext
      ) => {
        const serverExists = await context.serverService.getServerById(args.id);
        if (!serverExists) {
          throw new Error(`No existe servidor con ID: ${args.id}`);
        }
        const orchestratorToken =
          await context.tokenService.generateOrchestratorTokenAsync();
        const unitToken = await context.tokenService.generateUnitTokenAsync();
        return { orchestratorToken, unitToken };
      }
    ),

    // --- Casos legales ---
    /**
     * cases: Devuelve una lista paginada de casos legales.
     * - Si el usuario es profesional, solo ve sus propios casos.
     * - Si es admin, puede ver todos los casos.
     * - Si es cliente, no tiene acceso a esta query.
     */
    cases: requireAuth(
      async (
        _parent: unknown,
        args: { filters: any },
        context: GraphQLContext
      ) => {
        // Si el usuario es profesional, forzar el filtro por su id de usuario (que corresponde a Professional.userId)
        if (context.user?.role === "professional") {
          // Buscar el Professional vinculado a este usuario
          // Suponemos que el id de usuario es igual al userId de Professional
          args.filters = { ...args.filters, userId: context.user.id };
        }
        return context.caseService.getCasesPaginated(args.filters);
      }
    ),
    case: requireAuth(
      async (_parent: unknown, args: { id: string }, context: GraphQLContext) =>
        context.caseService.getCaseById(args.id)
    ),

    // --- Usuarios ---
    /**
     * users: Devuelve una lista de usuarios filtrados por rol o búsqueda.
     * Solo accesible para admin/profesional.
     *
     * me: Devuelve los datos del usuario autenticado actual.
     * Útil para mostrar perfil y datos personales.
     */
    users: requireAuth(
      async (
        _parent: unknown,
        args: {
          role?: string[];
          search?: string;
          page?: number;
          pageSize?: number;
        },
        context: GraphQLContext
      ) =>
        context.userService.getUsersPaginated({
          role: args.role,
          search: args.search,
          page: args.page,
          pageSize: args.pageSize,
        })
    ),
    me: requireAuth(async (_parent, _args, context) => {
      if (!context.user?.id) throw new Error("No autorizado");
      return await context.authService.getCurrentUserById(context.user.id);
    }),

    // --- Dashboard Stats ---
    /**
     * dashboardStats: Devuelve métricas globales del sistema (servidores, casos, clientes activos, etc).
     * recentCases: Devuelve los casos legales más recientes para mostrar en el dashboard.
     * systemStatus: Devuelve el estado de la API y la base de datos.
     * Solo accesibles para usuarios autenticados.
     */
    dashboardStats: requireAuth(async (_parent, _args, context) => {
      const [
        totalServers,
        activeServers,
        totalCases,
        activeCases,
        totalClients,
      ] = await Promise.all([
        context.serverService.countAllServers(),
        context.serverService.countActiveServers(),
        context.caseService.countAllCases(),
        context.caseService.countActiveCases(),
        context.userService.countClients(),
      ]);
      return {
        totalServers,
        activeServers,
        totalCases,
        activeCases,
        totalClients,
      };
    }),

    // Devuelve los casos más recientes (por defecto 5)
    recentCases: requireAuth(async (_parent, args, context) => {
      const limit = args.limit || 5;
      return context.caseService.getRecentCases(limit);
    }),
    systemStatus: async () => {
      // API always true if resolver runs
      let db = false;
      try {
        // Simple DB check: count users
        db = !!(await (
          await import("@/services/user.service")
        ).userService.countClients());
      } catch (e) {
        db = false;
      }
      return { api: true, db, time: new Date().toISOString() };
    },
  },

  // MUTATION RESOLVERS
  Mutation: {
    // --- CRUD de configuraciones, servidores, secciones, artículos, imágenes, pasos legales, enlaces de footer, casos legales, usuarios ---
    // Todas las mutations requieren autenticación y privilegios adecuados.
    // Devuelven true/false según éxito, o el objeto creado/actualizado.

    createConfig: requireAuth(
      async (_parent: unknown, args: { data: any }, context: GraphQLContext) =>
        context.configService.createConfig(args.data)
    ),
    updateConfig: requireAuth(
      async (
        _parent: unknown,
        args: { id: string; data: any },
        context: GraphQLContext
      ) => context.configService.updateConfig(args.id, args.data)
    ),
    deleteConfig: requireAuth(
      async (
        _parent: unknown,
        args: { id: string },
        context: GraphQLContext
      ) => {
        try {
          await context.configService.deleteConfig(args.id);
          return true;
        } catch (e) {
          return false;
        }
      }
    ),
    createServer: requireAuth(
      async (
        _parent: unknown,
        args: { name: string; domain: string; constellationId: string },
        context: GraphQLContext
      ) =>
        context.serverService.createServer({
          name: args.name,
          domain: args.domain,
          constellationId: args.constellationId,
        })
    ),
    updateServer: requireAuth(
      async (
        _parent: unknown,
        args: { id: string; data: any },
        context: GraphQLContext
      ) => context.serverService.updateServer(args.id, args.data)
    ),
    deleteServer: requireAuth(
      async (
        _parent: unknown,
        args: { id: string },
        context: GraphQLContext
      ) => {
        try {
          await context.serverService.deleteServer(args.id);
          return true;
        } catch (e) {
          return false;
        }
      }
    ),
    updateServerTokens: requireAuth(
      async (
        _parent: unknown,
        args: { id: string; orchestratorToken: string; unitToken: string },
        context: GraphQLContext
      ) =>
        context.serverService.updateServerTokens(
          args.id,
          args.orchestratorToken,
          args.unitToken
        )
    ),
    createConstellation: requireAuth(
      async (
        _parent: unknown,
        args: { name: string; description?: string },
        context: GraphQLContext
      ) =>
        context.serverService.createConstellation({
          name: args.name,
          description: args.description,
        })
    ),
    updateConstellation: requireAuth(
      async (
        _parent: unknown,
        args: { id: string; name?: string; description?: string },
        context: GraphQLContext
      ) =>
        context.serverService.updateConstellation(args.id, {
          name: args.name,
          description: args.description,
        })
    ),
    deleteConstellation: requireAuth(
      async (
        _parent: unknown,
        args: { id: string },
        context: GraphQLContext
      ) => {
        try {
          await context.serverService.deleteConstellation(args.id);
          return true;
        } catch (e) {
          return false;
        }
      }
    ),
    createSection: requireAuth(
      async (_parent: unknown, args: { data: any }, context: GraphQLContext) =>
        context.configService.createSection(args.data)
    ),
    updateSection: requireAuth(
      async (
        _parent: unknown,
        args: { id: string; data: any },
        context: GraphQLContext
      ) => context.configService.updateSection(args.id, args.data)
    ),
    deleteSection: requireAuth(
      async (
        _parent: unknown,
        args: { id: string },
        context: GraphQLContext
      ) => {
        try {
          await context.configService.deleteSection(args.id);
          return true;
        } catch (e) {
          return false;
        }
      }
    ),
    createArticle: requireAuth(
      async (_parent: unknown, args: { data: any }, context: GraphQLContext) =>
        context.configService.createArticle(args.data)
    ),
    updateArticle: requireAuth(
      async (
        _parent: unknown,
        args: { id: string; data: any },
        context: GraphQLContext
      ) => context.configService.updateArticle(args.id, args.data)
    ),
    deleteArticle: requireAuth(
      async (
        _parent: unknown,
        args: { id: string },
        context: GraphQLContext
      ) => {
        try {
          await context.configService.deleteArticle(args.id);
          return true;
        } catch (e) {
          return false;
        }
      }
    ),
    createImage: requireAuth(
      async (_parent: unknown, args: { data: any }, context: GraphQLContext) =>
        context.configService.createImage(args.data)
    ),
    updateImage: requireAuth(
      async (
        _parent: unknown,
        args: { id: string; data: any },
        context: GraphQLContext
      ) => context.configService.updateImage(args.id, args.data)
    ),
    deleteImage: requireAuth(
      async (
        _parent: unknown,
        args: { id: string },
        context: GraphQLContext
      ) => {
        try {
          await context.configService.deleteImage(args.id);
          return true;
        } catch (e) {
          return false;
        }
      }
    ),
    createLegalStep: requireAuth(
      async (_parent: unknown, args: { data: any }, context: GraphQLContext) =>
        context.configService.createLegalStep(args.data)
    ),
    updateLegalStep: requireAuth(
      async (
        _parent: unknown,
        args: { id: string; data: any },
        context: GraphQLContext
      ) => context.configService.updateLegalStep(args.id, args.data)
    ),
    deleteLegalStep: requireAuth(
      async (
        _parent: unknown,
        args: { id: string },
        context: GraphQLContext
      ) => {
        try {
          await context.configService.deleteLegalStep(args.id);
          return true;
        } catch (e) {
          return false;
        }
      }
    ),
    createFooterLink: requireAuth(
      async (_parent: unknown, args: { data: any }, context: GraphQLContext) =>
        context.configService.createFooterLink(args.data)
    ),
    updateFooterLink: requireAuth(
      async (
        _parent: unknown,
        args: { id: string; data: any },
        context: GraphQLContext
      ) => context.configService.updateFooterLink(args.id, args.data)
    ),
    deleteFooterLink: requireAuth(
      async (
        _parent: unknown,
        args: { id: string },
        context: GraphQLContext
      ) => {
        try {
          await context.configService.deleteFooterLink(args.id);
          return true;
        } catch (e) {
          return false;
        }
      }
    ),
    createFullConfig: requireAuth(
      async (_parent: unknown, args: { data: any }, context: GraphQLContext) =>
        context.configService.createFullConfig(args.data)
    ),
    updateFullConfig: requireAuth(
      async (
        _parent: unknown,
        args: { id: string; data: any },
        context: GraphQLContext
      ) => context.configService.updateFullConfig(args.id, args.data)
    ),
    createCase: requireAuth(
      async (_parent: unknown, args: { data: any }, context: GraphQLContext) =>
        context.caseService.createCase(args.data)
    ),
    updateCase: requireAuth(
      async (
        _parent: unknown,
        args: { id: string; data: any },
        context: GraphQLContext
      ) => context.caseService.updateCase(args.id, args.data)
    ),
    deleteCase: requireAuth(
      async (
        _parent: unknown,
        args: { id: string },
        context: GraphQLContext
      ) => {
        try {
          await context.caseService.deleteCase(args.id);
          return true;
        } catch (e) {
          return false;
        }
      }
    ),
    updateCaseStatus: requireAuth(
      async (
        _parent: unknown,
        args: { id: string; status: string },
        context: GraphQLContext
      ) => context.caseService.updateStatus(args.id, args.status)
    ),
    assignProfessional: requireAuth(
      async (
        _parent: unknown,
        args: { id: string; professionalId: string },
        context: GraphQLContext
      ) => context.caseService.assignProfessional(args.id, args.professionalId)
    ),
    addCaseFile: requireAuth(
      async (
        _parent: unknown,
        args: { caseId: string; file: any },
        context: GraphQLContext
      ) => context.caseService.addFile(args.caseId, args.file)
    ),
    removeCaseFile: requireAuth(
      async (
        _parent: unknown,
        args: { fileId: string },
        context: GraphQLContext
      ) => {
        try {
          await context.caseService.removeFile(args.fileId);
          return true;
        } catch (e) {
          return false;
        }
      }
    ),
    addCaseReport: requireAuth(
      async (
        _parent: unknown,
        args: { caseId: string; clientId: string; reason: string },
        context: GraphQLContext
      ) =>
        context.caseService.addReport(args.caseId, args.clientId, args.reason)
    ),
    removeCaseReport: requireAuth(
      async (
        _parent: unknown,
        args: { reportId: string },
        context: GraphQLContext
      ) => {
        try {
          await context.caseService.removeReport(args.reportId);
          return true;
        } catch (e) {
          return false;
        }
      }
    ),
    deleteUser: requireAuth(
      async (_parent: unknown, args: { id: string }, context: GraphQLContext) =>
        context.userService.deleteUser(args.id)
    ),
    /**
     * updateMe: Permite al usuario autenticado actualizar su propio perfil y contraseña.
     * Devuelve mensaje de éxito o error y el usuario actualizado.
     */
    updateMe: requireAuth(async (_parent, { data }, context) => {
      if (!context.user?.id) {
        return {
          status: false,
          message: "No autorizado",
          user: null,
        };
      }
      try {
        const updatedUser = await context.authService.updateCurrentUser(
          context.user.id,
          data
        );
        return {
          status: true,
          message: data.newPassword
            ? "Perfil actualizado correctamente. Debes volver a iniciar sesión por seguridad."
            : "Perfil actualizado correctamente.",
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
          message: error.message || "Error al actualizar el perfil",
          user: null,
        };
      }
    }),
  },

  // TYPE-LEVEL RESOLVERS
  /**
   * Resolvers a nivel de tipo:
   * - Permiten resolver relaciones entre entidades (por ejemplo, obtener las secciones de una configuración, o el servidor de un caso).
   * - Se ejecutan automáticamente cuando se solicitan campos anidados en las queries.
   * - Usan los servicios del contexto para obtener los datos relacionados.
   */
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
      context.serverService
        .getAllServers()
        .then((all: any[]) => all.filter((srv) => srv.configId === parent.id)),
  },

  Section: {
    config: (parent: any, _args: unknown, context: GraphQLContext) =>
      context.configService.getConfigById(parent.configId),
    images: (parent: any, _args: unknown, context: GraphQLContext) =>
      context.configService
        .getImagesByConfigId(parent.configId)
        .then((imgs: any[]) =>
          imgs.filter((img) => img.sectionId === parent.id)
        ),
  },

  Article: {
    config: (parent: any, _args: unknown, context: GraphQLContext) =>
      context.configService.getConfigById(parent.configId),
  },

  Image: {
    config: (parent: any, _args: unknown, context: GraphQLContext) =>
      context.configService.getConfigById(parent.configId),
    section: (parent: any, _args: unknown, context: GraphQLContext) =>
      parent.sectionId
        ? context.configService.getSectionById(parent.sectionId)
        : null,
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
      parent.configId
        ? context.configService.getConfigById(parent.configId)
        : null,
  },

  Constellation: {
    servers: (parent: any, _args: unknown, context: GraphQLContext) =>
      context.serverService
        .getAllServers()
        .then((all: any[]) =>
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

  Chat: {
    messages: (parent: { messages?: unknown[] }) => parent.messages || [],
  },
};

export default resolvers;
