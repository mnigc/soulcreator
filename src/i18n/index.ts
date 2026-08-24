import type { Locale } from './types';
import { ui, ticker, type TickerItem } from './ui';
import { toolTranslations, type ToolI18n } from './tools';

export type { Locale } from './types';
export { localeNames } from './types';

export const locales: Locale[] = ['zh', 'en', 'ko', 'ja'];
export const defaultLocale: Locale = 'zh';

export const htmlLang: Record<Locale, string> = {
  zh: 'zh-CN',
  en: 'en',
  ko: 'ko',
  ja: 'ja',
};

export const ogLocale: Record<Locale, string> = {
  zh: 'zh_CN',
  en: 'en_US',
  ko: 'ko_KR',
  ja: 'ja_JP',
};

export function t(locale: Locale, key: string): string {
  return ui[locale]?.[key] ?? ui.zh[key] ?? key;
}

export function getTicker(locale: Locale): TickerItem[] {
  return ticker[locale] ?? ticker.zh;
}

export type ToolBase = {
  title: string;
  description: string;
  category: string;
  platform: string;
  tags: string[];
  features: { title: string; text: string }[];
  stats: { label: string; sub: string; value: string }[];
  faq: { q: string; a: string }[];
};

export function getToolI18n(base: ToolBase, slug: string, locale: Locale): ToolBase {
  if (locale === 'zh') return base;
  const tr = toolTranslations[slug]?.[locale];
  if (!tr) return base;
  return { ...base, ...tr };
}

export function localeParams() {
  return locales.map((l) => ({ params: { lang: l } }));
}

export const toolOrder = ['currency-converter', 'medipress', 'omnimd', 'clipboard-manager'];
