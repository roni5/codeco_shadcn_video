#!/usr/bin/env node
import { mkdirSync, writeFileSync } from "fs";
import { execSync } from "child_process";

const files = {
  "package.json": `{
    "name": "loom-ascendant-v8-goat",
    "version": "8.0.0",
    "private": true,
    "scripts": {
      "dev": "next dev",
      "build": "next build && next export",
      "start": "next start"
    },
    "dependencies": {
      "next": "15.0.0",
      "react": "18.3.0",
      "react-dom": "18.3.0",
      "framer-motion": "11.0.0",
      "@next/mdx": "15.0.0"
    },
    "devDependencies": {
      "tailwindcss": "4.0.0",
      "@tailwindcss/typography": "0.5.10"
    }
  }`,

  "next.config.js": `const withMDX = require('@next/mdx')({ extension: /\\.mdx?$/ });
module.exports = withMDX({
  pageExtensions: ['js','jsx','ts','tsx','mdx'],
  reactStrictMode: true,
  experimental: { appDir: true }
});`,

  "tailwind.config.js": `module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        sky: { light: '#38bdf8', dark: '#0ea5e9' },
        amber: { light: '#fbbf24', dark: '#f59e0b' },
        emerald: { light: '#34d399', dark: '#10b981' }
      },
      fontFamily: { sans: ['Inter', 'sans-serif'] }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};`,

  "app/page.tsx": `import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <section className="text-center py-32 space-y-6">
        <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:1}} className="text-6xl font-bold">
          Loom Ascendant <span className="text-[var(--accent-dark)]">GOAT</span> Edition
        </motion.h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">Modern UX / UI demo built with Next.js 15 + Tailwind v4 + Framer Motion.</p>
        <div className="flex justify-center gap-6 pt-4">
          <Link href="/docs" className="px-6 py-3 border border-gray-400 hover:bg-gray-900 hover:text-white transition">Docs</Link>
          <Link href="/blog" className="px-6 py-3 border border-gray-400 hover:bg-gray-900 hover:text-white transition">Blog</Link>
        </div>
      </section>
      <section className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto px-8 pb-24">
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-3xl font-semibold">Zig-Zag Design</h2>
          <p>Alternating layouts create rhythmic eye movement— a proven UX pattern.</p>
        </div>
        <motion.img initial={{opacity:0}} whileInView={{opacity:1}} src="https://source.unsplash.com/random/800x600?goat" alt="GOAT" className="rounded-lg shadow-lg" />
      </section>
    </main>
  )
}`,

  "app/docs/page.mdx": `# Documentation

Welcome to **Loom Ascendant GOAT Edition** docs.

- [Getting Started](./getting-started)
- [Features](./features)`,

  "app/docs/getting-started/page.mdx": `# Getting Started

Install dependencies and start the dev server:

\`\`\`bash
npm install
npm run dev
\`\`\`

Then visit http://localhost:3000.`,

  "app/docs/features/page.mdx": `# Features

- Animated hero
- Zig-zag layout
- Dark / light themes
- MDX support
- Responsive design`,

  "app/blog/page.tsx": `import Link from 'next/link'
export default function Blog() {
  const posts=[{slug:'post-1',title:'Building with Llama.cpp'},{slug:'post-2',title:'Designing with Tailwind v4'}]
  return (
    <main className="px-8 py-24 max-w-4xl mx-auto">
      <h1 className="text-5xl font-bold mb-8">Blog</h1>
      <ul className="space-y-4">
        {posts.map(p=>(
          <li key={p.slug}><Link href={"/blog/"+p.slug} className="text-xl text-[var(--accent-dark)] hover:underline">{p.title}</Link></li>
        ))}
      </ul>
    </main>
  )
}`,

  "app/blog/post-1.mdx": `# Building with Llama.cpp

Learn how to use local inference with **llama.cpp** efficiently.`,

  "app/blog/post-2.mdx": `# Designing with Tailwind v4

Modern patterns for 2025 interfaces using utility classes.`,

  "app/about/page.tsx": `export default function About(){
  return(<main className='p-12 max-w-3xl mx-auto'><h1 className='text-5xl font-bold mb-6'>About</h1><p>Built with ❤️ and 🧙‍♂️ by Grimoire using Next .js 15 + Tailwind v4.</p></main>)
}`,

  "app/not-found.tsx": `export default function NotFound(){
  return(<main className='p-12 text-center'><h1 className='text-6xl font-bold mb-4'>404</h1><p>Page not found.</p></main>)
}`
};

// Write all files
for (const [path, content] of Object.entries(files)) {
  const dir = path.substring(0, path.lastIndexOf("/"));
  if (dir) mkdirSync(dir, { recursive: true });
  writeFileSync(path, content);
}

console.log("📦 Installing dependencies (this may take a minute)...");
execSync("npm install", { stdio: "inherit" });
console.log("✅ Setup complete. Run 'npm run dev' to start the site!");
