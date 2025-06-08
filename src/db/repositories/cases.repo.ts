// src/db/repositories/cases.repo.ts
// Repositorio para gestión de casos legales (Case) en la base de datos.
// Proporciona métodos CRUD, paginación avanzada y filtros por usuario, estado, tags, etc.
// Incluye lógica para búsquedas complejas y relaciones con cliente, profesional, archivos, reportes, etc.

import { prisma } from "../prisma-client";
import { Case, CaseStatus } from "../../generated/prisma";

export class CasesRepository {
  // Obtiene todos los casos legales, incluyendo relaciones principales
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

  /**
   * Obtiene casos paginados y filtrados por múltiples criterios.
   * Permite filtrar por estado, profesional, cliente, servidor, tags, búsqueda textual y usuario profesional (userId).
   * El filtro 'onlyClient' permite distinguir si el filtro es exclusivo para clientes.
   * Devuelve el total de casos y la lista paginada, incluyendo relaciones anidadas.
   */
  async findAllPaginated({
    page = 1,
    pageSize = 20,
    status,
    professionalId,
    clientId,
    serverId,
    search,
    userId, // Filtro para filtrar por Professional.userId unicamente sus casos
    onlyClient, // <-- Añadido para distinguir filtro profesional/clientee
    tags,
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
    tags?: string[];
  }) {
    const where: any = {};
    // Filtros principales
    if (status) where.status = status;
    if (professionalId) where.professionalId = professionalId;
    if (clientId) where.clientId = clientId;
    if (serverId) where.serverId = serverId;
    // Filtro por usuario profesional (userId)
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
    // Filtro de búsqueda textual (nombre, email, etc)
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
    // Filtro por tags (array)
    if (tags && Array.isArray(tags) && tags.length > 0)
      where.tags = { hasSome: tags };
    // Consulta paginada y total
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

    // LOG de depuración: muestra la estructura de cliente, profesional y usuarios asociados
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
      data: {
        ...data,
        ...(data.tags ? { tags: { set: data.tags } } : {}),
      },
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

  async countCases(): Promise<number> {
    return prisma.case.count();
  }

  async countActiveCases(): Promise<number> {
    return prisma.case.count({
      where: { status: "inProgress" },
    });
  }

  async findRecentUpdated(limit: number = 5): Promise<Case[]> {
    return prisma.case.findMany({
      orderBy: { updatedAt: "desc" },
      take: limit,
      include: {
        client: { include: { user: true } },
        professional: { include: { user: true } },
        server: true,
      },
    });
  }
}
