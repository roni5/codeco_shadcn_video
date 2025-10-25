import Image from 'next/image'
import Link from 'next/link'
import styles from './homepagecss.module.css'

export default function HomePage() {
  return (
    <main className="bg-white w-full mx-auto">
      {/* Hero Section */}
      <section className="mb-12 md:mb-20 drop-shadow-accent-foreground">
        <div className={styles.heroLanding}>
          <div className={styles.heroLandingBackground}>
            <div className="w-full">
              <Image
                src="/img/marketingteam.jpg"
                alt="Easy-to-use tools for your business."
                className={styles.heroLandingImage}
                width={1500}
                height={600}
                priority
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
                  <samp className="text-sky-400 font-extrabold">Marketing</samp>{' '}
                  from site and app analytics to intuitive testing and more.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="mb-12 md:mb-20">
        <div className={styles.highlightsModule}>
          <div className="container mx-auto px-4 ">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2">
                <div className="sticky top-24">
                  <Image
                    src="/img/working-on-laptops.jpeg"
                    alt="Get better insights to drive your business."
                    className="w-full rounded-md drop-shadow-border"
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 45 45"
                        className="w-12 h-12"
                        role="img"
                        aria-label="zig zag up arrow icon"
                      >
                        <title>Rising arrow icon</title>
                        <circle cx="22.5" cy="22.5" r="22.5" fill="#1a73e8" />
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
                      <p>
                        Our free analytics and optimisation tools help you grow
                        your business with smarter marketing.
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 45 45"
                        className="w-12 h-12"
                        role="img"
                        aria-label="settings icon"
                      >
                        <title>settings icon</title>
                        <circle cx="22.5" cy="22.5" r="22.5" fill="#1a73e8" />
                        <path d="m10.5 10.5h24v24h-24z" fill="none" />
                        <path
                          d="m33.2 29.5-9.1-9.1a6.42 6.42 0 0 0-1.5-6.9 6.61 6.61 0 0 0-7.4-1.3l4.3 4.3-3 3-4.4-4.3a6.54 6.54 0 0 0 8.2 8.9l9.1 9.1a1 1 0 0 0 1.4 0l2.3-2.3a.9.9 0 0 0 .1-1.4z"
                          fill="#fff"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        Easy-to-use tools.
                      </h4>
                      <p>
                        Simple tools with powerful insights enable you to spend
                        less time analysing data and more time delighting
                        customers.
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div className="flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 45 45"
                        className="w-12 h-12"
                        role="img"
                        aria-label="checklist icon"
                      >
                        <title>checklist icon</title>
                        <circle cx="22.5" cy="22.5" r="22.5" fill="#1a73e8" />
                        <path
                          d="m25 20h-16v2.67h16zm0-5.34h-16v2.67h16zm-16 13.34h10.68v-2.66h-10.68zm26-6 2 2-9.3 9.35-6-6 2-2 4 4z"
                          fill="#fff"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        Big results for smaller budgets.
                      </h4>
                      <p>
                        Access free and self-service solutions that take your
                        marketing to new heights at little to no cost to your
                        business.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="mb-12 md:mb-20">
        <div className={styles.colorBar}>
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <div className="lg:w-2/3 text-center">
                <div className={styles.colorBarIconGreen} />
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  <span>
                    Google Analytics helped us optimize our art marketplace,{' '}
                  </span>
                  <span className={styles.colorBarHighlightGreen}>
                    resulting in 400% year-over-year revenue growth
                  </span>
                  <span> for our art business.</span>
                </h3>
                <p className="text-lg">
                  <span className="font-medium">Mariam Naficy</span>, Founder
                  &amp; CEO, Minted
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    className="w-12 h-12"
                    role="img"
                    aria-label="google analytics icon"
                  >
                    <title>google analytics icon</title>
                    <path
                      fill="#fbbc04"
                      d="M45.26,41.65a5.85,5.85,0,0,1-6.54,5.84,6,6,0,0,1-5.12-6.08V6.59A6,6,0,0,1,38.73.51a5.85,5.85,0,0,1,6.53,5.84Z"
                    />
                    <path
                      fill="#fbbc04"
                      d="M8.57,35.88a5.83,5.83,0,1,1-5.83,5.83A5.83,5.83,0,0,1,8.57,35.88ZM23.91,18.21a6,6,0,0,0-5.67,6.13V40c0,4.25,1.87,6.83,4.61,7.38a5.84,5.84,0,0,0,7-5.74V24.07A5.85,5.85,0,0,0,23.91,18.21Z"
                    />
                  </svg>
                  <h4 className="text-2xl font-bold">Analytics</h4>
                </div>
                <p className="text-lg mb-6">
                  Understand your customers so you can deliver better
                  experiences.
                </p>
                <Link
                  href="/intl/en_uk/about/analytics/"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
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
            <Link
              href="/intl/en_uk/about/analytics/"
              className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 h-12" />
              <h4 className="text-xl font-bold mb-2">Analytics</h4>
              <p className="mb-4">
                Understand your customers so you can deliver better experiences.
              </p>
              <div className="text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  role="img"
                  aria-label="open laptop"
                >
                  <title>open laptop</title>
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
              </div>
            </Link>

            <Link
              href="/intl/en_uk/about/tag-manager/"
              className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 h-12" />
              <h4 className="text-xl font-bold mb-2">Tag Manager</h4>
              <p className="mb-4">Manage all your tags without editing code.</p>
              <div className="text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  role="img"
                  aria-label="Forward arrow icon"
                >
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="mb-12 md:mb-20">
        <div className={styles.highlightsModule}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2">
                <div className="sticky top-24">
                  <Image
                    src="/img/home_front_ipad.jpg"
                    alt="Designed to work together."
                    className="w-full"
                    width={768}
                    height={500}
                  />
                </div>
              </div>

              <div className="lg:w-5/12">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Designed to work together.
                </h3>
                <p className="mb-6">
                  Our solutions are built to work together, so you can easily
                  access insights across products — to deliver better customer
                  experiences.
                </p>

                <div className="md:hidden mb-6">
                  <Image
                    src="/img/front-analytics_screen.jpg"
                    alt="Designed to work together."
                    className="w-full"
                    width={1500}
                    height={700}
                  />
                </div>

                <ul className="space-y-8 mb-8">
                  <li className="flex gap-4">
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        Get a complete picture of your advertising.
                      </h4>
                      <p>
                        Google Ads integrates with Analytics so you can easily
                        see the full customer cycle, from how they interact with
                        your marketing to how they finally complete the goals
                        you've set for them on your site.
                      </p>
                    </div>
                  </li>

                  <li className="flex gap-4">
                    <div>
                      <h4 className="text-xl font-bold mb-2">
                        Deliver more relevant advertising experiences.
                      </h4>
                      <p>
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
                  className="text-blue-600 hover:text-blue-800 font-medium"
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                >
                  Go to Integration Centre
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Ads Section */}
      <section className="mb-12 md:mb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <Image
                src="/img/home_side_cards.jpg"
                alt="Grow with Google Ads."
                className="w-full"
                width={1500}
                height={800}
              />
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Grow with Google Ads.
              </h3>
              <p className="mb-6">
                Reach more of your customers across Google Search, Maps, YouTube
                and beyond.
              </p>
              <a
                href="https://ads.google.com/home/"
                className="text-blue-600 hover:text-blue-800 font-medium"
                target="_blank"
                rel="nofollow noreferrer noopener"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Solutions Section */}
      <section className="mb-12 md:mb-20">
        <div className={styles.whoopsTout}>
          <div className="relative w-full h-[550px] overflow-hidden">
            <Image
              src="/img/ai-generated.png"
              alt="Marketing Platform"
              className="w-full object-cover"
              width={1500}
              height={600}
            />
          </div>

          <div className={styles.whoopsToutContent}>
            <div className="container mx-auto mt-68 px-4">
              <div className="lg:w-3/4 lg:ml-16">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Looking for enterprise{' '}
                  <span className="text-blue-400">solutions?</span>
                </h3>
                <p className="text-xl mb-6">
                  Codeco.tech Platform offers enterprise-level solutions for{' '}
                  <span className="text-blue-300 font-medium text-balance">
                    businesses{' '}
                  </span>
                  <span className="text-blue-300 font-medium text-balance">
                    who need real world App muscle.
                  </span>
                </p>
                <Link
                  href="/intl/en_uk/about/enterprise/"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full"
                >
                  See solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// import React from 'react'

