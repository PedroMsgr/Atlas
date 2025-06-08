// src/graphql/mutations/legalstep.mutations.ts
// Mutations para gestión de pasos legales (LegalStep)

import { gql } from "@apollo/client";

// Crea un nuevo paso legal
export const CREATE_LEGALSTEP = gql`
  mutation CreateLegalStep($data: LegalStepInput!) {
    createLegalStep(data: $data) {
      id
      configId
      title
      description
      order
    }
  }
`;

// Actualiza un paso legal existente
export const UPDATE_LEGALSTEP = gql`
  mutation UpdateLegalStep($id: ID!, $data: LegalStepInput!) {
    updateLegalStep(id: $id, data: $data) {
      id
      configId
      title
      description
      order
    }
  }
`;

// Elimina un paso legal por su ID
export const DELETE_LEGALSTEP = gql`
  mutation DeleteLegalStep($id: ID!) {
    deleteLegalStep(id: $id)
  }
`;
