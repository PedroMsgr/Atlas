// src/types/case.types.ts

import { CaseStatus } from '@/generated/prisma';

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
  client: CaseClient;
  professional: CaseProfessional;
  server: CaseServer;
}

export interface CaseListResponse {
  total: number;
  cases: CaseListItem[];
}