// export default function Homepage() {
//   return (
//     <>
//       <div>
//         <main className="gmp-page gmp-page--no-newsletter">
//           <section className="gmp-section gmp-mb-l">
//             <div className="hero-landing">

//               <div className="hero-landing__background">
//                 <div className="gmp-banner">
//                   <picture>
//                     <source media="(max-width: 640px)" srcset="https://lh3.googleusercontent.com/JESB7COPFdHEpebvN-yBkrzRrmVREV6zkxQ8KcbG5I7ZPoQQaSZXeH8AlpHg1ZQk6ORLlHQLz3ZrgAmCA8c71diut-8UZr_NEZ8SAg=s480 1x, https://lh3.googleusercontent.com/PINWZH4G-MZbuT9R8CaJO2VetP5hCLzXozVrtWKlNz9V2gUUCn19sB8e671HzmLoh5AWE_IYE1zv0l5BYt9BYC8T94O-fY04Fl0lZAc=s960 2x">
//                       <source media="(min-width: 641px)" srcset="https://lh3.googleusercontent.com/8zOqIwsUFFRkcj9C3dekSTRmfikHShNiQf_0BtA5zB2Xz8rvjen1_caXT3LfTsqKJlfWUrKaLi1BwEqKSHmWZo7Vz0MeE6xGIe9Rrg=s1500 1x, https://lh3.googleusercontent.com/96XYDla7eZNv8k87Ves9r07DrfEnbQAchiuc3FNYdLwMfdWcxsXI3LgtKO67zg27-b3hozkowqQ9AVNrzFbZitt_9_fZHgYKaSC8NJ0=s3000 2x">
//                         <img src="https://lh3.googleusercontent.com/8zOqIwsUFFRkcj9C3dekSTRmfikHShNiQf_0BtA5zB2Xz8rvjen1_caXT3LfTsqKJlfWUrKaLi1BwEqKSHmWZo7Vz0MeE6xGIe9Rrg=s1500" alt="Easy-to-use tools for your business." className="gmp-no-grab hero-landing__image">
//                         </picture>
//                       </div>

//                     </div>

//                     <div className="hero-landing__content">
//                       <div className="h-c-page">
//                         <div className="h-c-grid">
//                           <div className="h-c-grid__col h-c-grid__col--12 h-c-grid__col--align-middle">

//                             <h1 className="h-c-headline h-c-headline--display-two h-has-bottom-margin">
//                               Easy-to-use tools for your business.
//                             </h1>
//                             <h2 className="h-c-headline h-c-headline--four">Get free tools to make the most of your marketing, from site and app analytics to intuitive testing and more.</h2>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                 </div>  </section>

//               <section className="gmp-section gmp-mb-l">
//                 <div className="highlights-module">
//                   <div className="h-c-page">

//                     <div className="h-c-grid highlights-module__sticky-wrapper">

//                       <div className="h-c-grid__col h-c-grid__col-l--6">
//                         <div className="highlights-module__sticky-el">
//                           <img alt="Get better insights to drive your business." srcset="https://lh3.googleusercontent.com/rFBWdqhCetZAUm3ZKZHNz5JmvbhVolaSEE5l-Nyxd7dI2xKygB20bWGrqinNjLVLZWcZvMPejw4kKsgwLiG1yipcr0DijThfuHMt=s768 1x, https://lh3.googleusercontent.com/-eThtCTLoTFM2CWgehqlpEzYvjdhxu4nfh3Wqofd6H6nFc6e5qgc_KzZroOSG8iVJYlS6s8lyh-Q-7YkQHsTZDH77ZD8MRR_Pznn8w=s1536 2x" src="https://lh3.googleusercontent.com/rFBWdqhCetZAUm3ZKZHNz5JmvbhVolaSEE5l-Nyxd7dI2xKygB20bWGrqinNjLVLZWcZvMPejw4kKsgwLiG1yipcr0DijThfuHMt=s768" className="gmp-no-grab highlights-module__image-desktop">

//                         </div>
//                       </div>

//                       <div className="h-c-grid__col h-c-grid__col-l--5 highlights-module__content">
//                         <h3 className="h-c-headline h-c-headline--one h-has-bottom-margin">Get better insights to drive your business.</h3>
//                         <p></p>
//                         <picture>
//                           <source media="(max-width: 767px)" srcset="https://lh3.googleusercontent.com/0iGDse87c0gRkou0nOENZS9jRg-UVhVA-w7IT73SRoC65heM38uVIRYcwn-2pmvMpD8IYE636X3Vz4iWhsVC8HL70NY1TzhLwo6O1w=s480 1x, https://lh3.googleusercontent.com/eYlJXI0xXTqx7mEodHk2RQSTIwSgv7YznoGGlRLgDqVQ0MV-DpyXbVuf7fdb71YRU081HdnZNb5_A4_3cVhxFah45FFADE5hJ7CFAg=s960 2x">
//                             <source media="(min-width: 768px)" srcset="https://lh3.googleusercontent.com/rFBWdqhCetZAUm3ZKZHNz5JmvbhVolaSEE5l-Nyxd7dI2xKygB20bWGrqinNjLVLZWcZvMPejw4kKsgwLiG1yipcr0DijThfuHMt=s1500 1x, https://lh3.googleusercontent.com/-eThtCTLoTFM2CWgehqlpEzYvjdhxu4nfh3Wqofd6H6nFc6e5qgc_KzZroOSG8iVJYlS6s8lyh-Q-7YkQHsTZDH77ZD8MRR_Pznn8w=s3000 2x">
//                               <img src="https://lh3.googleusercontent.com/rFBWdqhCetZAUm3ZKZHNz5JmvbhVolaSEE5l-Nyxd7dI2xKygB20bWGrqinNjLVLZWcZvMPejw4kKsgwLiG1yipcr0DijThfuHMt=s1500" alt="Get better insights to drive your business." className="gmp-no-grab highlights-module__image-mobile">
//                               </picture>

