// Servicio para la gestión de usuarios.
// Centraliza la lógica para crear, actualizar, eliminar y consultar usuarios, así como filtrar por rol y realizar búsquedas.
// Facilita la gestión de usuarios y clientes en la aplicación, y expone métodos de alto nivel para resolvers y controladores.

import { UsersRepository } from "../db/repositories/users.repo";
import { Role, User } from "../generated/prisma";

type CreateUserInput = Omit<User, "id" | "createdAt" | "updatedAt">;
type UpdateUserInput = Partial<CreateUserInput>;

class UserService {
  private usersRepo = new UsersRepository();

  // async getUsers(role?: string | string[], search?: string) {
  //   const validRoles = Object.values(Role);

  //   if (role !== undefined && role !== null) {
  //     if (Array.isArray(role)) {
  //       for (const r of role) {
  //         if (!validRoles.includes(r as Role)) {
  //           throw new Error(
  //             `El valor de role '${r}' no es válido. Debe ser uno de: ${validRoles.join(
  //               ", "
  //             )}`
  //           );
  //         }
  //       }
  //       return this.usersRepo.findAll(
  //         role.map((r) => r as Role),
  //         search
  //       );
  //     } else {
  //       if (!validRoles.includes(role as Role)) {
  //         throw new Error(
  //           `El valor de role '${role}' no es válido. Debe ser uno de: ${validRoles.join(
  //             ", "
  //           )}`
  //         );
  //       }
  //       return this.usersRepo.findAll(role as Role, search);
  //     }
  //   }

  //   return this.usersRepo.findAll(undefined, search);
  // }

  async getUserById(id: string) {
    return this.usersRepo.findById(id);
  }

  async createUser(data: CreateUserInput) {
    return this.usersRepo.create(data);
  }

  async updateUser(id: string, data: UpdateUserInput) {
    return this.usersRepo.update(id, data);
  }

  async deleteUser(id: string) {
    return this.usersRepo.delete(id);
  }

  async countClients() {
    return this.usersRepo.countClients();
  }

  async getUsersPaginated({
    role,
    search,
    page = 1,
    pageSize = 5,
  }: {
    role?: string | string[];
    search?: string;
    page?: number;
    pageSize?: number;
  }) {
    const validRoles = Object.values(Role);
    let parsedRole: Role | Role[] | undefined = undefined;
    if (role !== undefined && role !== null) {
      if (Array.isArray(role)) {
        for (const r of role) {
          if (!validRoles.includes(r as Role)) {
            throw new Error(
              `El valor de role '${r}' no es válido. Debe ser uno de: ${validRoles.join(
                ", "
              )}`
            );
          }
        }
        parsedRole = role.map((r) => r as Role);
      } else {
        if (!validRoles.includes(role as Role)) {
          throw new Error(
            `El valor de role '${role}' no es válido. Debe ser uno de: ${validRoles.join(
              ", "
            )}`
          );
        }
        parsedRole = role as Role;
      }
    }
    return this.usersRepo.findAllPaginated({
      role: parsedRole,
      search,
      page,
      pageSize,
    });
  }
}

export const userService = new UserService();
