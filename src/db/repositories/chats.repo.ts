import { Chat, Message, Sender } from '../../generated/prisma';
import { prisma } from '../prisma-client';

export class ChatsRepository {
  async findById(id: string): Promise<Chat | null> {
    return prisma.chat.findUnique({
      where: { id },
      include: {
        messages: {
          orderBy: {
            date: 'asc',
          },
        },
        case: true,
      },
    });
  }

  async findByCaseId(caseId: string): Promise<Chat | null> {
    return prisma.chat.findUnique({
      where: { caseId },
      include: {
        messages: {
          orderBy: {
            date: 'asc',
          },
        },
      },
    });
  }

  async create(caseId: string): Promise<Chat> {
    return prisma.chat.create({
      data: {
        caseId,
      },
      include: {
        messages: true,
      },
    });
  }

  async delete(id: string): Promise<Chat> {
    return prisma.chat.delete({
      where: { id },
    });
  }
}

export class MessagesRepository {
  async findById(id: string): Promise<Message | null> {
    return prisma.message.findUnique({
      where: { id },
      include: {
        chat: true,
      },
    });
  }

  async findByChatId(chatId: string): Promise<Message[]> {
    return prisma.message.findMany({
      where: { chatId },
      orderBy: {
        date: 'asc',
      },
    });
  }

  async create(data: Omit<Message, 'id' | 'date'>): Promise<Message> {
    return prisma.message.create({
      data,
      include: {
        chat: true,
      },
    });
  }

  async delete(id: string): Promise<Message> {
    return prisma.message.delete({
      where: { id },
    });
  }

  async findBySender(chatId: string, sender: Sender): Promise<Message[]> {
    return prisma.message.findMany({
      where: {
        chatId,
        sender,
      },
      orderBy: {
        date: 'asc',
      },
    });
  }
} 