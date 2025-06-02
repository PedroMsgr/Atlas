// src/services/token-service.ts

import crypto from 'crypto';
import { ServersRepository } from '@/db/repositories/servers.repo';

export class TokenService {
  private serversRepo = new ServersRepository();
  private maxAttempts = 10; // Número máximo de intentos para generar un token único

  /**
   * Genera un token seguro con el prefijo especificado
   * @param prefix Prefijo para el token (ej: 'orch_', 'unit_')
   * @param length Longitud del token sin contar el prefijo
   * @returns Token seguro generado con el prefijo
   */
  generateSecureToken(prefix: string, length: number = 32): string {
    // Generamos bytes aleatorios criptográficamente seguros
    const randomBytes = crypto.randomBytes(length);
    
    // Convertimos a base64 y eliminamos caracteres especiales
    const token = randomBytes
      .toString('base64')
      .replace(/[+/=]/g, '')  // Eliminamos caracteres especiales
      .slice(0, length);       // Aseguramos que tenga el largo especificado
    
    return `${prefix}${token}`;
  }
  
  /**
   * Genera un token seguro con el prefijo especificado y verifica que sea único
   * @param prefix Prefijo para el token
   * @param checkExists Función para verificar si el token existe
   * @param length Longitud del token sin contar el prefijo
   * @returns Token seguro y único
   * @throws Error si no se puede generar un token único después del máximo de intentos
   */
  async generateUniqueToken(
    prefix: string, 
    checkExists: (token: string) => Promise<boolean>, 
    length: number = 32
  ): Promise<string> {
    let attempts = 0;
    let token: string;
    let exists: boolean;
    
    do {
      token = this.generateSecureToken(prefix, length);
      exists = await checkExists(token);
      attempts++;
      
      if (attempts >= this.maxAttempts && exists) {
        throw new Error(`No se pudo generar un token único después de ${this.maxAttempts} intentos`);
      }
    } while (exists);
    
    return token;
  }
  
  /**
   * Genera un token para el orquestador (versión sincrónica - para compatibilidad)
   * @deprecated Use generateOrchestratorTokenAsync para verificar unicidad
   * @returns Token seguro para el orquestador
   */
  generateOrchestratorToken(): string {
    return this.generateSecureToken('orch_');
  }
  
  /**
   * Genera un token único para el orquestador
   * @returns Token seguro y único para el orquestador
   */
  async generateOrchestratorTokenAsync(): Promise<string> {
    return this.generateUniqueToken(
      'orch_', 
      (token) => this.serversRepo.orchestratorTokenExists(token)
    );
  }
  
  /**
   * Genera un token para un servidor unitario (versión sincrónica - para compatibilidad)
   * @deprecated Use generateUnitTokenAsync para verificar unicidad
   * @returns Token seguro para un servidor unitario
   */
  generateUnitToken(): string {
    return this.generateSecureToken('unit_');
  }
    /**
   * Genera un token único para un servidor unitario
   * @returns Token seguro y único para un servidor unitario
   */
  async generateUnitTokenAsync(): Promise<string> {
    return this.generateUniqueToken(
      'unit_', 
      (token) => this.serversRepo.unitTokenExists(token)
    );
  }
}

export const tokenService = new TokenService();
