Perfect. I created a working “multi-demos from one codebase” scaffold without touching installs and keeping your root layout intact. It’s ready for you to drop content into each demo later, while we already did the heavy lifting to avoid layout collisions.

What I just added

Demo registry

lib/demoRegistry.tsx
Central mapping of demo keys -> Navbar/Footer components and titles.
Initial demos: landing, saas, portfolio
Demo-specific Navbars and Footers

components/navbars/LandingNavbar.tsx
components/navbars/SaasNavbar.tsx
components/navbars/PortfolioNavbar.tsx
components/footers/LandingFooter.tsx
components/footers/SaasFooter.tsx
components/footers/PortfolioFooter.tsx
Route group for demos (keeps your root layout clean)

app/(demos)/[demo]/layout.tsx
app/(demos)/[demo]/page.tsx
Access each demo at /demo/landing, /demo/saas, /demo/portfolio
Each demo uses its own Navbar/Footer from the registry, so no cross-interference
Demo index page

app/demo/page.tsx
Lists the available demos with links to /demo/{key}
How to use it right now

Visit /demo to see all demo links.
Visit /demo/landing, /demo/saas, /demo/portfolio to preview distinct Navbars/Footers and a demo page.
To add a new demo:
Create components/navbars/YourNavbar.tsx and components/footers/YourFooter.tsx
Add entry to lib/demoRegistry.tsx:
yourdemo: { nav: YourNavbar, footer: YourFooter, title: 'Your Demo' }
Then visit /demo/yourdemo
Why this solves your layout pain

Root layout remains minimal and generic.
Each demo has its own layout inside the route group app/(demos)/[demo], so you don’t “knock out” or conflict with the main app.
You can scale demos just by adding registry entries and components.
Next steps you can do when ready

Populate each demo’s content under app/(demos)/[demo]/page.tsx (or add nested routes).
Run your favicon/bootstrap scripts when the brand/logo is ready (the demo scaffold doesn’t interfere).
For Hostinger-like small servers: prefer SSG for demo pages. If you later want static export, we can add next.config.js with output: 'export' and ensure demo routes are statically generable.
Optional improvements I can add on request

A tiny create-demo.mjs script to scaffold a new demo:
Creates Navbar/Footer files from templates
Adds the new entry to lib/demoRegistry.tsx
A docs/demos.md with “how to add a new demo” and tips for static hosting.
Toggle analytics per demo (so you don’t load GTM on all demos).
If you want me to also add a create-demo.mjs scaffolder and a short docs/demos.md, say “yes scaffold,” and I’ll add them without changing any installs