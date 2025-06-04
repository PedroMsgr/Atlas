// src/graphql/mutations/constellation.mutations.ts

import { gql } from '@apollo/client';

export const CREATE_CONSTELLATION = gql`
  mutation CreateConstellation($name: String!, $description: String) {
    createConstellation(name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

export const UPDATE_CONSTELLATION = gql`
  mutation UpdateConstellation($id: ID!, $name: String, $description: String) {
    updateConstellation(id: $id, name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

export const DELETE_CONSTELLATION = gql`
  mutation DeleteConstellation($id: ID!) {
    deleteConstellation(id: $id)
  }
`;
