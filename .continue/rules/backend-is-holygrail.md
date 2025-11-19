---
globs: "**/*"
description: Apply whenever suggesting or making changes that affect the backend
  stack or runtime. Always confirm with the user before altering versions or
  configs.
alwaysApply: true
---

Backend (DB/Drizzle/API/Auth/Stripe) is highest priority. Do not change backend versions, configs, or infra (including Node runtime, Postgres settings, auth/session strategy, Stripe webhooks) without explicit confirmation from the user. Research and propose impacts first, then wait for approval. Frontend changes are flexible and can be adjusted later.