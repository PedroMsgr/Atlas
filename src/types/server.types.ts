import { Constellation, UnitConfig } from "../generated/prisma";

// Interfaces para los servidores unitarios
export interface UnitServerBase {
  id: string;
  name: string;
  domain: string;
  isActive?: boolean;
  constellationId: string;
  activeConfigId?: string | null;
  orchestratorToken: string;
  unitToken: string;
  updatedAt: string;
  createdAt?: string;
}

export interface UnitServerWithRelations extends UnitServerBase {
  constellation?: Constellation | null;
  activeConfig?: UnitConfig | null;
}

// Para consultas específicas donde solo necesitas datos parciales
export interface UnitServerListItem {
  id: string;
  name: string;
  domain: string;
  isActive: boolean;
  constellation: {
    name: string | null;
  } | null;
  configId?: string | null;
  config?: {
    id: string;
    name: string;
  } | null;
  updatedAt: string;
}
