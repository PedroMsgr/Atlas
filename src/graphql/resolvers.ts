// src/graphql/resolvers.ts

import { serverService } from '@/services/server.service';
import { tokenService } from '@/services/token.service';
import { configService } from '@/services/config.service';
import { generateLandingTSX } from '@/lib/landing-generator';
import { UnitConfigWithRelations } from '@/types/config.types';


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
    landingTSX: async (_: any, { token }: { token: string }) => {
      // 1) Validar token del unitario
      const server = await serverService.getServerByUnitToken(token);
      if (!server) {
        throw new Error('UnitToken inválido o servidor no encontrado');
      }
      if (!server.configId) {
        throw new Error('Este servidor no tiene configuración asignada');
      }

      // 2) Obtener la configuración completa desde el servicio
      const config = (await configService.getConfigById(
        server.configId
      )) as UnitConfigWithRelations | null;
      if (!config) {
        throw new Error('Configuración no encontrada');
      }

      // 3) Generar TSX a partir del objeto devuelto por el servicio
      const tsxString = generateLandingTSX(config);
      return tsxString;
    },
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
      pageType, 
      footerInfo, 
      legalStepsCount 
    }: { 
      name: string; 
      pageTitle: string;
      pageType: string;
      footerInfo?: string;
      legalStepsCount?: number;
    }) => {
      return await configService.createConfig({ 
        name, 
        pageTitle, 
        pageType, 
        footerInfo, 
        legalStepsCount 
      });
    },
    updateConfig: async (_: any, { 
      id, 
      name, 
      pageTitle, 
      pageType, 
      footerInfo, 
      legalStepsCount 
    }: { 
      id: string;
      name?: string;
      pageTitle?: string;
      pageType?: string;
      footerInfo?: string;
      legalStepsCount?: number;
    }) => {
      return await configService.updateConfig(id, { 
        name, 
        pageTitle, 
        pageType, 
        footerInfo, 
        legalStepsCount 
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
  },
};