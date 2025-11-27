#!/usr/bin/env node
import { execFile } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
/**
 * Bootstrap SEO assets for a Next.js app:
 * - Generates favicons and site.webmanifest from public/img/logo.png
 * - Ensures robots route exists (prefers existing robots.ts)
 * - Ensures sitemap route exists (creates app/sitemap.ts if missing)
 *
 * Prereqs: sharp, png-to-ico, fs-extra are already in devDependencies.
 *
 * Usage:
 *   node scripts/bootstrap-seo.mjs --name "Your App" --short "YourApp" --bg "#ffffff" --theme "#ffffff"
 *
 * Optional brand.config.json at project root:
 * {
 *   "name":"Your App",
 *   "shortName":"YourApp",
 *   "themeColor":"#ffffff",
 *   "backgroundColor":"#ffffff"
 * }
 */
import fse from "fs-extra";

const execFileAsync = promisify(execFile);

function parseArgs() {
	const args = process.argv.slice(2);
	const get = (key, def) => {
		const i = args.indexOf(key);
		return i !== -1 && args[i + 1] && !args[i + 1].startsWith("--")
			? args[i + 1]
			: def;
	};
	return {
		name: get("--name"),
		short: get("--short"),
		bg: get("--bg", "#ffffff"),
		theme: get("--theme", "#ffffff"),
	};
}

async function readBrandConfig() {
	const file = path.resolve("brand.config.json");
	try {
		const raw = await fs.readFile(file, "utf8");
		return JSON.parse(raw);
	} catch {
		return null;
	}
}

async function ensureSitemap() {
	const file = path.resolve("app/sitemap.ts");
	const exists = await fse.pathExists(file);
	if (exists) return false;
	const content = `import type { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

// Minimal static routes; extend as needed per project
const staticRoutes = ['/', '/about', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map((route) => ({
    url: BASE_URL + route,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
`;
	await fse.ensureDir(path.dirname(file));
	await fs.writeFile(file, content);
	console.log("Created app/sitemap.ts");
	return true;
}

async function runFavicons({ name, short, bg, theme }) {
	const src = "public/img/logo.png";
	const exists = await fse.pathExists(src);
	if (!exists) {
		console.error(`Missing ${src}. Place your PNG there and re-run.`);
		process.exit(1);
	}
	const args = [
		"scripts/generate-favicons.mjs",
		"--src",
		src,
		"--name",
		name,
		"--short",
		short,
		"--out",
		"public",
		"--bg",
		bg,
		"--theme",
		theme,
		"--also-app",
	];
	console.log("Generating favicons and manifest:", args.join(" "));
	await execFileAsync("node", args, { stdio: "inherit" });
}

async function main() {
	const cli = parseArgs();
	const brand = await readBrandConfig();

	const name = cli.name ?? brand?.name ?? "My App";
	const short =
		cli.short ?? brand?.shortName ?? name?.replace(/\s+/g, "") ?? "MyApp";
	const bg = cli.bg ?? brand?.backgroundColor ?? "#ffffff";
	const theme = cli.theme ?? brand?.themeColor ?? "#ffffff";

	await runFavicons({ name, short, bg, theme });
	await ensureSitemap();

	console.log("SEO bootstrap complete.");
	console.log(
		"- Ensure NEXT_PUBLIC_SITE_URL is set (e.g., https://example.com)",
	);
	console.log("- Adjust app/sitemap.ts routes as needed.");
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
