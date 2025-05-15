import { gql } from '@apollo/client';

export const GET_CONFIG = gql`
  query GetConfig($id: ID!) {
    config(id: $id) {
      id
      name
      pageTitle
      footerInfo
      legalStepsCount
      pageType
      sections {
        id
        type
        title
        content
        order
      }
      manualArticles {
        id
        title
        content
        publishedAt
      }
      autoSources {
        id
        name
        url
        type
        createdAt
      }
      images {
        id
        url
        altText
        type
        order
      }
    }
  }
`;

export const GET_CONFIGS = gql`
  query GetConfigs {
    configs {
      id
      name
      pageTitle
      pageType
      legalStepsCount
    }
  }
`;
