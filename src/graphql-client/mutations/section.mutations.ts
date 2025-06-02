// src/graphql-client/mutations/section.mutations.ts

import { gql } from '@apollo/client';

export const CREATE_SECTION = gql`
  mutation CreateSection($data: SectionInput!) {
    createSection(data: $data) {
      id
      configId
      type
      title
      content
      order
      sectionKey
      mainImageId
    }
  }
`;

export const UPDATE_SECTION = gql`
  mutation UpdateSection($id: ID!, $data: SectionInput!) {
    updateSection(id: $id, data: $data) {
      id
      configId
      type
      title
      content
      order
      sectionKey
      mainImageId
    }
  }
`;

export const DELETE_SECTION = gql`
  mutation DeleteSection($id: ID!) {
    deleteSection(id: $id) {
      id
    }
  }
`;
