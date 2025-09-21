// @ts-check

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://thekaasking.github.io',
  base: '/pages',
  output: 'static',
  integrations: [mdx(), sitemap()],
});
