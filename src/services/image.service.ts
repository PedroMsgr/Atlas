// Servicio para la gestión de imágenes asociadas a configuraciones y secciones.
// Permite registrar, eliminar, actualizar y consultar imágenes, así como eliminar archivos asociados en Firebase.
// Centraliza la lógica de negocio relacionada con imágenes para su uso en resolvers y controladores.

import { ImagesRepository } from "@/db/repositories/images.repo";
import { deleteFirebaseFile } from "@/lib/deleteFirebaseFile";

class ImageService {
  private imagesRepo: ImagesRepository;

  constructor() {
    this.imagesRepo = new ImagesRepository();
  }

  /**
   * Registra una imagen en la base de datos
   */
  async registerImage(data: {
    url: string;
    altText?: string;
    type: string;
    configId: string;
    order?: number;
    sectionId?: string;
  }) {
    try {
      const image = await this.imagesRepo.create({
        url: data.url,
        altText: data.altText || "",
        type: data.type,
        configId: data.configId,
        order: data.order || 0,
        sectionId: data.sectionId || null,
      });
      return image;
    } catch (error) {
      throw new Error(
        "Error al registrar la imagen: " + (error as Error).message
      );
    }
  }

  /**
   * Elimina una imagen por ID y opcionalmente su archivo en Firebase
   */
  async deleteImage(id: string, url?: string) {
    try {
      if (url) {
        await deleteFirebaseFile(url);
      }
      return await this.imagesRepo.delete(id);
    } catch (error) {
      throw new Error(
        "Error al eliminar la imagen: " + (error as Error).message
      );
    }
  }

  /**
   * Obtiene imágenes por configId
   */
  async getImagesByConfig(configId: string) {
    try {
      return await this.imagesRepo.findByConfigId(configId);
    } catch (error) {
      throw new Error("Error al obtener imágenes: " + (error as Error).message);
    }
  }

  /**
   * Obtiene imágenes por tipo
   */
  async getImagesByType(type: string) {
    try {
      return await this.imagesRepo.findByType(type);
    } catch (error) {
      throw new Error(
        "Error al obtener imágenes por tipo: " + (error as Error).message
      );
    }
  }

  /**
   * Actualiza una imagen
   */
  async updateImage(
    id: string,
    data: Partial<{
      url: string;
      altText: string;
      type: string;
      order: number;
      sectionId: string;
    }>
  ) {
    try {
      return await this.imagesRepo.update(id, data);
    } catch (error) {
      throw new Error(
        "Error al actualizar la imagen: " + (error as Error).message
      );
    }
  }
}

export const imageService = new ImageService();
