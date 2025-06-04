// src/graphql/mutations/footerlink.mutations.ts
import { gql } from '@apollo/client';

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

export const DELETE_FOOTERLINK = gql`
  mutation DeleteFooterLink($id: ID!) {
    deleteFooterLink(id: $id)
  }
`;
