import { gql } from '@apollo/client';

export const UPDATE_ME = gql`
  mutation UpdateMe($data: UpdateMeInput!) {
    updateMe(data: $data) {
    message
    status
    user {
      id
      firstName
      lastName
      email
      role
      avatarUrl
      isActive
      createdAt
      updatedAt
      }
    }
  }
`;
