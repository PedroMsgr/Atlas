// src/db/repositories/sections.repo.ts

import { Section } from '../../generated/prisma';
import { prisma } from '../prisma-client';

export class SectionsRepository {
  async findAll(): Promise<Section[]> {
    return prisma.section.findMany({
      include: { config: true, images: true },
    });
  }

  async findById(id: string): Promise<Section | null> {
    return prisma.section.findUnique({
      where: { id },
      include: { config: true, images: true },
    });
  }

  async findByConfigId(configId: string): Promise<Section[]> {
    return prisma.section.findMany({
      where: { configId },
      orderBy: { order: 'asc' },
      include: { config: true, images: true },
    });
  }

  async create(data: Omit<Section, 'id'>): Promise<Section> {
    return prisma.section.create({
      data,
      include: { config: true, images: true },
    });
  }

  async update(id: string, data: Partial<Section>): Promise<Section> {
    return prisma.section.update({
      where: { id },
      data,
      include: { config: true, images: true },
    });
  }

  async delete(id: string): Promise<Section> {
    return prisma.section.delete({ where: { id } });
  }
}