import Link from 'next/link'
//import BackButton from './components/BackButton '


// Simple Frown Icon (Inline SVG is cleaner than importing a library for one icon)
function FrownIcon() {
  return (
    <svg
      className="size-16 text-gray-400 dark:text-neutral-600"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ><title>frown icon</title>
      <circle cx="12" cy="12" r="10" />
      <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  )
}

export default function NotFound() {
  return (
    // 'min-h-screen' ensures it is always vertically centered, unlike 'h-full'
    <main className="min-h-[80vh] flex flex-col items-center justify-center gap-y-6 px-4 text-center">
      <FrownIcon />

      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
          Page not found
        </h1>
        <p className="text-lg text-gray-600 dark:text-neutral-400">
          Sorry, we could not find the content you were looking for.
        </p>
      </div>

      <div className="mt-6 flex items-center gap-x-4">
        {/* Option 1: Go Back Home */}
        <Link
          href="/"
          className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-primary text-white hover:bg-secondary focus:outline-none
           focus:bg-secondary transition-all"
        >
          Go to Homepage
        </Link>

        {/* Option 2: Back to Blog */}
        <Link
          href="/blog"
          className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700"
        >
          Read Blogs
        </Link>
      </div>
    </main>
  )
}

// export default function NotFound() {
//   return (
//     <main className="flex h-full flex-col items-center justify-center gap-2 space-y-8 mt-12">
//       <BackButton />
//       <Frown />
//       <div className="space-y-3 text-center">
//         <p className="text-gray-800 text-4xl font-semibold sm:text-5xl">
//           Page not found
//         </p>
//       </div>
//       <h2 className="text-xl font-semibold">404 Not Found</h2>
//       <p>Could not find the requested.</p>
//       <Link
//         href="/"
//         className="mt-4 rounded-md bg-pink px-4 py-2 text-sm bg-zinc-200 text-gray-700 transition-colors hover:bg-zinc-400"
//       >
//         Go Back
//       </Link>
//     </main>
//   )
// }

// const Frown = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={32}
//     height={32}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth={2}
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className="lucide lucide-frown"
//   >
//     <title>frown</title>
//     <circle cx={12} cy={12} r={10} />
//     <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
//     <line x1={9} x2={9.01} y1={9} y2={9} />
//     <line x1={15} x2={15.01} y1={9} y2={9} />
//   </svg>
// )
