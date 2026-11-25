// Dates and titles follow LinkedIn (confirmed by Ayla on 2026-11-23).
export type Role = {
  company: string;
  title: string;
  start: string;
  end: string;
  location?: string;
  body: string;
  tech: string[];
};

export const experience: Role[] = [
  {
    // TODO: Ayla to confirm this entry's title and dates (added to cover current client work).
    company: 'Freelance',
    title: 'Web designer and developer',
    start: '2025',
    end: 'Present',
    body: 'Designing, building and maintaining websites and apps: the Lanna Parker real estate site, the DJ Ayla Simone artist site, the Malachite restaurant concept, Daypad and Neurotype Reader. Building AI agent workflows with Claude Code and MCP.',
    tech: ['Web design', 'JavaScript', 'Claude Code', 'MCP'],
  },
  {
    company: 'Light Patterns',
    title: 'Software Engineer',
    start: 'Jun 2025',
    end: 'TBD', // TODO: Ayla to confirm end date (LinkedIn still says Present).
    location: 'Remote',
    body: 'Consultancy helping companies align their digital presence with business goals. Web and mobile apps with React, JavaScript and React Native.',
    tech: ['React', 'React Native', 'JavaScript'],
  },
  {
    company: 'Florida House of Representatives',
    title: 'Legislative Intern',
    start: 'Feb 2025',
    end: 'Present', // TODO: confirm still current.
    location: 'Remote',
    body: 'Cybersecurity and data privacy research, bill summaries and committee briefings, and social media slide decks that explain legislation clearly.',
    tech: ['Research', 'Cybersecurity', 'Communication'],
  },
  {
    company: 'TrueBlue Inc. (PeopleReady)',
    title: 'Tech Delivery Lead',
    start: 'Jan 2024',
    end: 'Jun 2025',
    location: 'Remote',
    body: 'Led support for JobStack apps serving 1M+ users. Diagnosed critical issues, bridged support and development, and turned recurring tickets into root-cause fixes.',
    tech: ['AWS', 'Dynatrace', 'Bug triage', 'Documentation'],
  },
  {
    company: 'App Academy',
    title: 'Technical Admissions Engineer',
    start: 'Apr 2023',
    end: 'Jan 2024',
    location: 'Remote',
    body: 'Ran technical and behavioral interviews, and taught data structures and algorithms in study groups and one-on-one sessions.',
    tech: ['JavaScript', 'Ruby', 'Python', 'DSA'],
  },
  {
    company: 'Godwit Key Company',
    title: 'Full Stack Engineer',
    start: 'Jun 2022',
    end: 'Sep 2022',
    location: 'San Diego',
    body: 'Built features for the Key Conservation mobile app with the development team and director.',
    tech: ['React Native', 'TypeScript', 'GraphQL', 'AWS'],
  },
  {
    company: 'Self-employed',
    title: 'DJ and entertainment consultant',
    start: '2010',
    end: '2021',
    location: 'San Diego',
    body: 'Residencies and performances for W Hotels, Hard Rock Hotels and Omnia. Built and ran my own website, social media and digital marketing.',
    tech: ['Brand', 'Web', 'Marketing'],
  },
];

export const education = [
  { title: 'Full Stack Software Engineer certification', org: 'App Academy', year: '2021', note: '1,500+ hour program' },
  { title: 'Associate of Arts, Political Science', org: 'San Diego Mesa College', year: '2011' },
];

export const skills = [
  { group: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML', 'CSS'] },
  { group: 'Frontend and mobile', items: ['React', 'React Native', 'Expo', 'Astro', 'Tailwind CSS', 'Zustand', 'Redux', 'Vite', 'Accessibility'] },
  { group: 'Backend and data', items: ['Node.js', 'Express', 'Flask', 'Cloudflare Workers', 'PostgreSQL', 'SQLite', 'Cloudflare D1', 'Drizzle ORM', 'GraphQL', 'SQLAlchemy', 'Sequelize'] },
  { group: 'AI and tools', items: ['Claude Code', 'Agentic workflows', 'MCP', 'ChatGPT', 'AWS', 'Vercel', 'Docker', 'Git'] },
];
