'use client'

import Link from 'next/link'
//import { Button } from "@/components/ui/button";
import type { SVGProps } from './app/utils/types/helpers'

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2 space-y-8 mt-12">
      <Frown className="w-12 h-12 text-gray-400" />
      <h2>Something went wrong!</h2>
      <button type="button" onClick={() => reset()}>Try again</button>
      <Link
        href="/"
        className="mt-4 rounded-md bg-pink px-4 py-2 text-sm text-codeco-turquoise transition-colors hover:bg-zinc-400"
      >
        Go Back
      </Link>
    </main>
  )
}

const Frown = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-frown"
    {...props}
  >
    <title>icon</title>
    <circle cx={12} cy={12} r={10} />
    <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
    <line x1={9} x2={9.01} y1={9} y2={9} />
    <line x1={15} x2={15.01} y1={9} y2={9} />
  </svg>
)
