// src/db/repositories/footerlinks.repo.ts
import { prisma } from '../prisma-client';
import { FooterLink } from '../../generated/prisma';

export class FooterLinksRepository {
  async findAll(): Promise<FooterLink[]> {
    return prisma.footerLink.findMany();
  }

  async findById(id: string): Promise<FooterLink | null> {
    return prisma.footerLink.findUnique({ where: { id } });
  }

  async findByConfigId(configId: string): Promise<FooterLink[]> {
    return prisma.footerLink.findMany({
      where: { configId },
      orderBy: { order: 'asc' },
    });
  }

  async create(data: Omit<FooterLink, 'id'>): Promise<FooterLink> {
    return prisma.footerLink.create({ data });
  }

  async update(id: string, data: Partial<FooterLink>): Promise<FooterLink> {
    return prisma.footerLink.update({ where: { id }, data });
  }

  async delete(id: string): Promise<FooterLink> {
    return prisma.footerLink.delete({ where: { id } });
  }
}
