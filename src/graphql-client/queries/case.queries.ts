// src/graphql-client/queries/case.queries.ts

 import { gql } from '@apollo/client';

export const GET_CASES = gql`
  query GetCases($serverId: ID) {
    cases(serverId: $serverId) {
      id
      status
      createdAt
      updatedAt
      client {
        id
        user {
          firstName
          lastName
        }
      }
      professional {
        id
        user {
          firstName
          lastName
        }
      }
      server {
        id
        name
      }
    }
  }
`;

export const GET_CASE = gql`
  query GetCase($id: ID!) {
    case(id: $id) {
      id
      status
      createdAt
      updatedAt
      client {
        id
        user {
          id
          firstName
          lastName
          email
          phone
        }
      }
      professional {
        id
        user {
          id
          firstName
          lastName
          email
          phone
        }
      }
      server {
        id
        name
      }
      chat {
        id
        messages {
          id
          sender
          content
          date
        }
      }
      files {
        id
        name
        url
        type
        date
      }
      reports {
        id
        reason
        createdAt
      }
    }
  }
`;
