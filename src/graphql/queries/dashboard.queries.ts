// src/graphql/queries/dashboard.queries.ts
// Queries para dashboard y estadísticas del sistema

import { gql } from "@apollo/client";

// Obtiene estadísticas generales del sistema
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

// Obtiene los casos recientes para el dashboard
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

// Obtiene el estado del sistema (API, DB, hora)
export const GET_SYSTEM_STATUS = gql`
  query GetSystemStatus {
    systemStatus {
      api
      db
      time
    }
  }
`;
