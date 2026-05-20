# Klinix Web App

Modern SaaS marketing site and auth flow for **Klinix**, an AI-powered patient intake platform for dental clinics.

## Tech Stack

- React 18 + TypeScript
- Vite 6
- React Router
- Tailwind CSS 4
- Vercel static deployment

## Project Structure

- `src/app/components` reusable UI sections and shared primitives
- `src/app/pages` route-level pages
- `src/app/content/sitePages.ts` metadata for content pages generated from CTA/footer/nav links
- `src/styles` theme and global styles
- `vercel.json` SPA routing + cache headers for deployment
- `vite.config.ts` Vite build/dev config (including file-watcher polling for Windows/OneDrive)

## Available Scripts

- `npm run dev` start local dev server
- `npm run build` create production build in `dist/`

## Local Development

1. Install dependencies:

```bash
npm i
```

2. Start dev server:

```bash
npm run dev
```

3. Open the local URL shown by Vite (usually `http://localhost:5173`).

## Routing

Core app routes:

- `/`
- `/signin`
- `/signup`
- `/dashboard`

Content routes are configured through `src/app/content/sitePages.ts` and auto-registered in `App.tsx` using `ContentPage`.
Add a new object in `sitePages` to create a new routed content page.

## Refresh / HMR Notes (Windows + OneDrive)

This repo is under OneDrive, where filesystem events can be unreliable.  
To prevent needing frequent server restarts, Vite is configured with polling:

- `server.watch.usePolling = true`
- `server.watch.interval = 120`

After changing `vite.config.ts`, restart `npm run dev` once. After that, normal file edits should reflect on refresh/HMR.

## Deployment (Vercel)

- Uses `@vercel/static-build` and serves `dist/`
- SPA fallback route sends unknown paths to `index.html`
- `Cache-Control: no-store` headers are configured in `vercel.json` so fresh deploy changes appear quickly

## Design/Content Notes

- Landing page optimized for dental clinic owners and office managers
- Trust-first messaging: HIPAA/SOC2/security emphasis
- CTA routes are real pages (no dead links)
