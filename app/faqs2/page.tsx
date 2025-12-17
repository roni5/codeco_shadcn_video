"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function GoatFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Can I cancel at anytime?",
      answer:
        "Yes, you can cancel anytime no questions asked. We would highly appreciate feedback to help us improve the experience.",
    },
    {
      question: "My team has credits. How do we use them?",
      answer:
        "Team credits appear in your dashboard after signup. Redeem them against any subscription plan or upgrade directly from the billing page.",
    },
    {
      question: "How does Codeco.tech's pricing work?",
      answer:
        "Subscriptions are tiered by usage and features. Monthly or annual billing with prorated upgrades/downgrades. No long-term contracts.",
    },
    {
      question: "How secure is Codeco.tech?",
      answer:
        "SOC 2 Type II compliant, end-to-end encryption, and regular third-party audits. Your data stays yours, always.",
    },
    {
      question: "How do I get access to a theme I purchased?",
      answer:
        "Log into your account → avatar → Purchases. Or use the Redownload page with your original purchase email address.",
    },
    {
      question: "Upgrade License Type",
      answer:
        "Upgrade from your original license type anytime. Original purchase cost applies toward new license—no double payment.",
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-400/10 via-cyan-300/5 to-emerald-400/10 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.15),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(34,197,94,0.12),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-xs backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inset-0 rounded-full bg-sky-400 opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-sky-400" />
              </span>
              <span className="uppercase tracking-[0.24em] font-semibold text-sky-400">
                Frequently asked
              </span>
            </div>
            {/* The mx-auto class centers the block element horizontally */}
            <h1 className="max-w-4xl mx-auto text-4xl font-semibold tracking-tight text-center sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">Your questions,</span>
              <span className="block bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                answered
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-center text-lg text-muted-foreground sm:text-xl">
              Everything you need to know before you start.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Grid */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="space-y-4 md:space-y-5">
          {faqs.map((faq, index) => (
            <article
              key={faq.question}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-background/80 shadow-sm backdrop-blur-md hover:shadow-xl hover:shadow-sky-400/20 hover:border-sky-400/50 transition-all duration-500"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="relative w-full p-6 md:p-8"
                aria-expanded={openIndex === index}
              >
                {/* Animated border glow */}
                <div className={`pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-xl transition-all duration-500 ${openIndex === index
                    ? "bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 opacity-40"
                    : "group-hover:opacity-20"
                  }`} />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold tracking-tight md:text-xl group-hover:text-sky-400 transition-colors duration-300 pr-2">
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`shrink-0 rounded-full p-2 transition-all duration-500 ${openIndex === index
                      ? "bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400 shadow-lg shadow-sky-400/40 rotate-180"
                      : "bg-muted/40 group-hover:bg-sky-400/20"
                    }`}>
                    <ChevronDown
                      className={`h-5 w-5 transition-colors duration-300 ${openIndex === index
                          ? "text-slate-950"
                          : "text-muted-foreground group-hover:text-sky-400"
                        }`}
                    />
                  </div>
                </div>
              </button>

              {/* Answer */}
              <div className={`overflow-hidden transition-all duration-700 ease-out ${openIndex === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
                }`}>
                <div className="border-t border-border/50 px-6 pb-6 md:px-8 md:pb-8">
                  <div className="h-px w-20 bg-gradient-to-r from-sky-400/60 to-emerald-400/60 my-4" />
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="mx-auto inline-flex max-w-md flex-col items-center gap-4 rounded-2xl border border-border/70 bg-background/90 p-6 shadow-xl backdrop-blur-md md:p-8 lg:max-w-lg">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-r from-sky-400/20 via-cyan-300/10 to-emerald-400/20 blur-xl" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                Still need help?
              </p>
              <h4 className="mt-1.5 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                Contact our support team
              </h4>
              <p className="mt-2 text-xs text-muted-foreground/80 md:text-sm">
                Reach out directly. Real humans, real fast.
              </p>
            </div>
            <button className="inline-flex items-center gap-2 self-stretch rounded-xl bg-linear-to-r from-sky-400 via-cyan-300 to-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_12px_40px_rgba(56,189,248,0.5)] transition-transform duration-200 hover:-translate-y-0.5 md:text-base">
              Get in touch
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}