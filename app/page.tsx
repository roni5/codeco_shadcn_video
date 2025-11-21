import Image from 'next/image'
import Link from 'next/link'
import styles from './homepagecss.module.css'
import ContactWidget from '@/components/contact-widget'

export default function HomePage() {
  return (
    <main className="bg-background w-full mx-auto">
      {/* Hero - UNCHANGED */}
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

      {/* Highlights Section - GOATed */}
      <section className="mb-16 md:mb-24 lg:mb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Sticky Image */}
            <div className="lg:w-1/2">
              <div className="sticky top-24">
                <div className="relative group">
                  <div
                    className="absolute inset-0 rounded-3xl p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      backgroundImage:
                        'linear-gradient(var(--border-angle), var(--color-primary), var(--color-secondary), var(--color-accent), var(--color-primary))',
                      backgroundSize: '300% 100%',
                      animation: 'rotate-border 4s linear infinite',
                    }}
                  ></div>
                  <div className="relative rounded-3xl overflow-hidden">
                    <Image
                      src="/img/working-on-laptops.jpeg"
                      alt="Get better insights to drive your business."
                      className="w-full rounded-3xl"
                      width={768}
                      height={500}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-1/2">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent">
                Get better insights to drive your business.
              </h3>

              <ul className="space-y-8 md:space-y-10">
                <li className="relative group">
                  <div className="flex gap-4 md:gap-6 p-6 rounded-2xl hover:bg-muted/10 transition-all duration-300">
                    <div className="shrink-0">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 45 45"
                          className="w-8 h-8 md:w-9 md:h-9 text-primary-foreground"
                          role="img"
                          aria-label="zig zag up arrow icon"
                        >
                          <path
                            d="m27.6 14.8 2.9 2.9-6.2 6.3-5.1-5.1-9.5 9.5 1.8 1.8 7.7-7.7 5.1 5.1 8.1-8.1 2.9 2.9v-7.7h-7.7z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
                        Grow your business with solutions for all of your needs.
                      </h4>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        Our free analytics and optimisation tools help you grow
                        your business with smarter marketing.
                      </p>
                    </div>
                  </div>
                </li>

                <li className="relative group">
                  <div className="flex gap-4 md:gap-6 p-6 rounded-2xl hover:bg-muted/10 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 45 45"
                          className="w-8 h-8 md:w-9 md:h-9 text-primary-foreground"
                          role="img"
                          aria-label="settings icon"
                        >
                          <path
                            d="m33.2 29.5-9.1-9.1a6.42 6.42 0 0 0-1.5-6.9 6.61 6.61 0 0 0-7.4-1.3l4.3 4.3-3 3-4.4-4.3a6.54 6.54 0 0 0 8.2 8.9l9.1 9.1a1 1 0 0 0 1.4 0l2.3-2.3a.9.9 0 0 0 .1-1.4z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
                        Easy-to-use tools.
                      </h4>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        Simple tools with powerful insights enable you to spend
                        less time analysing data and more time delighting
                        customers.
                      </p>
                    </div>
                  </div>
                </li>

                <li className="relative group">
                  <div className="flex gap-4 md:gap-6 p-6 rounded-2xl hover:bg-muted/10 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 45 45"
                          className="w-8 h-8 md:w-9 md:h-9 text-primary-foreground"
                          role="img"
                          aria-label="checklist icon"
                        >
                          <path
                            d="m25 20h-16v2.67h16zm0-5.34h-16v2.67h16zm-16 13.34h10.68v-2.66h-10.68zm26-6 2 2-9.3 9.35-6-6 2-2 4 4z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
                        Big results for smaller budgets.
                      </h4>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        Access free and self-service solutions that take your
                        marketing to new heights at little to no cost to your
                        business.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section - GOATed */}
      <section className="mb-16 md:mb-24 lg:mb-32">
        <div className="container mx-auto px-4 lg:px-8 mb-12 md:mb-16">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-foreground">
            Marketing solutions for{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              every business
            </span>
          </h3>
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative group">
            <div
              className="absolute inset-0 rounded-3xl p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                backgroundImage:
                  'linear-gradient(var(--border-angle), var(--color-primary), var(--color-secondary), var(--color-accent), var(--color-primary))',
                backgroundSize: '300% 100%',
                animation: 'rotate-border 4s linear infinite',
              }}
            ></div>
            <div className="relative bg-gradient-to-br from-background to-muted/10 rounded-3xl p-8 md:p-12 border border-border group-hover:border-transparent transition-colors duration-500">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                <div className="lg:w-1/3">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-accent inline-flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="w-8 h-8 text-primary-foreground"
                        >
                          <path d="M3 3v18h18" />
                          <path d="m19 9-5 5-4-4-3 3" />
                        </svg>
                      </span>
                      <h4 className="text-2xl md:text-3xl font-bold text-foreground">
                        Analytics
                      </h4>
                    </div>
                    <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                      Understand your customers so you can deliver better
                      experiences.
                    </p>
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-2 text-primary hover:text-secondary font-semibold text-lg transition-colors group"
                    >
                      Learn more about Analytics
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="group-hover:translate-x-1 transition-transform"
                      >
                        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <div className="relative rounded-2xl overflow-hidden">
                    <Image
                      src="/img/osaka02.jpg"
                      alt="Analytics"
                      className="w-full rounded-2xl"
                      width={768}
                      height={400}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Together Section - GOATed */}
      <section className="mb-16 md:mb-24 lg:mb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="lg:w-1/2">
              <div className="sticky top-24">
                <div className="relative group">
                  <div
                    className="absolute inset-0 rounded-3xl p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      backgroundImage:
                        'linear-gradient(var(--border-angle), var(--color-primary), var(--color-secondary), var(--color-accent), var(--color-primary))',
                      backgroundSize: '300% 100%',
                      animation: 'rotate-border 4s linear infinite',
                    }}
                  ></div>
                  <div className="relative rounded-3xl overflow-hidden">
                    <Image
                      src="/img/Strategic-Planning.webp"
                      alt="Designed to work together."
                      className="w-full rounded-3xl"
                      width={768}
                      height={800}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent">
                Designed to work together.
              </h3>
              <p className="text-base md:text-lg text-muted-foreground mb-8 md:mb-12 leading-relaxed">
                Our solutions are built to work together, so you can easily
                access insights across products — to deliver better customer
                experiences.
              </p>

              <ul className="space-y-8 md:space-y-10 mb-8">
                <li className="relative">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <h4 className="text-xl md:text-2xl font-bold text-foreground">
                        Get a complete picture of your advertising.
                      </h4>
                    </div>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed ml-5">
                      Google Ads integrates with Analytics so you can easily see
                      the full customer cycle, from how they interact with your
                      marketing to how they finally complete the goals you've
                      set for them on your site.
                    </p>
                  </div>
                </li>

                <li className="relative">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-secondary/5 to-accent/5 hover:from-secondary/10 hover:to-accent/10 transition-all duration-300">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                      <h4 className="text-xl md:text-2xl font-bold text-foreground">
                        Deliver more relevant advertising experiences.
                      </h4>
                    </div>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed ml-5">
                      Keep people engaged from their search to your site — and
                      beyond. An Optimize and Google Ads integration makes it
                      easy to test personalised landing pages to drive better
                      results.
                    </p>
                  </div>
                </li>
              </ul>

              <a
                href="https://marketingplatform.google.com/home?openIntegrationCenter=true"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
                target="_blank"
                rel="nofollow noreferrer noopener"
              >
                Go to Integration Centre
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                >
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Solutions - GOATed */}
      <section className="mb-16 md:mb-24 lg:mb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div
              className="absolute inset-0 p-[3px]"
              style={{
                backgroundImage:
                  'linear-gradient(var(--border-angle), var(--color-primary), var(--color-secondary), var(--color-accent), var(--color-primary))',
                backgroundSize: '300% 100%',
                animation: 'rotate-border 4s linear infinite',
              }}
            ></div>

            <div className="relative bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 opacity-30">
                <Image
                  src="/img/ai-generated.png"
                  alt=""
                  className="w-full h-full object-cover"
                  width={1500}
                  height={400}
                />
              </div>

              <div className="relative px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
                <div className="max-w-3xl">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                    Looking for enterprise{' '}
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      solutions?
                    </span>
                  </h3>
                  <p className="text-lg md:text-xl lg:text-2xl mb-8 text-foreground/90 leading-relaxed">
                    Codeco.tech Platform offers enterprise-level solutions for
                    businesses who need real world App muscle.
                  </p>
                  <Link
                    href="/intl/en_uk/about/enterprise/"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
                  >
                    See solutions
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                    >
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section - GOATed */}
      <section className="mb-16 md:mb-24 lg:mb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-3xl p-[2px]"
              style={{
                backgroundImage:
                  'linear-gradient(var(--border-angle), var(--color-primary), var(--color-secondary), var(--color-accent), var(--color-primary))',
                backgroundSize: '300% 100%',
                animation: 'rotate-border 4s linear infinite',
              }}
            ></div>

            <div className="relative bg-gradient-to-br from-background to-muted/10 rounded-3xl px-8 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
              <div className="max-w-4xl mx-auto text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-8 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 text-primary-foreground"
                  >
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-foreground leading-tight">
                  Google Analytics helped us optimize our art marketplace,{' '}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    resulting in 400% year-over-year revenue growth
                  </span>{' '}
                  for our art business.
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Mariam Naficy
                  </span>
                  , Founder & CEO, Minted
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards - GOATed */}
      <section className="mb-16 md:mb-24 lg:mb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Link
              href="/intl/en_uk/about/analytics/"
              className="group relative"
            >
              <div
                className="absolute inset-0 rounded-3xl p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  backgroundImage:
                    'linear-gradient(var(--border-angle), var(--color-primary), var(--color-secondary), var(--color-accent), var(--color-primary))',
                  backgroundSize: '300% 100%',
                  animation: 'rotate-border 4s linear infinite',
                }}
              ></div>

              <div className="relative bg-gradient-to-br from-secondary/20 to-secondary/40 rounded-3xl p-8 md:p-10 border border-secondary/30 group-hover:border-transparent transition-all duration-500 h-full">
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none rounded-3xl"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px',
                  }}
                />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-7 h-7 text-primary-foreground"
                    >
                      <path d="M3 3v18h18" />
                      <path d="m19 9-5 5-4-4-3 3" />
                    </svg>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    Analytics
                  </h4>
                  <p className="text-base md:text-lg text-muted-foreground mb-6">
                    Understand your customers so you can deliver better
                    experiences.
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                    >
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href="/intl/en_uk/about/tag-manager/"
              className="group relative"
            >
              <div
                className="absolute inset-0 rounded-3xl p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  backgroundImage:
                    'linear-gradient(var(--border-angle), var(--color-primary), var(--color-secondary), var(--color-accent), var(--color-primary))',
                  backgroundSize: '300% 100%',
                  animation: 'rotate-border 4s linear infinite',
                }}
              ></div>

              <div className="relative bg-gradient-to-br from-foreground/90 to-foreground rounded-3xl p-8 md:p-10 border border-foreground/30 group-hover:border-transparent transition-all duration-500 h-full">
                <div
                  className="absolute inset-0 opacity-10 pointer-events-none rounded-3xl"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '30px 30px',
                  }}
                />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-7 h-7 text-primary-foreground"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="12" y1="18" x2="12" y2="12" />
                      <line x1="9" y1="15" x2="15" y2="15" />
                    </svg>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold mb-4 text-background">
                    Tag Manager
                  </h4>
                  <p className="text-base md:text-lg text-background/80 mb-6">
                    Manage all your tags without editing code.
                  </p>
                  <div className="flex items-center gap-2 text-background font-semibold group-hover:gap-4 transition-all">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                    >
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <ContactWidget />

      <style>{`
        @property --border-angle {
          inherits: false;
          initial-value: 0deg;
          syntax: '<angle>';
        }

        @keyframes rotate-border {
          to {
            --border-angle: 360deg;
          }
        }
      `}</style>
    </main>
  )
}
// import Image from 'next/image'
// import Link from 'next/link'
// import styles from './homepagecss.module.css'
// import ContactWidget from '@/components/contact-widget'

