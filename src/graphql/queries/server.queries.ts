// src/graphql/queries/server.queries.ts

import { gql } from '@apollo/client';

export const GET_SERVERS = gql`
  query GetServers {
    servers {
      id
      name
      domain
      isActive
      constellation {
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

export const GENERATE_SERVER_TOKENS = gql`
  query GenerateServerTokens($id: ID!) {
    generateServerTokens(id: $id) {
      orchestratorToken
      unitToken
    }
  }
`;


