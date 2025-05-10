import { Constellation } from '../../generated/prisma';
import { prisma } from '../prisma-client';

export class ConstellationsRepository {
  async findAll(): Promise<Constellation[]> {
    return prisma.constellation.findMany({
      include: {
        servers: true,
      },
    });
  }

  async findById(id: string): Promise<Constellation | null> {
    return prisma.constellation.findUnique({
      where: { id },
      include: {
        servers: true,
      },
    });
  }

  async findByName(name: string): Promise<Constellation | null> {
    return prisma.constellation.findUnique({
      where: { name },
      include: {
        servers: true,
      },
    });
  }

  async create(data: Omit<Constellation, 'id'>): Promise<Constellation> {
    return prisma.constellation.create({
      data,
      include: {
        servers: true,
      },
    });
  }

  async update(id: string, data: Partial<Constellation>): Promise<Constellation> {
    return prisma.constellation.update({
      where: { id },
      data,
      include: {
        servers: true,
      },
    });
  }

  async delete(id: string): Promise<Constellation> {
    return prisma.constellation.delete({
      where: { id },
    });
  }

  async getServers(id: string): Promise<Constellation | null> {
    return prisma.constellation.findUnique({
      where: { id },
      include: {
        servers: {
          include: {
            activeConfig: true,
          },
        },
      },
    });
  }
} 