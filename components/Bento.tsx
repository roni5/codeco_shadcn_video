import { ImageWithFallback } from './ImageWithFallback'
// bg-gradient-to-r from-indigo-600 to-pink-500
export default function Bento() {
  return (
    <div className="bg-linear-to-br from-slate-900 to-indigo-950 overflow-hidden  rounded-lg -mt-8 border-0">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 opacity-90">
        <h2 className="block:hidden md:block text-center text-base/7 font-semibold text-white antialiased text-balance">
          {}
        </h2>
        <p className="mx-auto sm:mt-12 mt-12 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white antialiased sm:text-5xl">
          Digital Bricks & Mortar
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-0 rounded-lg bg-white lg:rounded-l-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Mobile friendly
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Every template is mobile-first with readable type scales,
                  sensible margins, and centered CTAs so your message stays
                  clear on tiny screens.
                </p>
              </div>
              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <ImageWithFallback
                    className="size-full object-cover object-top"
                    src="/img/bento-03.png"
                    alt="Mobile friendly design"
                    width={1080}
                    height={1080}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-0 rounded-lg bg-white max-lg:rounded-t-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Full Stack Performance
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Performance by design — prefetching routes, server Actions for
                  short-circuiting renders, and optimized assets to keep
                  Lighthouse green.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <ImageWithFallback
                  className="w-full max-lg:max-w-xs"
                  src="/img/performance.png"
                  alt="Performance metrics"
                  width={566}
                  height={286}
                />
              </div>
            </div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-0 rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Security
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Ship correctly: secure headers, safe auth scaffolding, input
                  validation and rate-limit examples — developer-friendly
                  defaults.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <ImageWithFallback
                  className="object-cover flex flex-1 items-center"
                  src="/img/bento-03-security.png"
                  alt="Security illustration"
                  width={304}
                  height={152}
                />
              </div>
            </div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-0 rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Powerful SEO
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  We renamed the API section to SEO because real businesses want
                  discoverability. Auto metadata, structured data, and canonical
                  patterns are built-in so you don’t have to think about it.
                </p>
              </div>
              <div className="grid place-items-center h-40">
                <ImageWithFallback
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/img/web-rocket.svg"
                  alt="rocket seo"
                  width={250}
                  height={150}
                  priority
                />
                <div className="flex bg-gray-900 outline outline-white/5">
                  <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                    <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                      NotificationSetting.jsx
                    </div>
                    <div className="border-r border-gray-600/10 px-4 py-2">
                      App.jsx
                    </div>
                  </div>
                </div>
                <div className="px-6 pt-6 pb-14" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
