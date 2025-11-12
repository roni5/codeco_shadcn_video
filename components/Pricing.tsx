import Link from 'next/link'
import React from 'react'

export default function Pricing() {
  return (
    <>
      <div className="relative">
        <div aria-hidden="true" className="flex -z-1 absolute -top-48 start-0">
          <div className="bg-purple-200 opacity-30 blur-3xl w-[1036px] h-150 dark:bg-purple-900 dark:opacity-20" />
          <div className="bg-gray-200 opacity-90 blur-3xl w-[577px] h-75 translate-y-32 dark:bg-neutral-800/60" />
        </div>

        <div className="max-w-340 px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14 mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-3xl leading-tight font-bold md:text-4xl lg:text-5xl bg-clip-text bg-linear-to-r from-violet-600 to-fuchsia-700 text-transparent">
              Simple, transparent pricing
            </h2>
            <p className="mt-2 lg:text-lg text-gray-800 dark:text-neutral-200">
              Whatever your status, our offers evolve according to your needs.
            </p>
          </div>
          {/* Switch */}
          <div className="flex justify-center items-center gap-x-3">
            <label
              htmlFor="pricing-switch"
              className="text-sm text-gray-800 dark:text-neutral-200"
            >
              Monthly
            </label>

            <label
              htmlFor="pricing-switch"
              className="relative inline-block w-11 h-6 cursor-pointer"
            >
              <input
                type="checkbox"
                id="pricing-switch"
                className="peer sr-only"
                defaultChecked={false}
              />
              <span className="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-purple-600 dark:bg-neutral-700 dark:peer-checked:bg-purple-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none" />
              <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-5 bg-white rounded-full shadow-xs transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white" />
            </label>

            <label
              htmlFor="pricing-switch"
              className="text-sm text-gray-800 dark:text-neutral-200"
            >
              Annually
            </label>
          </div>

          {/* Switch-end */}
          {/* Grid */}
          <div className="mt-6 md:mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-3 xl:gap-6 lg:items-center">
            {/* Card */}
            <div className="flex flex-col bg-white border border-gray-200 text-center rounded-2xl p-4 md:p-8 dark:bg-neutral-900 dark:border-neutral-800">
              <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">
                Free
              </h4>
              <span className="mt-7 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-neutral-200">
                Free
              </span>
              <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                Get started with basic features
              </p>

              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex gap-x-2">
                  <svg
                    className="shrink-0 mt-0.5 size-4 text-violet-900"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-neutral-400">
                    1 user
                  </span>
                </li>

                <li className="flex gap-x-2">
                  <svg
                    className="shrink-0 mt-0.5 size-4 text-violet-900"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-neutral-400">
                    Plan features
                  </span>
                </li>

                <li className="flex gap-x-2">
                  <svg
                    className="shrink-0 mt-0.5 size-4 text-violet-900"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-neutral-400">
                    Product support
                  </span>
                </li>
              </ul>

              <Link
                href="/get-started"
                className="mt-5 py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-violet-600 text-violet-600 hover:border-violet-500 hover:text-violet-500 focus:outline-hidden focus:border-violet-500 focus:text-violet-500 disabled:opacity-50 disabled:pointer-events-none dark:border-violet-500 dark:text-violet-500 dark:hover:text-violet-400 dark:hover:border-violet-400 dark:focus:text-violet-400 dark:focus:border-violet-400 transform transition duration-300 ease-in-out
                    scale-100
                    hover:scale-110 "
              >
                Get started
              </Link>
            </div>
            {/* End Card */}

            {/* Card */}
            <div className="flex flex-col bg-white border-2 border-violet-900 text-center shadow-xl rounded-2xl p-4 md:p-8 dark:bg-neutral-900 dark:border-violet-700">
              <p className="mb-3">
                <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs uppercase font-semibold bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-white">
                  Most popular
                </span>
              </p>
              <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">
                Startup
              </h4>
              <span className="mt-5 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-neutral-200">
                £39
              </span>
              <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                All the basics for starting a new business
              </p>

              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex gap-x-2">
                  <svg
                    className="shrink-0 mt-0.5 size-4 text-violet-900"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-neutral-400">
                    2 users
                  </span>
                </li>

                <li className="flex gap-x-2">
                  <svg
                    className="shrink-0 mt-0.5 size-4 text-violet-900"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-neutral-400">
                    Plan features
                  </span>
                </li>

                <li className="flex gap-x-2">
                  <svg
                    className="shrink-0 mt-0.5 size-4 text-violet-900"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-neutral-400">
                    Product support
                  </span>
                </li>
              </ul>

              <Link
                className="mt-5 py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-violet-600 text-white hover:bg-violet-700 focus:outline-hidden focus:bg-violet-700 disabled:opacity-50 disabled:pointer-events-none transform transition duration-300 ease-in-out
                    scale-100
                    hover:scale-110 "
                href="https:codeco.tech"
              >
                Get started
              </Link>
            </div>
            {/* End Card */}

            {/* Card */}
            <div className="flex flex-col bg-white border border-gray-200 text-center rounded-2xl p-4 md:p-8 dark:bg-neutral-900 dark:border-neutral-800">
              <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">
                Team
              </h4>
              <span className="mt-5 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-neutral-200">
                £89
              </span>
              <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                Everything you need for a growing business
              </p>

              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex gap-x-2">
                  <svg
                    className="shrink-0 mt-0.5 size-4 text-violet-900"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-neutral-400">
                    5 users
                  </span>
                </li>

                <li className="flex gap-x-2">
                  <svg
                    className="shrink-0 mt-0.5 size-4 text-violet-900"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-neutral-400">
                    Plan features
                  </span>
                </li>

                <li className="flex gap-x-2">
                  <svg
                    className="shrink-0 mt-0.5 size-4 text-violet-900"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-neutral-400">
                    Product support
                  </span>
                </li>
              </ul>

              <Link
                className="mt-5 py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-violet-600 text-violet-600 hover:border-violet-500 hover:text-violet-500 focus:outline-hidden focus:border-violet-500 focus:text-violet-500 disabled:opacity-50 disabled:pointer-events-none dark:border-violet-500 dark:text-violet-500 dark:hover:text-violet-400 dark:hover:border-violet-400 dark:focus:text-violet-400 dark:focus:border-violet-400 transform transition duration-300 ease-in-out
                    scale-100
                    hover:scale-110 "
                href="/"
              >
                Get started
              </Link>
            </div>
            {/* End Card */}

            {/* Card */}
            <div className="flex flex-col bg-white border border-gray-200 text-center rounded-2xl p-4 md:p-8 dark:bg-neutral-900 dark:border-neutral-800">
              <h4 className="font-medium text-lg text-gray-800 dark:text-neutral-200">
                Enterprise
              </h4>
              <span className="mt-5 font-bold text-3xl md:text-4xl xl:text-5xl text-gray-800 dark:text-neutral-200">
                £149
              </span>
              <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                Advanced features for scaling your business
              </p>

              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex gap-x-2">
                  <svg
                    className="shrink-0 mt-0.5 size-4 text-violet-900"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-neutral-400">
                    10 users
                  </span>
                </li>

                <li className="flex gap-x-2">
                  <svg
                    className="shrink-0 mt-0.5 size-4 text-violet-900"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-neutral-400">
                    Plan features
                  </span>
                </li>

                <li className="flex gap-x-2">
                  <svg
                    className="shrink-0 mt-0.5 size-4 text-violet-900"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-gray-800 dark:text-neutral-400">
                    Product support
                  </span>
                </li>
              </ul>
              <Link
                className="mt-5 py-3 px-4 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-violet-600 text-violet-600 hover:border-violet-500 hover:text-violet-500 focus:outline-hidden focus:border-violet-500 focus:text-violet-500 disabled:opacity-50 disabled:pointer-events-none dark:border-violet-500 dark:text-violet-500 dark:hover:text-violet-400 dark:hover:border-violet-400 dark:focus:text-violet-400 dark:focus:border-violet-400 transform transition duration-300 ease-in-out
                    scale-100
                    hover:scale-110 "
                href="/"
              >
                Get started
              </Link>
            </div>
            {/* End Card */}
          </div>
          {/* End Grid */}
        </div>
      </div>
    </>
  )
}
