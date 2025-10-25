import { demoRegistry } from '@/lib/demoRegistry'
import Link from 'next/link'

export default async function DemoHome({
  params,
}: { params: Promise<{ demo: string }> }) {
  const { demo } = await params
  const entry = demoRegistry[demo as keyof typeof demoRegistry]
  if (!entry) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-2xl font-semibold">Demo not found</h1>
        <p className="mt-2 text-gray-600">Available demos:</p>
        <ul className="list-disc list-inside mt-2">
          {Object.keys(demoRegistry).map(k => (
            <li key={k}>
              <Link href={`/demo/${k}`}>{k}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold">{entry.title} Demo</h1>
      <p className="mt-2 text-gray-600">
        This is the demo homepage for {entry.title}.
      </p>
      <div className="mt-6 space-x-4">
        {Object.keys(demoRegistry).map(k => (
          <Link key={k} className="text-blue-600 underline" href={`/demo/${k}`}>
            {k}
          </Link>
        ))}
      </div>
    </div>
  )
}
