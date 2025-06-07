// src/graphql/mutations/section.mutations.ts

import { gql } from "@apollo/client";

export const CREATE_SECTION = gql`
  mutation CreateSection($data: SectionInput!) {
    createSection(data: $data) {
      id
      configId
      title
      body
      imageUrl
      order
    }
  }
`;

export const UPDATE_SECTION = gql`
  mutation UpdateSection($id: ID!, $data: SectionInput!) {
    updateSection(id: $id, data: $data) {
      id
      configId
      title
      body
      imageUrl
      order
    }
  }
`;

export const DELETE_SECTION = gql`
  mutation DeleteSection($id: ID!) {
    deleteSection(id: $id)
  }
`;
