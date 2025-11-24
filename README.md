# How we work (lean rules)
- Read once, keep cheap: Core Lean Rules live at playbooks/lean-standards.md. We keep prompts short and link to that file instead of pasting long rules.
- Tooling: npm + TypeScript strict + ESLint + Prettier + Drizzle. Minimal deps. Drizzle migrations are the source of truth. Auth.js + Drizzle adapter; sessions in Postgres.
- Defaults we won’t change without approval: backend versions, Node runtime, Postgres settings, auth/session strategy, Stripe/webhooks.

## Setup (short)
1) npm ci
2) cp .env.example .env.local and fill required vars
3) npx drizzle-kit migrate
4) npm run dev

Note: biome.json exists but is not used by default (opt-in only). Prefer ESLint + Prettier.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
psql (16.2 (Postgres.app))
Type "help" for help.

ronimc=# \c next_auth_drizzle;         
You are now connected to database "next_auth_drizzle" as user "ronimc".
next_auth_drizzle=# 

###  https://fullstackbook.com/blog/nextjs-authjs-drizzle-orm-postgresql-tutorial

ronimc@Ronalds-Mac-mini next-auth-drizzle-postgres % pnpm drizzle-kit push:pg \
  --schema ./lib/schema.ts \
  --driver pg \
  --connectionString "postgresql://ronimc@localhost:5432/next_auth_drizzle" \
  --strict \
  --verbose

ronimc=# \c next_auth_drizzle;
pnpm add next-auth@latest
NextAuth rebranded to Auth.js, but the package name remains the same for backward compatibility. The @beta tag is no longer needed as the stable version with Next.js App Router support has been released.
Regarding updates:

Updating from a year-old tutorial will likely require some code adjustments
The API changed significantly when adapting to Next.js App Router
Key differences include:

New middleware-based session handling
Different import paths (next-auth/react → next-auth/react but with new hooks)
Configuration changes for the Auth.js setup

https://futuretools.beehiiv.com/
https://github.com/webdevcody/ppai-next-starter/blob/main/.env.sample

https://github.com/roni5/examples-neon/tree/main/auth/with-authjs-next
NextAuth rebranded to Auth.js, but the package name remains the same for backward compatibility. The @beta tag is no longer needed as the stable version with Next.js App Router support has been released.
Regarding updates:

Updating from a year-old tutorial will likely require some code adjustments
The API changed significantly when adapting to Next.js App Router
Key differences include:

New middleware-based session handling
Different import paths (next-auth/react → next-auth/react but with new hooks)
Configuration changes for the Auth.js setup

Old Import Path (Pages Router)
js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { auth } from "@/auth";
or, for route handlers:

js
import { handlers } from "@/auth";
export const { GET, POST } = handlers;
You no longer import directly from "next-auth" in your route handlers or server components. Instead, you import from your own auth module, which wraps your configuration.

Example: app/api/auth/[...nextauth]/route.ts
js
import { handlers } from "@/auth";
export const { GET, POST } = handlers;
Example: Using auth in Server Components
js
import { auth } from "@/auth";
const session = await auth();

If you're working with Next.js 14, consider following the official Auth.js documentation for the current implementation rather than relying on the older tutorial. The core concepts are similar, but implementation details have evolved.

If you're working with Next.js 14, consider following the official Auth.js documentation for the current implementation rather than relying on the older tutorial. The core concepts are similar, but implementation details have evolved.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

README: Quick Start
1. git clone ...
2. npm i
3. cp .env.example .env
4. Run build script to generate favicons: `npm run generate-favicons`
5. Start dev: `npm run dev`
6. Replace CHATGPT_STUB_KEY in server env to enable AI serverAction demos.
