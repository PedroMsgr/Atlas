// src/graphql/mutations/server.mutations.ts
// Mutations para gestión de servidores y tokens

import { gql } from "@apollo/client";

// Crea un nuevo servidor
export const CREATE_SERVER = gql`
  mutation CreateServer(
    $name: String!
    $domain: String!
    $constellationId: String
  ) {
    createServer(
      name: $name
      domain: $domain
      constellationId: $constellationId
    ) {
      id
      name
      domain
      isActive
      orchestratorToken
      unitToken
      constellation {
        id
        name
      }
    }
  }
`;

// Actualiza un servidor existente
export const UPDATE_SERVER = gql`
  mutation UpdateServer($id: ID!, $data: ServerUpdateInput!) {
    updateServer(id: $id, data: $data) {
      id
      name
      domain
      isActive
      updatedAt
    }
  }
`;

// Actualiza la configuración asociada a un servidor
export const UPDATE_SERVER_CONFIG = gql`
  mutation UpdateServerConfig($id: ID!, $configId: ID!) {
    updateServer(id: $id, data: { configId: $configId }) {
      id
      name
      config {
        id
        name
      }
      updatedAt
    }
  }
`;

// Actualiza los tokens de un servidor
export const UPDATE_SERVER_TOKENS = gql`
  mutation UpdateServerTokens(
    $id: ID!
    $orchestratorToken: String!
    $unitToken: String!
  ) {
    updateServerTokens(
      id: $id
      orchestratorToken: $orchestratorToken
      unitToken: $unitToken
    ) {
      id
      orchestratorToken
      unitToken
      updatedAt
    }
  }
`;

// Elimina un servidor por su ID
export const DELETE_SERVER = gql`
  mutation DeleteServer($id: ID!) {
    deleteServer(id: $id)
  }
`;
