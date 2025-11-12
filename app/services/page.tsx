'use client'
import ActiveButton from '@/components/ActiveButton'
import BackButton from '@/components/BackButton '
import ProductCard from '@/components/product-card'
import Image from 'next/image'
export default function Services() {
  return (
    <div
      className="relative grid min-h-screen max-h-dvh backdrop-blur-md bg-white/[.87]  dark:bg-gray-950 p-0
    overflow-auto [&_input]:bg-black/5 [&_input]:border-0 [&_div.tertiary-bg]:bg-gray-100 "
    >
      <BackButton />

      {/* <ActiveButton href="/dashboard">Active</ActiveButton> */}
      <div className="col-start-3 row-start-3 flex max-w-lg flex-col bg-gray-100 p-2 dark:bg-white/10">
        <div className="rounded-xl bg-white p-10 text-sm/7 text-gray-700 dark:bg-gray-950 dark:text-gray-300">
          <Image
            src="/img/elephant-sky.svg"
            height={64}
            width={64}
            className="  w-12 h-12 mb-11.5  dark:hidden"
            alt="Tailwind Play"
          />
          <img
            src="/img/logo-dark.svg"
            className="mb-11.5 h-6 not-dark:hidden"
            alt="Tailwind Play"
          />
          <div className="space-y-6">
            <p>
              An advanced online playground for Tailwind CSS, including support
              for things like:
            </p>
            <ul className="space-y-3">
              <li className="flex">
                <svg
                  className="h-[1lh] w-5.5 shrink-0"
                  viewBox="0 0 22 22"
                  fill="none"
                  strokeLinecap="square"
                >
                  <title>Logo</title>
                  <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                  <circle
                    cx="11"
                    cy="11"
                    r="10.5"
                    className="stroke-sky-400/25"
                  />
                  <path
                    d="M8 11.5L10.5 14L14 8"
                    className="stroke-sky-800 dark:stroke-sky-300"
                  />
                </svg>
                <p className="ml-3">
                  Customizing your theme with
                  <code className="font-mono font-medium text-gray-950 dark:text-white">
                    @theme
                  </code>
                </p>
              </li>
              <li className="flex">
                <svg
                  className="h-[1lh] w-5.5 shrink-0"
                  viewBox="0 0 22 22"
                  fill="none"
                  strokeLinecap="square"
                >
                  <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                  <circle
                    cx="11"
                    cy="11"
                    r="10.5"
                    className="stroke-sky-400/25"
                  />
                  <path
                    d="M8 11.5L10.5 14L14 8"
                    className="stroke-sky-800 dark:stroke-sky-300"
                  />
                </svg>
                <p className="ml-3">
                  Adding custom utilities with
                  <code className="font-mono font-medium text-gray-950 dark:text-white">
                    @utility
                  </code>
                </p>
              </li>
              <li className="flex">
                <svg
                  className="h-[1lh] w-5.5 shrink-0"
                  viewBox="0 0 22 22"
                  fill="none"
                  strokeLinecap="square"
                >
                  <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                  <circle
                    cx="11"
                    cy="11"
                    r="10.5"
                    className="stroke-sky-400/25"
                  />
                  <path
                    d="M8 11.5L10.5 14L14 8"
                    className="stroke-sky-800 dark:stroke-sky-300"
                  />
                </svg>
                <p className="ml-3">
                  Adding custom variants with
                  <code className="font-mono font-medium text-gray-950 dark:text-white">
                    @variant
                  </code>
                </p>
              </li>
              <li className="flex">
                <svg
                  className="h-[1lh] w-5.5 shrink-0"
                  viewBox="0 0 22 22"
                  fill="none"
                  strokeLinecap="square"
                >
                  <circle cx="11" cy="11" r="11" className="fill-sky-400/25" />
                  <circle
                    cx="11"
                    cy="11"
                    r="10.5"
                    className="stroke-sky-400/25"
                  />
                  <path
                    d="M8 11.5L10.5 14L14 8"
                    className="stroke-sky-800 dark:stroke-sky-300"
                  />
                </svg>
                <p className="ml-3">Code completion with instant preview</p>
              </li>
            </ul>
            <p>
              Perfect for learning how the framework works, prototyping a new
              idea, or creating a demo to share online.
            </p>
          </div>
          <hr className="my-6 w-full border-(--pattern-fg)" />
          <p className="mb-3">Want to dig deeper into Tailwind?</p>
          <p className="font-semibold">
            <a
              href="https://tailwindcss.com/docs"
              className="text-gray-950 underline decoration-sky-400 underline-offset-3 hover:decoration-2 dark:text-white"
            >
              Read the docs &rarr;
            </a>
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12 tracking-tight">
          Featured Articles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {/* Card repetition for demo */}
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>

      <div className="relative -right-px col-start-2 row-span-full "></div>
      <div className="relative -left-px col-start-4 " />
      <div className="relative -bottom-px col-span-full col-start-1 row-start-2 h-px bg-(--pattern-fg)" />
      <div className="relative -top-px col-span-full col-start-1 row-start-4 h-px bg-(--pattern-fg)"></div>
    </div>
  )
}
