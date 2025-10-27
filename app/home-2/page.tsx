import Image from 'next/image'
import Link from 'next/link'
import styles from './homepagecss.module.css'

export default function HomePage() {
  return (
    <main className="bg-white w-full mx-auto">
      {/* Hero */}
      <section className="mb-12 md:mb-20">
        <div className={styles.heroLanding}>
          <div className={styles.heroLandingBackground}>
            <div className="w-full">
              <video
                src="/video/hero-video-25.mp4"
                className={styles.heroLandingImage}
                width={1500}
                height={600}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>

          <div className={styles.heroLandingContent}>
            <div className="container mx-auto px-4">
              <div className="flex flex-col items-center md:items-start">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center md:text-left text-balance">
                  Easy-to-use tools for your business.
                </h1>
                <h2 className="text-xl md:text-2xl font-medium text-center md:text-left text-white text-balance">
                  Get free tools to make the most of your{' '}
                  <samp className="text-primary font-extrabold">Marketing</samp>{' '}
                  from site and app analytics to intuitive testing and more.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mb-12 md:mb-20">
        <div className={styles.highlightsModule}>
          <div className="container mx-auto px-4 ">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2">
                <div className="sticky top-24">
                  <Image
                    src="/img/working-on-laptops.jpeg"
                    alt="Get better insights to drive your business."
                    className="w-full rounded-md"
                    width={768}
                    height={500}
                  />
                </div>
              </div>

              <div className="lg:w-5/12">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Get better insights to drive your business.
                </h3>

                <div className="hidden md:block">
                  <Image
                    src="/img/home-ipad.jpg"
                    alt="Get better insights to drive your business."
                    className="w-full md:hidden mb-6"
                    width={1500}
                    height={700}
                  />
                </div>

                <ul className="space-y-8">
                  <li className="flex gap-4">
                    <div className="flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" className="w-12 h-12 text-primary" role="img" aria-label="zig zag up arrow icon">
                        <title>Rising arrow icon</title>
                        <circle cx="22.5" cy="22.5" r="22.5" fill="currentColor" />
                        <path
                          d="m27.6 14.8 2.9 2.9-6.2 6.3-5.1-5.1-9.5 9.5 1.8 1.8 7.7-7.7 5.1 5.1 8.1-8.1 2.9 2.9v-7.7h-7.7z"
                          fill="#fff"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        Grow your business with solutions for all of your needs.
                      </h4>
                      <p>Our free analytics and optimisation tools help you grow your business with smarter marketing.</p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" className="w-12 h-12 text-primary" role="img" aria-label="settings icon">
                        <title>settings icon</title>
                        <circle cx="22.5" cy="22.5" r="22.5" fill="currentColor" />
                        <path d="m10.5 10.5h24v24h-24z" fill="none" />
                        <path
                          d="m33.2 29.5-9.1-9.1a6.42 6.42 0 0 0-1.5-6.9 6.61 6.61 0 0 0-7.4-1.3l4.3 4.3-3 3-4.4-4.3a6.54 6.54 0 0 0 8.2 8.9l9.1 9.1a1 1 0 0 0 1.4 0l2.3-2.3a.9.9 0 0 0 .1-1.4z"
                          fill="#fff"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Easy-to-use tools.</h4>
                      <p>Simple tools with powerful insights enable you to spend less time analysing data and more time delighting customers.</p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" className="w-12 h-12 text-primary" role="img" aria-label="checklist icon">
                        <title>checklist icon</title>
                        <circle cx="22.5" cy="22.5" r="22.5" fill="currentColor" />
                        <path
                          d="m25 20h-16v2.67h16zm0-5.34h-16v2.67h16zm-16 13.34h10.68v-2.66h-10.68zm26-6 2 2-9.3 9.35-6-6 2-2 4 4z"
                          fill="#fff"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Big results for smaller budgets.</h4>
                      <p>Access free and self-service solutions that take your marketing to new heights at little to no cost to your business.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="mb-16 md:mb-32">
        <div className="container mx-auto px-4 mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Marketing solutions for every business.
          </h3>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center mb-12">
            <div className="lg:w-1/3">
              <div className="flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-12 h-12 rounded-full bg-primary inline-block" />
                  <h4 className="text-2xl font-bold">Analytics</h4>
                </div>
                <p className="text-lg mb-6">Understand your customers so you can deliver better experiences.</p>
                <Link href="/intl/en_uk/about/analytics/" className="text-primary hover:opacity-80 font-medium">
                  Learn more about Analytics
                </Link>
              </div>
            </div>
            <div className="lg:w-2/3">
              <Image
                src="/img/home_front_ipad.jpg"
                alt="Analytics"
                className="w-full rounded-lg"
                width={768}
                height={400}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/intl/en_uk/about/analytics/" className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4 h-12" />
              <h4 className="text-xl font-bold mb-2">Analytics</h4>
              <p className="mb-4">Understand your customers so you can deliver better experiences.</p>
              <div className="text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" role="img" aria-label="open laptop">
                  <title>open laptop</title>
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
              </div>
            </Link>

            <Link href="/intl/en_uk/about/tag-manager/" className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4 h-12" />
              <h4 className="text-xl font-bold mb-2">Tag Manager</h4>
              <p className="mb-4">Manage all your tags without editing code.</p>
              <div className="text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" role="img" aria-label="Forward arrow icon">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Remaining sections keep imagery; text accents use text-primary / bg-primary as needed */}
    </main>
  )
}