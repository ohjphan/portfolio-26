import type { CollectionEntry } from 'astro:content';

type Essay = CollectionEntry<'essays'>;

function compareEssayOrder(a: Essay, b: Essay) {
  const orderA = a.data.order ?? Infinity;
  const orderB = b.data.order ?? Infinity;
  if (orderA !== orderB) return orderA - orderB;
  return a.data.title.localeCompare(b.data.title);
}

/** Sort dated essays newest-first; keep a stable order for older undated entries. */
export function sortEssaysByDateAdded(essays: Essay[]): Essay[] {
  return [...essays].sort((a, b) => {
    const dateOrder = (b.data.dateAdded ?? '').localeCompare(
      a.data.dateAdded ?? '',
    );
    return dateOrder || compareEssayOrder(a, b);
  });
}
