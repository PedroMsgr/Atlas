// src/

import { gql } from '@apollo/client';

export const GET_FILE_BY_ID = gql`
  query GetFileById($id: ID!) {
    file(id: $id) {
      id
      name
      url
      size
      type
      createdAt
    }
  }
`;

export const GET_FILES_BY_CASE = gql`
    query GetFilesByCase($caseId: ID!) {
        filesByCase(caseId: $caseId) {
        id
        name
        url
        size
        type
        createdAt
        }
    }
`;

export const GET_ALL_FILES = gql`
  query GetAllFiles {
    files {
      id
      name
      url
      size
      type
      createdAt
    }
  }
`;

export const GET_FILES_BY_CLIENT = gql`
    query GetFilesByClient($clientId: ID!) {
        filesByClient(clientId: $clientId) {
        id
        name
        url
        size
        type
        createdAt
        }
    }
`;

export const GET_FILES_BY_PROFESSIONAL = gql`
    query GetFilesByProfessional($professionalId: ID!) {
        filesByProfessional(professionalId: $professionalId) {
        id
        name
        url
        size
        type
        createdAt
        }
    }
`;