// export default function HomePage() {
//   return (
//     <main className="bg-white w-full mx-auto">
//       {/* Hero */}
//       <section className="mb-12 md:mb-20">
//         <div className={styles.heroLanding}>
//           <div className={styles.heroLandingBackground}>
//             <div className="w-full">
//               <video
//                 src="/video/hero-video-25.mp4"
//                 className={styles.heroLandingImage}
//                 width={1500}
//                 height={600}
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               />
//             </div>
//           </div>

//           <div className={styles.heroLandingContent}>
//             <div className="container mx-auto px-4">
//               <div className="flex flex-col items-center md:items-start">
//                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center md:text-left text-balance">
//                   Easy-to-use tools for your business.
//                 </h1>
//                 <h2 className="text-xl md:text-2xl font-medium text-center md:text-left text-white text-balance">
//                   Get free tools to make the most of your{' '}
//                   <samp className="text-primary font-extrabold">Marketing</samp>{' '}
//                   from site and app analytics to intuitive testing and more.
//                 </h2>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Highlights */}
//       <section className="mb-12 md:mb-20">
//         <div className={styles.highlightsModule}>
//           <div className="container mx-auto px-4 ">
//             <div className="flex flex-col lg:flex-row gap-8">
//               <div className="lg:w-1/2">
//                 <div className="sticky top-24">
//                   <Image
//                     src="/img/working-on-laptops.jpeg"
//                     alt="Get better insights to drive your business."
//                     className="w-full rounded-md"
//                     width={768}
//                     height={500}
//                   />
//                 </div>
//               </div>

