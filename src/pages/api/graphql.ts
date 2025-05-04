import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';
import prisma from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const typeDefs = gql`
  type User {
    id: String
    email: String
    role: String
    firstName: String
    lastName: String
  }

  type UnitServer {
    id: String
    domain: String
    name: String
  }

  type Case {
    id: String
    status: String
    createdAt: String
  }

  type Query {
    users: [User]
    unitServers: [UnitServer]
    cases: [Case]
  }
`;

const resolvers = {
  Query: {
    users: () => prisma.user.findMany({
      select: {
        id: true,
        email: true,
        role: true,
        firstName: true,
        lastName: true
      }
    }),
    unitServers: () => prisma.unitServer.findMany({
      select: {
        id: true,
        domain: true,
        name: true
      }
    }),
    cases: () => prisma.case.findMany({
      select: {
        id: true,
        status: true,
        createdAt: true
      }
    })
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default startServerAndCreateNextHandler(server, {
  context: async (req: NextApiRequest, res: NextApiResponse) => {
    return {
      prisma,
      req,
      res
    };
  },
});