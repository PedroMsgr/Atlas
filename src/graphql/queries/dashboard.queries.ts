import { gql } from "@apollo/client";

export const GET_DASHBOARD_STATS = gql`
  query GetDashboardStats {
    dashboardStats {
      totalServers
      activeServers
      totalCases
      activeCases
      totalClients
    }
  }
`;

export const GET_RECENT_CASES = gql`
  query GetRecentCases($limit: Int) {
    recentCases(limit: $limit) {
      id
      status
      updatedAt
      client {
        user {
          firstName
          lastName
          email
        }
      }
      professional {
        user {
          firstName
          lastName
          email
        }
      }
      server {
        name
      }
    }
  }
`;

export const GET_SYSTEM_STATUS = gql`
  query GetSystemStatus {
    systemStatus {
      api
      db
      time
    }
  }
`;
