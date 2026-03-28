# New Style by Zeynep & Faisal — Landingpage

Premium-Friseur-Meisterbetrieb in Gelsenkirchen — statische Website mit [Astro](https://astro.build).

## Entwicklung

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Ausgabe: `dist/` (z. B. [Cloudflare Pages](https://pages.cloudflare.com/) oder GitHub Pages).

## Inhalte pflegen

- Zentrale URLs & Kontakt: `src/data/site.ts`
- SEO-Titel & Beschreibung: `src/pages/index.astro`
- Domain für Sitemap: `astro.config.mjs` → `site`

Online-Termine: [Planity](https://www.planity.com/de-DE/new-style-by-zeynep-faisal-meisterbetrieb-45891-gelsenkirchen)
