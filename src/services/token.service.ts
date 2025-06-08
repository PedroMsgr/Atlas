// Servicio para la generación de tokens seguros y únicos para servidores y orquestadores.
// Utiliza criptografía para generar tokens aleatorios y verifica su unicidad en la base de datos.
// Expone métodos síncronos y asíncronos para compatibilidad y control de colisiones.

import crypto from "crypto";
import { ServersRepository } from "@/db/repositories/servers.repo";

class TokenService {
  private serversRepo = new ServersRepository();
  private maxAttempts = 100; // Número máximo de intentos para generar un token único

  // Genera un token seguro con el prefijo y longitud especificados
  generateSecureToken(prefix: string, length: number = 32): string {
    // Generamos bytes aleatorios criptográficamente seguros
    const randomBytes = crypto.randomBytes(length);
    // Convertimos a base64 y eliminamos caracteres especiales
    const token = randomBytes
      .toString("base64")
      .replace(/[+/=]/g, "") // Eliminamos caracteres especiales
      .slice(0, length); // Aseguramos que tenga el largo especificado
    return `${prefix}${token}`;
  }
  // Genera un token seguro y único con el prefijo especificado
  // Lanza error si no se puede generar un token único tras varios intentos
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
        throw new Error(
          `No se pudo generar un token único después de ${this.maxAttempts} intentos`
        );
      }
    } while (exists);
    return token;
  }

  // Genera un token único para el orquestador
  async generateOrchestratorTokenAsync(): Promise<string> {
    return this.generateUniqueToken("orch_", (token) =>
      this.serversRepo.orchestratorTokenExists(token)
    );
  }

  // Genera un token único para un servidor unitario
  async generateUnitTokenAsync(): Promise<string> {
    return this.generateUniqueToken("unit_", (token) =>
      this.serversRepo.unitTokenExists(token)
    );
  }
}

export const tokenService = new TokenService();
