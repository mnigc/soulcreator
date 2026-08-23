export interface ToolData {
  slug: string;
  title: string;
  titleEn: string;
  description: string;
  tags: string[];
  platform: string;
  category: string;
  faq?: Array<{ q: string; a: string }>;
}