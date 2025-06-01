// src/types/config.types.ts

// Enum de SectionType (coincide con tu schema.prisma)
export enum SectionType {
  text = 'text',
  legalGuide = 'legalGuide',
  manual = 'manual',
  newsConfig = 'newsConfig',
}

// Interfaz para cada imagen (global o dentro de una sección)
export interface ImageBase {
  id: string
  configId: string
  url: string
  altText: string
  type: string       // hero, gallery, icon …
  order?: number | null
  sectionId?: string | null   // si la imagen pertenece a una sección
}

// Interfaz para cada artículo global
export interface ArticleBase {
  id: string
  configId: string
  title: string
  content: string
  publishedAt?: string    // fecha en ISO string, si existe
}

// Interfaz para cada sección (incluye imágenes propias)
export interface SectionBase {
  id: string
  configId: string
  serverId?: string | null      // si alguna vez relacionas sección a servidor
  type: SectionType
  title: string
  content: string
  order: number
  sectionKey?: string | null    // opcional, si lo usas en tu modelo
  mainImageId?: string | null   // opcional, si usas “mainImage” en prisma
  images?: ImageBase[]          // imágenes asociadas a esta sección
}

// Interfaz base para UnitConfig (todos los campos de schema.prisma)
export interface UnitConfigBase {
  id: string
  name: string
  pageTitle: string
  subtitle?: string | null       // existe en tu schema.prisma
  description?: string | null    // existe en tu schema.prisma
  iconUrl?: string | null
  bannerUrl?: string | null
  seoTitle?: string | null
  seoDescription?: string | null
  seoKeywords?: string | null
  ogImage?: string | null
  headerLinks?: string | null    // en el esquema Prisma lo guardas como Json, pero aquí puede ser string JSON
  footerLinks?: string | null    // idem
  footerInfo?: string | null
  legalStepsCount: number
  pageType: string
  externalLinks?: string | null  // JSON como string
  newsParams?: string | null     // JSON como string
  selectedNews?: string | null   // JSON como string
  infoSections?: string | null   // JSON como string
  createdAt?: string             // ISO string
  updatedAt?: string             // ISO string
}

// Interfaz que incluye relaciones (sections, articles, images, servidores)
export interface UnitConfigWithRelations extends UnitConfigBase {
  sections?: SectionBase[]
  articles?: ArticleBase[]
  images?: ImageBase[]
  servers?: { id: string; name: string; domain: string }[]
}
