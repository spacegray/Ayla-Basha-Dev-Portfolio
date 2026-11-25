// Site-wide settings. Edit these first when customizing.
export const site = {
  name: 'Ayla Basha',
  shortName: 'ayla',
  location: 'San Diego, CA',
  title: 'Ayla Basha | Full-stack developer and designer, San Diego',
  description:
    'Ayla Basha designs and builds websites shaped around each client’s business, from real estate and artists to restaurants and shops, plus AI agents that handle the busywork.',
  email: 'aylabasha@gmail.com',
  // Typed roles in the hero, in order.
  roles: ['agentic AI developer', 'full-stack developer', 'web designer'],
  availability: 'Taking new projects', // TODO: confirm wording, or set to '' to hide.
  socials: [
    { label: 'GitHub', href: 'https://github.com/spacegray' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aylabasha/' },
  ],
  // TODO: add an up-to-date resume at public/ayla-basha-resume.pdf (LinkedIn dates), then set this to '/ayla-basha-resume.pdf'.
  resumeHref: '',
  // Contact form endpoint (e.g. Formspree). Leave empty to fall back to opening the visitor's email app.
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT ?? '',
  keywords: [
    'developer portfolio',
    'full-stack developer portfolio',
    'Claude Code portfolio',
    'web designer San Diego',
    'real estate website developer',
    'artist website designer',
    'AI agent developer',
  ],
};

export const stats = [
  { value: '1M+', label: 'users supported as Tech Delivery Lead at TrueBlue' },
  { value: '1,500', label: 'hours of full-stack engineering training, App Academy' },
  { value: '10+', label: 'years performing at W Hotels, Hard Rock and Omnia' },
];
