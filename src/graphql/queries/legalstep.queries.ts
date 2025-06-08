// src/graphql/queries/legalstep.queries.ts
// Queries para gestión de pasos legales (LegalStep)

import { gql } from "@apollo/client";

// Obtiene un paso legal por su ID
export const GET_LEGALSTEP_BY_ID = gql`
  query GetLegalStepById($id: ID!) {
    legalStep(id: $id) {
      id
      configId
      title
      description
      order
    }
  }
`;

// Obtiene todos los pasos legales asociados a una configuración
export const GET_LEGALSTEPS_BY_CONFIG = gql`
  query GetLegalStepsByConfig($configId: ID!) {
    legalStepsByConfig(configId: $configId) {
      id
      configId
      title
      description
      order
    }
  }
`;

// Obtiene todos los pasos legales del sistema
export const GET_ALL_LEGALSTEPS = gql`
  query GetAllLegalSteps {
    legalSteps {
      id
      configId
      title
      description
      order
    }
  }
`;
