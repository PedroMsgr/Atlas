import { UpdateLog } from '../../generated/prisma';
import { prisma } from '../prisma-client';

export class UpdateLogsRepository {
  async findAll(): Promise<UpdateLog[]> {
    return prisma.updateLog.findMany({
      include: {
        server: true,
        config: true,
        previousConfig: true,
        initiator: true,
      },
    });
  }

  async findById(id: string): Promise<UpdateLog | null> {
    return prisma.updateLog.findUnique({
      where: { id },
      include: {
        server: true,
        config: true,
        previousConfig: true,
        initiator: true,
      },
    });
  }

  async findByServerId(serverId: string): Promise<UpdateLog[]> {
    return prisma.updateLog.findMany({
      where: { serverId },
      orderBy: {
        startedAt: 'desc',
      },
      include: {
        config: true,
        previousConfig: true,
        initiator: true,
      },
    });
  }

  async findByConfigId(configId: string): Promise<UpdateLog[]> {
    return prisma.updateLog.findMany({
      where: { configId },
      orderBy: {
        startedAt: 'desc',
      },
      include: {
        server: true,
        previousConfig: true,
        initiator: true,
      },
    });
  }

  async create(data: Omit<UpdateLog, 'id' | 'startedAt' | 'completedAt'>): Promise<UpdateLog> {
    return prisma.updateLog.create({
      data,
      include: {
        server: true,
        config: true,
        previousConfig: true,
        initiator: true,
      },
    });
  }

  async update(id: string, data: Partial<UpdateLog>): Promise<UpdateLog> {
    return prisma.updateLog.update({
      where: { id },
      data,
      include: {
        server: true,
        config: true,
        previousConfig: true,
        initiator: true,
      },
    });
  }

  async delete(id: string): Promise<UpdateLog> {
    return prisma.updateLog.delete({
      where: { id },
    });
  }

  async findByStatus(status: string): Promise<UpdateLog[]> {
    return prisma.updateLog.findMany({
      where: { status },
      orderBy: {
        startedAt: 'desc',
      },
      include: {
        server: true,
        config: true,
        previousConfig: true,
        initiator: true,
      },
    });
  }

  async completeUpdate(id: string, errorDetails?: string): Promise<UpdateLog> {
    return prisma.updateLog.update({
      where: { id },
      data: {
        completedAt: new Date(),
        errorDetails,
        status: errorDetails ? 'error' : 'completed',
      },
      include: {
        server: true,
        config: true,
        previousConfig: true,
        initiator: true,
      },
    });
  }

  async getPendingUpdates(): Promise<UpdateLog[]> {
    return prisma.updateLog.findMany({
      where: {
        completedAt: null,
      },
      orderBy: {
        startedAt: 'asc',
      },
      include: {
        server: true,
        config: true,
        previousConfig: true,
        initiator: true,
      },
    });
  }
} 