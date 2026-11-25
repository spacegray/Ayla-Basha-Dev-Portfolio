# Ayla Basha portfolio

Client-first portfolio: a liquid-glass hero, a "What are you building?" selector that re-themes per industry, project cards styled as color chips, case-study pages, an agentic AI section, experience, and contact.

Built with Astro, Tailwind CSS 4, three.js (hero glass) and GSAP (intro text scroll).

## Run it

Node lives in `~/.local/node` on this Mac (installed without admin rights). Add it to your shell first:

```bash
export PATH="$HOME/.local/node/bin:$PATH"
```

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```

The build outputs a static site in `dist/` that deploys as-is to Vercel, Netlify or Cloudflare Pages.

## Where things live

| What | File |
|---|---|
| Name, email, roles, socials, stats, SEO keywords | `src/data/site.ts` |
| Projects and case-study content | `src/data/projects.ts` |
| Selector options (industries) | `src/data/industries.ts` |
| Experience, education, skills | `src/data/experience.ts` |
| Colors, fonts, section themes | `src/styles/global.css` |
| 3D glass hero | `src/scripts/hero-glass.ts` |
| Sections | `src/components/*.astro` |
| Case-study template | `src/pages/work/[slug].astro` |

To add a project: put its screenshots in `src/assets/projects/`, add an entry to `projects` in `src/data/projects.ts`. Its card and case-study page are generated automatically. To feature it in the selector, set `projectSlug` on an industry.

## Behavior notes

- **Hero glass:** Loads after first paint, only if WebGL2 is available. Phones and reduced-motion users get one still frame. The animation pauses when the hero is off screen or the tab is hidden. The CSS foil gradient shows as a fallback.
- **Reduced motion:** All reveals, typing and twinkles switch off.
- **Selector:** Tabs follow the ARIA tabs pattern (arrow keys, Home, End).
- **Menu:** Full-screen, traps focus, and closes on Esc.
- **Contact form:**
  - **No form service set:** Opens the visitor's email app with the message filled in.
  - **Real submissions:** Set `PUBLIC_FORM_ENDPOINT` (for example a Formspree URL) in `.env`.

## Before launch (TODO)

1. **Domain:** Set `site` in `astro.config.mjs` to the real domain.
2. **Resume:** Add an up-to-date resume (LinkedIn dates) at `public/ayla-basha-resume.pdf` and set `resumeHref` in `src/data/site.ts`.
3. **Light Patterns:** End date in `src/data/experience.ts` (currently "TBD").
4. **Florida House:** Confirm the internship is still current.
5. **Freelance entry:** Confirm the title and dates of the "Freelance · Web designer and developer" entry.
6. **Lanna Parker:** Platform used, launch date, and any results Lanna is happy to share.
7. **DJ Ayla Simone:** Platform used and launch date.
8. **Goodfind:** Deploy a live demo, add its link and mobile screenshots.
9. **Availability:** Confirm the "Taking new projects" wording in `src/data/site.ts`.
10. **Contact form:** Choose a form service, or keep the email fallback.
11. **Malachite restaurant demo:** Not built yet. It shows as a concept in the selector.
