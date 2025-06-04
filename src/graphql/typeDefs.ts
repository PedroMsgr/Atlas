// src/graphql/typeDefs.ts

import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  scalar DateTime
  scalar JSON

  enum CaseStatus {
    open
    inProgress
    pending
    closed
  }

  enum ClientStatus {
    new
    reviewing
    active
    inactive
    suspended
  }

  enum Sender {
    client
    professional
  }

  # ---------------- Tipo principal UnitConfig ----------------
  type UnitConfig {
    id: ID!
    name: String!
    pageTitle: String!
    pageDescription: String
    servicesDescription: String!
    iconUrl: String
    footerInfo: String
    bannerUrl: String
    createdAt: DateTime!
    updatedAt: DateTime!
    sections: [Section!]!
    articles: [Article!]!
    images: [Image!]!
    legalSteps: [LegalStep!]!
    footerLinks: [FooterLink!]!
    servers: [UnitServer!]!
  }

  # ---------------- Secciones ----------------
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

  # ---------------- Artículos ----------------
  type Article {
    id: ID!
    configId: ID!
    title: String!
    content: String!
    url: String
    order: Int!
    publishedAt: DateTime
    config: UnitConfig!
  }

  # ---------------- Imágenes ----------------
  type Image {
    id: ID!
    configId: ID!
    url: String!
    altText: String
    type: String
    order: Int
    sectionId: ID
    config: UnitConfig!
    section: Section
  }

  # ---------------- Pasos Legales ----------------
  type LegalStep {
    id: ID!
    configId: ID!
    title: String!
    description: String!
    iconUrl: String
    order: Int!
    config: UnitConfig!
  }

  # ---------------- FooterLinks ----------------
  type FooterLink {
    id: ID!
    configId: ID!
    label: String!
    url: String!
    order: Int!
    config: UnitConfig!
  }

  # ---------------- Servidores y Constelaciones ----------------
  type UnitServer {
    id: ID!
    name: String!
    domain: String!
    isActive: Boolean!
    orchestratorToken: String
    unitToken: String
    constellation: Constellation
    config: UnitConfig
    configId: String
    createdAt: String
    updatedAt: String
  }

  type Constellation {
    id: ID!
    name: String!
    description: String
    servers: [UnitServer!]
  }

  type ServerTokens {
    orchestratorToken: String!
    unitToken: String!
  }

  # ---------------- INPUTS para las subentidades ----------------
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
    url: String
    order: Int!
    publishedAt: DateTime
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

  input UpdateServerInput {
  name: String
  domain: String
  isActive: Boolean
  constellationId: String
  configId: String
}
  # ---------------- INPUTS para UnitConfig ----------------
  input CreateConfigInput {
    name: String!
    pageTitle: String!
    servicesDescription: String!
    iconUrl: String
    pageDescription: String
    bannerUrl: String
    footerInfo: String
  }

  input UpdateConfigInput {
    name: String
    pageTitle: String
    servicesDescription: String
    iconUrl: String
    pageDescription: String
    bannerUrl: String
    footerInfo: String
  }

  input FileCreateInput {
  name: String!
  url: String!
  type: String!
  clientId: ID
  professionalId: ID
}

  # ---------------- Casos ----------------
  type Case {
    id: ID!
    status: CaseStatus!
    createdAt: DateTime!
    updatedAt: DateTime!
    client: Client
    professional: Professional
    server: UnitServer!
    chat: Chat
    files: [File!]!
    reports: [Report!]!
  }

  type CasePaginated {
    total: Int!
    cases: [Case!]!
  }

  input CaseFilters {
    page: Int
    pageSize: Int
    status: CaseStatus
    professionalId: ID
    clientId: ID
    serverId: ID
    search: String
  }

  input CaseCreateInput {
    clientId: ID!
    professionalId: ID!
    serverId: ID!
    status: CaseStatus
  }

  input CaseUpdateInput {
    status: CaseStatus
    professionalId: ID
  }


    type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    phone: String
    isActive: Boolean
    lastLoginAt: DateTime
    address: String
    createdAt: DateTime
  }

  type Client {
    id: ID!
    user: User
    serverId: ID!
    status: ClientStatus!
    server: UnitServer!
    cases: [Case!]
    files: [File!]
    reports: [Report!]
  }

  type Professional {
    id: ID!
    user: User
    serverId: ID!
    server: UnitServer!
    cases: [Case!]
    files: [File!]
  }

  type File {
    id: ID!
    caseId: ID!
    clientId: ID
    professionalId: ID
    name: String!
    url: String!
    type: String!
    date: DateTime!
  }

  type Report {
    id: ID!
    caseId: ID!
    clientId: ID!
    reason: String!
    createdAt: DateTime!
  }

  type Chat {
    id: ID!
    caseId: ID!
    messages: [Message!]!
  }

  type Message {
    id: ID!
    chatId: ID!
    sender: Sender!
    content: String!
    date: DateTime!
  }

  # ---------------- QUERIES ----------------
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
    constellations: [Constellation!]!
    constellation(id: ID!): Constellation
    landingData(token: String!): UnitConfig
    generateServerTokens(id: ID!): ServerTokens!
    cases(filters: CaseFilters): CasePaginated!
    case(id: ID!): Case
  }

  # ---------------- MUTATIONS ----------------
  type Mutation {
    createConfig(data: CreateConfigInput!): UnitConfig!
    updateConfig(id: ID!, data: UpdateConfigInput!): UnitConfig!
    deleteConfig(id: ID!): UnitConfig!

    createServer(name: String!, domain: String!, constellationId: String): UnitServer!
    updateServer(id: ID!, data: UpdateServerInput!): UnitServer!
    deleteServer(id: ID!): UnitServer!
    updateServerTokens(id: ID!, orchestratorToken: String!, unitToken: String!): UnitServer!

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
    createConstellation(name: String!, description: String): Constellation!
    updateConstellation(id: ID!, name: String, description: String): Constellation!
    deleteConstellation(id: ID!): Constellation!
    createFullConfig(data: JSON!): UnitConfig!
    updateFullConfig(id: ID!, data: JSON!): UnitConfig!
    createCase(data: CaseCreateInput!): Case!
    updateCase(id: ID!, data: CaseUpdateInput!): Case!
    deleteCase(id: ID!): Boolean!
    updateCaseStatus(id: ID!, status: CaseStatus!): Case!
    assignProfessional(id: ID!, professionalId: ID!): Case!
    addCaseFile(caseId: ID!, file: FileCreateInput!): File!
    removeCaseFile(fileId: ID!): Boolean!
    addCaseReport(caseId: ID!, clientId: ID!, reason: String!): Report!
    removeCaseReport(reportId: ID!): Boolean!
  }


`;
