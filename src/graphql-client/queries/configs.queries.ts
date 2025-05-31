import { gql } from '@apollo/client';

export const GET_CONFIGURATION_BY_ID = gql`
  query GetConfigurationById($id: ID!) {
    configuration(id: $id) {
      id
      name
      pageTitle
      footerInfo
      legalStepsCount
      pageType
      updatedAt
      createdAt
      sections {
        id
        type
        title
        order
      }
      articles {
        id
        title
        publishedAt
      }
      images {
        id
        url
        altText
        type
        order
      }
      servers {
        id
        name
        domain
        isActive
      }
    }
  }
`;

export const GET_ALL_CONFIGURATIONS = gql`
  query GetAllConfigurations {
    configurations {
      id
      name
      pageTitle
      pageType
      updatedAt
      servers {
        id
        name
        domain
      }
    }
  }
`;
