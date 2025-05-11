// Interfaces for UnitConfig
export interface UnitConfigBase {
  id: string;
  name: string;
  pageTitle: string;
  footerInfo?: string | null;
  legalStepsCount: number;
  pageType: string;
}

export interface UnitConfigWithRelations extends UnitConfigBase {
  sections?: SectionBase[];
  manualArticles?: ManualArticleBase[];
  autoSources?: AutoSourceBase[];
  images?: ImageBase[];
}

// Section types
export interface SectionBase {
  id: string;
  configId: string;
  serverId?: string | null;
  type: SectionType;
  title: string;
  content: string;
  order: number;
}

// Enum for section types
export enum SectionType {
  Text = 'text',
  LegalGuide = 'legalGuide',
  Manual = 'manual',
  NewsConfig = 'newsConfig'
}

// Manual Article types
export interface ManualArticleBase {
  id: string;
  configId: string;
  serverId?: string | null;
  title: string;
  content: string;
  publishedAt: string;
}

// Auto Source types
export interface AutoSourceBase {
  id: string;
  configId: string;
  serverId?: string | null;
  name: string;
  url: string;
  type: string;
  createdAt: string;
}

// Image types
export interface ImageBase {
  id: string;
  configId: string;
  url: string;
  altText: string;
  type: string;
  order?: number | null;
}
