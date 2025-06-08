// src/graphql/queries/user.queries.ts
// Queries para gestión de usuarios (User, Client, Professional)

import { gql } from "@apollo/client";

// Obtiene todos los usuarios con filtros opcionales
export const GET_USERS = gql`
  query GetUsers($role: [Role], $search: String) {
    users(role: $role, search: $search) {
      id
      firstName
      lastName
      email
      isActive
      role
    }
  }
`;

// Obtiene todos los clientes de un servidor
export const GET_CLIENTS = gql`
  query GetClients($serverId: ID) {
    clients(serverId: $serverId) {
      id
      status
      user {
        id
        firstName
        lastName
        email
        phone
        isActive
        lastLoginAt
      }
      server {
        id
        name
      }
    }
  }
`;

// Obtiene un cliente por su ID
export const GET_CLIENT = gql`
  query GetClient($id: ID!) {
    client(id: $id) {
      id
      status
      user {
        id
        firstName
        lastName
        email
        phone
        address
        isActive
        createdAt
        lastLoginAt
      }
      server {
        id
        name
      }
      cases {
        id
        status
        createdAt
        professional {
          id
          user {
            firstName
            lastName
          }
        }
      }
    }
  }
`;

// Obtiene todos los profesionales de un servidor
export const GET_PROFESSIONALS = gql`
  query GetProfessionals($serverId: ID) {
    professionals(serverId: $serverId) {
      id
      user {
        id
        firstName
        lastName
        email
        phone
        isActive
        lastLoginAt
      }
    }
  }
`;

// Obtiene un profesional por su ID
export const GET_PROFESSIONAL = gql`
  query GetProfessional($id: ID!) {
    professional(id: $id) {
      id
      user {
        id
        firstName
        lastName
        email
        phone
        address
        isActive
        createdAt
        lastLoginAt
      }
      cases {
        id
        status
        createdAt
        client {
          id
          user {
            firstName
            lastName
          }
        }
      }
    }
  }
`;
