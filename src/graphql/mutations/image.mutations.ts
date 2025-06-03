// src/graphql-client/mutations/image.mutations.ts

import { gql } from '@apollo/client';

export const CREATE_IMAGE = gql`
  mutation CreateImage($data: ImageInput!) {
    createImage(data: $data) {
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

export const UPDATE_IMAGE = gql`
  mutation UpdateImage($id: ID!, $data: ImageInput!) {
    updateImage(id: $id, data: $data) {
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

export const DELETE_IMAGE = gql`
  mutation DeleteImage($id: ID!) {
    deleteImage(id: $id) {
      id
    }
  }
`;
