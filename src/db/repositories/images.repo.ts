import { PrismaClient } from '@prisma/client';
import { Image } from '@prisma/client';

const prisma = new PrismaClient();

export class ImagesRepository {
  async findAll(): Promise<Image[]> {
    return prisma.image.findMany({
      include: {
        config: true,
      },
    });
  }

  async findById(id: string): Promise<Image | null> {
    return prisma.image.findUnique({
      where: { id },
      include: {
        config: true,
      },
    });
  }

  async findByConfigId(configId: string): Promise<Image[]> {
    return prisma.image.findMany({
      where: { configId },
      orderBy: {
        order: 'asc',
      },
    });
  }

  async create(data: Omit<Image, 'id'>): Promise<Image> {
    return prisma.image.create({
      data,
      include: {
        config: true,
      },
    });
  }

  async update(id: string, data: Partial<Image>): Promise<Image> {
    return prisma.image.update({
      where: { id },
      data,
      include: {
        config: true,
      },
    });
  }

  async delete(id: string): Promise<Image> {
    return prisma.image.delete({
      where: { id },
    });
  }

  async findByType(type: string): Promise<Image[]> {
    return prisma.image.findMany({
      where: { type },
      include: {
        config: true,
      },
    });
  }

  async updateOrder(id: string, order: number): Promise<Image> {
    return prisma.image.update({
      where: { id },
      data: { order },
    });
  }

  async findByAltText(altText: string): Promise<Image[]> {
    return prisma.image.findMany({
      where: {
        altText: {
          contains: altText,
          mode: 'insensitive',
        },
      },
      include: {
        config: true,
      },
    });
  }
} 