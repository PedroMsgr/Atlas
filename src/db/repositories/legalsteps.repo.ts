// src/db/repositories/legalsteps.repo.ts
import { prisma } from '../prisma-client';
import { LegalStep } from '../../generated/prisma';

export class LegalStepsRepository {
  async findAll(): Promise<LegalStep[]> {
    return prisma.legalStep.findMany();
  }

  async findById(id: string): Promise<LegalStep | null> {
    return prisma.legalStep.findUnique({ where: { id } });
  }

  async findByConfigId(configId: string): Promise<LegalStep[]> {
    return prisma.legalStep.findMany({
      where: { configId },
      orderBy: { order: 'asc' },
    });
  }

  async create(data: Omit<LegalStep, 'id'>): Promise<LegalStep> {
    return prisma.legalStep.create({ data });
  }

  async update(id: string, data: Partial<LegalStep>): Promise<LegalStep> {
    return prisma.legalStep.update({ where: { id }, data });
  }

  async delete(id: string): Promise<LegalStep> {
    return prisma.legalStep.delete({ where: { id } });
  }
}
