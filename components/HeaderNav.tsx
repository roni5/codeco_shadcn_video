

export default function header() {
  return (
    <>
      <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm py-3 md:py-0">
        (
        <nav className="max-w-340 w-full mx-auto px-4 md:px-6 lg:px-8">
          <div className="relative md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-between">
              <a
                className="flex-none focus:outline-hidden focus:opacity-80"
                href="/"
              >
                Home
              </a>

              <div className="md:hidden">
                <button
                  type="button"
                  className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                  id="hs-navbar-page-demo-pricing-collapse"
                  aria-expanded="false"
                  aria-controls="hs-navbar-page-demo-pricing"
                  aria-label="Toggle navigation"
                  data-hs-collapse="#hs-navbar-page-demo-pricing"
                >
                  <svg
                    className="hs-collapse-open:hidden shrink-0 size-4"
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
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                  </svg>
                  <svg
                    className="hs-collapse-open:block hidden shrink-0 size-4"
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
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div
              id="hs-navbar-page-demo-pricing"
              className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block"
              aria-labelledby="hs-navbar-page-demo-pricing-collapse"
            >
              <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                <div className="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:ps-7 md:divide-y-0 md:divide-solid dark:divide-neutral-700">
                  <a
                    className="py-3 md:py-6 font-medium text-gray-600 hover:text-gray-500 focus:outline-hidden focus:text-gray-500 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                    href="#"
                    aria-current="page"
                  >
                    Landing
                  </a>

                  <a
                    className="py-3 md:py-6 font-medium text-gray-600 hover:text-gray-500 focus:outline-hidden focus:text-gray-500 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                    href="#"
                  >
                    Company
                  </a>

                  {/* Dropdown */}
                  <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-4">
                    <button
                      id="hs-mega-menu-pdp"
                      type="button"
                      className="flex items-center w-full text-gray-600 hover:text-gray-400 focus:outline-hidden focus:text-gray-400 font-medium dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      aria-label="Mega Menu"
                    >
                      Resources
                      <svg
                        className="ms-2 size-2.5 text-gray-500 dark:text-neutral-500"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        >
                          <title>icon</title>
                        </path>
                      </svg>
                    </button>

                    <div
                      className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 top-full start-0 min-w-60 bg-white md:shadow-2xl rounded-lg py-2 md:p-4 dark:bg-neutral-900 dark:divide-neutral-700 before:absolute before:-top-5 before:start-0 before:w-full before:h-5"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="hs-mega-menu-pdp"
                    >
                      {/* Add your dropdown items here */}
                    </div>
                  </div>

                  <a
                    className="py-3 md:py-6 font-medium text-gray-600 hover:text-gray-500 focus:outline-hidden focus:text-gray-500 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                    href="#"
                  >
                    Login
                  </a>

                  <div className="pt-3 md:pt-0">
                    <a
                      className="py-2.5 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-violet-900 text-white hover:bg-violet-700 focus:outline-hidden focus:bg-violet-700 disabled:opacity-50 disabled:pointer-events-none"
                      href="#"
                    >
                      Request demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        )
      </header>
    </>
  )
}
