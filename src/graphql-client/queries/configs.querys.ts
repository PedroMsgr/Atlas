// src/graphql-client/queries/configs.queries.ts

import { gql } from '@apollo/client';

export const GET_CONFIGURATION_BY_ID = gql`
  query GetConfigurationById($id: ID!) {
    configuration(id: $id) {
      id
      name
      pageTitle
      footerInfo
      legalStepsCount
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
    landingData(token: $token) {
      id
      name
      pageTitle
      footerInfo
      legalStepsCount
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
export const LANDING_DATA_QUERY = gql`
  query LandingData($token: String!) {
    landingData(token: $token) {
      pageTitle
      subtitle
      description
      iconUrl
      bannerUrl
      seoTitle
      seoDescription
      seoKeywords
      ogImage
      headerLinks
      footerLinks
      footerInfo
      legalStepsCount
      externalLinks
      newsParams
      selectedNews
      infoSections
      sections {
        id
        configId
        type
        title
        content
        order
        sectionKey
        mainImageId
        images {
          id
          configId
          url
          altText
          type
          order
          sectionId
        }
      }
      articles {
        id
        configId
        title
        content
        publishedAt
      }
      images {
        id
        configId
        url
        altText
        type
        order
        sectionId
      }
    }
  }
`