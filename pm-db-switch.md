# PM + DB Switch Runbook (Idempotent)

Goal: Copy a working Next.js + Auth.js + Drizzle app, switch to npm, wire a new Postgres DB, migrate, verify, run.

ALWAYS: quote the SSD path.

1) Project dir
- cd "/Volumes/Roni SSD/ronimc-projects/<APP_DIR>"

2) Clean pnpm artifacts (safe if missing)
- rm -f pnpm-lock.yaml pnpm-workspace.yaml
- rm -rf .pnpm-store node_modules .next .turbo .cache

3) Remove pnpm-only link deps
- cp package.json package.json.BACKUP
- node -e "const fs=require('fs');const p=JSON.parse(fs.readFileSync('package.json','utf8'));['dependencies','devDependencies','optionalDependencies','peerDependencies'].forEach(s=>{if(p[s])for(const k of Object.keys(p[s])){if(String(p[s][k]).startsWith('link:')) delete p[s][k];}});fs.writeFileSync('package.json',JSON.stringify(p,null,2));"

4) Install (npm)
- npm install

5) Create DB
- psql -c 'CREATE DATABASE <DB_NAME>;'
- psql "postgresql://ronimc@localhost:5432/<DB_NAME>?sslmode=disable" -c '\dt'

6) Env files (strict)
- echo 'DATABASE_URL=postgresql://ronimc@localhost:5432/<DB_NAME>' > .env
- echo 'DATABASE_URL=postgresql://ronimc@localhost:5432/<DB_NAME>' >> .env.local

7) Drizzle config (minimal)
- cp drizzle.config.ts drizzle.config.ts.BACKUP
- cat > drizzle.config.ts <<'EOF'
import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'postgresql',
  schema: './lib/schema.ts',
  out: './drizzle',
  dbCredentials: { url: process.env.DATABASE_URL! },
  strict: true,
  verbose: true,
})
EOF

8) DB client (lib/db.ts must use Pool)
- cp lib/db.ts lib/db.ts.BACKUP
- See playbooks/snippets-db.md for canonical file (copy as-is)

9) Generate + migrate (exact order)
- npx drizzle-kit generate
- npx drizzle-kit migrate

10) Verify tables
- psql "postgresql://ronimc@localhost:5432/<DB_NAME>?sslmode=disable" -c '\dt'

11) First run (force correct DB once), then normal
- DATABASE_URL="postgresql://ronimc@localhost:5432/<DB_NAME>?sslmode=disable" npm run dev
- Submit a test contact
- psql "postgresql://ronimc@localhost:5432/<DB_NAME>?sslmode=disable" -c 'SELECT COUNT(*) FROM contact;'
- npm run dev

12) Git (don’t commit secrets)
- printf '\n!.env.example\n!drizzle.config.ts\n' >> .gitignore
- echo 'DATABASE_URL=postgresql://USER:PASSWORD@HOST:5432/DB' > .env.example
- git add .gitignore .env.example drizzle.config.ts lib/db.ts drizzle/ package.json package-lock.json
- git commit -m "working: npm switch + drizzle migrate + db.ts"
- git branch -M main
- git remote add origin <REPO_URL>
- git push -u origin main

Troubleshooting (exact fixes):
- npm EUNSUPPORTEDPROTOCOL "link:" → Step 3 remove link deps, then npm install
- drizzle “database undefined” / 3D000 → ensure .env exists with DATABASE_URL, drizzle.config.ts has dotenv/config + dbCredentials.url, then migrate
- “Cannot find module 'dotenv/config'” → npm i -D dotenv
- “Module not found ../actions/contact/contactAction” (from components/*) → change import to '@/app/actions/contact/contactAction' IN THAT FILE ONLY
- Insert logs show 200 but COUNT=0 → ensure lib/db.ts uses Pool + connectionString; restart dev with forced DATABASE_URL once

Rules:
- Never overwrite without backup: cp <file> <file>.BACKUP
- Do not commit .env/.env.local (only .env.example)
- Quote the SSD path every time
```

```markdown playbooks/new-app-repeatable.md
# New App Copy → Ready (12x Repeatable, Idempotent)

Inputs:
- APP_DIR
- DB_NAME

Commands (macOS zsh):
- cd "/Volumes/Roni SSD/ronimc-projects/<APP_DIR>"
- rm -f pnpm-lock.yaml pnpm-workspace.yaml
- rm -rf .pnpm-store node_modules .next .turbo .cache
- cp package.json package.json.BACKUP
- node -e "const fs=require('fs');const p=JSON.parse(fs.readFileSync('package.json','utf8'));['dependencies','devDependencies','optionalDependencies','peerDependencies'].forEach(s=>{if(p[s])for(const k of Object.keys(p[s])){if(String(p[s][k]).startsWith('link:')) delete p[s][k];}});fs.writeFileSync('package.json',JSON.stringify(p,null,2));"
- npm install
- psql -c 'CREATE DATABASE <DB_NAME>;'
- echo 'DATABASE_URL=postgresql://ronimc@localhost:5432/<DB_NAME>' > .env
- echo 'DATABASE_URL=postgresql://ronimc@localhost:5432/<DB_NAME>' >> .env.local
- cp drizzle.config.ts drizzle.config.ts.BACKUP
- (paste minimal drizzle.config.ts)
- cp lib/db.ts lib/db.ts.BACKUP
- (paste canonical lib/db.ts)
- npx drizzle-kit generate
- npx drizzle-kit migrate
- psql "postgresql://ronimc@localhost:5432/<DB_NAME>?sslmode=disable" -c '\dt'
- DATABASE_URL="postgresql://ronimc@localhost:5432/<DB_NAME>?sslmode=disable" npm run dev
- Submit contact → verify:
  - psql "postgresql://ronimc@localhost:5432/<DB_NAME>?sslmode=disable" -c 'SELECT COUNT(*) FROM contact;'
- git add .gitignore .env.example drizzle.config.ts lib/db.ts drizzle/ package.json package-lock.json
- git commit -m "init working"
- git push -u origin main
```

```typescript lib/db.ts
import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'

const connectionString = process.env.DATABASE_URL
if (!connectionString) throw new Error('DATABASE_URL is missing')

export const pool = new Pool({ connectionString })
export const db = drizzle(pool)
```

```typescript drizzle.config.ts
import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'postgresql',
  schema: './lib/schema.ts',
  out: './drizzle',
  dbCredentials: { url: process.env.DATABASE_URL! },
  strict: true,
  verbose: true,
})
```

```dotenv .env.example
DATABASE_URL=postgresql://USER:PASSWORD@HOST:5432/DB