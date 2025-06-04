// src/graphql/mutations/user.mutations.ts

import { gql } from '@apollo/client';

export const CREATE_CLIENT = gql`
  mutation CreateClient($data: ClientCreateInput!) {
    createClient(data: $data) {
      id
      status
      user {
        id
        firstName
        lastName
        email
      }
      server {
        id
        name
      }
    }
  }
`;

export const UPDATE_CLIENT = gql`
  mutation UpdateClient($id: ID!, $data: ClientUpdateInput!) {
    updateClient(id: $id, data: $data) {
      id
      status
      user {
        id
        firstName
        lastName
        email
        phone
        isActive
      }
    }
  }
`;

export const CREATE_PROFESSIONAL = gql`
  mutation CreateProfessional($data: ProfessionalCreateInput!) {
    createProfessional(data: $data) {
      id
      user {
        id
        firstName
        lastName
        email
      }
      server {
        id
        name
      }
    }
  }
`;

export const UPDATE_PROFESSIONAL = gql`
  mutation UpdateProfessional($id: ID!, $data: ProfessionalUpdateInput!) {
    updateProfessional(id: $id, data: $data) {
      id
      user {
        id
        firstName
        lastName
        email
        phone
        isActive
      }
    }
  }
`;


export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id)
  }
`;
