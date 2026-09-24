import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const essayCategories = [
  'Design',
  'Product',
  'Life',
] as const;

const projectCategories = [
  'Products',
  'Brands',
  'AI',
  'Education',
  'Experiments',
] as const;

const essays = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/essays' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tldr: z.string(),
    category: z.enum(essayCategories),
    order: z.number().optional(),
    draft: z.boolean().default(false),
    publication: z.string().optional(),
    publicationUrl: z.string().url().optional(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    organization: z.string(),
    logoText: z.string(),
    category: z.enum(projectCategories),
    order: z.number().optional(),
    draft: z.boolean().default(false),
    projectUrl: z.string().optional(),
    projectUrlLabel: z.string().optional(),
    illustration: z.string().optional(),
    illustrationAlt: z.string().optional(),
  }),
});

export const collections = { essays, projects };

export { essayCategories, projectCategories };
