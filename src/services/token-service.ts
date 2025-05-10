import crypto from 'crypto';

export class TokenService {
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
   * Genera un token para el orquestador
   * @returns Token seguro para el orquestador
   */
  generateOrchestratorToken(): string {
    return this.generateSecureToken('orch_');
  }
  
  /**
   * Genera un token para un servidor unitario
   * @returns Token seguro para un servidor unitario
   */
  generateUnitToken(): string {
    return this.generateSecureToken('unit_');
  }
}

export const tokenService = new TokenService();
