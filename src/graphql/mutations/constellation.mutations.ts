// src/graphql/mutations/constellation.mutations.ts
// Mutations para gestión de constelaciones (agrupaciones de servidores)

import { gql } from "@apollo/client";

// Crea una nueva constelación
export const CREATE_CONSTELLATION = gql`
  mutation CreateConstellation($name: String!, $description: String) {
    createConstellation(name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

// Actualiza una constelación existente
export const UPDATE_CONSTELLATION = gql`
  mutation UpdateConstellation($id: ID!, $name: String, $description: String) {
    updateConstellation(id: $id, name: $name, description: $description) {
      id
      name
      description
    }
  }
`;

// Elimina una constelación por su ID
export const DELETE_CONSTELLATION = gql`
  mutation DeleteConstellation($id: ID!) {
    deleteConstellation(id: $id)
  }
`;
