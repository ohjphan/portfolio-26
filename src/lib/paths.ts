/** Prefix a site path with Astro `base` (e.g. `/portfolio-26/` on GitHub Pages). */
export function withBase(path: string): string {
  if (
    !path ||
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:') ||
    path.startsWith('#') ||
    path.startsWith('data:')
  ) {
    return path;
  }

  const base = import.meta.env.BASE_URL.replace(/\/$/, '') || '';
  if (!base) {
    return path.startsWith('/') ? path : `/${path}`;
  }

  if (path === base || path.startsWith(`${base}/`)) return path;

  if (path === '/' || path === '') return `${base}/`;

  const clean = path.replace(/^\//, '');
  return `${base}/${clean}`;
}

/** Strip `base` from a pathname for route matching (nav current state, etc.). */
export function stripBase(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!base) return pathname || '/';

  if (pathname === base || pathname === `${base}/`) return '/';
  if (pathname.startsWith(`${base}/`)) {
    return pathname.slice(base.length) || '/';
  }
  return pathname || '/';
}
