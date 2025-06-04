// src/graphql/queries/constellation.queries.ts

import { gql } from '@apollo/client';

export const GET_CONSTELLATIONS = gql`
  query GetConstellations {
    constellations {
      id
      name
      description
    }
  }
`;

export const GET_CONSTELLATION_BY_ID = gql`
  query GetConstellationById($id: ID!) {
    constellation(id: $id) {
      id
      name
      description
      servers {
        id
        name
        domain
        isActive
        requiresUpdate
      }
    }
  }
`;
