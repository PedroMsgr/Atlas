// src/graphql-client/mutations/legalstep.mutations.ts
import { gql } from '@apollo/client';

export const CREATE_LEGALSTEP = gql`
  mutation CreateLegalStep($data: LegalStepInput!) {
    createLegalStep(data: $data) {
      id
      configId
      title
      description
      iconUrl
      order
    }
  }
`;

export const UPDATE_LEGALSTEP = gql`
  mutation UpdateLegalStep($id: ID!, $data: LegalStepInput!) {
    updateLegalStep(id: $id, data: $data) {
      id
      configId
      title
      description
      iconUrl
      order
    }
  }
`;

export const DELETE_LEGALSTEP = gql`
  mutation DeleteLegalStep($id: ID!) {
    deleteLegalStep(id: $id) {
      id
    }
  }
`;
