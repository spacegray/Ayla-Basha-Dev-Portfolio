// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// TODO: set `site` to the final domain before deploying (used for canonical URLs, OG tags, sitemap).
export default defineConfig({
  site: 'https://aylabasha.dev',
  integrations: [sitemap()],
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});
