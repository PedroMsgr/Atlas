import { Section, SectionType } from '../../generated/prisma';
import { prisma } from '../prisma-client';

export class SectionsRepository {
  async findAll(): Promise<Section[]> {
    return prisma.section.findMany({
      include: {
        config: true,
        server: true,
      },
    });
  }

  async findById(id: string): Promise<Section | null> {
    return prisma.section.findUnique({
      where: { id },
      include: {
        config: true,
        server: true,
      },
    });
  }

  async findByConfigId(configId: string): Promise<Section[]> {
    return prisma.section.findMany({
      where: { configId },
      orderBy: {
        order: 'asc',
      },
      include: {
        server: true,
      },
    });
  }

  async findByServerId(serverId: string): Promise<Section[]> {
    return prisma.section.findMany({
      where: { serverId },
      orderBy: {
        order: 'asc',
      },
      include: {
        config: true,
      },
    });
  }

  async create(data: Omit<Section, 'id'>): Promise<Section> {
    return prisma.section.create({
      data,
      include: {
        config: true,
        server: true,
      },
    });
  }

  async update(id: string, data: Partial<Section>): Promise<Section> {
    return prisma.section.update({
      where: { id },
      data,
      include: {
        config: true,
        server: true,
      },
    });
  }

  async delete(id: string): Promise<Section> {
    return prisma.section.delete({
      where: { id },
    });
  }

  async findByType(type: SectionType): Promise<Section[]> {
    return prisma.section.findMany({
      where: { type },
      include: {
        config: true,
        server: true,
      },
    });
  }

  async updateOrder(id: string, order: number): Promise<Section> {
    return prisma.section.update({
      where: { id },
      data: { order },
    });
  }
} 