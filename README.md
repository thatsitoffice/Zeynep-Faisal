# Kalm Moments – Sleep Salon and Massage

Eine statische Website für Kalm Moments, Bangkok (Sleep Salon & Massage), gebaut mit [Astro](https://astro.build).

## Lokal entwickeln

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Öffne [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
```

Der Build liegt in `dist/`.

## Deployment

### GitHub

1. Repository auf GitHub anlegen
2. Projekt pushen:

```bash
git init
git add .
git commit -m "Initial commit: Kalm Moments website"
git branch -M main
git remote add origin https://github.com/DEIN-USERNAME/REPO-NAME.git
git push -u origin main
```

### Cloudflare Pages

1. [Cloudflare Dashboard](https://dash.cloudflare.com) → **Pages** → **Create a project** → **Connect to Git**
2. GitHub-Account verbinden und das Repository auswählen
3. Build-Einstellungen:
   - **Framework preset:** Astro (oder None)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** 18 oder 20 (in Environment variables: `NODE_VERSION` = `18`)
4. **Save and Deploy**

Die Seite ist danach unter `https://[projekt].pages.dev` erreichbar. Optional kannst du eine Custom Domain (z.B. `kalmmoments.com`) hinterlegen.

## Projektstruktur

```
src/
├── components/    # Wiederverwendbare Komponenten
├── layouts/       # Layout-Templates
└── pages/         # Seiten (file-based routing)
    ├── index.astro
    ├── book/
    ├── services/
    ├── privacy.astro
    └── terms.astro
```

## Lizenz

© 2025 Kalm Moments. Alle Rechte vorbehalten.
