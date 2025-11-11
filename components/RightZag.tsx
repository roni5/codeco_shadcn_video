import React from 'react'

export default function RightZag() {
  return (
    <section className="flex justify-center w-full px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row-reverse items-center md:items-start max-w-5xl w-full gap-8">
        {/* Right side image */}
        <div className="flex-shrink-0 w-full md:w-1/2">
          <img
            className="w-full h-64 md:h-80 object-cover rounded-xl shadow-md"
            src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=640&h=640&q=80"
            alt="Avatar"
          />
        </div>

        {/* Left side text */}
        <blockquote className="flex-1 text-center md:text-left space-y-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-purple-900 mx-auto md:mx-0"
          >
            <path d="M11 13a3 3 0 1 1 2.83-4H14a2 2 0 0 1 0 4z" />
            <path d="M12 17v4" />
            <path d="M8 21h8" />
            <rect x="2" y="3" width="20" height="14" rx="2" />
          </svg>

          <p className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-800 leading-relaxed dark:text-neutral-200">
            Working with Preline has simplified everything. The tools are
            intuitive, and the support has been outstanding.
          </p>

          <footer className="pt-2">
            <p className="font-semibold text-gray-800 dark:text-neutral-200">
              David Lin
            </p>
            <p className="text-sm text-gray-600 dark:text-neutral-400">
              Creative Director
            </p>
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
