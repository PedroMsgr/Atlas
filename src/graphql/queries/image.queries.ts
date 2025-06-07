// src/graphql/queries/image.querys.ts

import { gql } from "@apollo/client";

export const GET_IMAGE_BY_ID = gql`
  query GetImageById($id: ID!) {
    image(id: $id) {
      id
      configId
      url
      altText
      type
      order
      sectionId
    }
  }
`;

export const GET_IMAGES_BY_CONFIG = gql`
  query GetImagesByConfig($configId: ID!) {
    imagesByConfig(configId: $configId) {
      id
      configId
      url
      altText
      type
      order
      sectionId
    }
  }
`;

export const GET_ALL_IMAGES = gql`
  query GetAllImages {
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
`;
