// src/graphql/queries/config.queries.ts
// Queries para gestión de configuraciones de landing y unidades (UnitConfig)

import { gql } from "@apollo/client";

// Obtiene una configuración por su ID
export const GET_CONFIGURATION_BY_ID = gql`
  query GetConfigurationById($id: ID!) {
    configuration(id: $id) {
      id
      name
      pageTitle
      servicesDescription
      pageDescription
      iconUrl
      bannerUrl
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

// Obtiene todas las configuraciones
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

// Obtiene los datos completos para renderizar una landing por token
export const LANDING_DATA_QUERY = gql`
  query LandingData($token: String!) {
    landingData(token: $token) {
      name
      pageTitle
      pageDescription
      servicesDescription
      iconUrl
      footerInfo
      bannerUrl
      sections {
        id
        title
        body
        order
        images {
          id
          url
          altText
          order
        }
      }
      articles {
        id
        title
        content
        url
        order
        publishedAt
      }
      images {
        id
        url
        altText
        type
        order
      }
      legalSteps {
        id
        title
        description
        order
      }
      footerLinks {
        id
        label
        url
        order
      }
    }
  }
`;
