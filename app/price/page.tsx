"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import "./scrolling.css";
import { Reveal } from "@/components/Reveal";
import { StaggerReveal, StaggerItem } from "@/components/StaggerReveal";
import DarkNewsLetter from "@/components/DarkNewsLetter";
import DarkStats from "@/components/DarkStats";
import DarkSteps from "@/components/DarkSteps";
import FourSection from "@/components/Four-Features-Section";
import DarkFooter from "@/components/dark-footer";
import DarkZigzag from "@/components/dark-zigzag";
import Services from "@/components/services";

// Hero animations - keeping your original smooth ones
const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const ctaVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, delay: 0.3, ease: "easeOut" },
  },
};

const logosContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.8,
    },
  },
};

const logoItem = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function PricingPage() {
  useEffect(() => {
    // Character splitting animation for hero text
    const headings = document.querySelectorAll("[data-splitting]");
    for (const h of headings) {
      const text = h.textContent || "";
      h.textContent = "";
      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const span = document.createElement("span");
        span.className = "char";
        span.style.setProperty("--char-index", i.toString());
        span.textContent = char;
        h.appendChild(span);
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const state = entry.isIntersecting ? "" : "out";
          entry.target.setAttribute("data-scroll", state);
        }
      },
      { threshold: 0.1 },
    );

    for (const h of headings) observer.observe(h);

    return () => {
      for (const h of headings) observer.unobserve(h);
    };
  }, []);

  return (
    <main className="w-full mx-auto">
      <section className="relative mt-23 pb-8 overflow-y-hidden bg-neutral-950 overflow-hidden">
        <div className="overflow-hidden">
          {/* Animated background image - left side */}
          <motion.div
            className="hidden lg:block absolute top-9 left-0 md:left-32 bottom-0 w-2/5"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative h-full">
              <div className="absolute inset-0 opacity-20 rounded-2xl blur-3xl" />
              <div className="pr-1 pb-1 border-opacity-20 h-full">
                <svg width="1600" height="800">
                  <title>hero</title>
                  <defs>
                    <filter id="turbulent-dissolve" x="0%" y="0%">
                      <feTurbulence type="fractalNoise" baseFrequency=".012" />
                      <feColorMatrix type="luminanceToAlpha" />
                      <feComponentTransfer>
                        <feFuncA type="linear" slope="0">
                          <animate
                            attributeName="slope"
                            values="0;0;0;0;0;0.5;1;1.5;2;2;2;2;2;2;1.5;1;0.5;0"
                            dur="8s"
                            repeatCount="indefinite"
                          />
                        </feFuncA>
                      </feComponentTransfer>
                      <feComponentTransfer>
                        <feFuncA type="discrete" tableValues="0 1" />
                      </feComponentTransfer>
                      <feGaussianBlur stdDeviation="1" />
                      <feComposite
                        operator="in"
                        in="SourceGraphic"
                        result="overlay"
                      />
                      <feImage
                        href="/img/osaka02.jpg"
                        width="800"
                        height="600"
                        result="underlay"
                      />
                      <feComposite operator="over" in="overlay" in2="underlay" />
                    </filter>
                  </defs>
                  <image
                    filter="url(#turbulent-dissolve)"
                    width="800"
                    height="600"
                    href="/img/looking-down.jpg"
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Hero content with stagger animation */}
          <div className="relative container px-4 mx-auto">
            <motion.div
              className="w-full lg:w-3/5 lg:pl-16 ml-auto mb-12"
              variants={heroContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                className="ml-2 md:ml-62 py-8 mt-10 lg:mt-20 mb-16 lg:mb-20 max-w-xl"
                variants={heroItem}
              >
                {/* Eyebrow text */}
                <motion.div className="mb-6" variants={heroItem}>
                  <span className="text-sm text-neutral-400 font-medium">
                    Frequent authentication
                  </span>
                </motion.div>

                {/* Main heading with character splitting */}
                <motion.h1
                  data-splitting
                  className="mb-6 text-4xl md:text-5xl lg:text-6xl font-medium leading-none text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300"
                  variants={heroItem}
                >
                  WeBuild Products That U Will Really Love
                </motion.h1>

                {/* Description */}
                <motion.p
                  className="mb-10 text-lg leading-relaxed text-neutral-300"
                  variants={heroItem}
                >
                  Transform your workflow with our intuitive platform designed
                  for high-performing teams. Ship faster, collaborate better,
                  and scale with confidence of a professional.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  className="relative flex flex-col sm:flex-row gap-4 bg-neutral-950"
                  variants={heroItem}
                >
                  <div className="lg:hidden absolute inset-0 bg-neutral-950 rounded-2xl blur-3xl" />

                  <motion.a
                    variants={ctaVariant}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-neutral-950 bg-linear-to-r from-gray-100 via-gray-200 to-gray-300 hover:from-white hover:via-gray-100 hover:to-gray-200 rounded-full transition-all duration-200 hover:shadow-lg group"
                    href="/"
                  >
                    Get Started
                    <svg
                      className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <title>arrow</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.a>

                  <motion.a
                    variants={heroItem}
                    whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.5)" }}
                    whileTap={{ scale: 0.98 }}
                    className="relative inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white hover:text-white border border-neutral-700 hover:border-white hover:border-opacity-50 rounded-full transition-all duration-200"
                    href="/"
                  >
                    Watch Demo
                  </motion.a>
                </motion.div>
              </motion.div>

              {/* Logo section with stagger */}
              <motion.div
                className="flex flex-wrap justify-center lg:justify-start -my-18 md:-my-4 -mx-6"
                variants={logosContainer}
              >
                {[
                  "darkpro-assets/logos/jiggle-color.svg",
                  "darkpro-assets/logos/symtric-color.svg",
                  "darkpro-assets/logos/wishelp-color.svg",
                  "darkpro-assets/logos/resecurb-color.svg",
                ].map((src, i) => (
                  <motion.div
                    key={src}
                    className={
                      i === 0
                        ? "w-1/2 md:w-1/4 -py-4 md:py-4 px-2 md:px-6 pb-4 md:pb-8"
                        : i === 3
                        ? "w-1/2 md:w-1/4 p-0 md:p-4 px-6"
                        : "w-1/2 md:w-1/4 p-4 px-6"
                    }
                    variants={logoItem}
                    whileHover={{ scale: 1.1, opacity: 1 }}
                  >
                    <img
                      className="mx-auto sm:mx-0 h-8 brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
                      src={src}
                      alt=""
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Services Section - Slide up with stagger */}
          <Reveal variant="slideUp" amount={0.2} className="relative">
            <Services />
          </Reveal>

          {/* Zigzag Section - Alternate slide animations */}
          <Reveal variant="slideLeft" delay={0.1} amount={0.15} className="relative">
            <DarkZigzag />
          </Reveal>

          {/* Steps Section - Scale animation */}
          <Reveal variant="scale" delay={0.15} amount={0.2} className="relative">
            <DarkSteps />
          </Reveal>

          {/* Four Features - Blur effect for dramatic entrance */}
          <Reveal variant="slideLeft" delay={0.1} amount={0.15} className="relative">
            <FourSection />
          </Reveal>

          {/* Stats Section - Elastic bounce */}
          <Reveal variant="elastic" amount={0.3} className="relative">
            <DarkStats />
          </Reveal>

          {/* Newsletter - Scale up */}
          <Reveal variant="scaleUp" amount={0.3} className="relative">
            <DarkNewsLetter />
          </Reveal>

          {/* Footer - Fade in */}
          <Reveal variant="fadeIn" amount={0.1} className="relative">
            <DarkFooter />
          </Reveal>
        </div>
      </section>
    </main>
  );
}

