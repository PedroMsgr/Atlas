// src/graphql/mutations/section.mutations.ts
// Mutations para gestión de secciones de landing (Section)

import { gql } from "@apollo/client";

// Crea una nueva sección
export const CREATE_SECTION = gql`
  mutation CreateSection($data: SectionInput!) {
    createSection(data: $data) {
      id
      configId
      title
      body
      imageUrl
      order
    }
  }
`;

// Actualiza una sección existente
export const UPDATE_SECTION = gql`
  mutation UpdateSection($id: ID!, $data: SectionInput!) {
    updateSection(id: $id, data: $data) {
      id
      configId
      title
      body
      imageUrl
      order
    }
  }
`;

// Elimina una sección por su ID
export const DELETE_SECTION = gql`
  mutation DeleteSection($id: ID!) {
    deleteSection(id: $id)
  }
`;
