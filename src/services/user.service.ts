import { UsersRepository } from '../db/repositories/users.repo';
import { Role, User } from '../generated/prisma';

type CreateUserInput = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;
type UpdateUserInput = Partial<CreateUserInput>;

class UserService {
  private usersRepo = new UsersRepository();

  async getUsers(role?: string | string[], search?: string) {
    const validRoles = Object.values(Role);

    if (role !== undefined && role !== null) {
      if (Array.isArray(role)) {
        for (const r of role) {
          if (!validRoles.includes(r as Role)) {
            throw new Error(`El valor de role '${r}' no es válido. Debe ser uno de: ${validRoles.join(', ')}`);
          }
        }
        return this.usersRepo.findAll(role.map(r => r as Role), search);
      } else {
        if (!validRoles.includes(role as Role)) {
          throw new Error(`El valor de role '${role}' no es válido. Debe ser uno de: ${validRoles.join(', ')}`);
        }
        return this.usersRepo.findAll(role as Role, search);
      }
    }

    return this.usersRepo.findAll(undefined, search);
  }

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
}

export const userService = new UserService();
