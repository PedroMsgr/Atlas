// src/graphql/queries/article.queries.ts
// Queries para gestión de artículos (Article)

import { gql } from "@apollo/client";

// Obtiene un artículo por su ID
export const GET_ARTICLE_BY_ID = gql`
  query GetArticleById($id: ID!) {
    article(id: $id) {
      id
      configId
      title
      content
      url
      publishedAt
    }
  }
`;

// Obtiene todos los artículos asociados a una configuración
export const GET_ARTICLES_BY_CONFIG = gql`
  query GetArticlesByConfig($configId: ID!) {
    articlesByConfig(configId: $configId) {
      id
      configId
      title
      content
      url
      publishedAt
    }
  }
`;

// Obtiene todos los artículos del sistema
export const GET_ALL_ARTICLES = gql`
  query GetAllArticles {
    articles {
      id
      configId
      title
      content
      url
      publishedAt
    }
  }
`;