//               <div className="lg:w-5/12">
//                 <h3 className="text-3xl md:text-4xl font-bold mb-6">
//                   Get better insights to drive your business.
//                 </h3>

//                 <div className="hidden md:block">
//                   <Image
//                     src="/img/home-ipad.jpg"
//                     alt="Get better insights to drive your business."
//                     className="w-full md:hidden mb-6"
//                     width={1500}
//                     height={700}
//                   />
//                 </div>

//                 <ul className="space-y-8">
//                   <li className="flex gap-4">
//                     <div className="shrink-0">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 45 45"
//                         className="w-12 h-12 text-primary"
//                         role="img"
//                         aria-label="zig zag up arrow icon"
//                       >
//                         <title>Rising arrow icon</title>
//                         <circle
//                           cx="22.5"
//                           cy="22.5"
//                           r="22.5"
//                           fill="currentColor"
//                         />
//                         <path
//                           d="m27.6 14.8 2.9 2.9-6.2 6.3-5.1-5.1-9.5 9.5 1.8 1.8 7.7-7.7 5.1 5.1 8.1-8.1 2.9 2.9v-7.7h-7.7z"
//                           fill="#fff"
//                         />
//                       </svg>
//                     </div>
//                     <div>
//                       <h4 className="text-xl font-bold mb-2">
//                         Grow your business with solutions for all of your needs.
//                       </h4>
//                       <p>
//                         Our free analytics and optimisation tools help you grow
//                         your business with smarter marketing.
//                       </p>
//                     </div>
//                   </li>

