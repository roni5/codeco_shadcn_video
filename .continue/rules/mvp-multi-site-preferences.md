---
globs: "**/*"
description: Apply when suggesting UI architecture or dependencies. Optimize for
  speed-to-ship and reuse across multiple similar sites.
alwaysApply: true
---

Default to a single shared Next.js 15 starter used for 8+ sites. Only swap landing pages and look & feel; keep core architecture identical. No theme provider (no next-themes) and minimal deps for MVP speed. Prefer simplest working solution over extensibility. Avoid changes that add configuration burden.