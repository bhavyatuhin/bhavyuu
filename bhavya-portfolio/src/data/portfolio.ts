/**
 * Bhavya Thakor — portfolio content
 *
 * This is the main place to update the website. Add or edit entries here;
 * the page layout reads from these arrays automatically.
 * Do not add an achievement until its wording and evidence are confirmed.
 */

export type ArchiveCategory = 'Projects' | 'Research' | 'Publications' | 'Recognition'

export const profile = {
  name: 'Bhavya Thakor',
  firstName: 'Bhavya',
  lastName: 'Thakor',
  eyebrow: 'Creator · Research enthusiast · Writer',
  headline: 'Curiosity, research and ideas put into practice.',
  introduction:
    'I enjoy exploring ideas, learning across disciplines and contributing to projects that bring people and perspectives together.',
  about: [
    'I am interested in the space where research, communication and creative thinking meet. I enjoy asking questions, learning new things and turning ideas into collaborative work.',
    'This portfolio is a growing record of the projects I contribute to, the things I write and the experiences that shape what I want to explore next.',
  ],
  location: '', // Add only when Bhavya confirms the location she wants public.
  email: '', // Add her preferred public contact email when confirmed.
  portrait: '', // Add a portrait path after Bhavya chooses a photograph.
  availability: 'Open to thoughtful collaborations',
}

export const navigation = [
  { label: 'Work', href: '#work' },
  { label: 'Research', href: '#research' },
  { label: 'Publications', href: '#publications' },
  { label: 'Recognition', href: '#recognition' },
  { label: 'About', href: '#about' },
]

export const projects = [
  {
    id: 'paradigm-shift',
    number: '01',
    title: 'Paradigm Shift',
    category: 'Space exploration',
    status: 'Ongoing collaboration',
    description:
      'A collaborative project exploring how Earth environments can serve as analogues for future lunar and Martian exploration.',
    contribution:
      'Co-created in collaboration with Tuhin Ahmed for NASA Space Apps Challenge.',
    link: 'https://bhavyatuhin.github.io/Paradigm-Shift-/',
    linkLabel: 'Visit project',
    certificate: true,
    year: '2026',
  },
  {
    id: 'banguj-bridge',
    number: '02',
    title: 'Veritas AI — BANGUJ Bridge',
    category: 'Language & technology',
    status: 'Ongoing collaboration',
    description:
      'A multilingual disaster-intelligence initiative designed to make important information more accessible across language communities.',
    contribution:
      'Co-created in collaboration with Tuhin Ahmed.',
    link: 'https://ban-guj-bridge.vercel.app/',
    linkLabel: 'Visit project',
    certificate: true,
    year: '2026',
  },
]

export const researchItems = [
  {
    title: 'Earth analogues for space exploration',
    detail:
      'Exploring how terrestrial environments can inform research and planning for future lunar and Martian missions.',
    relatedProject: 'Paradigm Shift',
  },
  {
    title: 'Accessible multilingual information',
    detail:
      'Considering how language-aware technology can help communities access critical information.',
    relatedProject: 'BANGUJ Bridge',
  },
]

export const publications = [
  {
    id: 'drifted',
    title: 'Drifted',
    type: 'Book',
    description: 'A book by Bhavya Thakor.',
    link: 'https://www.wattpad.com/story/409152215-drifted-from-lost-to-self-directed',
    linkLabel: 'Read on Wattpad',
    status: 'Publication',
  },
]

export const achievements = [
  {
    id: 'paradigm-certificate',
    title: 'Project certificate — Paradigm Shift',
    detail: 'Certificate received. Issuer and certificate details can be added from the original document.',
    year: '2026',
    category: 'Project certificate',
  },
  {
    id: 'banguj-certificate',
    title: 'Project certificate — BANGUJ Bridge',
    detail: 'Certificate received. Issuer and certificate details can be added from the original document.',
    year: '2026',
    category: 'Project certificate',
  },
]

export const interests = [
  { title: 'Writing', detail: 'Exploring ideas and expression through words.' },
  { title: 'Guitar & music', detail: 'Learning, listening and enjoying the process of making music.' },
  { title: 'Creative expression', detail: 'Finding different ways to communicate thoughts and perspectives.' },
]

export const socialLinks: Array<{ label: string; url: string }> = []
