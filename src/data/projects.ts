import type { ImageMetadata } from 'astro';
import lannaNight from '../assets/projects/lanna-hero-night-skyline.webp';
import lannaDusk from '../assets/projects/lanna-hero-dusk-balcony.webp';
import lannaDirectory from '../assets/projects/lanna-building-directory.webp';
import lannaIcon from '../assets/projects/lanna-building-icon.webp';
import lannaListings from '../assets/projects/lanna-building-listings.webp';
import aylaHome from '../assets/projects/ayla-simone-home.webp';
import aylaMusic from '../assets/projects/ayla-simone-music.webp';
import aylaBio from '../assets/projects/ayla-simone-bio.webp';
import aylaBio2 from '../assets/projects/ayla-simone-bio-2.webp';
import goodfindHome from '../assets/projects/goodfind-home-desktop.jpg';
import malachiteHero from '../assets/projects/malachite-hero.webp';
import malachitePhone from '../assets/projects/malachite-phone.webp';
import malachiteMenu from '../assets/projects/malachite-menu.webp';
import malachiteReserve from '../assets/projects/malachite-reserve.webp';
import malachiteHost from '../assets/projects/malachite-host.webp';
import malachiteBrand from '../assets/projects/malachite-brand.webp';
import daypadOg from '../assets/projects/daypad-og.webp';
import daypadTasks from '../assets/projects/daypad-tasks.webp';
import daypadCalc from '../assets/projects/daypad-calc.webp';
import daypadNotes from '../assets/projects/daypad-notes.webp';
import daypadTour from '../assets/projects/daypad-tour.webp';
import neuroHome from '../assets/projects/neurotype-home.webp';
import neuroReader from '../assets/projects/neurotype-reader.webp';
import neuroImport from '../assets/projects/neurotype-import.webp';

export type Shot = { src: ImageMetadata; alt: string; caption?: string };

/** Used by the work filter. */
export type Category = 'websites' | 'apps';
export const categories: { id: Category | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'websites', label: 'Websites' },
  { id: 'apps', label: 'Apps' },
];

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  kind: string; // e.g. "Live client site"
  category: Category;
  role: string;
  year: string;
  stack?: string[]; // "Built with" on the case study; omitted where the platform isn't confirmed
  coverPosition?: string; // CSS object-position for the card image
  hero?: Shot; // wide image for the case-study header; defaults to cover
  phoneShots?: boolean; // tall phone screenshots: shown four across
  chip: { name: string; code: string; swatch: string; ink: string };
  summary: string;
  outcome: string; // one line for the card; facts only
  tags: string[];
  live?: string;
  repo?: string;
  cover: Shot;
  shots: Shot[];
  caseStudy: {
    context: string;
    needs: { title: string; body: string }[];
    constraints: string[];
    flow: string[]; // simple data-flow / page-flow steps for the diagram
    lessons: string[]; // shown as "Approach": design decisions, not claimed results
  };
  // TODO fields Ayla should fill before launch; listed in README.
  todo?: string[];
};

