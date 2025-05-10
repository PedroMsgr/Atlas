export const typeDefs = `#graphql
  type Constellation {
    id: ID!
    name: String
  }

  type UnitServer {
    id: ID!
    name: String!
    domain: String!
    requiresUpdate: Boolean!
    constellation: Constellation
    createdAt: String!
    updatedAt: String!
    isActive: Boolean!
  }

  type User {
    id: ID!
    email: String!
    name: String
    role: String
    image: String
  }

  type AuthResult {
    success: Boolean!
    message: String
    user: User
    token: String
  }

  type Query {
    hello: String
    servers: [UnitServer!]!
    server(id: ID!): UnitServer
    constellations: [Constellation!]!
    me: User
  }

  type Mutation {
    echo(message: String!): String
    createServer(name: String!, domain: String!, constellationId: ID): UnitServer!
    login(email: String!, password: String!): AuthResult!
    logout: AuthResult!
  }
`;