//                   <li className="flex gap-4">
//                     <div className="flex-shrink-0">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 45 45"
//                         className="w-12 h-12 text-primary"
//                         role="img"
//                         aria-label="settings icon"
//                       >
//                         <title>settings icon</title>
//                         <circle
//                           cx="22.5"
//                           cy="22.5"
//                           r="22.5"
//                           fill="currentColor"
//                         />
//                         <path d="m10.5 10.5h24v24h-24z" fill="none" />
//                         <path
//                           d="m33.2 29.5-9.1-9.1a6.42 6.42 0 0 0-1.5-6.9 6.61 6.61 0 0 0-7.4-1.3l4.3 4.3-3 3-4.4-4.3a6.54 6.54 0 0 0 8.2 8.9l9.1 9.1a1 1 0 0 0 1.4 0l2.3-2.3a.9.9 0 0 0 .1-1.4z"
//                           fill="#fff"
//                         />
//                       </svg>
//                     </div>
//                     <div>
//                       <h4 className="text-xl font-bold mb-2">
//                         Easy-to-use tools.
//                       </h4>
//                       <p>
//                         Simple tools with powerful insights enable you to spend
//                         less time analysing data and more time delighting
//                         customers.
//                       </p>
//                     </div>
//                   </li>
//                   <li className="flex gap-4">
//                     <div className="flex-shrink-0">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 45 45"
//                         className="w-12 h-12 text-primary"
//                         role="img"
//                         aria-label="checklist icon"
//                       >
//                         <title>checklist icon</title>
//                         <circle
//                           cx="22.5"
//                           cy="22.5"
//                           r="22.5"
//                           fill="currentColor"
//                         />
//                         <path
//                           d="m25 20h-16v2.67h16zm0-5.34h-16v2.67h16zm-16 13.34h10.68v-2.66h-10.68zm26-6 2 2-9.3 9.35-6-6 2-2 4 4z"
//                           fill="#fff"
//                         />
//                       </svg>
//                     </div>
//                     <div>
//                       <h4 className="text-xl font-bold mb-2">
//                         Big results for smaller budgets.
//                       </h4>
//                       <p>
//                         Access free and self-service solutions that take your
//                         marketing to new heights at little to no cost to your
//                         business.
//                       </p>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Products */}
//       <section className="mb-16 md:mb-32">
//         <div className="container mx-auto px-4 mb-12">
//           <h3 className="text-3xl md:text-4xl font-bold text-center mb-8">
//             Marketing solutions for every business.
//           </h3>
//         </div>

