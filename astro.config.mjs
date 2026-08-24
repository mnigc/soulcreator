import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://soulcreator.com',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en', 'ko', 'ja'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});