//                               <div className="highlights-module__listing">
//                                 <ul className="highlights-module__highlights">
//                                   <li className="highlights-module__highlight">
//                                     <picture>
//                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45"  role="img" aria-label="rising-rate icon" className="gmp-circle-icon gmp-circle-icon--blue highlights-module__icon">
//                                         <title>rising-rate icon</title>
//                                         <circle className="gmp-icon--accent" cx="22.5" cy="22.5" r="22.5"></circle>
//                                         <path d="m27.6 14.8 2.9 2.9-6.2 6.3-5.1-5.1-9.5 9.5 1.8 1.8 7.7-7.7 5.1 5.1 8.1-8.1 2.9 2.9v-7.7h-7.7z" fill="#fff"></path>
//                                       </svg>
//                                     </picture>
//                                     <h4 className="h-c-headline h-c-headline--four h-has-bottom-margin">
//                                       Grow your business with solutions for all of your needs.
//                                     </h4>
//                                     <p>Our free analytics and optimisation tools help you grow your business with smarter marketing.</p>
//                                   </li>
//                                   <li className="highlights-module__highlight">
//                                     <picture>
//                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" alt="" role="img" aria-label="wrench icon" className="gmp-circle-icon gmp-circle-icon--blue highlights-module__icon">
//                                         <title>wrench icon</title>
//                                         <circle className="gmp-icon--accent" cx="22.5" cy="22.5" r="22.5"></circle>
//                                         <path d="m10.5 10.5h24v24h-24z" fill="none"></path><path d="m33.2 29.5-9.1-9.1a6.42 6.42 0 0 0 -1.5-6.9 6.61 6.61 0 0 0 -7.4-1.3l4.3 4.3-3 3-4.4-4.3a6.54 6.54 0 0 0 8.2 8.9l9.1 9.1a1 1 0 0 0 1.4 0l2.3-2.3a.9.9 0 0 0 .1-1.4z" fill="#fff"></path>
//                                       </svg>
//                                     </picture>
//                                     <h4 className="h-c-headline h-c-headline--four h-has-bottom-margin">
//                                       Easy-to-use tools.
//                                     </h4>
//                                     <p>Simple tools with powerful insights enable you to spend less time analysing data and more time delighting customers.</p>
//                                   </li>
//                                   <li className="highlights-module__highlight">
//                                     <picture>
//                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" alt="" role="img" aria-label="checklist icon" className="gmp-circle-icon gmp-circle-icon--blue highlights-module__icon">
//                                         <title>checklist icon</title>
//                                         <circle className="gmp-icon--accent" cx="22.5" cy="22.5" r="22.5"></circle>
//                                         <path d="m25 20h-16v2.67h16zm0-5.34h-16v2.67h16zm-16 13.34h10.68v-2.66h-10.68zm26-6 2 2-9.3 9.35-6-6 2-2 4 4z" fill="#fff"></path>
//                                       </svg>
//                                     </picture>
//                                     <h4 className="h-c-headline h-c-headline--four h-has-bottom-margin">
//                                       Big results for smaller budgets.
//                                     </h4>
//                                     <p>Access free and self-service solutions that take your marketing to new heights at little to no cost to your business.</p>
//                                   </li>
//                                 </ul>

//                               </div>
//                             </div>    </div>
//                           <div className="highlights-module__carousel highlights-module__carousel--horizontal">
//                             <div data-ng-mouseover="PaginationCtrl.stopTimer()" data-ng-mouseleave="PaginationCtrl.startTimer()" ng-transclude="" className="glue-pagination h-c-carousel h-c-carousel--simple ng-isolate-scope glue-o-pagination">
//                               <div className="h-c-carousel__wrap ng-scope">

//                                 <ul className="glue-carousel" data-glue-carousel="" data-glue-pagination="demo-cyclical" data-glue-carousel-breakpoints="['x-small','small']" style={{ "width": "auto", "transform": "none" }}>
//                                   <li className="h-c-carousel__item">
//                                     <picture>
//                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" alt="" role="img" aria-label="rising-rate icon" className="gmp-circle-icon gmp-circle-icon--blue highlights-module__icon">
//                                         <title>rising-rate icon</title>
//                                         <circle className="gmp-icon--accent" cx="22.5" cy="22.5" r="22.5"></circle>
//                                         <path d="m27.6 14.8 2.9 2.9-6.2 6.3-5.1-5.1-9.5 9.5 1.8 1.8 7.7-7.7 5.1 5.1 8.1-8.1 2.9 2.9v-7.7h-7.7z" fill="#fff"></path>
//                                       </svg>
//                                     </picture>
//                                     <h4 className="h-c-headline h-c-headline--four highlights-module__subhead">Grow your business with solutions for all of your needs.</h4>
//                                     <div className="highlights-module__description"><p>Our free analytics and optimisation tools help you grow your business with smarter marketing.</p></div>
//                                   </li>
//                                   <li className="h-c-carousel__item">
//                                     <picture>
//                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" alt="" role="img" aria-label="wrench icon" className="gmp-circle-icon gmp-circle-icon--blue highlights-module__icon">
//                                         <title>wrench icon</title>
//                                         <circle className="gmp-icon--accent" cx="22.5" cy="22.5" r="22.5"></circle>
//                                         <path d="m10.5 10.5h24v24h-24z" fill="none"></path><path d="m33.2 29.5-9.1-9.1a6.42 6.42 0 0 0 -1.5-6.9 6.61 6.61 0 0 0 -7.4-1.3l4.3 4.3-3 3-4.4-4.3a6.54 6.54 0 0 0 8.2 8.9l9.1 9.1a1 1 0 0 0 1.4 0l2.3-2.3a.9.9 0 0 0 .1-1.4z" fill="#fff"></path>
//                                       </svg>
//                                     </picture>
//                                     <h4 className="h-c-headline h-c-headline--four highlights-module__subhead">Easy-to-use tools.</h4>
//                                     <div className="highlights-module__description"><p>Simple tools with powerful insights enable you to spend less time analysing data and more time delighting customers.</p></div>
//                                   </li>
//                                   <li className="h-c-carousel__item">
//                                     <picture>
//                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" alt="" role="img" aria-label="checklist icon" className="gmp-circle-icon gmp-circle-icon--blue highlights-module__icon">
//                                         <title>checklist icon</title>
//                                         <circle className="gmp-icon--accent" cx="22.5" cy="22.5" r="22.5"></circle>
//                                         <path d="m25 20h-16v2.67h16zm0-5.34h-16v2.67h16zm-16 13.34h10.68v-2.66h-10.68zm26-6 2 2-9.3 9.35-6-6 2-2 4 4z" fill="#fff"></path>
//                                       </svg>
//                                     </picture>
//                                     <h4 className="h-c-headline h-c-headline--four highlights-module__subhead">Big results for smaller budgets.</h4>
//                                     <div className="highlights-module__description"><p>Access free and self-service solutions that take your marketing to new heights at little to no cost to your business.</p></div>
//                                   </li>
//                                 </ul>

