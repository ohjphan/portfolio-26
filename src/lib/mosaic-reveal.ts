const TILE = 100;
const STAGGER_MS = 50;
const TILE_DUR_MS = 720;

const reduceMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function clearMosaic(media: HTMLElement) {
  media.querySelectorAll('.mosaic-reveal__grid').forEach((node) => node.remove());
  media.classList.remove('is-mosaicking');
}

function seedMosaic(media: HTMLElement) {
  clearMosaic(media);
  if (reduceMotion()) return null;

  const width = media.clientWidth || media.offsetWidth || 960;
  const height = media.clientHeight || media.offsetHeight || 540;
  const cols = Math.max(1, Math.ceil(width / TILE));
  const rows = Math.max(1, Math.ceil(height / TILE));

  const mosaic = document.createElement('div');
  mosaic.className = 'mosaic-reveal__grid';
  mosaic.setAttribute('aria-hidden', 'true');
  mosaic.style.setProperty('--cols', String(cols));
  mosaic.style.setProperty('--rows', String(rows));
  mosaic.style.setProperty('--tile', `${TILE}px`);
  mosaic.style.setProperty('--tile-dur', `${TILE_DUR_MS}ms`);

  for (let r = 0; r < rows; r += 1) {
    for (let c = 0; c < cols; c += 1) {
      const tile = document.createElement('span');
      tile.className = 'mosaic-reveal__tile';
      tile.style.setProperty('--delay', `${(c + r) * STAGGER_MS}ms`);
      mosaic.appendChild(tile);
    }
  }

  media.classList.add('is-mosaicking');
  media.appendChild(mosaic);
  return { mosaic, cols, rows };
}

/** Cover + diagonal tile reveal for a media element. */
export function playMosaicReveal(media: HTMLElement | null | undefined) {
  if (!media || reduceMotion()) {
    if (media) clearMosaic(media);
    return;
  }

  const seeded = seedMosaic(media);
  if (!seeded) return;

  requestAnimationFrame(() => {
    const rebuilt = seedMosaic(media) ?? seeded;
    const { mosaic, cols, rows } = rebuilt;
    mosaic.classList.remove('is-revealing');
    void mosaic.offsetWidth;
    mosaic.classList.add('is-revealing');

    const totalMs = TILE_DUR_MS + (cols + rows) * STAGGER_MS + 60;
    window.setTimeout(() => clearMosaic(media), totalMs);
  });
}

/** Play mosaic once when elements enter the viewport. */
export function observeScrollMosaics(
  selector = '[data-mosaic-scroll]',
  root: ParentNode = document,
) {
  if (typeof window === 'undefined') return;

  const nodes = [...root.querySelectorAll<HTMLElement>(selector)].filter(
    (node) => node.dataset.mosaicPlayed !== 'true',
  );
  if (nodes.length === 0) return;

  if (reduceMotion()) {
    nodes.forEach((node) => node.classList.add('is-mosaic-done'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const media = entry.target as HTMLElement;
        if (media.dataset.mosaicPlayed === 'true') continue;
        media.dataset.mosaicPlayed = 'true';
        observer.unobserve(media);
        playMosaicReveal(media);
        media.classList.add('is-mosaic-done');
      }
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -6% 0px',
    },
  );

  const watch = (node: HTMLElement) => {
    // Cover immediately so first paint isn't a full flash before IO fires
    seedMosaic(node);
    observer.observe(node);
  };

  nodes.forEach((node) => {
    const img = node.querySelector('img');
    if (img && !img.complete) {
      img.addEventListener(
        'load',
        () => {
          watch(node);
        },
        { once: true },
      );
      // Soft cover while waiting for intrinsic size
      seedMosaic(node);
      return;
    }
    watch(node);
  });
}

/** Wrap bare prose images, then observe all writing media hosts. */
export function observeWritingMosaics(root: ParentNode = document) {
  if (typeof window === 'undefined') return;

  root.querySelectorAll<HTMLImageElement>('.prose img').forEach((img) => {
    if (img.closest('[data-mosaic-scroll]')) return;
    const host = document.createElement('div');
    host.className = 'mosaic-reveal-host';
    host.dataset.mosaicScroll = '';
    img.parentNode?.insertBefore(host, img);
    host.appendChild(img);
  });

  observeScrollMosaics('[data-mosaic-scroll]', root);
}
