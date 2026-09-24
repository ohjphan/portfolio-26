# Jessica.is

A timeless home for a lifetime of creative work — products, ideas, conversations, and experiments.

Built with [Astro](https://astro.build) and MDX.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) to preview the site locally.

## Build

```bash
npm run build
npm run preview
```

## Adding essays

Create a new `.mdx` file in `src/content/essays/` with frontmatter:

```yaml
---
title: "Essay Title"
description: "One-line summary for the index page."
category: "Design"  # Design | AI | Founders | Home | Curiosity | Parenthood | Wonder
order: 1            # optional, for manual sort within category
draft: false
---
```

Essays are grouped by category on `/writing`, not by date.

## Site content

Edit `src/data/site.ts` to update the footer — currently reading, currently listening, and contact.

## Deployment

Deploy to Vercel or Netlify — both auto-detect Astro projects. Point `jessica.is` to your deployment once ready.
