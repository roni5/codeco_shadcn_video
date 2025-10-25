export { auth as default } from "@/lib/auth";

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

Fix: Split the config file
1. Create a pure env config without Node.js APIs:
ts
Copy
Edit
// lib/env.ts – usable in Edge or Node
export const config = {
  POSTGRES_URL: process.env.POSTGRES_URL!,
  APP_ENV: process.env.APP_ENV!,
};
2. (Optional) Only use @next/env for local dev scripts:
ts
Copy
Edit
// scripts/loadEnv.ts – run only in Node.js context
import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
loadEnvConfig(projectDir);
Use this script in Node.js-based tooling, CLI, or server-only logic, not in edge runtime components.

TL;DR:
✅ Avoid process.cwd() and @next/env in anything that runs in Edge.
✅ Use process.env directly.