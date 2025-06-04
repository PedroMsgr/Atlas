// src/graphql/queries/user.queries.ts

import { gql } from '@apollo/client';

export const GET_CLIENTS = gql`
  query GetClients($serverId: ID) {
    clients(serverId: $serverId) {
      id
      status
      user {
        id
        firstName
        lastName
        email
        phone
        isActive
        lastLoginAt
      }
      server {
        id
        name
      }
    }
  }
`;

export const GET_CLIENT = gql`
  query GetClient($id: ID!) {
    client(id: $id) {
      id
      status
      user {
        id
        firstName
        lastName
        email
        phone
        address
        isActive
        createdAt
        lastLoginAt
      }
      server {
        id
        name
      }
      cases {
        id
        status
        createdAt
        professional {
          id
          user {
            firstName
            lastName
          }
        }
      }
    }
  }
`;

export const GET_PROFESSIONALS = gql`
  query GetProfessionals($serverId: ID) {
    professionals(serverId: $serverId) {
      id
      user {
        id
        firstName
        lastName
        email
        phone
        isActive
        lastLoginAt
      }
    }
  }
`;

export const GET_PROFESSIONAL = gql`
  query GetProfessional($id: ID!) {
    professional(id: $id) {
      id
      user {
        id
        firstName
        lastName
        email
        phone
        address
        isActive
        createdAt
        lastLoginAt
      }
      cases {
        id
        status
        createdAt
        client {
          id
          user {
            firstName
            lastName
          }
        }
      }
    }
  }
`;
