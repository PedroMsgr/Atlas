// src/graphql/queries/section.queries.ts
// Queries para gestión de secciones de landing (Section)

import { gql } from "@apollo/client";

// Obtiene una sección por su ID
export const GET_SECTION_BY_ID = gql`
  query GetSectionById($id: ID!) {
    section(id: $id) {
      id
      configId
      title
      body
      imageUrl
      order
      images {
        id
        url
        altText
        type
        order
        sectionId
      }
    }
  }
`;

// Obtiene todas las secciones asociadas a una configuración
export const GET_SECTIONS_BY_CONFIG = gql`
  query GetSectionsByConfig($configId: ID!) {
    sectionsByConfig(configId: $configId) {
      id
      configId
      title
      body
      imageUrl
      order
      images {
        id
        url
        altText
        type
        order
        sectionId
      }
    }
  }
`;

// Obtiene todas las secciones del sistema
export const GET_ALL_SECTIONS = gql`
  query GetAllSections {
    sections {
      id
      configId
      title
      body
      imageUrl
      order
      images {
        id
        url
        altText
        type
        order
        sectionId
      }
    }
  }
`;
