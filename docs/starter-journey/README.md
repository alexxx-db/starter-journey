# Starter Journey

A 101 guide for getting started on Databricks. Built with [Docusaurus](https://docusaurus.io/) 3.x.

## Features

- **Docs**: Full journey from foundations to AI/ML
- **Blog**: Posts by year; placeholders for LinkedIn, Medium, YouTube
- **Theme**: Electric/neon (white + electric blue/red in light; black + electric blue/red in dark)
- **Search**: Local search over docs and blog (no Algolia required)

## Installation

```bash
npm install
```

## Local development

```bash
npm start
```

Runs at `http://localhost:3000`.

## Build

```bash
npm run build
```

Output is in `build/`.

## Deployment (e.g. GitHub Pages)

Configured for `https://databricks-solutions.github.io/starter-journey/`. To deploy:

```bash
USE_SSH=true npm run deploy
```

Or without SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

## Project structure

- `docs/` – Starter Journey guide (sidebar in `sidebars.ts`)
- `blog/` – Blog posts
- `src/pages/index.tsx` – Home page (hero + title + subtitle)
- `src/css/custom.css` – Electric/neon theme

## Replacing the hero image

Replace `static/img/hero-sample.svg` with your own image and keep the same path, or update the `src` in `src/pages/index.tsx` to point to a new file in `static/img/`.
