// @ts-check

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://razovanberkel.nl', // set this for sitemap/RSS & GH Pages
  output: 'static',
  integrations: [mdx(), sitemap()],
});
