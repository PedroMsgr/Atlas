import { serverService } from '@/services/server-service';


export const resolvers = {
  Query: {
    servers: async () => {
      return await serverService.getAllServers();
    },
    server: async (_: any, { id }: { id: string }) => {
      return await serverService.getServerById(id);
    },    constellations: async () => {
      return await serverService.getAllConstellations();
    },
    constellation: async (_: any, { id }: { id: string }) => {
      return await serverService.getConstellationById(id);
    },
  },
  Mutation: {
    createServer: async (_: any, { name, domain, constellationId }: { 
      name: string; 
      domain: string; 
      constellationId?: string;
    }) => {
      return await serverService.createServer({ name, domain, constellationId });
    },
    updateServer: async (_: any, { id, data }: { 
      id: string; 
      data: {
        name?: string;
        domain?: string;
        constellationId?: string;
        requiresUpdate?: boolean;
        isActive?: boolean;
      };
    }) => {
      return await serverService.updateServer(id, data);
    },
    deleteServer: async (_: any, { id }: { id: string }) => {
      return await serverService.deleteServer(id);
    },
  },
}; 