import type { CollectionEntry } from 'astro:content';
import { essayCategories } from '../content.config';

type Essay = CollectionEntry<'essays'>;

function compareEssayOrder(a: Essay, b: Essay) {
  const orderA = a.data.order ?? Infinity;
  const orderB = b.data.order ?? Infinity;
  if (orderA !== orderB) return orderA - orderB;
  return a.data.title.localeCompare(b.data.title);
}

/** Round-robin essays as Design, Product, Life, Design, Product, Life, … */
export function interleaveEssaysByCategory(essays: Essay[]): Essay[] {
  const buckets = new Map(
    essayCategories.map((category) => [category, [] as Essay[]]),
  );

  for (const essay of essays) {
    buckets.get(essay.data.category)?.push(essay);
  }

  for (const bucket of buckets.values()) {
    bucket.sort(compareEssayOrder);
  }

  const interleaved: Essay[] = [];
  let remaining = essays.length;

  while (remaining > 0) {
    for (const category of essayCategories) {
      const next = buckets.get(category)?.shift();
      if (!next) continue;
      interleaved.push(next);
      remaining -= 1;
    }
  }

  return interleaved;
}
