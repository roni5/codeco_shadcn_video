import Link from 'next/link'
import BackButton from './components/BackButton '

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2 space-y-8 mt-12">
      <BackButton />
      <Frown />
      <div className="space-y-3 text-center">
        <p className="text-gray-800 text-4xl font-semibold sm:text-5xl">
          Page not found
        </p>
      </div>
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested.</p>
      <Link
        href="/"
        className="mt-4 rounded-md bg-pink px-4 py-2 text-sm bg-zinc-200 text-gray-700 transition-colors hover:bg-zinc-400"
      >
        Go Back
      </Link>
    </main>
  )
}

const Frown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-frown"
  >
    <title>frown</title>
    <circle cx={12} cy={12} r={10} />
    <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
    <line x1={9} x2={9.01} y1={9} y2={9} />
    <line x1={15} x2={15.01} y1={9} y2={9} />
  </svg>
)
