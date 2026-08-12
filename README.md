# ICCSB 2026 — Conference Website

Official website for the **International Conference on Innovations, Technological Breakthroughs & Applications in Computational Biophysics, Synthetic Biology & Biomanufacturing (ICCSB 2026)** — 10 & 11 September 2026, Hybrid Mode.

**Stack:** React 19 · Vite 8 · React Router 7

## Quick Start (Development)

```bash
npm install
npm run dev
```

## Deployment Notes

### Prerequisites

| Requirement | Version |
|-------------|---------|
| Node.js     | ≥ 18    |
| npm         | ≥ 9     |

### Environment Variables

Copy `.env.example` to `.env` and adjust:

| Variable | Default | Description |
|----------|---------|-------------|
| `VITE_BASE_PATH` | `/` | Base path for client-side routing. Set to `/` for root deployments. For subdirectory deployments, use a leading+trailing slash (e.g. `/conference/`). |

### Build for Production

```bash
npm run build        # outputs to ./dist
```

### Serve the Build

**Option A — `serve` (quickest test):**

```bash
npx serve dist       # serves at http://localhost:3000
```

> **Note:** `serve` does NOT support SPA fallback out of the box. Use `npx serve -s dist` (the `-s` flag) to enable single-page-app mode so all routes fall back to `index.html`.

**Option B — Nginx:**

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

**Option C — Apache (`.htaccess` in dist/):**

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Option D — GitHub Pages:**

The `404.html` in `public/` handles SPA fallback automatically. Just push the `dist/` contents to your `gh-pages` branch.

### Deploying to a Subdirectory

If the site lives at `https://example.com/conference/` instead of the root:

1. Set `VITE_BASE_PATH=/conference/` in your `.env`
2. Rebuild: `npm run build`
3. Deploy the `dist/` folder to the `/conference/` path on your server

The Vite `base` is set to `'./'` (relative), so asset paths (`CSS`, `JS`, images) resolve correctly from any directory automatically — no config change needed for assets.

