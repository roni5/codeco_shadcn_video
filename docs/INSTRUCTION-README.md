Instruction Readme (Client)

Audience and purpose
- This document is for non-maintainer clients and teams installing and operating this project as a full-stack website.
- Goal: provide a simple but complete, repeatable setup you can run safely in any environment (idempotent).
- Where you see “Video walkthrough:”, a link will be added later when the tutorial is published.

What’s included in this starter
- public/img/logo.png: Your brand PNG used to generate all favicons and app icons
- scripts/generate-favicons.mjs: Generates favicons and site.webmanifest from the PNG
- scripts/bootstrap-seo.mjs: One-step command to generate favicons and create a minimal sitemap route
- robots.ts: Robots route (env-driven) that produces /robots.txt
- app/sitemap.ts: Sitemap route (auto-created by bootstrap if missing) that produces /sitemap.xml

Prerequisites
- Node.js 18 or newer
- One package manager: pnpm, npm, or yarn
- Important: Use the project’s existing lockfile. Do not switch package managers.
  - If pnpm-lock.yaml exists, use pnpm
  - If package-lock.json exists, use npm
  - If yarn.lock exists, use yarn

Environment configuration
- Set the public site URL for each environment:
  - NEXT_PUBLIC_SITE_URL=https://yourdomain.com
- Optional (to restrict bots on staging/dev):
  - NEXT_PUBLIC_ROBOTS_DISALLOW=/admin/,/private/

Video walkthrough: [link pending]

Install dependencies (only if missing)
- This project already contains the required dev dependencies in package.json. If your package manager asks you to install dependencies, use the correct one per the lockfile.
- Only if the following dev dependencies are missing in your project, install them with your package manager:
  - sharp, png-to-ico, fs-extra
- Examples (use only one, based on your lockfile):
  - pnpm: pnpm add -D sharp png-to-ico fs-extra
  - npm: npm i -D sharp png-to-ico fs-extra
  - yarn: yarn add -D sharp png-to-ico fs-extra

Video walkthrough: [link pending]

Favicon and SEO bootstrap (idempotent)
1) Place your brand PNG at public/img/logo.png (square image recommended)
2) Ensure env NEXT_PUBLIC_SITE_URL is set
3) Run the bootstrap command:

   node scripts/bootstrap-seo.mjs --name "Your App" --short "YourApp" --bg "#ffffff" --theme "#ffffff"

- What this does:
  - Generates public/favicon.ico, public/apple-touch-icon.png, public/android-chrome-192x192.png, public/android-chrome-512x512.png, public/site.webmanifest
  - Mirrors key icons into app/ for automatic linking (icon.png, apple-icon.png, favicon.ico)
  - Creates app/sitemap.ts if missing

Alternative: brand.config.json
- Create brand.config.json at the project root to avoid passing flags:
  {
    "name": "Your App",
    "shortName": "YourApp",
    "themeColor": "#ffffff",
    "backgroundColor": "#ffffff"
  }
- Then run:

   node scripts/bootstrap-seo.mjs

Video walkthrough: [link pending]

Verification checklist
- After running the bootstrap:
  - Visit in your browser:
    - /favicon.ico
    - /apple-touch-icon.png
    - /android-chrome-192x192.png
    - /android-chrome-512x512.png
    - /site.webmanifest
    - /robots.txt
    - /sitemap.xml
- In Chrome DevTools Lighthouse, PWA icons should be detected.

Video walkthrough: [link pending]

Robots and sitemap
- robots.txt is generated from robots.ts at build/run time. It uses:
  - NEXT_PUBLIC_SITE_URL for the sitemap URL
  - NEXT_PUBLIC_ROBOTS_DISALLOW for blocked paths (comma-separated)
- sitemap.xml comes from app/sitemap.ts. It ships with a few example routes; add more as your site grows (T&C, Privacy, etc.).

Video walkthrough: [link pending]

Common tasks
- Change/replace your brand icon: update public/img/logo.png and re-run the bootstrap command
- Add legal pages (T&C, Privacy): create the pages and add their routes to app/sitemap.ts
- Modify the Apple title (iOS): set appleWebApp.title in app/layout.tsx metadata (already configured here as an example)

Video walkthrough: [link pending]

Production notes
- Ensure NEXT_PUBLIC_SITE_URL matches the deployed domain for each environment (staging vs prod). This affects robots.txt and sitemap.xml URLs.
- Browsers cache favicons aggressively. If you change icons and don’t see updates, hard refresh, open in a private window, or bump the icon filenames/URLs during testing.

Video walkthrough: [link pending]

Troubleshooting
- Favicons not updating:
  - Clear cache, try a private window
  - Confirm your logo at public/img/logo.png is a valid PNG
- Missing icons:
  - Re-run the bootstrap command
  - Confirm scripts/generate-favicons.mjs exists
- Wrong or mixed package manager:
  - Use the package manager that matches the lockfile in your project (pnpm-lock.yaml, package-lock.json, or yarn.lock)
- Incorrect sitemap or robots:
  - Check NEXT_PUBLIC_SITE_URL
  - Check NEXT_PUBLIC_ROBOTS_DISALLOW for unwanted blocks

Video walkthrough: [link pending]

Command reference (copy/paste)
- Bootstrap SEO (favicons + sitemap):
  node scripts/bootstrap-seo.mjs --name "Your App" --short "YourApp" --bg "#ffffff" --theme "#ffffff"
- Re-generate favicons only:
  node scripts/generate-favicons.mjs --src public/img/logo.png --name "Your App" --short "YourApp" --out public --bg "#ffffff" --theme "#ffffff" --also-app

Support
- If you need help, share: your Node version, package manager, the lockfile present, and the exact command and output you ran. This helps resolve issues fast.