//                               </div>

//                               <div className="h-c-carousel__navigation ng-scope">
//                                 <ul role="tablist" className="glue-pagination-page-list ng-isolate-scope glue-o-pagination__page-list" data-glue-pagination="demo-cyclical">  {/* ngRepeat: i in PageListCtrl.pageCollection */}<li ng-repeat="i in PageListCtrl.pageCollection" data-page="1" className="glue-o-pagination__button-container glue-o-pagination__page-list-button-container ng-scope active" ng-className="{active: i == PageListCtrl.model.currentPage}" ng-show="PageListCtrl.activePageCollection[i - 1]" style={{}}>    {/* ngIf: PageListCtrl.getAriaControlId(i) */}    {/* ngIf: !PageListCtrl.getAriaControlId(i) */}<button type="button" role="tab" className="glue-o-pagination__button glue-o-pagination__page-list-button ng-binding ng-scope" aria-selected="true" aria-label="" data-page="1" data-ng-focus="PageListCtrl.onFocus()" data-ng-blur="PageListCtrl.onBlur($event)" data-ng-click="PageListCtrl.setPage(i, $event)" data-ng-if="!PageListCtrl.getAriaControlId(i)">      1</button>{/* end ngIf: !PageListCtrl.getAriaControlId(i) */}  </li>{/* end ngRepeat: i in PageListCtrl.pageCollection */}</ul>
//                               </div>
//                             </div>

//                           </div>

//                       </div></div>  </section>

//                   <section className="gmp-section gmp-mb-l">

//                     <div className="color-bar">

//                       <div className="h-c-page">
//                         <div className="h-c-grid">
//                           <div className="h-c-grid__col h-c-grid__col-l--8 h-c-grid__col-l--offset-2 h-c-grid__col--align-middle">

//                             <div className="color-bar__icon color-bar__icon--green "></div>
//                             <h3 className="h-c-headline h-c-headline--two color-bar__quote">
//                               <span>Google Analytics helped us optimize our art marketplace, </span>
//                               <span className="color-bar__highlight color-bar__highlight--green">resulting in 400% year-over-year revenue growth</span><span> for our art business.</span>        </h3>
//                             <p className="color-bar__credit">
//                               <span className="color-bar__author">Mariam Naficy</span>,
//                               Founder &amp; CEO,
//                               Minted
//                             </p>

//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                   </section>

//                   <section className="gmp-section gmp-mb-xl">
//                     <div className="gmp-section-header">
//                       <div className="h-c-page">
//                         <div className="h-c-grid">
//                           <div className="h-c-grid__col">
//                             <h3 className="h-c-headline h-c-headline--one gmp-section-header--center">Marketing solutions for every business.</h3>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="h-c-page">
//                       <div className="product-tout ">
//                         <div className="product-tout__content">
//                           <div className="product-tout__icon">
//                             <picture>
//                               <svg id="analytics_icon_svg" data-name="analytics_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" role="img" aria-label="analytics icon" className="gmp-product-icon gmp-product-icon--fixed">
//                                 <title>GMP_Logo_analytics</title>
//                                 <path className="yellow-1" d="M45.26,41.65a5.85,5.85,0,0,1-6.54,5.84,6,6,0,0,1-5.12-6.08V6.59A6,6,0,0,1,38.73.51a5.85,5.85,0,0,1,6.53,5.84Z"></path><path className="yellow-2" d="M8.57,35.88a5.83,5.83,0,1,1-5.83,5.83A5.83,5.83,0,0,1,8.57,35.88ZM23.91,18.21a6,6,0,0,0-5.67,6.13V40c0,4.25,1.87,6.83,4.61,7.38a5.84,5.84,0,0,0,7-5.74V24.07A5.85,5.85,0,0,0,23.91,18.21Z"></path>
//                               </svg>
//                             </picture>
//                           </div>

//                           <div className="product-tout__copy">
//                             <h4 className="h-c-headline product-tout__headline">Analytics</h4>
//                             <p className="h-c-headline h-c-headline--four">Understand your customers so you can deliver better experiences.</p>
//                           </div>

//                           <div className="product-tout__link">
//                             <a data-g-event="for small businesses" data-g-action="featured product: analytics: learn more" data-g-label="product tiles" href="/intl/en_uk/about/analytics/" title="Learn more about Analytics" className="h-c-link h-c-link--internal gmp-link">Learn more about Analytics</a>
//                           </div>
//                         </div>
//                         <div className="product-tout__image">
//                           <img alt="Analytics" srcset="https://lh3.googleusercontent.com/P0zGOnLIkesNhAomXQoi0ooTOS-06v1tWItb1mkgPig3r7GDwCR4Abxi7lVLnUJoLySTGDnYXjudUE1GH2IYP5Sk-RocsoUFSmc6bg=s768 1x, https://lh3.googleusercontent.com/FtztRtcgXsXBJ-l5Zg1DXstl0SHgoU05cvezp1p-UzIuAtD11iUPF5-w9EaASyICc49-LO6cpt4HbpH3Maj-fJpETHKPri44PsNJl5I=s1536 2x" src="https://lh3.googleusercontent.com/P0zGOnLIkesNhAomXQoi0ooTOS-06v1tWItb1mkgPig3r7GDwCR4Abxi7lVLnUJoLySTGDnYXjudUE1GH2IYP5Sk-RocsoUFSmc6bg=s768" className="gmp-no-grab ">

//                         </div>
//                       </div>
//                     </div>

