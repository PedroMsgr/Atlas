// src/db/repositories/users.repo.ts

import { User, Role } from "../../generated/prisma";
import { prisma } from "../prisma-client";

export class UsersRepository {
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

  async findById(id: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { id },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { email },
    });
  }

  async create(
    data: Omit<User, "id" | "createdAt" | "updatedAt">
  ): Promise<User> {
    return prisma.user.create({
      data,
    });
  }

  async update(id: string, data: Partial<User>): Promise<User> {
    return prisma.user.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<boolean> {
    try {
      await prisma.user.delete({ where: { id } });
      return true;
    } catch {
      return false;
    }
  }

  async countClients(): Promise<number> {
    return prisma.user.count({ where: { role: "client" } });
  }
}
