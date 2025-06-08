// src/db/repositories/chats.repo.ts
// Repositorio para gestión de chats y mensajes en la base de datos.
// Permite obtener, crear y eliminar chats y mensajes, así como filtrar mensajes por remitente.

import { Chat, Message, Sender } from "../../generated/prisma";
import { prisma } from "../prisma-client";

export class ChatsRepository {
  // Busca un chat por su ID, incluyendo mensajes y caso asociado
  async findById(id: string): Promise<Chat | null> {
    return prisma.chat.findUnique({
      where: { id },
      include: {
        messages: {
          orderBy: {
            date: "asc",
          },
        },
        case: true,
      },
    });
  }

  // Busca un chat por el ID de caso
  async findByCaseId(caseId: string): Promise<Chat | null> {
    return prisma.chat.findUnique({
      where: { caseId },
      include: {
        messages: {
          orderBy: {
            date: "asc",
          },
        },
      },
    });
  }

  // Crea un chat para un caso
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

  // Elimina un chat por su ID
  async delete(id: string): Promise<Chat> {
    return prisma.chat.delete({
      where: { id },
    });
  }
}

export class MessagesRepository {
  // Busca un mensaje por su ID
  async findById(id: string): Promise<Message | null> {
    return prisma.message.findUnique({
      where: { id },
      include: {
        chat: true,
      },
    });
  }

  // Busca todos los mensajes de un chat, ordenados por fecha
  async findByChatId(chatId: string): Promise<Message[]> {
    return prisma.message.findMany({
      where: { chatId },
      orderBy: {
        date: "asc",
      },
    });
  }

  // Crea un mensaje en un chat
  async create(data: Omit<Message, "id" | "date">): Promise<Message> {
    return prisma.message.create({
      data,
      include: {
        chat: true,
      },
    });
  }

  // Elimina un mensaje por su ID
  async delete(id: string): Promise<Message> {
    return prisma.message.delete({
      where: { id },
    });
  }

  // Busca mensajes por remitente en un chat
  async findBySender(chatId: string, sender: Sender): Promise<Message[]> {
    return prisma.message.findMany({
      where: {
        chatId,
        sender,
      },
      orderBy: {
        date: "asc",
      },
    });
  }
}
