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

export type Shot = { src: ImageMetadata; alt: string; caption?: string };

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  kind: string; // e.g. "Live client site"
  role: string;
  year: string;
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
    slug: 'dj-ayla-simone',
    title: 'DJ Ayla Simone',
    subtitle: 'Music, events, bio and shop',
    kind: 'Live artist site',
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
    slug: 'goodfind',
    title: 'Goodfind',
    subtitle: 'Shopping discovery app',
    kind: 'Own product, in progress',
    role: 'Product design and full-stack development',
    year: '2026',
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
