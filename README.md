# Bastav Podder — Portfolio

Personal portfolio built with React, Vite, Tailwind CSS v4, and GSAP (ScrollTrigger + Lenis smooth scroll).

## Stack

- **React 18 + Vite 6** — plain JS/JSX, no TypeScript, no router (single-page, anchor-based nav)
- **Tailwind CSS v4** — theme tokens defined in [`src/index.css`](src/index.css)
- **GSAP + @gsap/react + ScrollTrigger** — all animation/motion
- **Lenis** — smooth scrolling, synced to ScrollTrigger

All content (projects, skills, education, links) lives in one place: [`src/data/portfolio.js`](src/data/portfolio.js). Edit that file to update copy without touching components.

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build

```bash
npm run build   # outputs to dist/
npm run preview # serve the production build locally
```

## Deploy to Vercel

No config needed — Vercel auto-detects Vite (build command `vite build`, output `dist`).

- **Via CLI:** run `vercel` in this folder and follow the prompts.
- **Via GitHub:** push this repo to GitHub, then import it in the Vercel dashboard.

## Notes

- `public/resume.pdf` is served at `/resume.pdf` (linked from the nav "Resume" button and mobile menu).
- `public/favicon.svg` is the site favicon.
