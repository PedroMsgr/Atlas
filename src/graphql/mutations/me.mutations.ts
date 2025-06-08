// src/graphql/mutations/me.mutations.ts
// Mutations para gestión del perfil del usuario autenticado (Me)

import { gql } from "@apollo/client";

// Actualiza el perfil y/o contraseña del usuario autenticado
export const UPDATE_ME = gql`
  mutation UpdateMe($data: UpdateMeInput!) {
    updateMe(data: $data) {
      message
      status
      user {
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
  }
`;
