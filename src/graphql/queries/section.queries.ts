// src/graphql/queries/section.querys.ts

import { gql } from "@apollo/client";

export const GET_SECTION_BY_ID = gql`
  query GetSectionById($id: ID!) {
    section(id: $id) {
      id
      configId
      title
      body
      imageUrl
      order
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
`;

export const GET_SECTIONS_BY_CONFIG = gql`
  query GetSectionsByConfig($configId: ID!) {
    sectionsByConfig(configId: $configId) {
      id
      configId
      title
      body
      imageUrl
      order
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
`;

export const GET_ALL_SECTIONS = gql`
  query GetAllSections {
    sections {
      id
      configId
      title
      body
      imageUrl
      order
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
`;
