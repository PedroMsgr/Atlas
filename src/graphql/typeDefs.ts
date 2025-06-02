// src/graphql/typeDefs.ts

import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  scalar DateTime

  type UnitConfig {
    id: ID!
    name: String!
    pageTitle: String!
    pageType: String!
    footerInfo: String
    legalStepsCount: Int
    pageDescription: String
    servicesDescription: String
    createdAt: DateTime!
    updatedAt: DateTime!
    sections: [Section!]!
    articles: [Article!]!
    images: [Image!]!
    legalSteps: [LegalStep!]!
    footerLinks: [FooterLink!]!
    servers: [UnitServer!]!
  }

  type Section {
    id: ID!
    configId: ID!
    title: String!
    body: String
    imageUrl: String
    order: Int!
    images: [Image!]
    config: UnitConfig!
  }

  type Article {
    id: ID!
    configId: ID!
    title: String!
    content: String!
    order: Int!
    publishedAt: DateTime
    config: UnitConfig!
  }

  type Image {
    id: ID!
    configId: ID!
    url: String!
    altText: String
    type: String
    order: Int
    sectionId: ID
    config: UnitConfig!
  }

  type LegalStep {
    id: ID!
    configId: ID!
    title: String!
    description: String!
    iconUrl: String
    order: Int!
    config: UnitConfig!
  }

  type FooterLink {
    id: ID!
    configId: ID!
    label: String!
    url: String!
    order: Int!
    config: UnitConfig!
  }

  type UnitServer {
    id: ID!
    name: String!
    domain: String!
    isActive: Boolean!
    config: UnitConfig
  }

  input SectionInput {
    configId: ID!
    title: String!
    body: String
    imageUrl: String
    order: Int!
  }

  input ArticleInput {
    configId: ID!
    title: String!
    content: String!
    order: Int!
  }

  input ImageInput {
    configId: ID!
    url: String!
    altText: String
    type: String
    order: Int
    sectionId: ID
  }

  input LegalStepInput {
    configId: ID!
    title: String!
    description: String!
    iconUrl: String
    order: Int!
  }

  input FooterLinkInput {
    configId: ID!
    label: String!
    url: String!
    order: Int!
  }

  type Query {
    configurations: [UnitConfig!]!
    configuration(id: ID!): UnitConfig
    sections: [Section!]!
    section(id: ID!): Section
    sectionsByConfig(configId: ID!): [Section!]!
    articles: [Article!]!
    article(id: ID!): Article
    articlesByConfig(configId: ID!): [Article!]!
    images: [Image!]!
    image(id: ID!): Image
    imagesByConfig(configId: ID!): [Image!]!
    legalSteps: [LegalStep!]!
    legalStep(id: ID!): LegalStep
    legalStepsByConfig(configId: ID!): [LegalStep!]!
    footerLinks: [FooterLink!]!
    footerLink(id: ID!): FooterLink
    footerLinksByConfig(configId: ID!): [FooterLink!]!
    servers: [UnitServer!]!
    server(id: ID!): UnitServer
  }

  type Mutation {
    createConfig(
      name: String!
      pageTitle: String!
      pageType: String!
      footerInfo: String
      legalStepsCount: Int
      pageDescription: String
      servicesDescription: String
    ): UnitConfig!
    updateConfig(
      id: ID!
      name: String
      pageTitle: String
      pageType: String
      footerInfo: String
      legalStepsCount: Int
      pageDescription: String
      servicesDescription: String
    ): UnitConfig!
    deleteConfig(id: ID!): UnitConfig!

    createSection(data: SectionInput!): Section!
    updateSection(id: ID!, data: SectionInput!): Section!
    deleteSection(id: ID!): Section!

    createArticle(data: ArticleInput!): Article!
    updateArticle(id: ID!, data: ArticleInput!): Article!
    deleteArticle(id: ID!): Article!

    createImage(data: ImageInput!): Image!
    updateImage(id: ID!, data: ImageInput!): Image!
    deleteImage(id: ID!): Image!

    createLegalStep(data: LegalStepInput!): LegalStep!
    updateLegalStep(id: ID!, data: LegalStepInput!): LegalStep!
    deleteLegalStep(id: ID!): LegalStep!

    createFooterLink(data: FooterLinkInput!): FooterLink!
    updateFooterLink(id: ID!, data: FooterLinkInput!): FooterLink!
    deleteFooterLink(id: ID!): FooterLink!
  }
`;