# Muted Science

Muted Science is a Vite + React site inside a Replit workspace.

## Main app

The public website lives here:

```text
artifacts/muted-science
```

Do not edit `artifacts/mockup-sandbox` for the public site. That folder is the Replit component preview shell.

## Run locally in Replit

From the repo root:

```bash
pnpm dev
```

Or from the app folder:

```bash
cd artifacts/muted-science
PORT=8080 BASE_PATH=/ pnpm dev
```

If port 8080 is busy:

```bash
fuser -k 8080/tcp 2>/dev/null || true
PORT=8080 BASE_PATH=/ pnpm dev
```

## Build check

From the repo root:

```bash
pnpm build:muted-science
```

Or from the app folder:

```bash
cd artifacts/muted-science
PORT=8080 BASE_PATH=/ pnpm build
```

## Current structure

- `src/pages/Home.tsx` — homepage layout
- `src/lib/siteConfig.ts` — nav, copy, categories, footer links, content labels
- `src/components/` — site sections
- `public/images/` — homepage image assets

## Notes

The app expects these environment values when running directly:

```text
PORT=8080
BASE_PATH=/
```
