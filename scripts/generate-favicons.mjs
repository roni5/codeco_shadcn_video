#!/usr/bin/env node
/**
 * Generate favicons and web manifest from a single PNG source.
 *
 * Uses devDependencies already present in this repo:
 *   sharp, png-to-ico, fs-extra
 *
 * Usage:
 *   node scripts/generate-favicons.mjs \
 *     --src public/img/logo.png \
 *     --name "codeco" \
 *     --short "codeco" \
 *     --out public \
 *     --bg "#ffffff" \
 *     --theme "#ffffff"
 *
 * Notes:
 * - Next.js can conflict if icons exist in both public/ and app/.
 *   This script outputs to public/ only to avoid conflicts.
 */
import fse from 'fs-extra'
import fs from 'node:fs/promises'
import path from 'node:path'
import pngToIco from 'png-to-ico'
import sharp from 'sharp'

function parseArgs() {
  const args = process.argv.slice(2)
  const get = (key, def = undefined) => {
    const i = args.findIndex(a => a === key)
    if (i !== -1 && args[i + 1] && !args[i + 1].startsWith('--'))
      return args[i + 1]
    return def
  }
  const has = key => args.includes(key)
  return {
    src: get('--src', 'public/img/logo.png'),
    out: get('--out', 'public'),
    name: get('--name', 'My App'),
    short: get('--short', get('--name', 'MyApp')),
    bg: get('--bg', '#ffffff'),
    theme: get('--theme', '#ffffff'),
    quiet: has('--quiet'),
  }
}

function log(...a) {
  if (!state.quiet) console.log(...a)
}
const state = parseArgs()

async function ensureDir(p) {
  await fse.ensureDir(p)
}

function hexToRgba(hex, alpha = 1) {
  const h = hex.replace('#', '')
  const bigint = Number.parseInt(
    h.length === 3
      ? h
          .split('')
          .map(c => c + c)
          .join('')
      : h,
    16
  )
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return { r, g, b, alpha }
}

async function genPng(input, size, outPath, bg) {
  // Use contain to preserve logo aspect ratio; transparent padding unless bg alpha is 1.
  const background =
    typeof bg === 'string' ? hexToRgba(bg, 1) : { r: 0, g: 0, b: 0, alpha: 0 }
  await sharp(input)
    .resize(size, size, { fit: 'contain', background })
    .png()
    .toFile(outPath)
}

async function genPngBuffer(input, size, bg) {
  const background =
    typeof bg === 'string' ? hexToRgba(bg, 1) : { r: 0, g: 0, b: 0, alpha: 0 }
  return sharp(input)
    .resize(size, size, { fit: 'contain', background })
    .png()
    .toBuffer()
}

async function genIcoFromPngs(buffers, outPath) {
  const ico = await pngToIco(buffers)
  await fs.writeFile(outPath, ico)
}

async function writeManifest(outDir, { name, short, theme, bg }) {
  const manifest = {
    name,
    short_name: short || name,
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    theme_color: theme,
    background_color: bg,
    display: 'standalone',
  }
  const outPath = path.join(outDir, 'site.webmanifest')
  await fs.writeFile(outPath, JSON.stringify(manifest, null, 2))
  return outPath
}

async function main() {
  const { src, out, name, short, bg, theme } = state
  const input = path.resolve(src)
  const outDir = path.resolve(out)

  // Validate input exists
  const exists = await fse.pathExists(input)
  if (!exists) {
    console.error(`Source image not found: ${input}`)
    process.exit(1)
  }

  await ensureDir(outDir)

  // Warn if app/ icons exist which may conflict with public/ assets
  const appConflicts = [
    path.resolve('app', 'favicon.ico'),
    path.resolve('app', 'icon.png'),
    path.resolve('app', 'apple-icon.png'),
  ]
  const existingConflicts = []
  for (const p of appConflicts) {
    if (await fse.pathExists(p)) existingConflicts.push(p)
  }
  if (existingConflicts.length) {
    log('Warning: Potential Next.js conflict. Found icons in app/:')
    existingConflicts.forEach(p => log(' - ' + path.relative(process.cwd(), p)))
    log(
      'Recommendation: Remove app/ icons and keep icons in public/ only to avoid https://nextjs.org/docs/messages/conflicting-public-file-page'
    )
  }

  // Target file paths
  const files = {
    favicon16: path.join(outDir, 'favicon-16x16.png'),
    favicon32: path.join(outDir, 'favicon-32x32.png'),
    apple180: path.join(outDir, 'apple-touch-icon.png'),
    android192: path.join(outDir, 'android-chrome-192x192.png'),
    android512: path.join(outDir, 'android-chrome-512x512.png'),
    faviconIco: path.join(outDir, 'favicon.ico'),
  }

  log('Generating PNG variants...')
  await genPng(input, 16, files.favicon16, null)
  await genPng(input, 32, files.favicon32, null)
  await genPng(input, 180, files.apple180, bg)
  await genPng(input, 192, files.android192, bg)
  await genPng(input, 512, files.android512, bg)

  log('Generating favicon.ico (16,32,48)...')
  const ico16 = await genPngBuffer(input, 16, null)
  const ico32 = await genPngBuffer(input, 32, null)
  const ico48 = await genPngBuffer(input, 48, null)
  await genIcoFromPngs([ico16, ico32, ico48], files.faviconIco)

  log('Writing site.webmanifest...')
  const manifestPath = await writeManifest(outDir, { name, short, theme, bg })

  log('Done.')
  log('Generated:')
  Object.values(files).forEach(f =>
    log(` - ${path.relative(process.cwd(), f)}`)
  )
  log(
    ` - ${path.relative(process.cwd(), path.join(outDir, 'site.webmanifest'))}`
  )
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
