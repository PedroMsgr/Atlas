// src/graphql/mutations/article.mutations.ts
// Mutations para gestión de artículos (Article)

import { gql } from "@apollo/client";

// Crea un nuevo artículo asociado a una configuración
export const CREATE_ARTICLE = gql`
  mutation CreateArticle($data: ArticleInput!) {
    createArticle(data: $data) {
      id
      configId
      title
      content
      url
      publishedAt
    }
  }
`;

// Actualiza un artículo existente
export const UPDATE_ARTICLE = gql`
  mutation UpdateArticle($id: ID!, $data: ArticleInput!) {
    updateArticle(id: $id, data: $data) {
      id
      configId
      title
      content
      url
      publishedAt
    }
  }
`;

// Elimina un artículo por su ID
export const DELETE_ARTICLE = gql`
  mutation DeleteArticle($id: ID!) {
    deleteArticle(id: $id)
  }
`;
