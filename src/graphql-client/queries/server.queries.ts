import { gql } from '@apollo/client';

export const GET_SERVERS = gql`
  query GetServers {
    servers {
      id
      name
      domain
      requiresUpdate
      isActive
      constellation {
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
      requiresUpdate
      isActive
      orchestratorToken
      unitToken
      constellation {
        id
        name
      }
      activeConfig {
        id
        name
      }
      createdAt
      updatedAt
    }
  }
`;
