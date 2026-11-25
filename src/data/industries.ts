// The "What are you building?" selector. Each entry re-themes the section (see [data-theme] in global.css).
export type Industry = {
  id: 'realestate' | 'artist' | 'restaurant' | 'shop' | 'ai';
  label: string;
  code: string;
  swatch: string; // CSS background for the chip tab
  kicker: string;
  title: string;
  subtitle: string;
  intro: string;
  needs: { title: string; body: string }[];
  projectSlug?: string; // links to a case study and pulls screenshots
  live?: string;
};

export const industries: Industry[] = [
  {
    id: 'realestate',
    label: 'Real estate',
    code: 'AB 16-1144',
    swatch: 'linear-gradient(135deg,#3a2c1e,#d7b77a 55%,#1e1812)',
    kicker: 'Live client site · designed and maintained',
    title: 'Lanna Parker, JD',
    subtitle: 'Downtown San Diego condos',
    intro: 'What real estate clients need, and how this site delivers it:',
    needs: [
      { title: 'Search that keeps buyers on your site', body: 'Property search by area, price, beds, baths and type, right on the hero.' },
      { title: 'Local pages that show expertise', body: 'A building directory: each tower gets a profile with quick facts, a gallery and its live listings.' },
      { title: 'Every page leads to a conversation', body: '"Request information" and "Schedule consultation" on every building and listing page.' },
    ],
    projectSlug: 'lanna-parker-real-estate',
    live: 'https://downtownlannabrown.com/',
  },
  {
    id: 'artist',
    label: 'Artist / DJ',
    code: 'AB 19-1934',
    swatch: 'linear-gradient(135deg,#2a0710,#7a2a4a 55%,#f7cde7)',
    kicker: 'Live artist site · designed and built',
    title: 'DJ Ayla Simone',
    subtitle: 'Music, events, bio, shop',
    intro: 'What artists need, and how this site delivers it:',
    needs: [
      { title: 'Music front and center', body: 'A built-in player for the After Hours EP, with a shareable playlist.' },
      { title: 'A story bookers trust', body: 'A bio covering residencies at Omnia, W Hotel and Hard Rock, plus Billboard work.' },
      { title: 'Everything in one link', body: 'Events, video, a merch shop and contact in a single site.' },
    ],
    projectSlug: 'dj-ayla-simone',
    live: 'https://www.djaylasimone.com/',
  },
  {
    id: 'restaurant',
    label: 'Restaurant',
    code: 'AB 19-5420',
    swatch: 'linear-gradient(135deg,#0b3a2e,#1e6b52 60%,#c9a55b)',
    kicker: 'Concept · in design',
    title: 'Malachite',
    subtitle: 'A concept for a wood-fired dining room',
    intro: 'What restaurants need, and what this concept will show:',
    needs: [
      { title: 'A menu you can update yourself', body: 'Menus as simple content, so prices and specials change without a designer.' },
      { title: 'Reservations without friction', body: 'A booking flow that works one-handed on a phone, plus private-dining inquiries.' },
      { title: 'Found by people nearby', body: 'Hours, location and menu marked up so search engines and maps show them correctly.' },
    ],
    live: 'https://malachite-demo-sigma.vercel.app/',
  },
  {
    id: 'shop',
    label: 'Shop / app',
    code: 'AB 19-1725',
    swatch: 'linear-gradient(135deg,#3b1620,#5a2430 60%,#c5e36b)',
    kicker: 'Own product · in progress',
    title: 'Goodfind',
    subtitle: 'Shopping discovery app',
    intro: 'What shops and product teams need, and how Goodfind approaches it:',
    needs: [
      { title: 'Comparison that builds trust', body: 'Side-by-side comparison of up to three items, with unknown details labeled honestly.' },
      { title: 'Lists that turn into purchases', body: 'Shopping lists, favorites grouped by retailer, and saved snapshots.' },
      { title: 'Accessible from the start', body: 'Mobile-first, keyboard-accessible controls and reduced-motion support.' },
    ],
    projectSlug: 'goodfind',
  },
  {
    id: 'ai',
    label: 'AI for your business',
    code: 'AB 18-3949',
    swatch: 'linear-gradient(135deg,#1b2bd6 0 60%,#ff6b1a 60%)',
    kicker: 'Agentic AI',
    title: 'Agents that handle the busywork',
    subtitle: 'Built with Claude, approved by you',
    intro: 'Where an agent can take work off your plate:',
    needs: [
      { title: 'Inbox triage', body: 'Sort new inquiries, pull out the details that matter, and flag what needs you today.' },
      { title: 'Drafts, not sends', body: 'Quotes and replies drafted in your voice and held for your review before anything goes out.' },
      { title: 'Connected to your tools', body: 'Email, calendar, documents and your website, wired together with MCP.' },
    ],
  },
];
