// src/graphql/mutations/config.mutations.ts
// Mutations para gestión de configuraciones de landing y sus relaciones

import { gql } from "@apollo/client";

// Crea una nueva configuración de landing
export const CREATE_CONFIG = gql`
  mutation CreateConfig($data: CreateConfigInput!) {
    createConfig(data: $data) {
      id
      name
      pageTitle
      servicesDescription
      iconUrl
    }
  }
`;

// Actualiza una configuración existente
export const UPDATE_CONFIG = gql`
  mutation UpdateConfig($id: ID!, $data: UpdateConfigInput!) {
    updateConfig(id: $id, data: $data) {
      id
      name
      pageTitle
      servicesDescription
      iconUrl
      updatedAt
    }
  }
`;

// Elimina una configuración por su ID
export const DELETE_CONFIG = gql`
  mutation DeleteConfig($id: ID!) {
    deleteConfig(id: $id)
  }
`;

// Añade una sección a una configuración
export const ADD_SECTION = gql`
  mutation AddSection($configId: ID!, $data: SectionCreateInput!) {
    addSection(configId: $configId, data: $data) {
      id
      title
      type
      order
    }
  }
`;

// Añade un artículo manual a una configuración
export const ADD_MANUAL_ARTICLE = gql`
  mutation AddManualArticle($configId: ID!, $data: ManualArticleCreateInput!) {
    addManualArticle(configId: $configId, data: $data) {
      id
      title
      publishedAt
    }
  }
`;

// Añade una fuente automática de artículos a una configuración
export const ADD_AUTO_SOURCE = gql`
  mutation AddAutoSource($configId: ID!, $data: AutoSourceCreateInput!) {
    addAutoSource(configId: $configId, data: $data) {
      id
      name
      url
      type
    }
  }
`;

// Añade una imagen a una configuración
export const ADD_IMAGE = gql`
  mutation AddImage($configId: ID!, $data: ImageCreateInput!) {
    addImage(configId: $configId, data: $data) {
      id
      url
      altText
      type
    }
  }
`;
