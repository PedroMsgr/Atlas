// src/graphql/mutations/image.mutations.ts
// Mutations para gestión de imágenes (Image)

import { gql } from "@apollo/client";

// Crea una nueva imagen
export const CREATE_IMAGE = gql`
  mutation CreateImage($data: ImageInput!) {
    createImage(data: $data) {
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

// Actualiza una imagen existente
export const UPDATE_IMAGE = gql`
  mutation UpdateImage($id: ID!, $data: ImageInput!) {
    updateImage(id: $id, data: $data) {
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

// Elimina una imagen por su ID
export const DELETE_IMAGE = gql`
  mutation DeleteImage($id: ID!) {
    deleteImage(id: $id)
  }
`;
