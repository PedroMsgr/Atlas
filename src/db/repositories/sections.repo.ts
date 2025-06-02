// src/db/repositories/sections.repo.ts

import { Section, SectionType } from '../../generated/prisma';
import { prisma } from '../prisma-client';

export class SectionsRepository {
  async findAll(): Promise<Section[]> {
    return prisma.section.findMany({
      include: {
        config: true,
      },
    });
  }

  async findById(id: string): Promise<Section | null> {
    return prisma.section.findUnique({
      where: { id },
      include: {
        config: true,
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
        config: true,
      },
    });
  }


  async create(data: Omit<Section, 'id'>): Promise<Section> {
    return prisma.section.create({
      data,
      include: {
        config: true,
      },
    });
  }

  async update(id: string, data: Partial<Section>): Promise<Section> {
    return prisma.section.update({
      where: { id },
      data,
      include: {
        config: true,
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