/* components/StaggerReveal.tsx 
<Reveal variant="slideUp">
  <YourComponent />
</Reveal>
With Custom Props:
tsx<Reveal 
  variant="blur" 
  delay={0.3} 
  duration={1.2}
  amount={0.5}
>
  <YourComponent />
</Reveal>
Custom Animation:
tsx<Reveal
  customVariants={{
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  }}
>
  <YourComponent />
</Reveal>
Stagger Effect:
tsx<StaggerReveal staggerDelay={0.15}>
  {items.map(item => (
    <StaggerItem key={item.id}>
      <Card {...item} />
    </StaggerItem>
  ))}
</StaggerReveal>
🎨 Available Variants

fadeIn - Simple fade
slideUp - Slide from bottom (default)
slideDown - Slide from top
slideLeft - Slide from right
slideRight - Slide from left
scale - Scale up from small
scaleUp - Scale down from large
blur - Fade in with blur effect
rotateIn - Rotate and scale in
elastic - Bouncy elastic easing

🔧 How to Update Your Code
Replace your wrappers:
tsx// OLD
function ServicesWrapper() {
  return (
    <Reveal className="relative">
      <Services />
    </Reveal>
  );
}

// NEW - Just use directly with variant
<Reveal variant="slideUp" className="relative">
  <Services />
</Reveal>

// Or with alternating effects
<Reveal variant="slideLeft" delay={0.2}>
  <DarkZigzag />
</Reveal>

<Reveal variant="blur">
  <DarkStats />
</Reveal>

<Reveal variant="scale">
  <DarkNewsLetter />
</Reveal>

*/