//         <div className="container bg-white mx-auto px-4">
//           <div className="flex flex-col lg:flex-row gap-8 items-center mb-12">
//             <div className="lg:w-1/3">
//               <div className="flex flex-col">
//                 <div className="flex items-center gap-4 mb-4">
//                   <span className="w-12 h-12 rounded-full bg-secondary inline-block" />
//                   <h4 className="text-2xl font-bold">Analytics</h4>
//                 </div>
//                 <p className="text-lg mb-6">
//                   Understand your customers so you can deliver better
//                   experiences.
//                 </p>
//                 <Link
//                   href="/about"
//                   className="text-primary hover:opacity-80 font-medium"
//                 >
//                   Learn more about Analytics
//                 </Link>
//               </div>
//             </div>
//             <div className="lg:w-2/3">
//               <Image
//                 src="/img/osaka02.jpg"
//                 alt="Analytics"
//                 className="w-full rounded-lg bg-white"
//                 width={768}
//                 height={400}
//               />
//             </div>
//           </div>
//           {/* <section className="mb-12 md:mb-20">
//             <div className={styles.colorBar}>
//               <div className="container mx-auto px-4">
//                 <div className="flex justify-center">
//                   <div className="lg:w-2/3 text-center">
//                     <div className={styles.colorBarIconBlack} />
//                     <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
//                       <span>
//                         Google Analytics helped us optimize our art marketplace,{' '}
//                       </span>
//                       <span className="text-primary">
//                         resulting in 400% year-over-year revenue growth
//                       </span>
//                       <span> for our art business.</span>
//                     </h3>
//                     <p className="text-lg">
//                       <span className="font-medium">Mariam Naficy</span>,
//                       Founder &amp; CEO, Minted
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section> */}
//         </div>
//       </section>
//       <section className="mb-16 md:mb-28">
//         <div className={styles.highlightsModule}>
//           <div className="container mx-auto px-4">
//             <div className="flex flex-col lg:flex-row gap-8">
//               <div className="lg:w-1/2">
//                 <div className="sticky top-24">
//                   <Image
//                     src="/img/Strategic-Planning.webp"
//                     alt="Designed to work together."
//                     className="w-full rounded-md  drop-shadow-accent-foreground hover:shadow-lg transition-shadow"
//                     width={768}
//                     height={800}
//                   />
//                 </div>
//               </div>

