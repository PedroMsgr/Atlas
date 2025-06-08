// Servicio para la gestión de casos legales.
// Centraliza la lógica de negocio para crear, actualizar, eliminar, asignar profesionales, gestionar archivos y reportes, y obtener listados o estadísticas de casos.
// Utiliza el repositorio de casos para acceder a la base de datos y expone métodos de alto nivel para los resolvers y controladores.

import { CasesRepository } from "@/db/repositories/cases.repo";

class CaseService {
  private repo: CasesRepository;

  constructor() {
    this.repo = new CasesRepository();
  }

  async getCasesPaginated(filters: any) {
    return this.repo.findAllPaginated(filters);
  }

  async getCaseById(id: string) {
    return this.repo.findById(id);
  }

  async createCase(data: any) {
    return this.repo.create(data);
  }

  async updateCase(id: string, data: any) {
    return this.repo.update(id, data);
  }

  async deleteCase(id: string) {
    return this.repo.delete(id);
  }

  async updateStatus(id: string, status: any) {
    return this.repo.updateStatus(id, status);
  }

  async assignProfessional(id: string, professionalId: string) {
    return this.repo.update(id, { professionalId });
  }

  async addFile(caseId: string, fileData: any) {
    return this.repo.addFile(caseId, fileData);
  }

  async removeFile(fileId: string) {
    return this.repo.removeFile(fileId);
  }

  async addReport(caseId: string, clientId: string, reason: string) {
    return this.repo.addReport(caseId, clientId, reason);
  }

  async removeReport(reportId: string) {
    return this.repo.removeReport(reportId);
  }

  async countAllCases() {
    return this.repo.countCases();
  }

  async countActiveCases() {
    return this.repo.countActiveCases();
  }

  async getRecentCases(limit: number = 5) {
    return this.repo.findRecentUpdated(limit);
  }
}

export const caseService = new CaseService();
