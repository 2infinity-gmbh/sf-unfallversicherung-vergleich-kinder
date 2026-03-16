import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://unfallversicherung-vergleich-kinder.de',
  i18n: {
    defaultLocale: 'de',
    locales: ['de']
  }
});
