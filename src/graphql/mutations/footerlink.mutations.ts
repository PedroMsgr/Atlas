// src/graphql/mutations/footerlink.mutations.ts
// Mutations para gestión de enlaces de footer (FooterLink)

import { gql } from "@apollo/client";

// Crea un nuevo enlace de footer
export const CREATE_FOOTERLINK = gql`
  mutation CreateFooterLink($data: FooterLinkInput!) {
    createFooterLink(data: $data) {
      id
      configId
      label
      url
      order
    }
  }
`;

// Actualiza un enlace de footer existente
export const UPDATE_FOOTERLINK = gql`
  mutation UpdateFooterLink($id: ID!, $data: FooterLinkInput!) {
    updateFooterLink(id: $id, data: $data) {
      id
      configId
      label
      url
      order
    }
  }
`;

// Elimina un enlace de footer por su ID
export const DELETE_FOOTERLINK = gql`
  mutation DeleteFooterLink($id: ID!) {
    deleteFooterLink(id: $id)
  }
`;
