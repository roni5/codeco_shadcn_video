Favicon generation runbook (Next.js App Router)

Purpose
- Consistently generate all favicon and PWA icons from a single PNG and wire them into a Next.js app.
- Re-usable across projects. Assumes your source logo is at public/img/logo.png.

Golden rule
- Always check package.json and the existing lockfile (pnpm-lock.yaml, package-lock.json, or yarn.lock) and use that package manager only. Do not switch package managers.

Prerequisites
- Node 18+.
- Dev dependencies present in package.json:
  - sharp, png-to-ico, fs-extra
- Script file exists at scripts/generate-favicons.mjs (copy it from a known good project).

Project layout (expected)
- public/img/logo.png  ← source PNG (square preferred)
- scripts/generate-favicons.mjs

One-time setup in a new project
1) Copy the generator script into your project (no installs required if deps already present):

```sh
# From a project that already has the script, copy it into the new project
cp ../your-other-project/scripts/generate-favicons.mjs ./scripts/generate-favicons.mjs
```

2) Verify devDependencies exist (do not install if they already do):
- sharp
- png-to-ico
- fs-extra

If missing AND ONLY if approved, add them with the project’s manager:
- pnpm: pnpm add -D sharp png-to-ico fs-extra
- npm: npm i -D sharp png-to-ico fs-extra
- yarn: yarn add -D sharp png-to-ico fs-extra

Generate icons (repeatable)
- Place your source PNG at public/img/logo.png.
- Run the generator:

```sh
node scripts/generate-favicons.mjs \
  --src public/img/logo.png \
  --name "Your App" \
  --short "YourApp" \
  --out public \
  --bg "#ffffff" \
  --theme "#ffffff" \
  --also-app
```

What this creates
- In public/:
  - favicon.ico
  - favicon-16x16.png
  - favicon-32x32.png
  - apple-touch-icon.png
  - android-chrome-192x192.png
  - android-chrome-512x512.png
  - site.webmanifest
- With --also-app, mirrors to app/ for App Router auto-links:
  - app/icon.png (512x512)
  - app/apple-icon.png (180x180)
  - app/favicon.ico

Next.js wiring
- App Router (app/):
  - Next auto-injects links for app/icon.png, app/apple-icon.png, and app/favicon.ico.
  - Add the manifest and Apple title via Metadata (app/layout.tsx):

```ts
import type { Metadata } from 'next'

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: 'Your App',
  },
}
```

- Pages Router (pages/): add to pages/_document.tsx <Head>:

```tsx
<link rel="icon" href="/favicon.ico" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
<meta name="apple-mobile-web-app-title" content="Your App" />
```

Verification checklist
```sh
# Start dev and visit these URLs in the browser
/favicon.ico
/apple-touch-icon.png
/android-chrome-192x192.png
/android-chrome-512x512.png
/site.webmanifest
```
- Lighthouse (Chrome DevTools): run PWA checks; icons should be detected.
- iOS: Apple uses apple-touch-icon.png. Add to Home Screen to verify.

Regenerating later
- Replace public/img/logo.png, re-run the same node command. Files are overwritten deterministically.

Tips
- Use a square PNG with ample padding; the script uses contain and can add a solid background for mobile icons (--bg).
- Keep manifest in public/site.webmanifest for stability across routers and hosting.
- If you prefer public-only (no app/ mirroring), omit --also-app and rely on Metadata icons + manifest.

Troubleshooting
- Caching: browsers cache favicons aggressively. Hard refresh or change the file hash/URL during testing.
- Background color: if your logo is transparent and looks thin on iOS/Android, set a brand --bg like #0ea5e9.
- Multiple favicons: keep a single source of truth in public/ and remove stray root-level favicon.ico if present.

CI/automation (optional)
- Add a package script to standardize the command:

```sh
# package.json
{
  "scripts": {
    "favicons": "node scripts/generate-favicons.mjs --src public/img/logo.png --name 'Your App' --short 'YourApp' --out public --bg '#ffffff' --theme '#ffffff' --also-app"
  }
}
```

Policy reminder
- Never switch package managers.
- Always verify package.json and lockfile first.
- Do not install or update dependencies without explicit approval.
