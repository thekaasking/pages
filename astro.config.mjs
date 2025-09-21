// @ts-check

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

import pdf from 'astro-pdf';

import markdoc from '@astrojs/markdoc';

export default defineConfig({
  site: 'https://thekaasking.github.io',
  base: '/pages',
  output: 'static',
  integrations: [mdx(), sitemap(), pdf({pages: {'/test': 'test.pdf'}}), markdoc()],
});