// src/graphql/mutations/case.mutations.ts
// Mutations para gestión de casos legales (Case)

import { gql } from "@apollo/client";

// Crea un nuevo caso legal
export const CREATE_CASE = gql`
  mutation CreateCase($data: CaseCreateInput!) {
    createCase(data: $data) {
      id
      status
      tags
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
      createdAt
    }
  }
`;

// Actualiza un caso legal existente
export const UPDATE_CASE = gql`
  mutation UpdateCase($id: ID!, $data: CaseUpdateInput!) {
    updateCase(id: $id, data: $data) {
      id
      status
      tags
      updatedAt
      professional {
        id
        user {
          firstName
          lastName
        }
      }
    }
  }
`;

// Elimina un caso legal por su ID
export const DELETE_CASE = gql`
  mutation DeleteCase($id: ID!) {
    deleteCase(id: $id)
  }
`;

// Actualiza el estado de un caso legal
export const UPDATE_CASE_STATUS = gql`
  mutation UpdateCaseStatus($id: ID!, $status: CaseStatus!) {
    updateCaseStatus(id: $id, status: $status) {
      id
      status
      updatedAt
    }
  }
`;

// Asigna un profesional a un caso legal
export const ASSIGN_PROFESSIONAL = gql`
  mutation AssignProfessional($id: ID!, $professionalId: ID!) {
    assignProfessional(id: $id, professionalId: $professionalId) {
      id
      professional {
        id
        user {
          firstName
          lastName
        }
      }
    }
  }
`;

// Añade un archivo a un caso legal
export const ADD_CASE_FILE = gql`
  mutation AddCaseFile($caseId: ID!, $file: FileCreateInput!) {
    addCaseFile(caseId: $caseId, file: $file) {
      id
      name
      url
      type
      date
    }
  }
`;

// Elimina un archivo de un caso legal
export const REMOVE_CASE_FILE = gql`
  mutation RemoveCaseFile($fileId: ID!) {
    removeCaseFile(fileId: $fileId)
  }
`;

// Añade un reporte a un caso legal
export const ADD_CASE_REPORT = gql`
  mutation AddCaseReport($caseId: ID!, $clientId: ID!, $reason: String!) {
    addCaseReport(caseId: $caseId, clientId: $clientId, reason: $reason) {
      id
      reason
      createdAt
    }
  }
`;

// Elimina un reporte de un caso legal
export const REMOVE_CASE_REPORT = gql`
  mutation RemoveCaseReport($reportId: ID!) {
    removeCaseReport(reportId: $reportId)
  }
`;
