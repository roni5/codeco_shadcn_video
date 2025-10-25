Optional: wire icons in app/layout.tsx (if you choose public-only)

This uses Metadata so you don’t have to hand-edit tags.

Apply
// ... existing imports ...
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'codeco',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: 'codeco', // adds <meta name="apple-mobile-web-app-title" ...>
  },
};

// ... existing RootLayout component ...
Notes and tips

Where to put files?
Public-only is totally fine and framework-agnostic.
App Router icons in /app are convenient because Next.js injects the links for you. You can safely do both: keep the PWA manifest in /public and mirror icon files to /app for auto links.
Sizes chosen:
16 and 32 for classic desktop favicon.
180 for Apple touch icon.
192 and 512 for PWA install prompts on Android/Chrome.
Transparency vs background:
Apple and Android icons often look better with a solid background. The script uses your --bg color for those.
Favicon PNGs keep transparency.
Cleaning up duplicates:
You currently have favicon.ico at project root and also app/favicon.ico. After running the script, prefer /public/favicon.ico (and/or app/favicon.ico). Remove extra copies to avoid confusion.
Would you like me to switch to Agent mode and:

add the dev dependencies,
drop this script in scripts/generate-favicons.mjs,
run it against /public/img/logo.png,
and update app/layout.tsx metadata for you?