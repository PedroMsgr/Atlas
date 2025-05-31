import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type UnitServer {
    id: ID!
    name: String!
    domain: String!
    isActive: Boolean!
    orchestratorToken: String!
    unitToken: String!
    updatedAt: String!
    createdAt: String!
    constellation: Constellation
    config: UnitConfig
    configId: String
  }
  type Constellation {
    id: ID!
    name: String!
    description: String
  }
  type UnitConfig {
    id: ID!
    name: String!
    pageTitle: String!
    footerInfo: String
    pageType: String!
    legalStepsCount: Int!
    createdAt: String
    updatedAt: String
    sections: [Section]
    articles: [Article]
    images: [Image]
    servers: [UnitServer!]
  }
  type Section {
    id: ID!
    title: String!
    type: String!
    order: Int!
  }
  type Article {
    id: ID!
    title: String!
    publishedAt: String!
  }
  type Image {
    id: ID!
    url: String!
    altText: String!
    type: String!
    order: Int
  }
  input ServerUpdateInput {
    name: String
    domain: String
    constellationId: String
    configId: String
    orchestratorToken: String
    unitToken: String
    isActive: Boolean
  }
  type ServerTokens {
    orchestratorToken: String!
    unitToken: String!
  }
  type Query {
    servers: [UnitServer!]!
    server(id: ID!): UnitServer
    constellation(id: ID!): Constellation
    constellations: [Constellation!]!
    configurations: [UnitConfig!]!
    configuration(id: ID!): UnitConfig
    generateServerTokens(id: ID!): ServerTokens!
  }
  type Mutation {
    createServer(name: String!, domain: String!, constellationId: String): UnitServer!
    updateServer(id: ID!, data: ServerUpdateInput!): UnitServer!
    deleteServer(id: ID!): UnitServer!
    updateServerTokens(id: ID!, orchestratorToken: String!, unitToken: String!): UnitServer!
    createConstellation(name: String!, description: String): Constellation!
    updateConstellation(id: ID!, name: String, description: String): Constellation!
    deleteConstellation(id: ID!): Constellation!
    createConfig(name: String!, pageTitle: String!, pageType: String!, footerInfo: String, legalStepsCount: Int): UnitConfig!
    updateConfig(id: ID!, name: String, pageTitle: String, pageType: String, footerInfo: String, legalStepsCount: Int): UnitConfig!
    deleteConfig(id: ID!): UnitConfig
  }
`;