//                     <div className="product-card-grid">
//                       <div className="h-c-page">
//                         <div data-ng-mouseover="PaginationCtrl.stopTimer()" data-ng-mouseleave="PaginationCtrl.startTimer()" ng-transclude="" className="glue-pagination h-c-carousel h-c-carousel--tile h-c-carousel--tile-small-only h-u-mt-std ng-isolate-scope glue-o-pagination">

//                           <div className="h-c-carousel__wrap ng-scope">

//                             <ul className="glue-carousel" data-glue-carousel="" data-glue-pagination="carousel-tile" data-glue-carousel-breakpoints="['x-small']" style={{ "width": "auto", "transform": "none" }}>
//                               <li className="h-c-carousel__item product-card product-card--hide-for-large">

//                                 <a data-g-event="for small businesses" data-g-action="product tile: analytics" data-g-label="product tiles" className="h-c-tile h-c-tile--border h-c-tile--hoverable h-c-tile--small-height" href="/intl/en_uk/about/analytics/">
//                                   <div className="h-c-tile__header h-c-tile__header--icon product-card__header">
//                                     <picture>
//                                       <svg id="analytics_icon_svg" data-name="analytics_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" role="img" aria-label="analytics icon" className="gmp-product-icon gmp-product-icon--fixed">
//                                         <title>GMP_Logo_analytics</title>
//                                         <path className="yellow-1" d="M45.26,41.65a5.85,5.85,0,0,1-6.54,5.84,6,6,0,0,1-5.12-6.08V6.59A6,6,0,0,1,38.73.51a5.85,5.85,0,0,1,6.53,5.84Z"></path><path className="yellow-2" d="M8.57,35.88a5.83,5.83,0,1,1-5.83,5.83A5.83,5.83,0,0,1,8.57,35.88ZM23.91,18.21a6,6,0,0,0-5.67,6.13V40c0,4.25,1.87,6.83,4.61,7.38a5.84,5.84,0,0,0,7-5.74V24.07A5.85,5.85,0,0,0,23.91,18.21Z"></path>
//                                       </svg>
//                                     </picture>
//                                   </div>
//                                   <div className="h-c-tile__body">
//                                     <h4 className="h-c-tile__headline product-card__headline">Analytics</h4>
//                                     <p className="h-c-tile__description">Understand your customers so you can deliver better experiences.</p>
//                                     <ul className="h-c-tile__links">
//                                       <li className="h-c-tile__link">
//                                         <svg alt="" role="img" className="h-c-tile__link h-c-tile__link--arrow">
//                                           <use xlink:href="#mi-arrow-forward-no-bg"></use>
//                                         </svg>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </a>

//                               </li>
//                               <li className="h-c-carousel__item product-card">

//                                 <a data-g-event="for small businesses" data-g-action="product tile: tag manager" data-g-label="product tiles" className="h-c-tile h-c-tile--border h-c-tile--hoverable h-c-tile--small-height" href="/intl/en_uk/about/tag-manager/">
//                                   <div className="h-c-tile__header h-c-tile__header--icon product-card__header">
//                                     <picture>
//                                       <svg id="tag-manager_icon_svg" data-name="tag-manager_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" alt="" role="img" aria-label="tag-manager icon" className="gmp-product-icon gmp-product-icon--fixed">
//                                         <title>GMP_Logo_tag-manager</title>
//                                         <polygon className="blue-11" points="28.1 45.74 19.93 37.56 37.48 19.83 45.8 28.15 28.1 45.74"></polygon><path className="blue-12" d="M28.16,10.51,19.84,2.19,2.2,19.83a5.88,5.88,0,0,0,0,8.32L19.84,45.79,28,37.59,14.67,24Z"></path><path className="blue-11" d="M45.8,19.83,28.16,2.19a5.88,5.88,0,0,0-8.32,8.32L37.49,28.15a5.88,5.88,0,0,0,8.32-8.32Z"></path><circle className="blue-13" cx="23.94" cy="41.7" r="5.83" transform="translate(-22.48 29.14) rotate(-45)"></circle>
//                                       </svg>
//                                     </picture>
//                                   </div>
//                                   <div className="h-c-tile__body">
//                                     <h4 className="h-c-tile__headline product-card__headline">Tag Manager</h4>
//                                     <p className="h-c-tile__description">Manage all your tags without editing code.</p>
//                                     <ul className="h-c-tile__links">
//                                       <li className="h-c-tile__link">
//                                         <svg alt="" role="img" className="h-c-tile__link h-c-tile__link--arrow">
//                                           <use xlink:href="#mi-arrow-forward-no-bg"></use>
//                                         </svg>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </a>

//                               </li>
//                             </ul>

//                             <div className="h-c-carousel__paginate glue-pagination-previous ng-isolate-scope glue-o-pagination__button-container"><button type="button" className="glue-o-pagination__button" ng-transclude="" ng-click="previous()" ng-disabled="!hasPrevious()" aria-label="" disabled="disabled">
//                               <button type="button" className="glue-o-pagination__button ng-scope" data-glue-pagination-previous="" data-glue-pagination="carousel-tile" data-glue-pagination-update-model="false">
//                                 <div className="h-c-carousel__paginate-wrap">
//                                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="h-c-icon h-c-icon--keyboard-arrow-left" alt="">
//                                     <use xlink:href="#mi-keyboard-arrow-right"></use>
//                                   </svg>
//                                 </div>
//                               </button>
//                             </button></div>

//                             <div className="h-c-carousel__paginate glue-pagination-next ng-isolate-scope glue-o-pagination__button-container"><button type="button" className="glue-o-pagination__button" ng-transclude="" ng-click="next()" ng-disabled="!hasNext()" aria-label="" disabled="disabled">
//                               <button type="button" className="glue-o-pagination__button ng-scope" data-glue-pagination-next="" data-glue-pagination="carousel-tile" data-glue-pagination-update-model="false">
//                                 <div className="h-c-carousel__paginate-wrap">
//                                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="h-c-icon h-c-icon--keyboard-arrow-right" alt="">
//                                     <use xlink:href="#mi-keyboard-arrow-right"></use>
//                                   </svg>
//                                 </div>
//                               </button>
//                             </button></div>

//                           </div>

