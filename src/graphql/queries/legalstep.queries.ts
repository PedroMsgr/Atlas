// src/graphql/queries/legalstep.querys.ts

import { gql } from "@apollo/client";

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
