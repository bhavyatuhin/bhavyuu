# Bhavya Thakor — Portfolio

A professional, responsive personal portfolio built with React, TypeScript and Vite. The site is a code-managed Living Archive: no CMS, admin dashboard, login, database or backend is required.

## Edit the content

Start with `src/data/portfolio.ts`. It contains the editable profile, projects, research notes, publications, certificates, interests and navigation. Add new entries to the relevant arrays and the archive will render them automatically.

- `profile` — name, introduction, about text, portrait path and public contact email.
- `projects` — project title, description, status, contribution and external link.
- `researchItems` — research themes and explorations.
- `publications` — books and other published work. Add the official link when available.
- `achievements` — verified certificates and recognitions.
- `interests` — personal interests shown in the About section.

To add a portrait, place the chosen image in `public/images/` and set `profile.portrait` to its public path, e.g. `/images/bhavya-portrait.jpg`.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`. Vercel settings: build command `npm run build`, output directory `dist`, install command `npm install`.
