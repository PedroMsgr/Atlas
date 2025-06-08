// src/graphql/queries/server.queries.ts
// Queries para gestión de servidores (Server)

import { gql } from "@apollo/client";

// Obtiene todos los servidores
export const GET_SERVERS = gql`
  query GetServers {
    servers {
      id
      name
      domain
      isActive
      constellation {
        id
        name
      }
      configId
      config {
        id
        name
      }
      updatedAt
    }
  }
`;

// Obtiene un servidor por su ID
export const GET_SERVER_BY_ID = gql`
  query GetServerById($id: ID!) {
    server(id: $id) {
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
      config {
        id
        name
      }
      configId
      createdAt
      updatedAt
    }
  }
`;

// Genera nuevos tokens para un servidor
export const GENERATE_SERVER_TOKENS = gql`
  query GenerateServerTokens($id: ID!) {
    generateServerTokens(id: $id) {
      orchestratorToken
      unitToken
    }
  }
`;
