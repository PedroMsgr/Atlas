import { User } from "@/generated/prisma";

// Enums
export enum ClientStatus {
  New = "new",
  Reviewing = "reviewing",
  Active = "active",
  Inactive = "inactive",
  Suspended = "suspended",
}

// Client types
export interface ClientBase {
  id: string;
  userId: string;
  serverId: string;
  status: ClientStatus;
}

export interface ClientWithRelations extends ClientBase {
  user: User;
  cases?: CaseBase[];
  files?: FileBase[];
  reports?: ReportBase[];
}

// Professional types
export interface ProfessionalBase {
  id: string;
  userId: string;
  serverId: string;
}

export interface ProfessionalWithRelations extends ProfessionalBase {
  user: User;
  cases?: CaseBase[];
  files?: FileBase[];
}

// Case types
export enum CaseStatus {
  Open = "open",
  InProgress = "inProgress",
  Pending = "pending",
  Closed = "closed",
}

export interface CaseBase {
  id: string;
  clientId: string;
  professionalId: string;
  serverId: string;
  status: CaseStatus;
  createdAt: string;
  updatedAt: string;
}

export interface CaseWithRelations extends CaseBase {
  client: ClientBase;
  professional: ProfessionalBase;
  chat?: ChatBase;
  files?: FileBase[];
  reports?: ReportBase[];
}

// Chat and Message types
export interface ChatBase {
  id: string;
  caseId: string;
  messages: MessageBase[];
}

export enum Sender {
  Client = "client",
  Professional = "professional",
}

export interface MessageBase {
  id: string;
  chatId: string;
  sender: Sender;
  content: string;
  date: string;
}

// File types
export interface FileBase {
  id: string;
  caseId: string;
  clientId?: string | null;
  professionalId?: string | null;
  name: string;
  url: string;
  type: string;
  date: string;
}

// Report types
export interface ReportBase {
  id: string;
  caseId: string;
  clientId: string;
  reason: string;
  createdAt: string;
}

// User types
export interface UserBase {
  id: string;
  email: string;
  password: string;
  role: Role;
  firstName: string;
  lastName: string;
  phone?: string | null;
  address?: string | null;
  avatarUrl?: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  lastLoginAt?: string | null;
}

export enum Role {
  CLIENT = "client",
  PROFESSIONAL = "professional",
  ADMIN = "admin",
}
