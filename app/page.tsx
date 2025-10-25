//'use client';

import Bento from '@/components/Bento'
import Bento2 from '@/components/Bento2'
//import Footer3 from '@/components/Footer3'
import HeroSection from '@/components/HeroSecton'
//import Newsletters from '@/components/Newsletters'
//import SummaryDetails from '@/components/SummaryDetails'
import SummaryDetailsGrid from '@/components/SummaryDetailsGrid'
import ContactWidget from '@/components/contact-widget'
import Macontact from '@/components/macontact'
import { NameTransition } from '@/components/name'
import { SonnerDemo } from '@/components/sink/sonner-demo'
import { GoogleTagManager } from '@next/third-parties/google'
import Image from 'next/image'
import Link from 'next/link'

/* <main className="flex min-h-screen flex-col items-center justify-between mt-16 md:24 p-4 sm:p-8 md:p-12 lg:p-24"> */

export default function Home() {
  return (
    // Update the main container:
    <main className="flex min-h-screen flex-col items-center justify-between mt-18 md:mt-12 p-4 sm:p-8 md:p-12 lg:p-24 max-w-full overflow-x-hidden">
      <GoogleTagManager gtmId="GTM-P6CXJTBT" />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono antialiased md:subpixel-antialiased text-sm lg:flex">
        {/* <NavigationMenuDemo /> */}
        <p
          className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
          style={{
            backgroundImage:
              'linear-gradient(120deg, var(--indigo-6), var(--crimson-5)) ',
            boxShadow: 'rgba(0, 150, 105, 0.4) 0px 4px 8px 0px',
          }}
        >
          Prewired Database Contacts ChatBots &nbsp;
        </p>
        <samp>100 of Hours Saved</samp>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Link
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://codeco.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex items-center justify-center">
              <NameTransition />
            </span>
          </Link>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative flex place-items-center  dark:invert"
          src="./img/rio.svg"
          alt="Next.js Logo"
          width={1180}
          height={137}
          priority
        />
      </div>
      <div className="my-4 md:my-10"> </div>

      <div className="mb-16 sm:mb-24 lg:mb-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 text-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 place-items-center">
        <div className="relative w-80 h-48 drop-shadow-lg border border-crimson rounded-3xl">
          <Image
            src="/img/sky-building2.jpg"
            alt="Background"
            width={1000}
            height={668}
            priority
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-white/70 backdrop-hue-rotate-180 flex items-center justify-center rounded-lg">
            <Link
              href="https://codeco.tech"
              className="group rounded-lg border px-5 py-4 transition-colors text-sky-900 border-pink-300 drop-shadow-lg hover:-translate-y-1 hover:scale-110 focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-sky-200 from-pink-50 to-blackhover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-md bg-gradient-to-r from-sky-400 to-pink-400 flex items-center justify-center">
                <h2 className="text-white font-bold font-heading text-2xl md:text-3xl prose antialiased">
                  No Docs&nbsp;{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    &gt;
                  </span>
                </h2>
              </div>
              <p className="my-3 md:my-5 max-w-[30ch] mx-auto text-center text-sm opacity-70 text-balance">
                Step by step videos tutorials about all features and API.
              </p>
            </Link>
          </div>
        </div>
        <div className="relative w-80 h-48 drop-shadow-lg border border-crimson rounded-3xl">
          <Image
            src="/img/sky-view3.jpg"
            alt="Background"
            width={1000}
            height={668}
            priority
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-white/70 backdrop-hue-rotate-180 flex items-center justify-center rounded-lg">
            <Link
              href="https://codeco.tech"
              className="group rounded-lg border px-5 py-4 transition-colors text-sky-900 border-pink-300 drop-shadow-lg hover:-translate-y-1 hover:scale-110 focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-sky-200 from-pink-50 to-blackhover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-md bg-gradient-to-r from-sky-400 to-pink-400 items-center justify-center ">
                <h2 className="text-white font-bold font-heading text-2xl md:text-3xl prose antialiased">
                  No Learning&nbsp;{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    &gt;
                  </span>
                </h2>
              </div>
              <p className="my-3 md:my-5 max-w-[30ch] mx-auto text-center text-sm opacity-70 text-balance">
                Explore enterprise Websites with all contacts in your own hands
              </p>
            </Link>
          </div>
        </div>

        <div className="relative w-80 h-48 drop-shadow-lg border border-crimson rounded-3xl">
          <Image
            src="/img/dome.jpg"
            alt="Background"
            width={1000}
            height={668}
            priority
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-white/70 backdrop-hue-rotate-180 flex items-center justify-center ">
            <Link
              href="https://codeco.tech"
              className="group rounded-lg border px-5 py-4 transition-colors text-sky-900 border-pink-300 drop-shadow-lg hover:-translate-y-1 hover:scale-110 focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-sky-200 from-pink-50 to-blackhover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-md bg-gradient-to-r from-sky-400 to-pink-400 items-center justify-center">
                <h2 className="text-white font-bold font-heading text-2xl md:text-3xl prose antialiased">
                  Websites&nbsp;{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    &gt;
                  </span>
                </h2>
              </div>
              <p className="my-3 md:my-5 max-w-[30ch] mx-auto text-center text-sm opacity-70 text-balance">
                Download Fully-Built Websites with Backend Forms & Database
              </p>
            </Link>
          </div>
        </div>

        <div className="relative w-80 h-48 drop-shadow-lg border border-crimson rounded-3xl">
          <Image
            src="/img/sky-trees.jpg"
            alt="Background"
            className="w-full h-full object-cover rounded-lg"
            width={1000}
            height={668}
            priority
          />
          <div className="absolute inset-0 bg-white/70 backdrop-hue-rotate-180 flex items-center justify-center rounded-lg">
            <Link
              href="https://codeco.tech"
              className="group rounded-lg border px-5 py-4 transition-colors text-sky-900 border-pink-300 drop-shadow-lg hover:-translate-y-1 hover:scale-110 focus:outline-none focus:shadow-outline bg-gradient-to-b hover:from-sky-200 from-pink-50 to-blackhover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-md bg-gradient-to-r from-sky-400 to-pink-400 items-center justify-center">
                <h2 className="text-white font-bold font-heading text-2xl md:text-3xl prose antialiased">
                  Deploy&nbsp;{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    &gt;
                  </span>
                </h2>
              </div>
              <p className="my-3 md:my-5 max-w-[30ch] mx-auto text-center text-sm opacity-70 text-balance">
                Instantly deploy the latest Next.js 15 & Tailwind V4
              </p>
            </Link>
          </div>
        </div>
      </div>
      <section className="relative  sm:mx-auto  w-[420px] sm:w-[1400px] h-[13vh] sm:h-[34vh] overflow-visible rounded-2xl ">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-pink-400 [clip-path:polygon(10%_0,90%_0,100%_100%,0%_100%)] rounded-2xl">
          <div className="flex items-center justify-center h-full px-4 sm:px-8">
            <h1 className="text-xl sm:text-5xl font-bold text-white tracking-tight text-center max-w-4xl leading-tight">
              <span
                className="inline-block"
                style={{
                  transform:
                    'perspective(500px) rotateX(18deg) scaleY(1.1) skewX(-4deg)',
                  transformOrigin: 'bottom',
                  textShadow: '0 8px 20px rgba(0,0,0,0.2)',
                }}
              >
                Everything you need to deploy your app
              </span>
            </h1>
          </div>
        </div>
      </section>
   

      <Bento />

      <div className="w-full flex flex-col justify-center min-h-screen gap-6 py-22">
        <SummaryDetailsGrid />

        <div className="my-6 md:my-12">
          <Bento2 />
        </div>
        <div className="my-6 md:my-12">
          <HeroSection />
        </div>
        <div className="my-6 md:my-12">
          <Macontact />
        </div>

        {/* <ChatWidget /> */}
      </div>
      {/* <Footer3 /> */}
      <ContactWidget />
    </main>
  )
}
