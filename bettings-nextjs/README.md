# Bettings – Next.js

This folder is the Next.js (App Router) version of the static HTML site in the
sibling `bettings/` folder.

## What is preserved

- Exact same UI: every HTML page is converted 1:1 into a React route. Class
  names, IDs, inline styles and page structure are identical to the original
  markup (verified automatically for all pages).
- Same CSS: the original `bootstrap.min.css`, `style.css`, `styles.css` and the
  icon/font CDN links are used unchanged. Assets are copied into `public/`
  (`css/`, `images/`, `assets/`) so paths and CSS `url(...)` still resolve.
- Same JavaScript behaviour: chart.js, Bootstrap, the page scripts and the
  `assets/js/*.js` files run in the same order as the original pages.
- Same language system (FR/EN): `assets/js/language.js`, the language dropdowns,
  `selectedLangText` and Google Translate integration behave exactly like the
  static site. Default language is French (`FR`).

## How pages run

- Routes are Server Components, so the HTML is pre-rendered statically.
- Original page scripts are collected per route into `public/assets/next/`
  and loaded once after React hydration via a small boot loader
  (`<slug>-boot.js`). This keeps script/DOM behaviour identical to the HTML
  version without hydration conflicts.
- Navigation uses normal anchors, so each route load behaves like the original
  multi-page HTML site.

## Routes

| HTML page | Next.js route |
| --- | --- |
| `bettings/index.html` | `/` |
| `bettings/login.html` | `/login` |
| `bettings/register.html` | `/register` |
| `bettings/userdashboard/*.html` | `/*` (e.g. `dashboard.html` -> `/dashboard`) |

## Development

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm start
```

## Regenerating pages (optional)

The generator used to create the routes lives in `tools/html2next.mjs` (sibling
`tools/` folder). It reads `bettings/**/*.html` and rewrites
`bettings-nextjs/src/app/`. `tools/compare-pages.mjs` checks that every page
keeps the same class and id tokens as the original HTML (run it while a server
is on `http://localhost:3000`).