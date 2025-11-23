'use client'

import { useEffect, useState } from 'react'

  export default function FloatingCode() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
      setMounted(true)
    }, [])

    if (!mounted) return null

    const codeSnippets = [
      'const',
      'function',
      'return',
      'import',
      'export',
      'async',
      'await',
      'map',
      'filter',
      'reduce',
      'useState',
      'useEffect',
      'props',
      'state',
      'component',
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind',
      'API',
    ]

    return (
      <div className="fixed inset-0 pointer-events-none -z-5 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white/20 font-mono text-xs md:text-sm animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          >
            {codeSnippets[Math.floor(Math.random() * codeSnippets.length)]}
          </div>
        ))}
      </div>
    )
  }
