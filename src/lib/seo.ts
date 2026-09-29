import { seo } from '../data/seo';
import { withBase } from './paths';

/** Build an absolute URL from a site path or pass through absolute URLs. */
export function absoluteUrl(pathOrUrl: string, site = seo.siteUrl): string {
  if (
    pathOrUrl.startsWith('http://') ||
    pathOrUrl.startsWith('https://') ||
    pathOrUrl.startsWith('data:')
  ) {
    return pathOrUrl;
  }

  const base = site.replace(/\/$/, '');
  const path = withBase(pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`);
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export function formatPageTitle(
  title?: string,
  siteTitle = seo.defaultTitle,
): string {
  if (!title || title === siteTitle || title === 'Jessica.is') {
    return seo.defaultTitle;
  }
  return seo.titleTemplate.replace('%s', title);
}

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: seo.person.name,
    alternateName: seo.person.alternateName,
    jobTitle: seo.person.jobTitle,
    description: seo.person.description,
    url: seo.person.url,
    image: seo.person.image,
    sameAs: [...seo.person.sameAs],
    knowsAbout: [...seo.person.knowsAbout],
  };
}

export function professionalServiceJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: seo.service.name,
    url: seo.service.url,
    image: seo.person.image,
    description: seo.person.description,
    serviceType: [...seo.service.serviceType],
    areaServed: seo.service.areaServed,
    provider: {
      '@type': 'Person',
      name: seo.person.name,
      url: seo.person.url,
      jobTitle: seo.person.jobTitle,
      sameAs: [...seo.person.sameAs],
    },
  };
}

export function profilePageJsonLd() {
  const person = personJsonLd();
  const { '@context': _ctx, ...personEntity } = person;
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    name: `${seo.person.name} — About`,
    url: absoluteUrl('/jessica'),
    mainEntity: personEntity,
  };
}

export function websiteJsonLd() {
  const person = personJsonLd();
  const { '@context': _ctx, ...publisher } = person;
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: seo.siteName,
    url: seo.siteUrl,
    description: seo.defaultDescription,
    publisher,
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.title,
    description: input.description,
    url: input.url,
    image: input.image ? [input.image] : undefined,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: {
      '@type': 'Person',
      name: seo.person.name,
      url: seo.person.url,
    },
    publisher: {
      '@type': 'Person',
      name: seo.person.name,
      url: seo.person.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': input.url,
    },
  };
}

export function serializeJsonLd(
  data: Record<string, unknown> | Record<string, unknown>[],
): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
