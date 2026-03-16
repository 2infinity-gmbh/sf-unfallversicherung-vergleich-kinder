import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: 'https://unfallversicherung-vergleich-kinder.de',
  i18n: {
    defaultLocale: 'de',
    locales: ['de']
  }
});
