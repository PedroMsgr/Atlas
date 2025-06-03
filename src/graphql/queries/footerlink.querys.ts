// src/graphql-client/queries/footerlink.querys.ts
import { gql } from '@apollo/client';

export const GET_FOOTERLINK_BY_ID = gql`
  query GetFooterLinkById($id: ID!) {
    footerLink(id: $id) {
      id
      configId
      label
      url
      order
    }
  }
`;

export const GET_FOOTERLINKS_BY_CONFIG = gql`
  query GetFooterLinksByConfig($configId: ID!) {
    footerLinksByConfig(configId: $configId) {
      id
      configId
      label
      url
      order
    }
  }
`;

export const GET_ALL_FOOTERLINKS = gql`
  query GetAllFooterLinks {
    footerLinks {
      id
      configId
      label
      url
      order
    }
  }
`;
