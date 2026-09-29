/** Central SEO + entity defaults for jessica.is */

export const seo = {
  siteUrl: 'https://jessica.is',
  siteName: 'jessica.is',
  defaultTitle: 'Jessica Phan — Product & Brand Design Consultant',
  titleTemplate: '%s — Jessica Phan',
  defaultDescription:
    'Product and brand designer helping founders and teams turn ambiguity into products, brands, and experiences people care about. Builder at heart — writing, prototyping, and shipping.',
  defaultOgImage: '/images/og-default.png',
  defaultOgImageAlt:
    'Jessica Phan — product and brand designer at jessica.is',
  locale: 'en_US',
  person: {
    name: 'Jessica Phan',
    alternateName: 'Jessica.is',
    jobTitle: 'Product & Brand Design Consultant',
    description:
      'Product and brand designer with hands-on builder experience. Helps founders and teams turn ambiguity into products, brands, and meaningful experiences.',
    url: 'https://jessica.is',
    image: 'https://jessica.is/images/jessica/about-collage.png',
    sameAs: ['https://www.linkedin.com/in/jessicaphan/'],
    knowsAbout: [
      'Product design',
      'Brand design',
      'AI product design',
      'Design leadership',
      'UX strategy',
      'Prototyping',
      'Front-end development',
      '0 to 1 product development',
      'Design consulting',
    ],
  },
  service: {
    name: 'Jessica Phan Design Consulting',
    serviceType: [
      'Product design consulting',
      'Brand design consulting',
      'AI product design',
      'Design leadership advisory',
    ],
    areaServed: 'Worldwide',
    url: 'https://jessica.is/open-to-collaborating',
  },
} as const;
