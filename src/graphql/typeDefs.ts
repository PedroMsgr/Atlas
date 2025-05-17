import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type UnitServer {
    id: ID!
    name: String!
    domain: String!
    requiresUpdate: Boolean!
    isActive: Boolean!
    orchestratorToken: String!
    unitToken: String!
    updatedAt: String!
    createdAt: String!
    constellation: Constellation
    activeConfig: UnitConfig
  }
  type Constellation {
    id: ID!
    name: String!
    description: String
  }

  type UnitConfig {
    id: ID!
    name: String!
  }

  input ServerUpdateInput {
    name: String
    domain: String
    constellationId: String
    requiresUpdate: Boolean
    isActive: Boolean
  }
  type Query {
    servers: [UnitServer!]!
    server(id: ID!): UnitServer
    constellation(id: ID!): Constellation
    constellations: [Constellation!]!
    generateServerTokens(id: ID!): ServerTokens!
  }  type Mutation {
    createServer(name: String!, domain: String!, constellationId: String): UnitServer!
    updateServer(id: ID!, data: ServerUpdateInput!): UnitServer!
    deleteServer(id: ID!): UnitServer!    updateServerTokens(id: ID!, orchestratorToken: String!, unitToken: String!): UnitServer!
    createConstellation(name: String!, description: String): Constellation!
    updateConstellation(id: ID!, name: String, description: String): Constellation!
    deleteConstellation(id: ID!): Constellation!
  }
  
  type ServerTokens {
    orchestratorToken: String!
    unitToken: String!
  }
`; 