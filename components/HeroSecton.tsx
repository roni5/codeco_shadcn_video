// app/components/Hero.tsx
export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-white rounded-4xl shadow-[0_12px_40px_rgba(2,8,23,0.18)] hover:shadow-[0_20px_60px_rgba(2,8,23,0.22)] transition-shadow duration-300 dark:bg-gray-900/80 supports-[backdrop-filter]:bg-white/80 isolate">
      <div
        className="absolute inset-x-0 top-40  transform-gpu overflow-hidden blur-3xl z-0 sm:-top-80 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 aspect-[1155/678] w-full max-w-screen-2xl -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="relative pt-6 pb-16 sm:pb-4 lg:pb-5 z-10">
        <header>
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center rounded-lg bg-gradient-to-r from-sky-300 to-pink-400  items-center justify-center">
              <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl py-6 sm:py-9">
                Contact sales
              </h2>
              <p className=" my-1 sm:my-3 text-lg/8  mx-auto  md:text-3xl/8 text-gray-950 max-lg:text-center text-balance antialiased pb-1 sm:pb-4 ">
                The easiest way to get a performance-oriented, SEO-friendly, and
                secure website live.
              </p>
              <p className=" my-1 sm:my-3 text-lg/8  mx-auto  md:text-3xl/8 text-gray-950 max-lg:text-center text-balance antialiased pb-1 sm:pb-4 ">
                Built by engineers who ship: finished contact flows, a live DB,
                newsletter wiring, and AI stubs.
              </p>
              <p className=" my-1 sm:my-3 text-lg/8  mx-auto  md:text-3xl/8 text-gray-950 max-lg:text-center text-balance antialiased pb-1 sm:pb-4 ">
                So you can demo real value to customers in the first week.
              </p>
              <p className=" my-1 sm:my-3 text-lg/8  mx-auto  md:text-3xl/8 text-gray-950 max-lg:text-center text-balance antialiased py-1 sm:py-4   break-words break-after-all">
                No Documentation — Step-by-Step Videos
              </p>
            </div>
          </div>
        </header>
      </div>
      <div className="-my-4 flex min-h-[2.5rem] items-center justify-center p-[1.5rem] ">
        <button
          type="submit"
          className=" w-2xs sm:w-2xl p-3 mb-2 sm:mb-8 text-sm font-bold tracking-wide uppercase rounded-lg bg-linear-to-br from-indigo-400 to-rose-500 shadow-xl hover:opacity-70 dark:bg-sky-600 dark:text-gray-50"
        >
          Lets Talk
        </button>
      </div>
    </div>
  )
}

