// src/graphql/queries/me.queries.ts
// Queries para obtener información del usuario autenticado (Me)

import { gql } from "@apollo/client";

// Obtiene los datos del usuario autenticado
export const GET_ME = gql`
  query Me {
    me {
      id
      firstName
      lastName
      email
      role
      avatarUrl
      isActive
      createdAt
      updatedAt
    }
  }
`;
