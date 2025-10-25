import Link from 'next/link'
import { demoRegistry } from '@/lib/demoRegistry'

export default function DemoIndex() {
  const keys = Object.keys(demoRegistry)
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold">Available Demos</h1>
      <p className="mt-2 text-gray-600">Pick a demo to preview its navbar, footer, and layout.</p>
      <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {keys.map((k) => (
          <li key={k} className="border rounded-md p-4">
            <div className="font-semibold">{demoRegistry[k as keyof typeof demoRegistry].title}</div>
            <Link className="text-blue-600 underline" href={`/demo/${k}`}>
              View /demo/{k}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
