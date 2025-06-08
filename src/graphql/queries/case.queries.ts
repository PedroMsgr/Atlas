// src/graphql/queries/case.queries.ts
// Queries para gestión de casos legales (Case)

import { gql } from "@apollo/client";

// Obtiene una lista de casos con filtros opcionales
export const GET_CASES = gql`
  query GetCases($filters: CaseFilters) {
    cases(filters: $filters) {
      total
      cases {
        id
        status
        tags
        createdAt
        updatedAt
        client {
          id
          user {
            firstName
            lastName
            email
          }
        }
        professional {
          id
          user {
            firstName
            lastName
            email
          }
        }
        server {
          id
          name
        }
      }
    }
  }
`;

// Obtiene un caso por su ID, incluyendo detalles y relaciones
export const GET_CASE = gql`
  query GetCase($id: ID!) {
    case(id: $id) {
      id
      status
      tags
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
