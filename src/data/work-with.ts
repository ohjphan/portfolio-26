export const workWith = {
  meta: {
    title: 'Work with Jessica',
    description:
      'A letter from Jessica Phan — open to collaborating with people building something, from the messy beginning through the craft of making it real.',
  },
  letter: {
    title: 'Dear people building something,',
    beforePoints: [
      'I really like the beginning.',
      'The messy part. When the idea is still half formed, the path isn’t obvious, and someone has to start connecting the dots.',
      'That’s usually where I’m happiest.',
      'I’ve spent most of my career in 0→1 environments as a founding designer, sometimes the solo designer, sometimes player-coach, and sometimes a founder myself.',
      'And still, I’m someone who likes opening Figma (actually, these days, Cursor) and making the thing myself.',
      'I’m open to collaborating.',
      'That might mean shaping a new product, helping a founder give an idea form, advising a team, joining something more deeply, or simply being another creative brain in the room.',
      'I’m interested in good people, interesting problems, and work that feels worth caring about.',
    ],
    points: [
      'I like figuring out the big ideas, then zooming in to sweat the small details.',
      'I like asking what and why we should build before jumping into how.',
      'I care about how product, brand, story, and craft fit together — the overall experience.',
      'I like making complicated things feel simple, thoughtful, and human.',
      'I like being there before everything makes sense.',
    ],
    afterPoints: [
      'A lot of my work starts the same way: curiosity first, then figuring out what to make.',
      {
        segments: [
          { text: 'I’m not an expert in one industry. ' },
          { text: 'I’ve worked', href: '/creating' },
          {
            text: ' across crypto, HR tech, education, AI, ecommerce, enterprise, and a few things in between.',
          },
        ],
      },
      'I think of myself more as a specialist design generalist: someone who can zoom out, connect the dots, and then get close enough to the work to make it real.',
      'Tell me what you’re building, what you’re excited about, and where you’re stuck.',
      'You don’t need to have it all figured out. Actually, I might prefer that you don’t. We can figure it out together.',
    ],
  },
  collage: {
    src: '/images/open-to-collaborating/journey-collage.jpg',
    alt: 'Collage of scribbled ideas connected by a cobalt line through wireframes, color swatches, and a hand placing the final dot',
    width: 1024,
    height: 341,
  },
  testimonials: [
    'She’s really good at cutting cubes out of the fog. Jessica can take something ambiguous and give it shape, strategy, and direction, while still caring about the little details that make it feel special.',
    'Jessica is thoughtful in all the ways she shows up. She thinks deeply about the work, the story, what people need to understand, and how something will be received.',
    'Jess is just a light. She brings intelligence and substance into the room, but also warmth, humor, and a kind of energy that makes people genuinely look forward to working with her.',
    'Jessica has this builder instinct where she’ll probably just go make the thing. She doesn’t stop at the idea. She figures out how to turn it into something real.',
    'She has an incredible eye for craft. Jessica notices the spacing, the composition, the system, the tiny thing that’s one pixel off, and she cares enough to make it right.',
  ],
  contact: {
    linkedin: 'https://www.linkedin.com/in/jessicaphan/',
    linkedinLabel: 'Message me on LinkedIn',
    aboutHref: '/jessica',
    aboutLabel: 'More about me',
  },
} as const;
