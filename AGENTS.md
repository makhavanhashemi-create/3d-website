# HOMELUXE Real Estate — Base44 Dev Environment

## Stack
- **Vite 5 + React 18 + TypeScript** — frontend only, no backend.
- **Tailwind CSS 3** — styling via `tailwind.config.js` (custom navy/royal/emerald/amber palette).
- **lucide-react** — icon set.

## Running
```
docker compose -f docker-compose.base44.yml up -d --build
```
- Dev server runs on port 5173 inside the container, mapped to host port 3000.
- `npm install` runs automatically on container startup (node_modules in a named volume).
- Live reload via Vite HMR with polling (bind-mount compatible).

## Architecture
- All UI is component-based under `src/components/`.
- Mock property data lives in `src/data/properties.ts`.
- Fonts (Inter + Plus Jakarta Sans) loaded from Google Fonts in `index.html`.

## Key Files
- `docker-compose.base44.yml` — dev compose (node:22-slim, bind-mounted source).
- `.base44/environment.json` — Base44 metadata.
- `tailwind.config.js` — design tokens (colors, fonts, animations).