//               <div className="lg:w-5/12">
//                 <h3 className="text-3xl md:text-4xl font-bold mb-6">
//                   Designed to work together.
//                 </h3>
//                 <p className="mb-6">
//                   Our solutions are built to work together, so you can easily
//                   access insights across products — to deliver better customer
//                   experiences.
//                 </p>

//                 <div className="md:hidden mb-6">
//                   <Image
//                     src="/img/front-analytics_screen.jpg"
//                     alt="Designed to work together."
//                     className="w-full"
//                     width={1500}
//                     height={700}
//                   />
//                 </div>

//                 <ul className="space-y-8 mb-8">
//                   <li className="flex gap-4">
//                     <div>
//                       <h4 className="text-xl font-bold mb-2">
//                         Get a complete picture of your advertising.
//                       </h4>
//                       <p>
//                         Google Ads integrates with Analytics so you can easily
//                         see the full customer cycle, from how they interact with
//                         your marketing to how they finally complete the goals
//                         you've set for them on your site.
//                       </p>
//                     </div>
//                   </li>

//                   <li className="flex gap-4">
//                     <div>
//                       <h4 className="text-xl font-bold mb-2">
//                         Deliver more relevant advertising experiences.
//                       </h4>
//                       <p>
//                         Keep people engaged from their search to your site — and
//                         beyond. An Optimize and Google Ads integration makes it
//                         easy to test personalised landing pages to drive better
//                         results.
//                       </p>
//                     </div>
//                   </li>
//                 </ul>

//                 <a
//                   href="https://marketingplatform.google.com/home?openIntegrationCenter=true"
//                   className="text-primary hover:text-sky-700 font-medium"
//                   target="_blank"
//                   rel="nofollow noreferrer noopener"
//                 >
//                   Go to Integration Centre
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Enterprise Solutions Section - FIXED WITH PROPER STRUCTURE */}
//       <section className="mb-12 md:mb-20">
//         <div className={styles.whoopsTout}>
//           <div className={styles.whoopsToutBackground}>
//             <Image
//               src="/img/ai-generated.png"
//               alt=""
//               className="w-full h-[300px] md:h-[400px] object-cover object-center"
//               width={1500}
//               height={400}
//               style={{ objectPosition: 'center 20%' }}
//             />
//           </div>

//           <div className={styles.whoopsToutContent}>
//             <div className="container mx-auto px-4">
//               <div className="lg:w-3/4 lg:ml-16">
//                 <h3 className="text-3xl md:text-4xl font-bold mb-4">
//                   Looking for enterprise{' '}
//                   <span className="text-primary">solutions?</span>
//                 </h3>
//                 <p className="text-xl mb-6 font-medium ">
//                   Codeco.tech Platform offers enterprise-level solutions
//                   <span className="text-secondary ml-1 font-medium text-balance">
//                     for businesses{' '}
//                   </span>
//                   <span className="text-secondary  font-medium text-balance">
//                     who need real world App muscle.
//                   </span>
//                 </p>
//                 <Link
//                   href="/intl/en_uk/about/enterprise/"
//                   className="inline-block bg-primary hover:bg-sky-400 text-white font-medium py-3 px-6 rounded-full"
//                 >
//                   See solutions
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Products */}
//       <section className="mb-16 md:mb-32">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col lg:flex-row gap-8 items-center mb-12" />
//           <section className="mb-12 md:mb-20">
//             <div className={styles.colorBar}>
//               <div className="container mx-auto px-4">
//                 <div className="flex justify-center">
//                   <div className="lg:w-2/3 text-center">
//                     <div className={styles.colorBarIconBlack} />
//                     <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
//                       <span>
//                         Google Analytics helped us optimize our art marketplace,{' '}
//                       </span>
//                       <span className="text-primary">
//                         resulting in 400% year-over-year revenue growth
//                       </span>
//                       <span> for our art business.</span>
//                     </h3>
//                     <p className="text-lg">
//                       <span className="font-medium">Mariam Naficy</span>,
//                       Founder &amp; CEO, Minted
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </section>

