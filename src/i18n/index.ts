import type { Locale } from './types';
import { ui } from './ui';

export type { Locale } from './types';
export { localeNames } from './types';

export const locales: Locale[] = ['zh', 'en'];
export const defaultLocale: Locale = 'zh';

export const htmlLang: Record<Locale, string> = {
  zh: 'zh-CN',
  en: 'en',
};

export const ogLocale: Record<Locale, string> = {
  zh: 'zh_CN',
  en: 'en_US',
};

export function t(locale: Locale, key: string): string {
  return ui[locale]?.[key] ?? ui.zh[key] ?? key;
}

export function localeParams() {
  return locales.map((l) => ({ params: { lang: l } }));
}
