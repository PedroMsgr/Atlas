// src/db/repositories/cases.repo.ts

import { prisma } from "../prisma-client";
import { Case, CaseStatus } from "../../generated/prisma";

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

  async findAllPaginated({
    page = 1,
    pageSize = 20,
    status,
    professionalId,
    clientId,
    serverId,
    search,
    userId, // Nuevo filtro opcional para filtrar por Professional.userId
    onlyClient, // <-- Añadido para distinguir filtro pro
  }: {
    page?: number;
    pageSize?: number;
    status?: CaseStatus;
    professionalId?: string;
    clientId?: string;
    serverId?: string;
    search?: string;
    userId?: string;
    onlyClient?: boolean;
  }) {
    const where: any = {};
    if (status) where.status = status;
    if (professionalId) where.professionalId = professionalId;
    if (clientId) where.clientId = clientId;
    if (serverId) where.serverId = serverId;
    if (userId) {
      // Buscar el Professional vinculado a este userId
      const professional = await prisma.professional.findFirst({
        where: { userId },
      });
      if (professional) {
        where.professionalId = professional.id;
      } else {
        // Si no existe, devolver lista vacía
        return { total: 0, cases: [] };
      }
    }
    if (search) {
      const isEmail = search.includes("@");
      if (onlyClient) {
        where.OR = [
          {
            client: {
              user: { firstName: { contains: search, mode: "insensitive" } },
            },
          },
          {
            client: {
              user: { lastName: { contains: search, mode: "insensitive" } },
            },
          },
        ];
        if (isEmail) {
          where.OR.push({
            client: {
              user: { email: { contains: search, mode: "insensitive" } },
            },
          });
        }
      } else {
        where.OR = [
          {
            client: {
              user: { firstName: { contains: search, mode: "insensitive" } },
            },
          },
          {
            client: {
              user: { lastName: { contains: search, mode: "insensitive" } },
            },
          },
          {
            professional: {
              user: { firstName: { contains: search, mode: "insensitive" } },
            },
          },
          {
            professional: {
              user: { lastName: { contains: search, mode: "insensitive" } },
            },
          },
        ];
        if (isEmail) {
          where.OR.push(
            {
              client: {
                user: { email: { contains: search, mode: "insensitive" } },
              },
            },
            {
              professional: {
                user: { email: { contains: search, mode: "insensitive" } },
              },
            }
          );
        }
      }
    }
    const [total, cases] = await Promise.all([
      prisma.case.count({ where }),
      prisma.case.findMany({
        where,
        include: {
          client: { include: { user: true } },
          professional: { include: { user: true } },
          server: true,
          chat: true,
          files: true,
          reports: true,
        },
        orderBy: { updatedAt: "desc" },
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
    ]);

    // LOG de depuración: mostrar cliente, profesional y usuarios asociados
    // console.log('--- Casos recuperados ---');
    // cases.forEach(c => {
    //   console.log({
    //     id: c.id,
    //     status: c.status,
    //     client: c.client ? {
    //       id: c.client.id,
    //       user: c.client.user ? {
    //         id: c.client.user.id,
    //         email: c.client.user.email,
    //         firstName: c.client.user.firstName,
    //         lastName: c.client.user.lastName
    //       } : null
    //     } : null,
    //     professional: c.professional ? {
    //       id: c.professional.id,
    //       user: c.professional.user ? {
    //         id: c.professional.user.id,
    //         email: c.professional.user.email,
    //         firstName: c.professional.user.firstName,
    //         lastName: c.professional.user.lastName
    //       } : null
    //     } : null
    //   });
    // });
    // console.log('-------------------------');

    return { total, cases };
  }

  async findById(id: string): Promise<Case | null> {
    return prisma.case.findUnique({
      where: { id },
      include: {
        client: { include: { user: true } },
        professional: { include: { user: true } },
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

  async create(
    data: Omit<Case, "id" | "createdAt" | "updatedAt">
  ): Promise<Case> {
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

  async addFile(caseId: string, fileData: any) {
    return prisma.file.create({
      data: { ...fileData, caseId },
    });
  }

  async removeFile(fileId: string) {
    return prisma.file.delete({ where: { id: fileId } });
  }

  async addReport(caseId: string, clientId: string, reason: string) {
    return prisma.report.create({ data: { caseId, clientId, reason } });
  }

  async removeReport(reportId: string) {
    return prisma.report.delete({ where: { id: reportId } });
  }
}
