// Tipos para casos, usuarios, profesionales, clientes y servidores usados en la gestión de casos.
// Permiten tipar las respuestas y entidades relacionadas con los casos legales en la aplicación.
// Incluyen los datos mínimos para listados y relaciones básicas.

import { CaseStatus } from "@/generated/prisma";

export interface CaseUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface CaseClient {
  id: string;
  user: CaseUser;
}

export interface CaseProfessional {
  id: string;
  user: CaseUser;
}

export interface CaseServer {
  id: string;
  name: string;
}

export interface CaseListItem {
  id: string;
  status: CaseStatus;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  client: CaseClient;
  professional: CaseProfessional;
  server: CaseServer;
}

export interface CaseListResponse {
  total: number;
  cases: CaseListItem[];
}
