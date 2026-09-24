export const site = {
  title: 'Jessica.is',
  headline: 'Jessica is...',
  description: 'Left-handed. Right-brained. Endlessly curious.',
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
      'Designer by trade. Builder at heart. Writer when inspired. Founder when I can\u2019t help myself.',
  },
  footer: {
    contact: {
      linkedin: 'https://www.linkedin.com/in/jessicaphan/',
      // Reversed user + separate domain — assembled only in JS
      emailUserRev: 'nahpanykacissej',
      emailDomain: 'gmail.com',
    },
    madeIn: 'Made in RWC',
  },
  nav: [
    { label: 'Writing', href: '/writing' },
    { label: 'Talking', href: '/talking' },
    { label: 'Creating', href: '/creating' },
    { label: 'Jessica', href: '/jessica' },
  ],
} as const;
