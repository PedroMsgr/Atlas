import { gql } from '@apollo/client';

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

export const UPDATE_CASE_STATUS = gql`
  mutation UpdateCaseStatus($id: ID!, $status: CaseStatus!) {
    updateCaseStatus(id: $id, status: $status) {
      id
      status
      updatedAt
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation SendMessage($caseId: ID!, $sender: Sender!, $content: String!) {
    sendMessage(caseId: $caseId, sender: $sender, content: $content) {
      id
      sender
      content
      date
    }
  }
`;

export const ADD_FILE = gql`
  mutation AddFile($caseId: ID!, $data: FileCreateInput!) {
    addFile(caseId: $caseId, data: $data) {
      id
      name
      url
      type
      date
    }
  }
`;

export const CREATE_REPORT = gql`
  mutation CreateReport($caseId: ID!, $reason: String!) {
    createReport(caseId: $caseId, reason: $reason) {
      id
      reason
      createdAt
    }
  }
`;
