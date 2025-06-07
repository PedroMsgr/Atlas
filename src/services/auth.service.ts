// src/services/auth-service.ts

import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UsersRepository } from '@/db/repositories/users.repo';

class AuthService {
  private usersRepo: UsersRepository;
  private readonly JWT_SECRET: string;
  private readonly JWT_EXPIRES_IN: string;

  constructor() {
    this.usersRepo = new UsersRepository();
    this.JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
    this.JWT_EXPIRES_IN = '24h';
  }

  /**
   * Autenticar un usuario mediante email y contraseña
   */
  async authenticateUser(credentials: { email: string; password: string }) {
    const { email, password } = credentials;
    
    // Verificar si las credenciales están presentes
    if (!email || !password) {
      return {
        success: false,
        message: 'Email y contraseña son requeridos'
      };
    }
    
    try {
      // Buscar el usuario en la base de datos
      const user = await this.usersRepo.findByEmail(email);
      
      // Verificar si el usuario existe y está activo
      if (!user || !user.isActive) {
        return {
          success: false,
          message: 'Credenciales inválidas'
        };
      }
      
      // Verificar si es un cliente (no pueden acceder al orquestador)
      if (user.role === 'client') {
        return {
          success: false,
          message: 'Los clientes no pueden acceder al orquestador'
        };
      }
      
      // Comparar las contraseñas
      const passwordMatch = await bcrypt.compare(password, user.password);
      
      if (!passwordMatch) {
        return {
          success: false,
          message: 'Credenciales inválidas'
        };
      }
      
      
      // Generar el token JWT
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
          role: user.role
        },
        process.env.JWT_SECRET || 'default-secret',
        { expiresIn: '24h' }
      );
      
      return {
        success: true,
        message: 'Inicio de sesión exitoso',
        user: {
          id: user.id,
          email: user.email,
          name: `${user.firstName} ${user.lastName}`,
          role: user.role,
          image: user.avatarUrl
        },
        token
      };
    } catch (error) {
      console.error('Error de autenticación:', error);
      return {
        success: false,
        message: 'Error interno del servidor'
      };
    }
  }
  
  /**
   * Obtener el usuario actual a partir del token JWT
   */
  async getCurrentUser(token: string | null) {
    if (!token) {
      return null;
    }

    try {
      const decoded = jwt.verify(token, this.JWT_SECRET) as {
        id: string;
        email: string;
        role: string;
      };

      const user = await this.usersRepo.findById(decoded.id);
      
      if (!user || !user.isActive) {
        return null;
      }

      return {
        id: user.id,
        email: user.email,
        name: `${user.firstName} ${user.lastName}`,
        role: user.role,
        image: user.avatarUrl
      };
    } catch (error) {
      console.error('Error al verificar token:', error);
      return null;
    }
  }

  /**
   * Verifica si el usuario tiene los roles requeridos
   */
  hasPermission(token: string | null, allowedRoles: string[]) {
    if (!token) {
      return false;
    }

    try {
      const decoded = jwt.verify(token, this.JWT_SECRET) as {
        role: string;
      };
      
      return allowedRoles.includes(decoded.role);
    } catch (error) {
      return false;
    }
  }

  /**
   * Obtener el usuario actual por ID
   */
  async getCurrentUserById(id: string) {
    const user = await this.usersRepo.findById(id);
    if (!user || !user.isActive) return null;
    return {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      avatarUrl: user.avatarUrl,
      isActive: user.isActive,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  /**
   * Actualizar datos del usuario autenticado
   */
  async updateCurrentUser(id: string, data: { firstName?: string; lastName?: string; email?: string; oldPassword?: string; newPassword?: string }) {
    const user = await this.usersRepo.findById(id);
    if (!user || !user.isActive) {
      throw new Error('Usuario no encontrado o inactivo');
    }

    // Validar email único si se cambia
    if (data.email && data.email !== user.email) {
      const existing = await this.usersRepo.findByEmail(data.email);
      if (existing && existing.id !== id) {
        throw new Error('El email ya está en uso por otro usuario');
      }
    }

    // Validar cambio de contraseña
    if (data.newPassword) {
      if (!data.oldPassword) {
        throw new Error('Debes ingresar tu contraseña actual para cambiar la contraseña');
      }
      const valid = await bcrypt.compare(data.oldPassword, user.password);
      if (!valid) {
        throw new Error('La contraseña actual es incorrecta');
      }
    }

    const updateData: any = {};
    if (data.firstName) updateData.firstName = data.firstName;
    if (data.lastName) updateData.lastName = data.lastName;
    if (data.email) updateData.email = data.email;
    if (data.newPassword) updateData.password = await bcrypt.hash(data.newPassword, 10);

    const updated = await this.usersRepo.update(id, updateData);
    return updated;
  }
}

export const authService = new AuthService();
