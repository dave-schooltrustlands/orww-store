# orww.store

Modern presentation layer over Bob Zybach's Oregon Websites and Watersheds Project archive at [www.orww.org](http://www.orww.org/).

Built with Astro + Tailwind. Static site. Hosted on Cloudflare Pages.

## Stack

- Astro 5 + TypeScript (strict)
- Tailwind CSS 3.4 with the ORWW palette (navy, oxblood, forest, parchment)
- IBM Plex Serif + IBM Plex Sans (Google Fonts)
- Sharp for image optimization

## Develop

```
npm install
npm run dev
```

## Build

```
npm run build
```

Output goes to `dist/`. Deploys to Cloudflare Pages on push to `main`.

## Structure

- `src/layouts/BaseLayout.astro` — masthead + nav + footer chrome
- `src/components/` — Masthead, Footer, ProjectRow, TopicHero, SubsectionList, LicensingCTA
- `src/pages/` — home, about, 4 topic pages, contact, reference-desk stub, colophon
- `src/assets/images/` — hero images processed at build time via Astro Image
- `public/` — static assets passed through as-is

## Canonical archive

The full ORWW archive — three decades of fieldwork, document scans, photo galleries, video, and the OR_LYNX local-information database — remains at [www.orww.org](http://www.orww.org/) and is the canonical source. Deep links from this site point to orww.org over `http://` (orww.org is HTTP-only by design).

## License

© 1996–2026 Oregon Websites and Watersheds Project, Inc. & NW Maps Co. Site by Dave Sullivan and the OASTL working group.
