// src/graphql/queries/image.queries.ts
// Queries para gestión de imágenes (Image)

import { gql } from "@apollo/client";

// Obtiene una imagen por su ID
export const GET_IMAGE_BY_ID = gql`
  query GetImageById($id: ID!) {
    image(id: $id) {
      id
      configId
      url
      altText
      type
      order
      sectionId
    }
  }
`;

// Obtiene todas las imágenes asociadas a una configuración
export const GET_IMAGES_BY_CONFIG = gql`
  query GetImagesByConfig($configId: ID!) {
    imagesByConfig(configId: $configId) {
      id
      configId
      url
      altText
      type
      order
      sectionId
    }
  }
`;

// Obtiene todas las imágenes del sistema
export const GET_ALL_IMAGES = gql`
  query GetAllImages {
    images {
      id
      configId
      url
      altText
      type
      order
      sectionId
    }
  }
`;
