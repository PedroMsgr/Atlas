import { File } from '../../generated/prisma';
import { prisma } from '../prisma-client';

export class FilesRepository {
  async findAll(): Promise<File[]> {
    return prisma.file.findMany({
      include: {
        case: true,
        client: true,
        professional: true,
      },
    });
  }

  async findById(id: string): Promise<File | null> {
    return prisma.file.findUnique({
      where: { id },
      include: {
        case: true,
        client: true,
        professional: true,
      },
    });
  }

  async findByCaseId(caseId: string): Promise<File[]> {
    return prisma.file.findMany({
      where: { caseId },
      include: {
        client: true,
        professional: true,
      },
    });
  }

  async findByClientId(clientId: string): Promise<File[]> {
    return prisma.file.findMany({
      where: { clientId },
      include: {
        case: true,
        professional: true,
      },
    });
  }

  async findByProfessionalId(professionalId: string): Promise<File[]> {
    return prisma.file.findMany({
      where: { professionalId },
      include: {
        case: true,
        client: true,
      },
    });
  }

  async create(data: Omit<File, 'id' | 'date'>): Promise<File> {
    return prisma.file.create({
      data,
      include: {
        case: true,
        client: true,
        professional: true,
      },
    });
  }

  async update(id: string, data: Partial<File>): Promise<File> {
    return prisma.file.update({
      where: { id },
      data,
      include: {
        case: true,
        client: true,
        professional: true,
      },
    });
  }

  async delete(id: string): Promise<File> {
    return prisma.file.delete({
      where: { id },
    });
  }

  async findByType(type: string): Promise<File[]> {
    return prisma.file.findMany({
      where: { type },
      include: {
        case: true,
        client: true,
        professional: true,
      },
    });
  }
} 