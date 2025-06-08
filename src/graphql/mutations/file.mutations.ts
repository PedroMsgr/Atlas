// src/graphql/mutations/file.mutations.ts
// Mutations para gestión de archivos (File)

import { gql } from "@apollo/client";

// Crea un nuevo archivo
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

// Actualiza un archivo existente
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

// Elimina un archivo por su ID
export const DELETE_FILE = gql`
  mutation DeleteFile($id: ID!) {
    deleteFile(id: $id)
  }
`;
