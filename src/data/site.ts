import { seo } from './seo';

export const site = {
  title: 'Jessica.is',
  headline: 'Jessica is...',
  description: seo.defaultDescription,
  intro: {
    hello: 'Hello',
    prefix: 'Jessica is...',
    shuffle: [
      'left-handed.',
      'right-brained.',
      'endlessly curious.',
      'a dot-connector.',
      'Jessica Phan.',
    ],
    closing:
      'Product and brand design consultant. AI-fluent. Builder at heart. I help founders and teams turn ambiguity into products, brands, and experiences people care about.',
  },
  footer: {
    contact: {
      linkedin: 'https://www.linkedin.com/in/jessicaphan/',
      // Reversed user + separate domain — assembled only in JS
      emailUserRev: 'nahpanykacissej',
      emailDomain: 'gmail.com',
    },
    mantra: [
      'Stay curious.',
      'Have grit.',
      'Be kind.',
      'Show gratitude.',
    ],
  },
  nav: [
    { label: 'Writing', href: '/writing' },
    { label: 'Talking', href: '/talking' },
    { label: 'Creating', href: '/creating' },
    { label: 'Jessica', href: '/jessica' },
  ],
} as const;