export const projects: Project[] = [
  {
    slug: 'lanna-parker-real-estate',
    title: 'Lanna Parker, JD',
    subtitle: 'Downtown San Diego condos',
    kind: 'Live client site',
    category: 'websites',
    role: 'Design, development and ongoing maintenance',
    year: '2025–2026',
    chip: { name: 'GOLD SATIN', code: 'AB 16-1144', swatch: 'linear-gradient(160deg,#3a2c1e,#d7b77a 50%,#1e1812)', ink: '#fff' },
    summary:
      'A real estate site for a downtown San Diego condo specialist: video hero with property search, a building directory with a profile for every tower, neighborhood pages, a market snapshot and listing write-ups.',
    outcome: 'Every building and listing page leads to a consultation.',
    tags: ['Web design', 'IDX search', 'Local SEO', 'Maintenance'],
    live: 'https://downtownlannabrown.com/',
    cover: { src: lannaNight, alt: 'Lanna Parker site hero: downtown San Diego at night behind a property search panel' },
    shots: [
      { src: lannaDusk, alt: 'Hero at dusk over downtown San Diego with the property search panel', caption: 'Video hero with property search on top' },
      { src: lannaDirectory, alt: 'Downtown San Diego Building Directory page with featured buildings', caption: 'Building directory' },
      { src: lannaIcon, alt: 'Icon building profile with gallery, quick facts and a contact block', caption: 'Building profile: quick facts, gallery, tabs' },
      { src: lannaListings, alt: 'Available listings at Icon, shown as cards with price, beds, baths and size', caption: 'Live listings for each building' },
    ],
    caseStudy: {
      context:
        'Lanna Parker, JD sells downtown San Diego condos. Buyers compare high-rises building by building, so the site needed to be the place they do that comparison, with Lanna one click away.',
      needs: [
        { title: 'Search that keeps buyers on the site', body: 'Property search by area, price, beds, baths and type sits on the hero, over a looping video of the city.' },
        { title: 'Local pages that show expertise', body: 'A downtown building directory gives every tower a profile: overview, amenities, building and location tabs, quick facts, a photo gallery and its live listings.' },
        { title: 'Every page leads to a conversation', body: '"Request information" and "Schedule consultation" sit on every building and listing page, next to Lanna’s photo.' },
      ],
      constraints: [
        'Listings come from the MLS feed, so layouts had to work with whatever photos and fields each listing has.',
        'Brokerage branding (Denny Oh & Associates, Real) has to appear alongside Lanna’s own brand.',
        'The site is maintained over time, so new building profiles must be easy to add as the directory grows.',
      ],
      flow: ['MLS listing feed', 'Search and filters', 'Building profiles', 'Listing pages', 'Consultation request'],
      lessons: [
        'Organize by building, not only by listing, because downtown buyers compare towers before units.',
        'Put the same contact block on every page instead of relying on one contact page.',
      ],
    },
    todo: ['Platform or tools used', 'Launch date', 'Any results Lanna is happy to share (leads, traffic)'],
  },
  {
    slug: 'malachite',
    title: 'Malachite',
    subtitle: 'Restaurant and cocktail lounge',
    kind: 'Concept site, live demo',
    category: 'websites',
    role: 'Brand, art direction, copy, UI design and front end',
    year: '2026',
    stack: ['Astro', 'TypeScript', 'Tailwind CSS', 'SVG', 'Vercel'],
    chip: { name: 'MALACHITE', code: 'AB 19-5420', swatch: 'linear-gradient(160deg,#0a0907,#1e7a5e 55%,#c9a55b)', ink: '#fff' },
    summary:
      'A site for a wood-fired kitchen and late-night lounge: live open or closed status, a menu where each dish lights up in its photo, four-step booking, and a host stand for staff.',
    outcome: 'Open now, next free table and the menu, within seconds.',
    tags: ['Brand system', 'Booking flow', 'Interactive menu', 'Local SEO'],
    live: 'https://malachite-demo-sigma.vercel.app/',
    repo: 'https://github.com/spacegray/-Malachite-Restaurant',
    cover: { src: malachitePhone, alt: 'Malachite on a phone: a gold vaulted dining room with a chandelier, the headline and an Opens 5 pm today status line' },
    hero: { src: malachiteHero, alt: 'Malachite home page: a gold-tiled vaulted dining room, the headline "Dinner by firelight. Drinks till late." and a Tonight card with hours and the next free table' },
    shots: [
      { src: malachiteMenu, alt: 'Dinner menu with Charred octopus highlighted: the plate glows in the photo under a gold label with its price', caption: 'Hover or tap a dish and it lights up in the photo' },
      { src: malachiteReserve, alt: 'Reservation section with a month calendar, a grid of times and a guest details form', caption: 'Four-step booking with live availability' },
      { src: malachiteHost, alt: 'Host stand with covers by time, guest status controls and the reservation list', caption: 'Host stand: covers by time, seated and no-show, CSV export' },
      { src: malachiteBrand, alt: 'Brand kit page with color swatches, type specimens and button components', caption: 'Built-in brand kit with contrast checked at build time' },
    ],
    caseStudy: {
      context:
        'Guests looking at a restaurant site on their phone want three answers: is it open, can I get a table, and what does the food look like. Malachite answers all three on the first screen, then sells the evening.',
      needs: [
        { title: '"Are you open?" answered first', body: 'A live Tonight card shows kitchen hours, bar hours and the next free table, calculated in the restaurant’s time zone.' },
        { title: 'A menu that shows the food', body: 'Hover, focus or tap any of 20 linked dishes and drinks, and that plate or glass lights up in the photo with its name and price.' },
        { title: 'Booking without friction', body: 'Date, time, details, confirmed. Parties of seven or more are guided to private dining, and guests can add the booking to their calendar.' },
        { title: 'Content the owner can change', body: 'Menu, hours, events and themes live in typed data files. Change a price once and the menu, booking slots and search data all update.' },
      ],
      constraints: [
        'A concept for a fictional restaurant, so bookings are stored in the browser. The README documents what a real launch would connect.',
        'No UI framework: every interaction is a small TypeScript module, to keep pages fast.',
        'Layout tested from 320 px phones to 2560 px displays, with full keyboard and screen reader support.',
      ],
      flow: ['Opening hours data', 'Live status', 'Menu spotlight', 'Booking flow', 'Host stand'],
      lessons: [
        'One source of truth for hours drives the status line, the booking slots and the search engine data, so they can never disagree.',
        'Dish highlights are SVG paths traced to each plate, not boxes, so the photo stays the hero.',
        'Every feature started as a reviewed mockup before any code.',
      ],
    },
  },
  {
    slug: 'dj-ayla-simone',
    title: 'DJ Ayla Simone',
    subtitle: 'Music, events, bio and shop',
    kind: 'Live artist site',
    category: 'websites',
    role: 'Design and build',
    year: '2026',
    chip: { name: 'CRYSTAL NOIR', code: 'AB 19-1934', swatch: 'linear-gradient(160deg,#2a0710,#6b1e3a 55%,#f7cde7)', ink: '#fff' },
    summary:
      'An artist website with a built-in music player for the After Hours EP, events, a full bio, video and a merch shop, all in one link to send bookers and fans.',
    outcome: 'One link for music, bookings and merch.',
    tags: ['Web design', 'Music player', 'E-commerce', 'Responsive'],
    live: 'https://www.djaylasimone.com/',
    cover: { src: aylaHome, alt: 'DJ Ayla Simone home page with a portrait and the artist name over a pastel gradient' },
    shots: [
      { src: aylaMusic, alt: 'Latest Tracks page with the After Hours EP cover and a track player', caption: 'Music player for the After Hours EP' },
      { src: aylaBio, alt: 'Bio page titled My Life is My Music with a long artist biography', caption: 'Bio for bookers and press' },
      { src: aylaBio2, alt: 'Bio teaser with a photo in front of a vinyl wall and a Read more button', caption: 'Bio teaser on the home page' },
    ],
    caseStudy: {
      context:
        'Bookers, promoters and fans all need something different from a DJ. The site puts the music first, backs it with a bio bookers can trust, and keeps events, video and merch one tap away.',
      needs: [
        { title: 'Music front and center', body: 'A built-in player with the After Hours EP and a shareable playlist.' },
        { title: 'A story bookers trust', body: 'A bio covering residencies at Omnia, W Hotel and Hard Rock, plus work as a Billboard Music reporter.' },
        { title: 'Everything in one link', body: 'Home, music, events, bio, shop, contact and video in a single site with a cart for merch.' },
      ],
      constraints: [
        'New tracks and dates come often, so updates need to be quick.',
        'It has to look as good on a phone in a club as on a promoter’s laptop.',
      ],
      flow: ['Home', 'Music player', 'Events', 'Bio and press', 'Booking contact'],
      lessons: ['Lead with the music, then back it with the bio and press.'],
    },
    todo: ['Platform used', 'Launch date', 'Whether to add a press-kit redesign as a before and after'],
  },
  {
    slug: 'daypad',
    title: 'Daypad',
    subtitle: 'Tasks, calculator and notes app',
    kind: 'Mobile and web app',
    category: 'apps',
    role: 'Product design, mobile development and testing',
    year: '2026',
    stack: ['React Native', 'Expo', 'TypeScript', 'Zustand', 'Reanimated', 'Node test runner'],
    coverPosition: 'center top',
    phoneShots: true,
    chip: { name: 'LIME TAPE', code: 'AB 13-0550', swatch: 'linear-gradient(160deg,#faf8f3,#d8f55b 55%,#4b2bff)', ink: '#111' },
    summary:
      'One app for what you jot down in a day: tasks that understand "tomorrow 5pm #family", a calculator with a running tape you can save to a note, and notes with reminders.',
    outcome: 'Runs on iOS, Android and the web from one TypeScript codebase.',
    tags: ['React Native', 'Natural-language input', 'Offline', 'Unit tested'],
    live: 'https://daypad.vercel.app/',
    repo: 'https://github.com/spacegray/RN-To-Do-List',
    cover: { src: daypadTasks, alt: 'Daypad tasks screen in light mode with a progress bar and a task preview chip reading Tomorrow 5:00 pm, #family, High priority' },
    hero: { src: daypadOg, alt: 'Daypad: three phone screens showing tasks, the calculator tape and notes, beside the app name' },
    shots: [
      { src: daypadTasks, alt: 'Tasks in light mode with a typed task being parsed into a due time, tag and priority', caption: 'Quick add parses dates, times, #tags and !priority' },
      { src: daypadCalc, alt: 'Calculator in dark mode with a running tape and Save result, Save tape, Undo and Copy buttons', caption: 'Running tape, undo step by step' },
      { src: daypadNotes, alt: 'Notes in light mode with a pinned note holding a saved calculation', caption: 'Save a calculation straight to a note' },
      { src: daypadTour, alt: 'Guided tour highlighting the Save result button with an explanation card', caption: 'The "?" tour explains every control' },
    ],
    caseStudy: {
      context:
        'Started in 2023 as a one-screen React Native tutorial to-do list. Version 2 is a full rebuild: new architecture, state layer, design system, features and tests, with the original commits kept in the history.',
      needs: [
        { title: 'Add a task as fast as you can type it', body: '"Call mom tomorrow 5pm #family !" gets its due time, tag and priority automatically, with a preview chip before you add it.' },
        { title: 'Math you can trust and reuse', body: 'Operator precedence, floating point noise removed, desk-calculator percent, 60-step undo, and one tap to save the result or the whole tape to a note.' },
        { title: 'Easy to learn', body: 'A "?" button on every screen walks through each control and explains how it works under the hood.' },
      ],
      constraints: [
        'Works offline. All data stays on the device.',
        'Reminders are native notifications on phones and a banner plus browser notification on the web, behind one shared interface.',
        'Every animation respects the system reduce-motion setting.',
      ],
      flow: ['Quick add parser', 'Zustand stores', 'Tasks, Calc, Notes', 'Save tape to note', 'Reminders'],
      lessons: [
        'Keep logic pure and test it apart from the UI: the calculator is a reducer and the parser takes an injectable clock.',
        'One store per concern, read with selectors, so a key press on the calculator never re-renders the task list.',
        'Platform files instead of runtime checks for native versus web reminders.',
      ],
    },
  },
  {
    slug: 'neurotype-reader',
    title: 'Neurotype Reader',
    subtitle: 'Bionic reading app',
    kind: 'Web app',
    category: 'apps',
    role: 'Product design and full-stack development',
    year: '2026',
    stack: ['React 19', 'TypeScript', 'Vite', 'Cloudflare Workers', 'D1', 'Drizzle ORM'],
    coverPosition: '8% center',
    chip: { name: 'VIOLET INK', code: 'AB 18-3838', swatch: 'linear-gradient(160deg,#9ba8e0,#c9a7e8 50%,#7a3fa6)', ink: '#fff' },
    summary:
      'A reading app that bolds the beginning of each word. Paste a passage or import an article, adjust the emphasis, and compare both versions side by side.',
    outcome: 'Adjustable emphasis, article import and in-browser summaries.',
    tags: ['Accessibility', 'Full stack', 'Edge deploy', 'Typography'],
    live: 'https://neurotype-reader.urbansafariwear.chatgpt.site/',
    repo: 'https://github.com/spacegray/Neuro-Reader',
    cover: { src: neuroHome, alt: 'Neurotype Reader home: the headline Reading ON Flow State beside glass cards with a magnifier over the word Focus' },
    shots: [
      { src: neuroReader, alt: 'The same passage in the original and focus views, with word emphasis set to 40 percent', caption: 'One passage, two views, with a draggable divider' },
      { src: neuroImport, alt: 'An article from the research shelf opening in the URL importer for review', caption: 'Article import with a preview before replacing the draft' },
    ],
    caseStudy: {
      context:
        'Some readers focus better when the start of each word is bold. Neurotype Reader turns any passage or article into that format, and lets the reader tune it rather than accept one fixed style.',
      needs: [
        { title: 'Tune it to the reader', body: 'Change emphasis, text size and color contrast while reading. Drag the divider or use the arrow keys to compare, then switch to a full-width focus view.' },
        { title: 'Bring your own reading', body: 'Open a supported article URL or pick from a research shelf, and preview the source and word count before it replaces your draft.' },
        { title: 'The gist without an AI service', body: 'An extractive summarizer pulls up to four key sentences in their original order, running entirely in the browser.' },
      ],
      constraints: [
        'Bold prefixes are calculated from Unicode letters and numbers, keeping the passage’s spacing and punctuation intact.',
        'The importer checks each redirect against supported publishers before extracting text.',
        'Music search falls back to curated feeds when the YouTube API quota runs out.',
      ],
      flow: ['Paste or import', 'Bold-prefix engine', 'Compare view', 'Focus view', 'Saved preferences (D1)'],
      lessons: [
        'Give readers controls, not a single “right” setting.',
        'Make every external service optional, so the core reader works with no keys at all.',
      ],
    },
  },
  {
    slug: 'goodfind',
    title: 'Goodfind',
    subtitle: 'Shopping discovery app',
    kind: 'Own product, in progress',
    category: 'apps',
    role: 'Product design and full-stack development',
    year: '2026',
    stack: ['Python', 'JavaScript', 'SQLite'],
    chip: { name: 'GOOD PLUM', code: 'AB 19-1725', swatch: 'linear-gradient(160deg,#3b1620,#5a2430 60%,#c5e36b)', ink: '#fff' },
    summary:
      'A shopping discovery app for the moment before checkout: compare finds across retailers, build shopping lists, save favorites grouped by store, and put outfits together.',
    outcome: 'Compare, save and style across retailers in one place.',
    tags: ['Python', 'JavaScript', 'SQLite', 'Accessibility'],
    repo: 'https://github.com/spacegray/Goodfind',
    cover: { src: goodfindHome, alt: 'Goodfind home page: Find your kind of good, with a search bar and a model in a white sweatshirt' },
    shots: [],
    caseStudy: {
      context:
        'Shoppers bounce between retailer tabs to compare the same idea. Goodfind brings those finds into one space so people can compare, save and plan before they buy.',
      needs: [
        { title: 'Compare without the tab chaos', body: 'Select up to three listings and compare their details side by side. Unknown values are labeled as unknown rather than guessed.' },
        { title: 'Lists that turn into purchases', body: 'Shopping lists with multiple items, a search for each item, and saved snapshots.' },
        { title: 'Plan the whole look', body: 'An outfit studio to preview pieces together, plus favorites grouped by retailer with subtotals.' },
      ],
      constraints: [
        'The demo catalog is illustrative, and the interface says so clearly so no one mistakes it for live offers.',
        'Live search is optional: it calls a shopping search provider only when a key is configured.',
        'Built mobile-first with keyboard-accessible controls and reduced-motion support.',
      ],
      flow: ['Search or browse', 'Compare up to three', 'Save to lists and favorites', 'Group by retailer', 'Retailer link'],
      lessons: ['Label sample data honestly in the interface rather than dressing it up as real offers.'],
    },
    todo: ['Deploy a live demo and add the link', 'Mobile screenshots'],
  },
];

export const earlierBuilds = [
  { title: 'HauteFinder', body: 'Social marketplace for new and used fashion. React, Flask, PostgreSQL.', repo: 'https://github.com/spacegray/haute-finder' },
  { title: 'AirbnBoats', body: 'Boat rental listings with reviews and user auth. React, Express, PostgreSQL.', repo: 'https://github.com/spacegray/AirbnBoats' },
  { title: 'PetOverflow', body: 'Team-built Q and A site with search autocomplete. Express, Sequelize.', repo: 'https://github.com/spacegray/pet-overflow' },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
