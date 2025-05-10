import { serverService } from '../../services/server-service';
import { authService } from '../../services/auth-service';

export const resolvers = {  Query: {
    hello: () => 'Hello World!',
    servers: async (_: any, __: any, context: any) => {
      // Solo administradores y profesionales pueden ver todos los servidores
      if (!authService.hasPermission(context.session, ['admin', 'professional'])) {
        throw new Error('No tienes permisos para ver esta información');
      }
      return await serverService.getAllServers();
    },
    server: async (_: any, { id }: { id: string }, context: any) => {
      // Solo administradores y profesionales pueden ver detalles de un servidor
      if (!authService.hasPermission(context.session, ['admin', 'professional'])) {
        throw new Error('No tienes permisos para ver esta información');
      }
      return await serverService.getServerById(id);
    },
    constellations: async (_: any, __: any, context: any) => {
      // Solo administradores pueden ver constelaciones
      if (!authService.hasPermission(context.session, ['admin'])) {
        throw new Error('No tienes permisos para ver esta información');
      }
      return await serverService.getAllConstellations();
    },
    // Resolver para obtener el usuario actual
    me: async (_: any, __: any, context: any) => {
      return await authService.getCurrentUser(context.session);
    },
  },Mutation: {
    echo: (_: any, { message }: { message: string }) => message,
    createServer: async (_: any, { name, domain, constellationId }: { name: string; domain: string; constellationId?: string }, context: any) => {
      // Solo administradores pueden crear servidores
      if (!authService.hasPermission(context.session, ['admin'])) {
        throw new Error('No tienes permisos para crear servidores');
      }
      
      return await serverService.createServer({
        name,
        domain,
        constellationId,
      });
    },
    // Resolvers para autenticación
    login: async (_: any, { email, password }: { email: string; password: string }) => {
      return await authService.authenticateUser({ email, password });
    },
    logout: async () => {
      return await authService.logoutUser();
    },
  },
};