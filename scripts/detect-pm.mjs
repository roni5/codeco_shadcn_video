#!/usr/bin/env node
/**
 * Detect the project's package manager based on lockfiles.
 * Prints one of: pnpm | yarn | npm
 * Falls back to npm if no lockfile is found.
 */
import fs from 'node:fs';

function exists(p) {
  try { return fs.existsSync(p); } catch { return false; }
}

function detect() {
  if (exists('pnpm-lock.yaml')) return 'pnpm';
  if (exists('yarn.lock')) return 'yarn';
  if (exists('package-lock.json')) return 'npm';
  return 'npm';
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(detect());
}

export default detect;
