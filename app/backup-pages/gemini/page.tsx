// app/page.tsx
import { Button } from '@/components/ui/button'

export default function Page() {
  return (
    <main className="flex flex-col items-center">
      {/* HERO */}
      <section className="w-full max-w-6xl text-center py-24 px-6">
        <h1 className="text-5xl font-bold mb-4">
          AI Automation & Web Development for Modern Teams
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          We build intelligent systems that automate workflows, scale
          infrastructure, and deliver beautifully engineered digital products —
          faster than ever before.
        </p>
        <Button size="lg" className="px-8 py-6 text-lg">
          Book a Free Consultation
        </Button>
      </section>

      {/* TRUST STRIP */}
      <section className="w-full bg-muted py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-10 opacity-80">
          <img src="/logos/aws.svg" alt="AWS" className="h-8" />
          <img src="/logos/openai.svg" alt="OpenAI" className="h-8" />
          <img
            src="/logos/googlecloud.svg"
            alt="Google Cloud"
            className="h-8"
          />
          <img src="/logos/vercel.svg" alt="Vercel" className="h-8" />
          <img src="/logos/stripe.svg" alt="Stripe" className="h-8" />
        </div>
      </section>

      {/* BENEFITS / THREE CARDS */}
      <section className="w-full py-24 px-6 max-w-6xl text-center">
        <h2 className="text-3xl font-semibold mb-12">
          Smarter, Faster, Scalable
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'AI-Powered Automation',
              desc: 'Integrate intelligent systems that streamline operations, eliminate manual work, and unlock exponential efficiency.',
            },
            {
              title: 'Custom Web Platforms',
              desc: 'From MVP to enterprise-scale — modern, responsive web apps built with Next.js, React, and robust cloud infrastructure.',
            },
            {
              title: 'Scalable Infrastructure',
              desc: 'Automate deployments and scale globally with Terraform, Docker, and AWS — the backbone of modern digital businesses.',
            },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ZIGZAG FEATURES */}
      <section className="w-full py-24 px-6 max-w-6xl">
        {[
          {
            img: '/images/ai-dashboard.jpg',
            title: 'Build Intelligent Workflows',
            desc: 'We integrate AI agents directly into your business — automating lead qualification, reporting, and customer support while maintaining full human oversight.',
            reverse: false,
          },
          {
            img: '/img/code-automation.jpg',
            title: 'Develop & Deploy at Lightning Speed',
            desc: 'Using containerized infrastructure and continuous deployment pipelines, we deliver production-ready apps that evolve as your business grows.',
            reverse: true,
          },
          {
            img: '/img/data-infrastructure.jpg',
            title: 'Data at the Core',
            desc: 'We connect APIs, databases, and machine learning pipelines to create systems that learn, adapt, and scale with every transaction.',
            reverse: false,
          },
        ].map(({ img, title, desc, reverse }, i) => (
          <div
            key={i}
            className={`flex flex-col md:flex-row ${
              reverse ? 'md:flex-row-reverse' : ''
            } items-center gap-12 mb-24`}
          >
            <img
              src={img}
              alt={title}
              className="w-full md:w-1/2 rounded-2xl shadow-md object-cover"
            />
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">{title}</h3>
              <p className="text-muted-foreground mb-6">{desc}</p>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        ))}
      </section>

      {/* SOCIAL PROOF */}
      <section className="w-full py-24 px-6 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Trusted by Innovators</h2>
          <p className="text-muted-foreground mb-12">
            “Our automation platform now runs 24/7 without human input. The
            system learns from our data, improves our sales process, and
            delivers insights in real time.”
            <br />
            <span className="text-sm">— CTO, Fintech Startup, London</span>
          </p>
          <div className="flex justify-center gap-6">
            <img src="/logos/fintech.svg" alt="Fintech" className="h-10" />
            <img
              src="/logos/retailtech.svg"
              alt="RetailTech"
              className="h-10"
            />
            <img src="/logos/healthai.svg" alt="HealthAI" className="h-10" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Automate your business. Accelerate your growth.
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Partner with our AI engineers and web developers to design intelligent
          systems that work — so you can focus on what matters most.
        </p>
        <Button size="lg" className="px-10 py-6 text-lg">
          Schedule a Strategy Call
        </Button>
      </section>

      {/* FOOTER */}
      <footer className="w-full border-t py-10 px-6 text-sm text-muted-foreground">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
          <p>
            © {new Date().getFullYear()} AIAutomate Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#">About</a>
            <a href="#">Case Studies</a>
            <a href="#">Privacy</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
