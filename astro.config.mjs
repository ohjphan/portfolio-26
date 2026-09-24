// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { visit } from 'unist-util-visit';

const siteBase = '/portfolio-26';

/** Prefix root-absolute src/href in Markdown/MDX so GitHub Pages base works. */
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
  site: 'https://ohjphan.github.io',
  base: siteBase,
  integrations: [mdx()],
  markdown: {
    rehypePlugins: [rehypePrefixBase(siteBase)],
  },
});
