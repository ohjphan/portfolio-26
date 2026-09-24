export type SelectedWorkShowcase = {
  project: string;
  role: string;
  image: string;
  imageAlt: string;
  /** Short project context from the original case study */
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
  /** Featured work slides for the Creating carousel */
  showcases?: SelectedWorkShowcase[];
};

export type SelectedWorkSlide = {
  company: string;
  companyHref: string;
  project: string;
  role: string;
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
    label: 'OpenSea',
    href: 'https://opensea.io',
    color: '#2081E2',
    category: 'NFT',
    logo: '/images/creating/logos/opensea.svg',
    showcases: [
      {
        project: 'OpenSea logo',
        date: '2021',
        role: 'Logo & brand design',
        summary: 'A quieter ship mark for OpenSea, redesigned as the brand grew up.',
        image: '/images/creating/showcases/opensea-logo.jpg',
        imageAlt:
          'Collage of OpenSea logo exploration — pencil sketches, digital iterations, and the final blue sailboat mark',
      },
      {
        project: 'OpenSea iOS App',
        date: '2018 – Present',
        role: 'Product design, marketing & brand design',
        summary: 'The first mobile app for OpenSea, designed end to end.',
        image: '/images/creating/showcases/opensea-mobile-product.jpg',
        imageAlt:
          'Three phones showing OpenSea mobile — discovery, rankings, and profile — against a dark blue and purple NFT collage',
      },
      {
        project: 'OpenSea marketplace',
        date: '2018 – 2022',
        role: 'Product design',
        summary: 'The full marketplace experience for OpenSea, shaped through hypergrowth.',
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
        project: 'Vault.fm iOS app',
        date: '2024 – Present',
        role: 'Product design',
        summary:
          'An exclusive music community on Vault.fm where artists share unreleased tracks. First user, James Blake.',
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
        project: 'Sound.xyz iOS app',
        date: '2018 – Present',
        role: 'Product design',
        summary: 'A web3 music discovery app for Sound.xyz.',
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
        role: 'Site design, infographics, logo design',
        summary: 'A membership handbook for newsrooms, designed for NYU.',
        image: '/images/creating/showcases/nyu-membership-guide.jpg',
        imageAlt:
          'Hands holding The Membership Guide homepage among torn-paper collage pieces — logo, member-journey map, and handbook screens',
      },
    ],
  },
  {
    label: 'Hathorway',
    href: 'https://hathorway.com',
    color: '#1C1C1C',
    category: 'Jewelry',
    inLogos: false,
    showcases: [
      {
        project: 'Hathorway jewelry',
        date: '2018 – Present',
        role: 'Design & craft',
        summary:
          'A jewelry brand I founded — geometric pieces in upcycled buffalo horn, from brand and craft to logistics at Hathorway.',
        image: '/images/creating/showcases/hathorway-jewelry.jpg',
        imageAlt:
          'Process collage of Hathorway earrings — cutting horn, assembling geometric pieces, and the finished dangle on a stone stand',
      },
    ],
  },
  {
    label: 'Ritual Meals',
    href: 'https://ritualmeals.com',
    color: '#E87A3A',
    category: 'Food',
    inLogos: false,
    showcases: [
      {
        project: 'Ritual Meals',
        date: '2018 – Present',
        role: 'Co-founder — brand, design, marketing & packaging',
        summary: 'A postpartum meal delivery service I co-founded at Ritual Meals.',
        image: '/images/creating/showcases/ritual-meals.jpg',
        imageAlt:
          'Collage of Ritual Meals packaging and hands holding colorful postpartum meal bowls against warm concentric circles',
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
    label: 'Learning Commons',
    href: 'https://learningcommons.org',
    color: '#1DB470',
    category: 'AI Infra',
    logo: '/images/creating/logos/learning-commons.svg',
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
  },
  {
    label: 'Balsam Hill',
    href: 'https://www.balsamhill.com',
    color: '#7C1324',
    category: 'Ecommerce',
    logo: '/images/creating/logos/balsam-hill.png',
    logoScale: 1.2,
    showcases: [
      {
        project: 'Wreaths & garlands',
        role: 'Product design',
        summary: 'Realistic Christmas trees, wreaths, and garlands designed for Balsam Hill.',
        image: '/images/creating/showcases/balsam-hill-wreaths.jpg',
        imageAlt:
          'Collage of Balsam Hill holiday wreaths, garlands, and a small tree with red and green graphic overlays',
      },
    ],
  },
];

/** Brands shown in logo garden / marquee — excludes showcase-only entries */
export const selectedWorkLogos = selectedWork.filter(
  (item) => item.inLogos !== false,
);

/** Featured Creating carousel slides — only entries with showcase images */
export const selectedWorkSlides: SelectedWorkSlide[] = selectedWork.flatMap(
  (item) =>
    (item.showcases ?? []).map((showcase) => ({
      company: item.label,
      companyHref: item.href,
      project: showcase.project,
      role: showcase.role,
      image: showcase.image,
      imageAlt: showcase.imageAlt,
      summary: showcase.summary,
      date: showcase.date,
    })),
);
