# HOMELUXE Real Estate — Dev Environment

## Stack
- **Frontend:** Vite + React 18 + Tailwind CSS 3
- **Package manager:** npm (no lockfile; `npm install` on container start)
- **Dev server:** `vite dev` on port 3000, bind 0.0.0.0

## Running
```bash
docker compose -f docker-compose.base44.yml up -d --build
```
The app serves at http://localhost:3000. Vite live-reload applies edits automatically.

## Architecture
- All UI is in `src/components/` — modular, one component per file.
- Mock property data lives in `src/data/properties.js`.
- No backend, no database, no external services required.
- No secrets needed — the app is fully self-contained.

## Key files
- `src/App.jsx` — root component composing all sections
- `src/index.css` — Tailwind directives + global styles
- `tailwind.config.js` — custom color palette (navy, royal, emerald2, amber2)
