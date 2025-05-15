import { gql } from '@apollo/client';

export const CREATE_CONFIG = gql`
  mutation CreateConfig($data: ConfigCreateInput!) {
    createConfig(data: $data) {
      id
      name
      pageTitle
      pageType
    }
  }
`;

export const UPDATE_CONFIG = gql`
  mutation UpdateConfig($id: ID!, $data: ConfigUpdateInput!) {
    updateConfig(id: $id, data: $data) {
      id
      name
      pageTitle
      footerInfo
      legalStepsCount
      pageType
    }
  }
`;

export const DELETE_CONFIG = gql`
  mutation DeleteConfig($id: ID!) {
    deleteConfig(id: $id) {
      id
      name
    }
  }
`;

export const ADD_SECTION = gql`
  mutation AddSection($configId: ID!, $data: SectionCreateInput!) {
    addSection(configId: $configId, data: $data) {
      id
      title
      type
      order
    }
  }
`;

export const ADD_MANUAL_ARTICLE = gql`
  mutation AddManualArticle($configId: ID!, $data: ManualArticleCreateInput!) {
    addManualArticle(configId: $configId, data: $data) {
      id
      title
      publishedAt
    }
  }
`;

export const ADD_AUTO_SOURCE = gql`
  mutation AddAutoSource($configId: ID!, $data: AutoSourceCreateInput!) {
    addAutoSource(configId: $configId, data: $data) {
      id
      name
      url
      type
    }
  }
`;

export const ADD_IMAGE = gql`
  mutation AddImage($configId: ID!, $data: ImageCreateInput!) {
    addImage(configId: $configId, data: $data) {
      id
      url
      altText
      type
    }
  }
`;
