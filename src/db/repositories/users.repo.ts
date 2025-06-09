// src/db/repositories/users.repo.ts
// Repositorio para gestión de usuarios (User) en la base de datos.
// Permite obtener, crear, actualizar y eliminar usuarios, así como filtrar por rol y búsqueda textual.
// Incluye conteo de clientes y búsquedas por email.

import { User, Role } from "../../generated/prisma";
import { prisma } from "../prisma-client";

export class UsersRepository {
  // Obtiene todos los usuarios, con filtros opcionales por rol y búsqueda textual
  async findAll(role?: Role | Role[], search?: string): Promise<User[]> {
    const where: any = {};
    if (role) {
      if (Array.isArray(role)) {
        where.role = { in: role };
      } else {
        where.role = role;
      }
    }
    if (search && search.trim() !== "") {
      where.OR = [
        { firstName: { contains: search, mode: "insensitive" } },
        { lastName: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
      ];
    }
    return prisma.user.findMany({ where });
  }

  // Busca un usuario por su ID
  async findById(id: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { id },
    });
  }

  // Busca un usuario por su email
  async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { email },
    });
  }

  // Crea un nuevo usuario
  async create(
    data: Omit<User, "id" | "createdAt" | "updatedAt">
  ): Promise<User> {
    return prisma.user.create({
      data,
    });
  }

  // Actualiza un usuario existente
  async update(id: string, data: Partial<User>): Promise<User> {
    return prisma.user.update({
      where: { id },
      data,
    });
  }

  // Elimina un usuario por su ID. Devuelve true si se elimina correctamente, false si no existe.
  async delete(id: string): Promise<boolean> {
    try {
      await prisma.user.delete({ where: { id } });
      return true;
    } catch {
      return false;
    }
  }

  // Cuenta el número de usuarios con rol 'client'
  async countClients(): Promise<number> {
    return prisma.user.count({ where: { role: "client" } });
  }

  // Obtiene usuarios paginados, con filtros opcionales por rol y búsqueda textual
  async findAllPaginated({
    role,
    search,
    page = 1,
    pageSize = 10,
  }: {
    role?: Role | Role[];
    search?: string;
    page?: number;
    pageSize?: number;
  }): Promise<{
    results: User[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  }> {
    const where: any = {};
    if (role) {
      if (Array.isArray(role)) {
        where.role = { in: role };
      } else {
        where.role = role;
      }
    }
    if (search && search.trim() !== "") {
      where.OR = [
        { firstName: { contains: search, mode: "insensitive" } },
        { lastName: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
      ];
    }
    const skip = (page - 1) * pageSize;
    const [results, total] = await Promise.all([
      prisma.user.findMany({ where, skip, take: pageSize }),
      prisma.user.count({ where }),
    ]);
    const totalPages = Math.ceil(total / pageSize) || 1;
    return { results, total, page, pageSize, totalPages };
  }

  // Busca un usuario por su resetToken (para recuperación de contraseña)
  async findByResetToken(token: string): Promise<User | null> {
    return prisma.user.findFirst({
      where: { resetToken: token },
    });
  }
}
