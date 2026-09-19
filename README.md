# SwapClone AI

Premium one-page directory for discovering free, open-source and free-tier alternatives to paid AI tools.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## AdSense-ready setup

This project includes ad placements but intentionally does **not** contain a fake publisher ID. Ads will only load after you provide your own AdSense credentials.

1. Copy `.env.example` to `.env`.
2. Replace `VITE_ADSENSE_CLIENT` with the publisher ID from your AdSense account.
3. Create ad units in AdSense and paste their slot IDs into the three `VITE_ADSENSE_SLOT_*` variables.
4. Build and deploy again.
5. After AdSense gives you the exact `ads.txt` publisher line, create `public/ads.txt` using that exact line. Do not invent or reuse another publisher ID.

## Before applying to AdSense

- Deploy the site on your own domain and make sure it is publicly accessible.
- Add your final About, Privacy and Terms information and verify it reflects your actual practices.
- Check every external tool link.
- Keep descriptions original and useful; do not copy vendor pages verbatim.
- Keep pricing/status labels current and explain that they can change.
- Submit the live site through AdSense only when it is complete and navigable.

The site includes a privacy page, terms page, direct links, category navigation, search, reusable tool data, SEO metadata, sitemap/robots files if supplied by the project, and ad placement components.

## Analytics

The UI dispatches a `swapclone-tool-click` browser event and will send `tool_click` to Google Analytics if a `window.gtag` integration is added. Analytics can be connected separately after deployment.
