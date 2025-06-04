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
      
      // Actualizar la última fecha de inicio de sesión
      await this.usersRepo.updateLastLogin(user.id);
      
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
}

export const authService = new AuthService();
