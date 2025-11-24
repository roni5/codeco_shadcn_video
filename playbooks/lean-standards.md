# Core Lean Rules v1 (Next.js 15/16 + TypeScript + Drizzle + Postgres + Tailwind + shadcn/ui)

Keep it simple, but not simpler. Daily-usable. No fluff.

1) Package & Tooling
- Use npm. Do not add pnpm/yarn/biome without approval.
- Minimize deps; prefer built-in Next.js features.

2) Type Safety
- TypeScript strict. No `any` (use `unknown` and narrow).
- Explicit return types. Define API response types. Add type guards for untrusted input.

3) App Architecture
- Server Components and Server Actions by default. Mark client components with `"use client"`.
- Organize by feature: `src/app`, `src/components`, `src/lib`, `src/types`, `src/hooks`.

4) Database (Postgres + Drizzle)
- Drizzle migrations are the source of truth. `generate` ➜ review ➜ `migrate`.
- Idempotent writes where appropriate (UPSERT). Use transactions for multi-step mutations.
- Index FKs and frequent filters. Select explicit columns, not `*`.

5) Auth
- Auth.js + Drizzle adapter. Sessions stored in Postgres (no JWTs unless explicitly approved).
- Never roll your own crypto. Secrets via env only.

6) Environment
- All secrets via env. Validate required env at startup and fail fast.
- Keep `.env.example` updated. Never commit secrets.

7) API & Security
- Rate-limit public endpoints. Paginate large lists. Sensible cache headers where safe.
- Parameterized queries only; never string-concatenate SQL.

8) Tailwind & UI
- Utility-first. Class order: layout → spacing → typography → visuals → interactions.
- Minimal shadcn/ui usage; prefer existing primitives. Avoid arbitrary values unless required.

9) Performance & Caching
- Use Next Image. Lazy-load heavy client components. Track bundle size (`next build` output).
- Use ISR/PPR/segment caching where it measurably helps.

10) Git & CI‑Lite
- Conventional commits; small PRs (one concern). Comment "why", not "what". No commented-out code.
- Minimal checks: typecheck, lint, build, drizzle migrate (dry-run for PR; real run on deploy).

---
## Cost Controls (what actually saves you money)
- One starter for all sites; swap only landing/branding.
- Keep prompts short: reference this doc instead of pasting long rules.
- Tooling: npm + eslint + prettier + drizzle; no extra linters/formatters by default.
- Hosting defaults: Vercel + Neon/Vercel Postgres. Autosleep non-prod.
- Observability lite: structured error logs + vital metrics only.
- Assets: optimize at build; avoid runtime proxies unless needed.

### Minimal CI/Local verification (fast path)
- npm ci
- npm run typecheck
- npm run lint
- npm run build
- npm run drizzle:generate (safe, no DB)
- Optional: npm run drizzle:migrate (requires DATABASE_URL)

### Defaults we won’t change without approval
- Backend versions, Node runtime, Postgres settings, auth/session strategy, Stripe/webhooks.

That’s it. If a rule isn’t here, it’s optional. Keep changes small and idempotent.
