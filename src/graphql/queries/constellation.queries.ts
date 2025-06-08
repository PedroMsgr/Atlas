// src/graphql/queries/constellation.queries.ts
// Queries para gestión de constelaciones (agrupaciones de servidores)

import { gql } from "@apollo/client";

// Obtiene todas las constelaciones
export const GET_CONSTELLATIONS = gql`
  query GetConstellations {
    constellations {
      id
      name
      description
    }
  }
`;

// Obtiene una constelación por su ID, incluyendo servidores asociados
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
