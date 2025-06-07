// src/graphql/mutations/case.mutations.ts

import { gql } from "@apollo/client";

export const CREATE_CASE = gql`
  mutation CreateCase($data: CaseCreateInput!) {
    createCase(data: $data) {
      id
      status
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

export const UPDATE_CASE = gql`
  mutation UpdateCase($id: ID!, $data: CaseUpdateInput!) {
    updateCase(id: $id, data: $data) {
      id
      status
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

export const DELETE_CASE = gql`
  mutation DeleteCase($id: ID!) {
    deleteCase(id: $id)
  }
`;

export const UPDATE_CASE_STATUS = gql`
  mutation UpdateCaseStatus($id: ID!, $status: CaseStatus!) {
    updateCaseStatus(id: $id, status: $status) {
      id
      status
      updatedAt
    }
  }
`;

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

export const REMOVE_CASE_FILE = gql`
  mutation RemoveCaseFile($fileId: ID!) {
    removeCaseFile(fileId: $fileId)
  }
`;

export const ADD_CASE_REPORT = gql`
  mutation AddCaseReport($caseId: ID!, $clientId: ID!, $reason: String!) {
    addCaseReport(caseId: $caseId, clientId: $clientId, reason: $reason) {
      id
      reason
      createdAt
    }
  }
`;

export const REMOVE_CASE_REPORT = gql`
  mutation RemoveCaseReport($reportId: ID!) {
    removeCaseReport(reportId: $reportId)
  }
`;
