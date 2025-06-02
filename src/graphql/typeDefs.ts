// src/graphql/typeDefs.ts

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
  input SectionInput {
    configId: String!
    type: String!
    title: String!
    content: String!
    order: Int!
    sectionKey: String
    mainImageId: String
  }
  input ImageInput {
    configId: String!
    url: String!
    altText: String!
    type: String!
    order: Int
    sectionId: String
  }
  input ArticleInput {
    configId: String!
    title: String!
    content: String!
    publishedAt: String
  }
  input ConfigInput {
    name: String!
    pageTitle: String!
    subtitle: String
    description: String
    iconUrl: String
    bannerUrl: String
    seoTitle: String
    seoDescription: String
    seoKeywords: String
    ogImage: String
    headerLinks: String
    footerLinks: String
    footerInfo: String
    legalStepsCount: Int
    pageType: String!
    externalLinks: String
    newsParams: String
    selectedNews: String
    infoSections: String
    sections: [SectionInput!]
    articles: [ArticleInput!]
    images: [ImageInput!]
  }
  type LandingData {
    pageTitle: String!
    subtitle: String
    description: String
    iconUrl: String
    bannerUrl: String
    seoTitle: String
    seoDescription: String
    seoKeywords: String
    ogImage: String
    headerLinks: String
    footerLinks: String
    footerInfo: String
    legalStepsCount: Int
    pageType: String!
    externalLinks: String
    newsParams: String
    selectedNews: String
    infoSections: String
    sections: [SectionFull!]
    articles: [ArticleFull!]
    images: [ImageFull!]
  }
  type SectionFull {
    id: ID!
    configId: String!
    type: String!
    title: String!
    content: String!
    order: Int!
    sectionKey: String
    mainImageId: String
    images: [ImageFull!]
  }
  type ImageFull {
    id: ID!
    configId: String!
    url: String!
    altText: String!
    type: String!
    order: Int
    sectionId: String
  }
  type ArticleFull {
    id: ID!
    configId: String!
    title: String!
    content: String!
    publishedAt: String
  }
  type Query {
    servers: [UnitServer!]!
    server(id: ID!): UnitServer
    constellation(id: ID!): Constellation
    constellations: [Constellation!]!
    configurations: [UnitConfig!]!
    configuration(id: ID!): UnitConfig
    generateServerTokens(id: ID!): ServerTokens!
    landingData(token: String!): LandingData!
    section(id: ID!): SectionFull
    sectionsByConfig(configId: ID!): [SectionFull!]
    sections: [SectionFull!]
    image(id: ID!): ImageFull
    imagesByConfig(configId: ID!): [ImageFull!]
    images: [ImageFull!]
    article(id: ID!): ArticleFull
    articlesByConfig(configId: ID!): [ArticleFull!]
    articles: [ArticleFull!]
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
    createFullConfig(data: ConfigInput!): UnitConfig!
    updateFullConfig(id: ID!, data: ConfigInput!): UnitConfig!
    createSection(data: SectionInput!): SectionFull!
    updateSection(id: ID!, data: SectionInput!): SectionFull!
    deleteSection(id: ID!): SectionFull!
    createImage(data: ImageInput!): ImageFull!
    updateImage(id: ID!, data: ImageInput!): ImageFull!
    deleteImage(id: ID!): ImageFull!
    createArticle(data: ArticleInput!): ArticleFull!
    updateArticle(id: ID!, data: ArticleInput!): ArticleFull!
    deleteArticle(id: ID!): ArticleFull!
  }
`;