//                           <div className="h-c-carousel__navigation product-card-grid__navigation ng-scope">
//                             <ul role="tablist" className="glue-pagination-page-list ng-isolate-scope glue-o-pagination__page-list" data-glue-pagination="carousel-tile">  {/* ngRepeat: i in PageListCtrl.pageCollection */}<li ng-repeat="i in PageListCtrl.pageCollection" data-page="1" className="glue-o-pagination__button-container glue-o-pagination__page-list-button-container ng-scope active" ng-className="{active: i == PageListCtrl.model.currentPage}" ng-show="PageListCtrl.activePageCollection[i - 1]" style={{}}>    {/* ngIf: PageListCtrl.getAriaControlId(i) */}    {/* ngIf: !PageListCtrl.getAriaControlId(i) */}<button type="button" role="tab" className="glue-o-pagination__button glue-o-pagination__page-list-button ng-binding ng-scope" aria-selected="true" aria-label="" data-page="1" data-ng-focus="PageListCtrl.onFocus()" data-ng-blur="PageListCtrl.onBlur($event)" data-ng-click="PageListCtrl.setPage(i, $event)" data-ng-if="!PageListCtrl.getAriaControlId(i)">      1</button>{/* end ngIf: !PageListCtrl.getAriaControlId(i) */}  </li>{/* end ngRepeat: i in PageListCtrl.pageCollection */}</ul>
//                           </div>

//                         </div>
//                       </div>
//                     </div>  </section>

//                   <section className="gmp-section gmp-mb-l">
//                     <div className="highlights-module">
//                       <div className="h-c-page">

//                         <div className="h-c-grid highlights-module__sticky-wrapper">

//                           <div className="h-c-grid__col h-c-grid__col-l--6">
//                             <div className="highlights-module__sticky-el">
//                               <img alt="Designed to work together." srcset="https://lh3.googleusercontent.com/WmJx3VUrVlgZp9wB5DThEG5HtyAAhrOHcyk6RWdCjqgmxr-lzAJzDJlRlTNu2eopqAm2m5TIUx2hCqJiWs1-lS1HjSbpwReYXVaG5w=s768 1x, https://lh3.googleusercontent.com/MU0yboXPPEQFdPnay_NY5WG5b0NZYgKq22u9FBUOWa5Ll1TpRRTXMAnCluTzo_I6vSjxj_F_-SQAZk0HCOXwJhnzM1dd9s0wC5huzg=s1536 2x" src="https://lh3.googleusercontent.com/WmJx3VUrVlgZp9wB5DThEG5HtyAAhrOHcyk6RWdCjqgmxr-lzAJzDJlRlTNu2eopqAm2m5TIUx2hCqJiWs1-lS1HjSbpwReYXVaG5w=s768" className="gmp-no-grab highlights-module__image-desktop">

//                             </div>
//                           </div>

//                           <div className="h-c-grid__col h-c-grid__col-l--5 highlights-module__content">
//                             <h3 className="h-c-headline h-c-headline--one h-has-bottom-margin">Designed to work together.</h3>
//                             <p>Our solutions are built to work together, so you can easily access insights across products — to deliver better customer experiences.</p>
//                             <picture>
//                               <source media="(max-width: 767px)" srcset="https://lh3.googleusercontent.com/mgDnayQGQKjxr17zp0VpPB_MLe1lJ7v7qfVHn1nXkHTRvi4tqU5-T8tkf28uyWFNVgsNvclgKov7ydlpPV2R2HOqX20JbNVL0mu-rg=s480 1x, https://lh3.googleusercontent.com/4LmGYDd_ZOIZeOvNE759TyMM3XlmcZy7BcYjcj3igWgTBgwmxKgbJeLuJnwCejd2CGwvISrYjscIUuMMtC6Y1jEGYRdBIeYSETeG=s960 2x">
//                                 <source media="(min-width: 768px)" srcset="https://lh3.googleusercontent.com/WmJx3VUrVlgZp9wB5DThEG5HtyAAhrOHcyk6RWdCjqgmxr-lzAJzDJlRlTNu2eopqAm2m5TIUx2hCqJiWs1-lS1HjSbpwReYXVaG5w=s1500 1x, https://lh3.googleusercontent.com/MU0yboXPPEQFdPnay_NY5WG5b0NZYgKq22u9FBUOWa5Ll1TpRRTXMAnCluTzo_I6vSjxj_F_-SQAZk0HCOXwJhnzM1dd9s0wC5huzg=s3000 2x">
//                                   <img src="https://lh3.googleusercontent.com/WmJx3VUrVlgZp9wB5DThEG5HtyAAhrOHcyk6RWdCjqgmxr-lzAJzDJlRlTNu2eopqAm2m5TIUx2hCqJiWs1-lS1HjSbpwReYXVaG5w=s1500" alt="Designed to work together." className="gmp-no-grab highlights-module__image-mobile">
//                                   </picture>

//                                   <div className="highlights-module__listing">
//                                     <ul className="highlights-module__highlights">
//                                       <li className="highlights-module__highlight">
//                                         <picture>
//                                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" alt="" role="img" aria-label="target icon" className="gmp-circle-icon gmp-circle-icon--green highlights-module__icon">
//                                             <title>target icon</title>
//                                             <circle className="gmp-icon--accent" cx="22.5" cy="22.5" r="22.5"></circle>
//                                             <path d="m22.61 25.29a2.79 2.79 0 1 1 2.79-2.79 2.79 2.79 0 0 1 -2.79 2.79zm0 2.79a5.57 5.57 0 1 0 -5.61-5.58 5.57 5.57 0 0 0 5.61 5.57zm0 2.79a8.36 8.36 0 1 1 8.39-8.37 8.36 8.36 0 0 1 -8.39 8.36zm0 2.79a11.14 11.14 0 1 0 -11.15-11.16 11.14 11.14 0 0 0 11.15 11.14zm0 2.79a13.93 13.93 0 1 1 13.93-13.95 13.93 13.93 0 0 1 -13.93 13.93z" fill="#fff"></path>
//                                           </svg>
//                                         </picture>
//                                         <h4 className="h-c-headline h-c-headline--four h-has-bottom-margin">
//                                           Get a complete picture of your advertising.
//                                         </h4>
//                                         <p>Google Ads integrates with Analytics so you can easily see the full customer cycle, from how they interact with your marketing to how they finally complete the goals you’ve set for them on your site.</p>
//                                       </li>
//                                       <li className="highlights-module__highlight">
//                                         <picture>
//                                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" alt="" role="img" aria-label="bulb icon" className="gmp-circle-icon gmp-circle-icon--green highlights-module__icon">
//                                             <title>bulb icon</title>
//                                             <circle className="gmp-icon--accent" cx="22.5" cy="22.5" r="22.5"></circle>
//                                             <path d="m18.74 33a1.26 1.26 0 0 0 1.26 1.21h5a1.26 1.26 0 0 0 1.26-1.21v-1.29h-7.52zm3.76-23.84a8.71 8.71 0 0 0 -8.77 8.77 8.55 8.55 0 0 0 3.76 7.14v2.93a1.26 1.26 0 0 0 1.25 1.25h7.52a1.26 1.26 0 0 0 1.25-1.25v-2.93a8.9 8.9 0 0 0 3.76-7.14 8.71 8.71 0 0 0 -8.77-8.77z" fill="#fff"></path>
//                                           </svg>
//                                         </picture>
//                                         <h4 className="h-c-headline h-c-headline--four h-has-bottom-margin">
//                                           Deliver more relevant advertising experiences.
//                                         </h4>
//                                         <p>Keep people engaged from their search to your site — and beyond. An Optimize and Google Ads integration makes it easy to test personalised landing pages to drive better results.</p>
//                                       </li>
//                                     </ul>