//       <section className="mx-auto p-4 md:p-6 mb-12 md:mb-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <Link
//             href="/intl/en_uk/about/analytics/"
//             className="relative overflow-hidden bg-secondary rounded-lg p-6 drop-shadow-accent-foreground hover:shadow-lg transition-shadow"
//           >
//             {/* Grid background */}
//             <div className="absolute inset-0 z-0 pointer-events-none">
//               <div
//                 className="absolute inset-0 opacity-100"
//                 style={{
//                   backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
//                               linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
//                   backgroundSize: '30px 30px',
//                 }}
//               />
//             </div>

//             {/* Content */}
//             <div className="relative z-10">
//               <div className="mb-4 h-12" />
//               <h4 className="text-xl font-bold mb-2">Analytics</h4>
//               <p className="mb-4">
//                 Understand your customers so you can deliver better experiences.
//               </p>
//               <div className="text-primary">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   fill="currentColor"
//                   role="img"
//                   aria-label="open laptop"
//                 >
//                   <title>arrow</title>
//                   <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
//                 </svg>
//               </div>
//             </div>
//           </Link>

//           <Link
//             href="/intl/en_uk/about/tag-manager/"
//             className="relative overflow-hidden bg-secondary-foreground  rounded-lg p-6 drop-shadow-accent-foreground hover:shadow-lg transition-shadow"
//           >
//             {/* Grid background */}
//             <div className="absolute inset-0 z-0 pointer-events-none">
//               <div
//                 className="absolute inset-0 opacity-100"
//                 style={{
//                   backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
//                               linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
//                   backgroundSize: '30px 30px',
//                 }}
//               />
//             </div>

//             {/* Content */}
//             <div className="relative z-10">
//               <div className="mb-4 h-12 " />
//               <h4 className="text-xl font-bold text-neutral-50 mb-2">
//                 Tag Manager
//               </h4>
//               <p className="mb-4 text-neutral-50">
//                 Manage all your tags without editing code.
//               </p>
//               <div className="text-neutral-50">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   fill="currentColor"
//                   role="img"
//                   aria-label="Forward arrow icon"
//                 >
//                   <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
//                 </svg>
//               </div>
//             </div>
//           </Link>
//         </div>
//       </section>
//       {/* <section className="mx-auto p-4 md:p-6 mb-12 md:mb-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <Link
//             href="/intl/en_uk/about/analytics/"
//             className=" border-primary border-3 rounded-lg p-6 drop-shadow-accent-foreground hover:shadow-lg transition-shadow"
//           >
//             <div className="mb-4 h-12" />
//             <h4 className="text-xl font-bold mb-2">Analytics</h4>
//             <p className="mb-4">
//               Understand your customers so you can deliver better experiences.
//             </p>
//             <div className="text-primary">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 fill="currentColor"
//                 role="img"
//                 aria-label="open laptop"
//               >
//                 <title>open laptop</title>
//                 <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
//               </svg>
//             </div>
//           </Link>
//           <Link
//             href="/intl/en_uk/about/tag-manager/"
//             className=" border-primary border-3 rounded-lg p-6 drop-shadow-accent-foreground hover:shadow-lg transition-shadow"
//           >
//             <div className="mb-4 h-12" />
//             <h4 className="text-xl font-bold mb-2">Tag Manager</h4>
//             <p className="mb-4">Manage all your tags without editing code.</p>
//             <div className="text-primary">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 fill="currentColor"
//                 role="img"
//                 aria-label="Forward arrow icon"
//               >
//                 <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
//               </svg>
//             </div>
//           </Link>
//         </div>
//       </section> */}
//       <ContactWidget />
//     </main>
//   )
// }