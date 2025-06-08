// Tipos para servidores unitarios y sus relaciones.
// Permiten tipar los datos de servidores, incluyendo información básica, relaciones con constelaciones y configuraciones, y listados parciales para consultas específicas.
// Facilitan la gestión y consulta de servidores en la aplicación.

import { Constellation, UnitConfig } from "@/generated/prisma";

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

export interface UnitServerListItem {
  id: string;
  name: string;
  domain: string;
  isActive: boolean;
  constellation: {
    id: string | null;
    name: string | null;
  } | null;
  activeConfigId?: string | null;
  config?: {
    id: string;
    name: string;
  } | null;
  updatedAt: string;
}
