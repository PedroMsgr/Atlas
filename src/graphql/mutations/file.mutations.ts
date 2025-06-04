// src/graphql/mutations/file.mutations.ts

import { gql } from '@apollo/client';

export const CREATE_FILE = gql`
  mutation CreateFile($input: CreateFileInput!) {
    createFile(input: $input) {
      id
      name
      url
      size
      type
      createdAt
    }
  }
`;

export const UPDATE_FILE = gql`
  mutation UpdateFile($id: ID!, $input: UpdateFileInput!) {
    updateFile(id: $id, input: $input) {
      id
      name
      url
      size
      type
      createdAt
    }
  }
`;

export const DELETE_FILE = gql`
  mutation DeleteFile($id: ID!) {
    deleteFile(id: $id)
  }
`;