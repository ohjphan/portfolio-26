export type SelectedWorkShowcase = {
  project: string;
  image: string;
  imageAlt: string;
  /** Punchy one-liner under the headline */
  summary?: string;
  date?: string;
};

export type SelectedWorkItem = {
  label: string;
  href: string;
  color: string;
  category: string;
  /** Optional white logo asset under /public */
  logo?: string;
  /** Scale relative to the default logo size (1 = default) */
  logoScale?: number;
  /** When false, hide from logo garden / marquee (showcase-only) */
  inLogos?: boolean;
  /** Featured work for the Creating scroll showcase */
  showcases?: SelectedWorkShowcase[];
};

export type SelectedWorkSlide = {
  company: string;
  companyHref: string;
  project: string;
  image: string;
  imageAlt: string;
  summary?: string;
  date?: string;
};

/** True when brand fill is light enough that white badge text fails contrast */
export function isLightBrand(hex: string): boolean {
  const raw = hex.replace('#', '');
  if (raw.length !== 6) return false;
  const channel = (start: number) => {
    const c = parseInt(raw.slice(start, start + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  const luminance =
    0.2126 * channel(0) + 0.7152 * channel(2) + 0.0722 * channel(4);
  return luminance > 0.55;
}

export const selectedWork: SelectedWorkItem[] = [
  {
    label: 'Learning Commons',
    href: 'https://learningcommons.org',
    color: '#1DB470',
    category: 'AI Infra',
    logo: '/images/creating/logos/learning-commons.svg',
    showcases: [
      {
        project: 'One meaningful first action',
        date: '2026',
        summary:
          'Developer portal onboarding that guides new builders through setup to one first win — so they don’t stall before getting value.',
        image: '/images/creating/showcases/learning-commons-onboarding.jpg',
        imageAlt:
          'Torn-paper collage of Learning Commons developer portal onboarding — create account, tell us about yourself, home dashboard with finish-your-setup, and Knowledge Graph get-started steps linked by a green path',
      },
      {
        project: 'Trust before access',
        date: '2026',
        summary:
          'Partnership admin for the developer portal — verify orgs, confirm DNS, and manage dataset requests so the catalog stays trusted as partners come online.',
        image: '/images/creating/showcases/learning-commons-admin.jpg',
        imageAlt:
          'Torn-paper collage of the Learning Commons Partnership Admin dashboard — org verifications list, DNS-verified org detail with evidence checklist, dataset requests, and status menu',
      },
      {
        project: 'Docs, out of the docs',
        date: '2025',
        summary:
          'Spearheaded moving Learning Commons documentation off Google Docs onto a public Mintlify site — vendor audit, styling, and migration.',
        image: '/images/creating/showcases/learning-commons-docs.jpg',
        imageAlt:
          'Collage of Learning Commons Docs on Mintlify — home with product cards, Knowledge Graph, Evaluators, Agent Skills, and API Reference screens floating over green geometric and code accents',
      },
    ],
  },
  {
    label: 'OpenSea',
    href: 'https://opensea.io',
    color: '#2081E2',
    category: 'NFT',
    logo: '/images/creating/logos/opensea.svg',
    showcases: [
      {
        project: 'A quieter ship',
        date: '2021',
        summary:
          'Logo and brand design for a quieter ship mark as OpenSea grew up.',
        image: '/images/creating/showcases/opensea-logo.jpg',
        imageAlt:
          'Collage of OpenSea logo exploration — pencil sketches, digital iterations, and the final blue sailboat mark',
      },
      {
        project: 'OpenSea, in your pocket',
        date: '2018 – Present',
        summary:
          'Product, marketing, and brand design for OpenSea’s first mobile app — end to end.',
        image: '/images/creating/showcases/opensea-mobile-product.jpg',
        imageAlt:
          'Three phones showing OpenSea mobile — discovery, rankings, and profile — against a dark blue and purple NFT collage',
      },
      {
        project: 'Marketplace at full tilt',
        date: '2018 – 2022',
        summary:
          'Product design for the full OpenSea marketplace experience through hypergrowth.',
        image: '/images/creating/showcases/opensea-marketplace.jpg',
        imageAlt:
          'Surreal isometric collage of OpenSea marketplace screens — discovery, profiles, collections, and price history — woven into an Escher-like architectural world',
      },
    ],
  },
  {
    label: 'Sequoia Capital',
    href: 'https://www.sequoiacap.com',
    color: '#00A070',
    category: 'Venture',
    logo: '/images/creating/logos/sequoia.svg',
    logoScale: 0.85,
  },
  {
    label: 'iFly.vc',
    href: 'https://www.ifly.vc',
    color: '#045FD9',
    category: 'Venture',
    logo: '/images/creating/logos/ifly.png',
    logoScale: 0.95,
  },
  {
    label: 'Samsung',
    href: 'https://www.samsung.com',
    color: '#1428A0',
    category: 'Hardware',
    logo: '/images/creating/logos/samsung.svg',
    logoScale: 1.7,
  },
  {
    label: 'Vault.fm',
    href: 'https://vault.fm',
    color: '#E3F41D',
    category: 'Music',
    logo: '/images/creating/logos/vaultfm.svg',
    showcases: [
      {
        project: 'Before anyone else hears it',
        date: '2024 – Present',
        summary:
          'Product design for an exclusive music community. First user: James Blake.',
        image: '/images/creating/showcases/vaultfm-ios-app.jpg',
        imageAlt:
          'Three phones showing Vault.fm screens for artist profile, community chat, and earnings against a street-style music collage',
      },
    ],
  },
  {
    label: 'Sound.xyz',
    href: 'https://www.sound.xyz',
    color: '#111111',
    category: 'Music',
    inLogos: false,
    showcases: [
      {
        project: 'Music, on-chain',
        date: '2018 – Present',
        summary: 'Product design for a web3 music discovery app on Sound.xyz.',
        image: '/images/creating/showcases/sound-xyz-ios-app.jpg',
        imageAlt:
          'Six phones showing Sound.xyz iOS screens for home, search, feed, player, playlist, and library against neon audio waves',
      },
    ],
  },
  {
    label: 'NYU',
    href: 'https://www.nyu.edu',
    color: '#57068C',
    category: 'University',
    logo: '/images/creating/logos/nyu.png',
    logoScale: 0.85,
    showcases: [
      {
        project: 'The Membership Guide',
        date: '2020',
        summary:
          'Site, infographics, and logo design for a membership handbook for newsrooms.',
        image: '/images/creating/showcases/nyu-membership-guide.jpg',
        imageAlt:
          'Hands holding The Membership Guide homepage among torn-paper collage pieces — logo, member-journey map, and handbook screens',
      },
    ],
  },
  {
    label: 'CZI',
    href: 'https://chanzuckerberg.com',
    color: '#00A5A8',
    category: 'Education',
    logo: '/images/creating/logos/czi.svg',
  },
  {
    label: 'Weee!',
    href: 'https://www.sayweee.com',
    color: '#FF6B00',
    category: 'Grocery',
    logo: '/images/creating/logos/weee.svg',
    logoScale: 1.75,
  },
  {
    label: 'SAP',
    href: 'https://www.sap.com',
    color: '#008FD3',
    category: 'Enterprise',
    logo: '/images/creating/logos/sap.svg',
    logoScale: 1.45,
  },
  {
    label: 'JCPenney',
    href: 'https://www.jcpenney.com',
    color: '#E31837',
    category: 'Ecommerce',
    logo: '/images/creating/logos/jcpenney.svg',
    logoScale: 0.85,
    showcases: [
      {
        project: 'Mobile, finally',
        date: '2014',
        summary:
          'Product design for a responsive overhaul as shoppers moved to phones.',
        image: '/images/creating/showcases/jcpenney-mobile.jpg',
        imageAlt:
          'JCPenney mobile screens floating over a vintage department-store collage — homepage, product listing, product detail, and navigation woven with a red ribbon',
      },
    ],
  },
];

/** Brands shown in logo garden / marquee — excludes showcase-only entries */
export const selectedWorkLogos = selectedWork.filter(
  (item) => item.inLogos !== false,
);

/** Featured Creating showcase rows — only entries with showcase images */
export const selectedWorkSlides: SelectedWorkSlide[] = selectedWork.flatMap(
  (item) =>
    (item.showcases ?? []).map((showcase) => ({
      company: item.label,
      companyHref: item.href,
      project: showcase.project,
      image: showcase.image,
      imageAlt: showcase.imageAlt,
      summary: showcase.summary,
      date: showcase.date,
    })),
);
