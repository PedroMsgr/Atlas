// src/graphql/typeDefs.ts
// Definición principal del esquema GraphQL para Atlas
// Incluye tipos, queries y mutations agrupados y comentados para mayor claridad.
//
// Secciones:
// 1. Tipos base y enums
// 2. Tipos de usuario y autenticación
// 3. Queries
// 4. Mutations (incluyendo recuperación de contraseña)

import { gql } from "graphql-tag";

const typeDefs = gql`
  #########################
  #     SCALARS           #
  #########################
  scalar DateTime
  scalar JSON

  #########################
  #      ENUMS            #
  #########################
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

  enum Role {
    client
    professional
    admin
  }

  #########################
  #       TYPES           #
  #########################

  # --------- Configuración principal de un microsite ---------
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
    # Relaciones
    sections: [Section!]!
    articles: [Article!]!
    images: [Image!]!
    legalSteps: [LegalStep!]!
    footerLinks: [FooterLink!]!
    servers: [UnitServer!]!
  }

  # --------- Sección de contenido genérico ---------
  type Section {
    id: ID!
    configId: ID!
    title: String!
    body: String
    imageUrl: String
    order: Int!
    # Relaciones
    images: [Image!]
    config: UnitConfig!
  }

  # --------- Artículo manual ---------
  type Article {
    id: ID!
    configId: ID!
    title: String!
    content: String!
    url: String
    order: Int!
    publishedAt: DateTime
    # Relación inversa
    config: UnitConfig!
  }

  # --------- Imágenes asociadas a configuraciones o secciones ---------
  type Image {
    id: ID!
    configId: ID!
    url: String!
    altText: String
    type: String
    order: Int
    sectionId: ID
    # Relaciones inversas
    config: UnitConfig!
    section: Section
  }

  # --------- Paso legal---------
  type LegalStep {
    id: ID!
    configId: ID!
    title: String!
    description: String!
    order: Int!
    # Relación inversa
    config: UnitConfig!
  }

  # --------- Enlace del footer ---------
  type FooterLink {
    id: ID!
    configId: ID!
    label: String!
    url: String!
    order: Int!
    # Relación inversa
    config: UnitConfig!
  }

  # --------- Servidores unitarios ---------
  type UnitServer {
    id: ID!
    name: String!
    domain: String!
    isActive: Boolean!
    orchestratorToken: String
    unitToken: String
    constellation: Constellation
    constellationId: ID!
    config: UnitConfig
    configId: ID
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  # --------- Agrupación de servidores (constelación) ---------
  type Constellation {
    id: ID!
    name: String!
    description: String
    servers: [UnitServer!]
  }

  # --------- Retorno de generación de tokens ---------
  type ServerTokens {
    orchestratorToken: String!
    unitToken: String!
  }

  # --------- Usuario sin datos sensibles ---------
  type User {
    id: ID!
    email: String!
    password: String!
    role: Role!
    firstName: String!
    lastName: String!
    phone: String
    address: String
    avatarUrl: String
    isActive: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
    lastLoginAt: DateTime
  }

  # --------- Cliente vinculado a un servidor ---------
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

  # --------- Profesional vinculado a un servidor ---------
  type Professional {
    id: ID!
    user: User
    serverId: ID!
    server: UnitServer!
    cases: [Case!]
    files: [File!]
  }

  # --------- Chat de un caso ---------
  type Chat {
    id: ID!
    caseId: ID!
    messages: [Message!]!
  }

  # --------- Mensaje en un chat ---------
  type Message {
    id: ID!
    chatId: ID!
    sender: Sender!
    content: String!
    date: DateTime!
  }

  # --------- Archivo asociado a un caso ---------
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

  # --------- Reporte de incidencia en un caso ---------
  type Report {
    id: ID!
    caseId: ID!
    clientId: ID!
    reason: String!
    createdAt: DateTime!
  }

  # --------- Caso legal entre cliente y profesional ---------
  type Case {
    id: ID!
    status: CaseStatus!
    createdAt: DateTime!
    updatedAt: DateTime!
    tags: [String!]!
    client: Client
    professional: Professional
    server: UnitServer!
    chat: Chat
    files: [File!]!
    reports: [Report!]!
  }

  # --------- Listado paginado de casos ---------
  type CasePaginated {
    total: Int!
    cases: [Case!]!
  }

  # --------- Estadísticas del dashboard ---------
  type DashboardStats {
    totalServers: Int!
    activeServers: Int!
    totalCases: Int!
    activeCases: Int!
    totalClients: Int!
  }

  # --------- Estado del sistema ---------
  type SystemStatus {
    api: Boolean!
    db: Boolean!
    time: String!
  }

  #########################
  #       INPUTS          #
  #########################

  # Input para crear/editar secciones
  input SectionInput {
    configId: ID!
    title: String!
    body: String
    imageUrl: String
    order: Int!
  }

  # Input para crear/editar artículos
  input ArticleInput {
    configId: ID!
    title: String!
    content: String!
    url: String
    order: Int!
    publishedAt: DateTime
  }

  # Input para crear/editar imágenes
  input ImageInput {
    configId: ID!
    url: String!
    altText: String
    type: String
    order: Int
    sectionId: ID
  }

  # Input para crear/editar pasos legales
  input LegalStepInput {
    configId: ID!
    title: String!
    description: String!
    order: Int!
  }

  # Input para crear/editar enlaces de footer
  input FooterLinkInput {
    configId: ID!
    label: String!
    url: String!
    order: Int!
  }

  # Input para crear/editar un servidor
  input UpdateServerInput {
    name: String
    domain: String
    isActive: Boolean
    constellationId: ID
    configId: ID
  }

  # Input para crear configuración mínima (sin secciones ni subentidades)
  input CreateConfigInput {
    name: String!
    pageTitle: String!
    servicesDescription: String!
    iconUrl: String
    pageDescription: String
    bannerUrl: String
    footerInfo: String
  }

  # Input para actualizar configuración
  input UpdateConfigInput {
    name: String
    pageTitle: String
    servicesDescription: String
    iconUrl: String
    pageDescription: String
    bannerUrl: String
    footerInfo: String
  }

  # Input para subir un archivo a un caso
  input FileCreateInput {
    name: String!
    url: String!
    type: String!
    clientId: ID
    professionalId: ID
  }
  # --------- Paginación de usuarios ---------
  type UserPaginated {
    results: [User!]!
    total: Int!
    page: Int!
    pageSize: Int!
    totalPages: Int!
  }

  # Filtros para paginar y buscar casos
  input CaseFilters {
    page: Int
    pageSize: Int
    status: CaseStatus
    professionalId: ID
    clientId: ID
    serverId: ID
    search: String
    onlyClient: Boolean
    tags: [String]
  }

  # Input para crear un caso
  input CaseCreateInput {
    clientId: ID!
    professionalId: ID!
    serverId: ID!
    status: CaseStatus
    tags: [String!]
  }

  # Input para actualizar un caso
  input CaseUpdateInput {
    status: CaseStatus
    professionalId: ID
    tags: [String!]
  }

  #########################
  #       QUERIES         #
  #########################
  type Query {
    # Configuraciones
    configurations: [UnitConfig!]!
    configuration(id: ID!): UnitConfig

    # Secciones
    sections: [Section!]!
    section(id: ID!): Section
    sectionsByConfig(configId: ID!): [Section!]!

    # Artículos
    articles: [Article!]!
    article(id: ID!): Article
    articlesByConfig(configId: ID!): [Article!]!

    # Imágenes
    images: [Image!]!
    image(id: ID!): Image
    imagesByConfig(configId: ID!): [Image!]!

    # Pasos legales
    legalSteps: [LegalStep!]!
    legalStep(id: ID!): LegalStep
    legalStepsByConfig(configId: ID!): [LegalStep!]!

    # Enlaces de footer
    footerLinks: [FooterLink!]!
    footerLink(id: ID!): FooterLink
    footerLinksByConfig(configId: ID!): [FooterLink!]!

    # Servidores y constelaciones
    servers: [UnitServer!]!
    server(id: ID!): UnitServer
    constellations: [Constellation!]!
    constellation(id: ID!): Constellation

    # Landing pública (sin sesión): se busca por token de unitToken
    landingData(token: String!): UnitConfig

    # Generar nuevos tokens para un servidor dado su ID
    generateServerTokens(id: ID!): ServerTokens!

    # Casos legales
    cases(filters: CaseFilters): CasePaginated!
    case(id: ID!): Case

    # Usuarios
    users(
      role: [Role]
      search: String
      page: Int
      pageSize: Int
    ): UserPaginated!
    me: User!

    # Dashboard
    dashboardStats: DashboardStats!
    recentCases(limit: Int): [Case!]!
    systemStatus: SystemStatus!
  }

  input UpdateMeInput {
    firstName: String
    lastName: String
    email: String
    oldPassword: String
    newPassword: String
  }

  type UpdateMeResult {
    status: Boolean!
    message: String!
    user: User
  }

  #########################
  #      MUTATIONS        #
  #########################
  type Mutation {
    # -- UnitConfig CRUD --
    createConfig(data: CreateConfigInput!): UnitConfig!
    updateConfig(id: ID!, data: UpdateConfigInput!): UnitConfig!
    deleteConfig(id: ID!): Boolean!

    # -- UnitServer CRUD --
    createServer(
      name: String!
      domain: String!
      constellationId: ID!
    ): UnitServer!
    updateServer(id: ID!, data: UpdateServerInput!): UnitServer!
    deleteServer(id: ID!): UnitServer!
    updateServerTokens(
      id: ID!
      orchestratorToken: String!
      unitToken: String!
    ): UnitServer!

    # -- Section CRUD --
    createSection(data: SectionInput!): Section!
    updateSection(id: ID!, data: SectionInput!): Section!
    deleteSection(id: ID!): Boolean!

    # -- Article CRUD --
    createArticle(data: ArticleInput!): Article!
    updateArticle(id: ID!, data: ArticleInput!): Article!
    deleteArticle(id: ID!): Boolean!

    # -- Image CRUD --
    createImage(data: ImageInput!): Image!
    updateImage(id: ID!, data: ImageInput!): Image!
    deleteImage(id: ID!): Boolean!

    # -- LegalStep CRUD --
    createLegalStep(data: LegalStepInput!): LegalStep!
    updateLegalStep(id: ID!, data: LegalStepInput!): LegalStep!
    deleteLegalStep(id: ID!): Boolean!

    # -- FooterLink CRUD --
    createFooterLink(data: FooterLinkInput!): FooterLink!
    updateFooterLink(id: ID!, data: FooterLinkInput!): FooterLink!
    deleteFooterLink(id: ID!): Boolean!

    # -- Constellation CRUD --
    createConstellation(name: String!, description: String): Constellation!
    updateConstellation(
      id: ID!
      name: String
      description: String
    ): Constellation!
    deleteConstellation(id: ID!): Boolean!

    # -- FullConfig (JSON) --
    createFullConfig(data: JSON!): UnitConfig!
    updateFullConfig(id: ID!, data: JSON!): UnitConfig!

    # -- Caso CRUD --
    createCase(data: CaseCreateInput!): Case!
    updateCase(id: ID!, data: CaseUpdateInput!): Case!
    deleteCase(id: ID!): Boolean!
    updateCaseStatus(id: ID!, status: CaseStatus!): Case!
    assignProfessional(id: ID!, professionalId: ID!): Case!

    # -- Archivos y reportes de caso --
    addCaseFile(caseId: ID!, file: FileCreateInput!): File!
    removeCaseFile(fileId: ID!): Boolean!
    addCaseReport(caseId: ID!, clientId: ID!, reason: String!): Report!
    removeCaseReport(reportId: ID!): Boolean!

    # -- Usuario CRUD --
    deleteUser(id: ID!): Boolean!
    updateMe(data: UpdateMeInput!): UpdateMeResult!

    # -- Recuperación de contraseña --
    # Solicita un email de recuperación de contraseña
    requestPasswordReset(email: String!): Boolean!
    # Cambia la contraseña usando el token recibido por email
    resetPassword(token: String!, newPassword: String!): Boolean!
  }
`;

export default typeDefs;
