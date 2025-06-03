// src/graphql-client/mutations/article.mutations.ts

import { gql } from '@apollo/client';

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

export const DELETE_ARTICLE = gql`
  mutation DeleteArticle($id: ID!) {
    deleteArticle(id: $id) {
      id
    }
  }
`;
