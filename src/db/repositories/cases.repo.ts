import { PrismaClient } from '@prisma/client';
import { Case, CaseStatus } from '@prisma/client';

const prisma = new PrismaClient();

export class CasesRepository {
  async findAll(): Promise<Case[]> {
    return prisma.case.findMany({
      include: {
        client: true,
        professional: true,
        server: true,
        chat: true,
        files: true,
        reports: true,
      },
    });
  }

  async findById(id: string): Promise<Case | null> {
    return prisma.case.findUnique({
      where: { id },
      include: {
        client: true,
        professional: true,
        server: true,
        chat: true,
        files: true,
        reports: true,
      },
    });
  }

  async findByClientId(clientId: string): Promise<Case[]> {
    return prisma.case.findMany({
      where: { clientId },
      include: {
        professional: true,
        server: true,
        chat: true,
      },
    });
  }

  async findByProfessionalId(professionalId: string): Promise<Case[]> {
    return prisma.case.findMany({
      where: { professionalId },
      include: {
        client: true,
        server: true,
        chat: true,
      },
    });
  }

  async create(data: Omit<Case, 'id' | 'createdAt' | 'updatedAt'>): Promise<Case> {
    return prisma.case.create({
      data,
      include: {
        client: true,
        professional: true,
        server: true,
      },
    });
  }

  async update(id: string, data: Partial<Case>): Promise<Case> {
    return prisma.case.update({
      where: { id },
      data,
      include: {
        client: true,
        professional: true,
        server: true,
      },
    });
  }

  async delete(id: string): Promise<Case> {
    return prisma.case.delete({
      where: { id },
    });
  }

  async updateStatus(id: string, status: CaseStatus): Promise<Case> {
    return prisma.case.update({
      where: { id },
      data: { status },
    });
  }

  async findByStatus(status: CaseStatus): Promise<Case[]> {
    return prisma.case.findMany({
      where: { status },
      include: {
        client: true,
        professional: true,
        server: true,
      },
    });
  }
} 