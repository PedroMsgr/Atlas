// src/db/repositories/configs.repo.ts

import { UnitConfig, Prisma } from "../../generated/prisma";
import { prisma } from "../prisma-client";

export class ConfigsRepository {
  async findAll(): Promise<UnitConfig[]> {
    return prisma.unitConfig.findMany({
      include: {
        sections: { include: { images: true } },
        articles: true,
        images: true,
        legalSteps: true,
        footerLinks: true,
        servers: { select: { id: true, name: true, domain: true } },
      },
    });
  }

  async findById(id: string): Promise<UnitConfig | null> {
    return prisma.unitConfig.findUnique({
      where: { id },
      include: {
        sections: { include: { images: true } },
        articles: true,
        images: true,
        legalSteps: true,
        footerLinks: true,
        servers: { select: { id: true, name: true, domain: true } },
      },
    });
  }

  async findByName(name: string): Promise<UnitConfig | null> {
    return prisma.unitConfig.findUnique({
      where: { name },
      include: {
        sections: true,
        articles: true,
        images: true,
        legalSteps: true,
        footerLinks: true,
      },
    });
  }

  async create(data: Prisma.UnitConfigCreateInput): Promise<UnitConfig> {
    return prisma.unitConfig.create({
      data,
      include: {
        sections: true,
        articles: true,
        images: true,
        legalSteps: true,
        footerLinks: true,
      },
    });
  }

  async update(
    id: string,
    data: Prisma.UnitConfigUpdateInput
  ): Promise<UnitConfig> {
    return prisma.unitConfig.update({
      where: { id },
      data,
      include: {
        sections: true,
        articles: true,
        images: true,
        legalSteps: true,
        footerLinks: true,
      },
    });
  }

  async delete(id: string): Promise<UnitConfig> {
    return prisma.unitConfig.delete({ where: { id } });
  }
}