//                                     <a data-g-event="for small businesses" data-g-action="go to integration center" data-g-label="designed to work together" href="https://marketingplatform.google.com/home?openIntegrationCenter=true&amp;utm_source=marketingplatform.google.com&amp;utm_medium=et&amp;utm_campaign=marketingplatform.google.com%2Fintl%2Fen_uk%2Fabout%2Fsmall-business%2F" title="Go to Integration Centre" className="h-c-link gmp-link" target="_blank" rel="nofollow noreferrer noopener"><div className="gmp-link__content">
//                                       <span>Go to Integration Centre</span>
//                                       <svg role="img" className="gmp-link__icon gmp-link__icon--arrow h-c-icon h-c-icon--arrow-external" alt="Go to Integration Centre icon">
//                                         <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mi-arrow-forward"></use>
//                                       </svg>
//                                     </div></a>
//                                   </div>
//                                 </div>    </div>
//                               <div className="highlights-module__carousel highlights-module__carousel--horizontal">
//                                 <div data-ng-mouseover="PaginationCtrl.stopTimer()" data-ng-mouseleave="PaginationCtrl.startTimer()" ng-transclude="" className="glue-pagination h-c-carousel h-c-carousel--simple ng-isolate-scope glue-o-pagination">
//                                   <div className="h-c-carousel__wrap ng-scope">

//                                     <ul className="glue-carousel" data-glue-carousel="" data-glue-pagination="demo-cyclical" data-glue-carousel-breakpoints="['x-small','small']" style={{ "width": "auto", "transform": "none" }}>
//                                       <li className="h-c-carousel__item">
//                                         <picture>
//                                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" alt="" role="img" aria-label="target icon" className="gmp-circle-icon gmp-circle-icon--green highlights-module__icon">
//                                             <title>target icon</title>
//                                             <circle className="gmp-icon--accent" cx="22.5" cy="22.5" r="22.5"></circle>
//                                             <path d="m22.61 25.29a2.79 2.79 0 1 1 2.79-2.79 2.79 2.79 0 0 1 -2.79 2.79zm0 2.79a5.57 5.57 0 1 0 -5.61-5.58 5.57 5.57 0 0 0 5.61 5.57zm0 2.79a8.36 8.36 0 1 1 8.39-8.37 8.36 8.36 0 0 1 -8.39 8.36zm0 2.79a11.14 11.14 0 1 0 -11.15-11.16 11.14 11.14 0 0 0 11.15 11.14zm0 2.79a13.93 13.93 0 1 1 13.93-13.95 13.93 13.93 0 0 1 -13.93 13.93z" fill="#fff"></path>
//                                           </svg>
//                                         </picture>
//                                         <h4 className="h-c-headline h-c-headline--four highlights-module__subhead">Get a complete picture of your advertising.</h4>
//                                         <div className="highlights-module__description"><p>Google Ads integrates with Analytics so you can easily see the full customer cycle, from how they interact with your marketing to how they finally complete the goals you’ve set for them on your site.</p></div>
//                                       </li>
//                                       <li className="h-c-carousel__item">
//                                         <picture>
//                                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" alt="" role="img" aria-label="bulb icon" className="gmp-circle-icon gmp-circle-icon--green highlights-module__icon">
//                                             <title>bulb icon</title>
//                                             <circle className="gmp-icon--accent" cx="22.5" cy="22.5" r="22.5"></circle>
//                                             <path d="m18.74 33a1.26 1.26 0 0 0 1.26 1.21h5a1.26 1.26 0 0 0 1.26-1.21v-1.29h-7.52zm3.76-23.84a8.71 8.71 0 0 0 -8.77 8.77 8.55 8.55 0 0 0 3.76 7.14v2.93a1.26 1.26 0 0 0 1.25 1.25h7.52a1.26 1.26 0 0 0 1.25-1.25v-2.93a8.9 8.9 0 0 0 3.76-7.14 8.71 8.71 0 0 0 -8.77-8.77z" fill="#fff"></path>
//                                           </svg>
//                                         </picture>
//                                         <h4 className="h-c-headline h-c-headline--four highlights-module__subhead">Deliver more relevant advertising experiences.</h4>
//                                         <div className="highlights-module__description"><p>Keep people engaged from their search to your site — and beyond. An Optimize and Google Ads integration makes it easy to test personalised landing pages to drive better results.</p></div>
//                                       </li>
//                                     </ul>

//                                   </div>

//                                   <div className="h-c-carousel__navigation ng-scope">
//                                     <ul role="tablist" className="glue-pagination-page-list ng-isolate-scope glue-o-pagination__page-list" data-glue-pagination="demo-cyclical">  {/* ngRepeat: i in PageListCtrl.pageCollection */}<li ng-repeat="i in PageListCtrl.pageCollection" data-page="1" className="glue-o-pagination__button-container glue-o-pagination__page-list-button-container ng-scope active" ng-className="{active: i == PageListCtrl.model.currentPage}" ng-show="PageListCtrl.activePageCollection[i - 1]" style={{}}>    {/* ngIf: PageListCtrl.getAriaControlId(i) */}    {/* ngIf: !PageListCtrl.getAriaControlId(i) */}<button type="button" role="tab" className="glue-o-pagination__button glue-o-pagination__page-list-button ng-binding ng-scope" aria-selected="true" aria-label="" data-page="1" data-ng-focus="PageListCtrl.onFocus()" data-ng-blur="PageListCtrl.onBlur($event)" data-ng-click="PageListCtrl.setPage(i, $event)" data-ng-if="!PageListCtrl.getAriaControlId(i)">      1</button>{/* end ngIf: !PageListCtrl.getAriaControlId(i) */}  </li>{/* end ngRepeat: i in PageListCtrl.pageCollection */}</ul>
//                                   </div>
//                                 </div>
//                                 <div className="highlights-module__cta highlights-module__cta--mobile">
//                                   <a data-g-event="for small businesses" data-g-action="go to integration center" data-g-label="designed to work together" href="https://marketingplatform.google.com/home?openIntegrationCenter=true&amp;utm_source=marketingplatform.google.com&amp;utm_medium=et&amp;utm_campaign=marketingplatform.google.com%2Fintl%2Fen_uk%2Fabout%2Fsmall-business%2F" title="Go to Integration Centre" className="h-c-link gmp-link" target="_blank" rel="nofollow noreferrer noopener"><div className="gmp-link__content">
//                                     <span>Go to Integration Centre</span>
//                                     <svg role="img" className="gmp-link__icon gmp-link__icon--arrow h-c-icon h-c-icon--arrow-external" alt="Go to Integration Centre icon">
//                                       <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mi-arrow-forward"></use>
//                                     </svg>
//                                   </div></a>
//                                 </div>

