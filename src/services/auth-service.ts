import bcrypt from 'bcryptjs';
import { signIn, signOut } from 'next-auth/react';
import prisma from '@/lib/prisma';

export class AuthService {
  /**
   * Autenticar un usuario mediante email y contraseña
   */  async authenticateUser(credentials: { email: string; password: string }) {
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
      const user = await prisma.user.findUnique({
        where: { email }
      });
      
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
      await prisma.user.update({
        where: { id: user.id },
        data: { lastLoginAt: new Date() }
      });
      
      // En lugar de llamar a signIn aquí (ya que se hará desde el componente),
      // simplemente devolvemos la información del usuario autenticado
      return {
        success: true,
        message: 'Inicio de sesión exitoso',
        user: {
          id: user.id,
          email: user.email,
          name: `${user.firstName} ${user.lastName}`,
          role: user.role,
          image: user.avatarUrl
        }
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
   * Cerrar la sesión del usuario
   */
  async logoutUser() {
    try {
      await signOut({ redirect: false });
      return {
        success: true,
        message: 'Sesión cerrada correctamente'
      };
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      return {
        success: false,
        message: 'Error al cerrar la sesión'
      };
    }
  }
  
  /**
   * Obtener el usuario actual a partir de la sesión
   */  async getCurrentUser(session: any) {
    if (!session?.user) {
      return null;
    }
    
    return {
      id: session.user.id,
      email: session.user.email,
      name: session.user.name,
      role: session.user.role,
      image: session.user.image
    };
  }

  /**
   * Verifica si el usuario tiene los roles requeridos
   * @param session Sesión actual
   * @param allowedRoles Roles permitidos para la operación
   * @returns true si el usuario tiene permiso, false en caso contrario
   */
  hasPermission(session: any, allowedRoles: string[]) {
    if (!session?.user?.role) {
      return false;
    }
    
    return allowedRoles.includes(session.user.role);
  }
}

export const authService = new AuthService();
