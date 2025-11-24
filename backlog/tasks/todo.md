# Backlog / TODO — Lean Standards Rollout

## Scope
Introduce a minimal, non-redundant standards file and link it from README. Archive legacy/expanded rules without deleting them. Do not touch backend versions, auth strategy, Postgres, or infra.

## TODOs
- [x] Create playbooks/lean-standards.md
  - 10 must-have rules only (concise, daily-usable)
  - Include Cost Controls + Minimal CI steps
- [x] Create playbooks/legacy-standards.md
  - Note that older/expanded standards are archived here for reference
- [x] Update README.md
  - Add "How we work (lean rules)" section + link to playbooks/lean-standards.md
  - Clarify: npm only; ESLint + Prettier only; Drizzle migrations are source of truth
  - Note: biome.json present but not used by default (opt-in only)
- [ ] Leave CI as manual (document steps only in lean-standards.md)

## Acceptance criteria
- A single, short standards document exists (<= ~1 page) and covers only must-haves
- README links to the standards and briefly describes the workflow and tooling choices
- No changes to dependencies, versions, Node runtimes, auth/session strategy, or DB config

## Notes
- This is token-efficient: keep the lean-standards.md small so we can reference it instead of pasting long rules into chats.

## Review
- Summary of changes:
  - Added Core Lean Rules (10 must-haves) with cost controls and minimal CI steps
  - Archived legacy/expanded standards to reduce token and ops overhead
  - Updated README with a short "How we work" section and quick setup commands
- Files touched:
  - playbooks/lean-standards.md (new)
  - playbooks/legacy-standards.md (new)
  - README.md (edited)
  - backlog/tasks/todo.md (this file)
- Follow-ups:
  - Optional: add a minimal GitHub Action that runs typecheck, lint, build, and drizzle migrate dry-run
  - Keep .env.example current as features are added
