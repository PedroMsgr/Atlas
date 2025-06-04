import { CasesRepository } from '@/db/repositories/cases.repo';

const repo = new CasesRepository();

export class CaseService {
  static async getCasesPaginated(filters: any) {
    return repo.findAllPaginated(filters);
  }

  static async getCaseById(id: string) {
    return repo.findById(id);
  }

  static async createCase(data: any) {
    return repo.create(data);
  }

  static async updateCase(id: string, data: any) {
    return repo.update(id, data);
  }

  static async deleteCase(id: string) {
    return repo.delete(id);
  }

  static async updateStatus(id: string, status: any) {
    return repo.updateStatus(id, status);
  }

  static async assignProfessional(id: string, professionalId: string) {
    return repo.update(id, { professionalId });
  }

  static async addFile(caseId: string, fileData: any) {
    return repo.addFile(caseId, fileData);
  }

  static async removeFile(fileId: string) {
    return repo.removeFile(fileId);
  }

  static async addReport(caseId: string, clientId: string, reason: string) {
    return repo.addReport(caseId, clientId, reason);
  }

  static async removeReport(reportId: string) {
    return repo.removeReport(reportId);
  }
}
