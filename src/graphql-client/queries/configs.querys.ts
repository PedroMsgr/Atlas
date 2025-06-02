// src/graphql-client/queries/configs.queries.ts

import { gql } from '@apollo/client';

export const GET_CONFIGURATION_BY_ID = gql`
  query GetConfigurationById($id: ID!) {
    configuration(id: $id) {
      id
      name
      pageTitle
      footerInfo
      updatedAt
      createdAt
      sections {
        id
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
      description
      bannerUrl
      seoTitle
      seoDescription
      seoKeywords
      sections {
        id
        title
        content
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
      id
      name
      pageTitle
      pageDescription
      servicesDescription
      footerInfo
      bannerUrl

      # Secciones
      sections {
        id
        configId
        title
        body
        imageUrl
        order
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

      # Artículos / Noticias
      articles {
        id
        configId
        title
        content
        url
        order
        publishedAt
      }

      # Imágenes Globales
      images {
        id
        configId
        url
        altText
        type
        order
        sectionId
      }

      # Pasos Legales
      legalSteps {
        id
        configId
        title
        description
        iconUrl
        order
      }

      # Enlaces de Footer
      footerLinks {
        id
        configId
        label
        url
        order
      }
    }
  }
`;
