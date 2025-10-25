Favicon Playbook (Idempotent)

Purpose
- Single-source favicon and PWA icon generation from public/img/logo.png.
- Enforce Next.js best practice: serve icons from public/ only to avoid conflicts.

Command
- Run this from project root:

  node scripts/generate-favicons.mjs --src public/img/logo.png --name "codeco" --short "codeco" --out public --bg "#ffffff" --theme "#ffffff"

Rules
- Do not place icons in app/ (app/favicon.ico, app/icon.png, app/apple-icon.png). The script warns if these files exist.
- Keep icons in public/ only:
  - public/favicon.ico
  - public/apple-touch-icon.png
  - public/android-chrome-192x192.png
  - public/android-chrome-512x512.png
  - public/favicon-16x16.png
  - public/favicon-32x32.png
  - public/site.webmanifest

Verification
- After running, visit these in your browser:
  - /favicon.ico
  - /apple-touch-icon.png
  - /android-chrome-192x192.png
  - /android-chrome-512x512.png
  - /site.webmanifest
- Confirm app/layout.tsx metadata includes:
  - icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' }
  - manifest: '/site.webmanifest'

Notes
- Keep the PNG square with padding; the script uses contain and may add a solid background for mobile icons via --bg.
- Browsers cache favicons aggressively; use a private window or hard refresh if updates don’t show.
