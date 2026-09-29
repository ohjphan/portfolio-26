// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { visit } from 'unist-util-visit';

// Root on custom domain (jessica.is). Use '/' — not a repo subpath.
const siteBase = '/';

/** Prefix root-absolute src/href in Markdown/MDX when a non-root base is set. */
function rehypePrefixBase(base = '/') {
  const prefix = base === '/' ? '' : base.replace(/\/$/, '');
  return () => (tree) => {
    if (!prefix) return;
    visit(tree, 'element', (node) => {
      if (!node.properties) return;
      for (const attr of ['src', 'href']) {
        const value = node.properties[attr];
        if (
          typeof value === 'string' &&
          value.startsWith('/') &&
          !value.startsWith('//') &&
          !value.startsWith(prefix)
        ) {
          node.properties[attr] = `${prefix}${value}`;
        }
      }
    });
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://jessica.is',
  base: siteBase,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  redirects: {
    '/creating/a-soccer-mom': '/creating/on-banner-duty',
  },
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) =>
        !page.includes('/downloads/') &&
        !page.includes('/an-occasional-artist') &&
        !page.includes('/animal-letters'),
    }),
  ],
  markdown: {
    rehypePlugins: [rehypePrefixBase(siteBase)],
  },
});
