import { gql } from '@apollo/client';

export const CREATE_SERVER = gql`
  mutation CreateServer($name: String!, $domain: String!, $constellationId: String) {
    createServer(name: $name, domain: $domain, constellationId: $constellationId) {
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
    }
  }
`;

export const UPDATE_SERVER = gql`
  mutation UpdateServer($id: ID!, $data: ServerUpdateInput!) {
    updateServer(id: $id, data: $data) {
      id
      name
      domain
      requiresUpdate
      isActive
      updatedAt
    }
  }
`;

export const UPDATE_SERVER_TOKENS = gql`
  mutation UpdateServerTokens($id: ID!, $orchestratorToken: String!, $unitToken: String!) {
    updateServerTokens(id: $id, orchestratorToken: $orchestratorToken, unitToken: $unitToken) {
      id
      orchestratorToken
      unitToken
      updatedAt
    }
  }
`;



export const DELETE_SERVER = gql`
  mutation DeleteServer($id: ID!) {
    deleteServer(id: $id) {
      id
      name
    }
  }
`;