//                               </div>

//                           </div></div>  </section>

//                       <section className="gmp-section gmp-mb-l">

//                         <div className="two-column-tout">
//                           <div className="h-c-page">

//                             <div className="h-c-grid">

//                               <div className="h-c-grid__col h-c-grid__col-xl--offset-1 h-c-grid__col-l--6
//             h-c-grid__col-xl--5 h-c-grid__col-l--order-2 h-c-grid__col--align-middle
//             two-column-tout__content">

//                                 <h3 className="h-c-headline h-c-headline--one">
//                                   Grow with Google Ads.
//                                 </h3>
//                                 <div className="h-u-mb-std two-column-tout__description">
//                                   <p>Reach more of your customers across Google Search, Maps, YouTube and beyond.</p>
//                                 </div>
//                                 <a data-g-event="for small businesses" data-g-action="learn more" data-g-label="grow with google ads" href="https://ads.google.com/home/?utm_source=marketingplatform.google.com&amp;utm_medium=et&amp;utm_campaign=marketingplatform.google.com%2Fintl%2Fen_uk%2Fabout%2Fsmall-business%2F" title="Learn more" className="h-c-link h-c-link--internal gmp-link" target="_blank" rel="nofollow noreferrer noopener">Learn more</a>
//                               </div>

//                               <div className="h-c-grid__col
//           h-c-grid__col-l--6 h-c-grid__col-l--order-1 h-c-grid__col--align-middle">
//                                 <div className="two-column-tout__image text-center">
//                                   <picture>
//                                     <source media="(max-width: 767px)" srcset="https://lh3.googleusercontent.com/2tTXnXcs66223a0UCuBT966RF-71AM0wUPtvOWpkrPfMmyvKQVTJAdpvdCPHmgHmfIMBtzFYrjVheoZTpe62mLY2yzAe84QLcprl=s480 1x, https://lh3.googleusercontent.com/MX7QniMpAyRQHKHYJGvXm2SaSqTV5Vmsif0Fdq55rpATnejQGP6BPxsXJ1HoDAMJWphT_e8IV9OmmURHprv7H_E_l3s7xexBCGIDt2o=s960 2x">
//                                       <source media="(min-width: 768px)" srcset="https://lh3.googleusercontent.com/wynX2eWUBnTdylWxAKHwb8BfALy3DMD-udFaTKgWeVL8aUci0aKyPNPI540SSnt3sZ-YHosbangMmVMMM29J2qStIC67HsNxbCqeZXs=s1500 1x, https://lh3.googleusercontent.com/rpCqPOHeIZA8r_aQfIpuIB4NXbIPVRs6WbgjXVL7L2sVZodEGryfaHfmkBoQPNXapxLEvAQEVCfmcVDzvB5Hp2w9xaHvN2KJP8_G0g=s3000 2x">
//                                         <img src="https://lh3.googleusercontent.com/wynX2eWUBnTdylWxAKHwb8BfALy3DMD-udFaTKgWeVL8aUci0aKyPNPI540SSnt3sZ-YHosbangMmVMMM29J2qStIC67HsNxbCqeZXs=s1500" alt="Grow with Google Ads." className="gmp-no-grab ">
//                                         </picture>
//                                       </div>
//                                     </div>

//                                 </div>

//                               </div>
//                             </div>    </section>

//                           <section className="gmp-section gmp-mb-l">
//                             <div className="whoops-tout ">

//                               <div className="whoops-tout__background">
//                                 <div className="gmp-banner">
//                                   <picture>
//                                     <source media="(max-width: 640px)" srcset="https://lh3.googleusercontent.com/YG3a264ZMyHVkBTTdPy6ToWOF2tsFZAa--BW38cxwAJs4PQ6m3Bg1TCb3xzoqyj_FcSSwzalTDKF5bsqnCVMvWlRc3jiqNJAqGcr=s480 1x, https://lh3.googleusercontent.com/TlJ4nn_hFpTVGKvjIUumvoxpE_9LqU_RESlEw8llFNgnOvo7QGvLwcQOceAN0GJFGhfTnkU4KwUE-TEe9bjWVyDm7J2Oy9tKJUFt9Q=s960 2x">
//                                       <source media="(min-width: 641px)" srcset="https://lh3.googleusercontent.com/GnQvuikavPRt27q7XOkJj30JObAZq61X41dE81X8wroYbwPORn--s7vObyX1RIyoAUeTyAgQ2rspVonJHw21uqEPh9-Q_O1VLg37re4=s1500 1x, https://lh3.googleusercontent.com/PJkMk_p8d2APIzjieFkTyrREi6b-yy28dPeewGzwK-JlQ4gh6s1EzQzOerJeWX_13C2V0ForYUp5263yn086lC9zSPf4qJaw2HJ043g=s3000 2x">
//                                         <img src="https://lh3.googleusercontent.com/GnQvuikavPRt27q7XOkJj30JObAZq61X41dE81X8wroYbwPORn--s7vObyX1RIyoAUeTyAgQ2rspVonJHw21uqEPh9-Q_O1VLg37re4=s1500" alt="Google Marketing Platform" className="gmp-no-grab gmp-banner__image">
//                                         </picture>
//                                       </div>

//                                     </div>

//                                     <div className="whoops-tout__content">
//                                       <div className="h-c-page">
//                                         <div className="h-c-grid">

//                                           <div className="h-c-grid__col h-c-grid__col--9 h-c-grid__col-l--8 h-c-grid__col-l--offset-1 h-c-grid__col--align-middle">

//                                             <h3 className="h-c-headline h-c-headline--one">
//                                               Looking for enterprise solutions?
//                                             </h3>
//                                             <p className="h-c-headline h-c-headline--four">
//                                               Google Marketing Platform also offers enterprise-level solutions for businesses who need a little more muscle in their marketing.
//                                             </p>
//                                             <a data-g-event="for small businesses" data-g-action="see solutions" data-g-label="looking for enterprise solutions" href="/intl/en_uk/about/enterprise/" className="h-c-button h-c-button--primary" title="See solutions">See solutions</a>

//                                           </div>

//                                         </div>
//                                       </div>
//                                     </div>
//                                 </div>
//                               </section>
//                             </main>
//                         </div>
//                       </>
//                       );
// }
