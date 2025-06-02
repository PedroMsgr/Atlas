// src/graphql-client/queries/article.querys.ts

import { gql } from '@apollo/client';

export const GET_ARTICLE_BY_ID = gql`
  query GetArticleById($id: ID!) {
    article(id: $id) {
      id
      configId
      title
      content
      publishedAt
    }
  }
`;

export const GET_ARTICLES_BY_CONFIG = gql`
  query GetArticlesByConfig($configId: ID!) {
    articlesByConfig(configId: $configId) {
      id
      configId
      title
      content
      publishedAt
    }
  }
`;

export const GET_ALL_ARTICLES = gql`
  query GetAllArticles {
    articles {
      id
      configId
      title
      content
      publishedAt
    }
  }
`;
