# Klinix Project Guidelines

## Product Context

- Product: Klinix (AI-powered patient intake platform for dental clinics)
- Audience: US dental clinic owners and office managers (non-technical decision makers)
- Tone: confident, clinical, trustworthy, clear
- Priority themes: time savings, safety, HIPAA compliance, PMS compatibility, ease of adoption

## UI/UX Guidelines

- Prefer responsive layout with flex/grid; avoid fixed heights unless required.
- Keep CTA hierarchy clear: one primary action and one secondary action per section.
- Avoid crowded card clusters and long narrow text columns.
- Ensure text contrast is strong in all themes/sections.
- Preserve accessibility basics:
  - visible focus styles
  - meaningful button/link labels
  - semantic headings in order

## Content Guidelines

- Keep copy benefit-first and concrete.
- Avoid hype or startup jargon.
- Emphasize operational outcomes:
  - reduced intake time
  - fewer manual errors
  - faster front-desk workflow
- Reinforce trust markers where relevant:
  - HIPAA
  - SOC 2
  - secure handling of patient data

## Routing Guidelines

- Do not leave dead links (`href="#"`) in the app.
- Route all navigational links and CTA buttons to real pages.
- For new CTA pages, add route metadata in `src/app/content/sitePages.ts`.
- Maintain route registration via `App.tsx` map pattern for content pages.

## Styling Guidelines

- Reuse existing design tokens and utility patterns in `src/styles/theme.css`.
- Keep visual style consistent with existing Klinix palette:
  - primary teal accents
  - neutral clinical backgrounds
  - dark slate for high-emphasis sections
- Prefer consistent radius and spacing scale over one-off values.

## Code Quality Guidelines

- Keep components focused and readable.
- If component complexity grows, extract repeated blocks into smaller components.
- Use TypeScript types for shared page/content objects.
- Avoid introducing unused dependencies.

## Local Dev Reliability (Important)

This project lives in a OneDrive path; file watchers can miss changes on Windows.

- Keep Vite polling enabled in `vite.config.ts`:
  - `server.watch.usePolling: true`
  - `server.watch.interval: 120`
- If `vite.config.ts` changes, restart dev server once.

## Deployment Guidelines

- Verify `npm run build` passes before pushing.
- Keep SPA fallback in `vercel.json`:
  - `/(.*) -> /index.html`
- Keep no-store cache headers configured in `vercel.json` to reduce stale deploy behavior.
