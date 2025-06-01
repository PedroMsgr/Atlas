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

export const GET_CONFIG_BY_UNIT_TOKEN = gql`
  query GetConfigByUnitToken($token: String!) {
    configByToken(token: $token) {
      id
      name
      pageTitle
      footerInfo
      legalStepsCount
      pageType
      description
      bannerUrl
      seoTitle
      seoDescription
      seoKeywords

      sections {
        id
        title
        content
        type
        order
        sectionKey
        mainImageId
        images {
          id
          url
          altText
          type
          order
        }
      }

      articles {
        id
        title
        content
        publishedAt
      }

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
`
