// src/types/config.types.ts

export interface UnitConfigBase {
  id: string;
  name: string;
  pageTitle: string;
  footerInfo?: string | null;
  legalStepsCount: number;
  pageType: string;
  seoTitle?: string | null;
  seoDescription?: string | null;
  seoKeywords?: string | null;
  ogImage?: string | null;
  iconUrl?: string | null;
  bannerUrl?: string | null;
}

export interface UnitConfigWithRelations extends UnitConfigBase {
  sections?: SectionFull[];
  articles?: ArticleFull[];
  images?: ImageFull[];
  servers?: ServerBase[];
}

// Diferencia entre SectionBase y SectionFull: SectionFull incluye `content`, `sectionKey`, `mainImageId`
export interface SectionFull {
  id: string;
  configId: string;
  serverId?: string | null;
  type: string;
  title: string;
  content: string;
  order: number;
  sectionKey?: string | null;
  mainImageId?: string | null;
  images?: ImageFull[];
}

// Para `landingData` (el objeto que devolverá el resolver)
export interface LandingData {
  pageTitle: string;
  subtitle?: string | null;
  description?: string | null;
  iconUrl?: string | null;
  bannerUrl?: string | null;
  seoTitle?: string | null;
  seoDescription?: string | null;
  seoKeywords?: string | null;
  ogImage?: string | null;
  headerLinks?: string | null;
  footerLinks?: string | null;
  footerInfo?: string | null;
  legalStepsCount: number;
  pageType: string;
  externalLinks?: string | null;
  newsParams?: string | null;
  selectedNews?: string | null;
  infoSections?: string | null;
  sections: SectionFull[];
  articles: ArticleFull[];
  images: ImageFull[];
}

// ArticleFull incluye `content` y `url`
export interface ArticleFull {
  id: string;
  configId: string;
  title: string;
  content: string;
  url: string;
  publishedAt?: string | null;
}

// ImageFull incluye `sectionId`
export interface ImageFull {
  id: string;
  configId: string;
  url: string;
  altText: string;
  type: string;
  order?: number | null;
  sectionId?: string | null;
}

export interface ServerBase {
  id: string;
  name: string;
  domain: string;
}
