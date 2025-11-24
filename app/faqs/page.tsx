
'use client'
import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function GoatFAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'Can I cancel at anytime?',
      answer:
        'Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.',
    },
    {
      question: 'My team has credits. How do we use them?',
      answer:
        'Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details.',
    },
    {
      question: "How does Codeco.tech's pricing work?",
      answer:
        'Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.',
    },
    {
      question: 'How secure is Codeco.tech?',
      answer:
        'Protecting the data you trust to Codeco.tech is our first priority. This part is really crucial in keeping the project in line to completion.',
    },
    {
      question: 'How do I get access to a theme I purchased?',
      answer:
        "If you lose the link for a theme you purchased, don't panic! We've got you covered. You can login to your account, tap your avatar in the upper right corner, and tap Purchases. If you didn't create a login or can't remember the information, you can use our handy Redownload page, just remember to use the same email you originally made your purchases with.",
    },
    {
      question: 'Upgrade License Type',
      answer:
        'There may be times when you need to upgrade your license from the original type you purchased and we have a solution that ensures you can apply your original purchase cost to the new license purchase.',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Gradient */}
      <div className="relative overflow-hidden bg-linear-to-br from-primary/10 via-secondary/10 to-accent/10 pt-16 pb-12 md:pt-24 md:pb-16 lg:pt-32 lg:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,163,211,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(164,196,205,0.1),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 md:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight">
              <span className="block text-foreground mb-2">
                Your questions,
              </span>
              <span
                className="block bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-border"
                style={{ backgroundSize: '200% 100%' }}
              >
                answered
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
              Answers to the most frequently asked questions.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <div className="grid gap-4 md:gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group relative rounded-2xl md:rounded-3xl p-[2px] hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
              style={{
                backgroundImage:
                  openIndex === index
                    ? 'linear-gradient(var(--border-angle), var(--color-primary), var(--color-secondary), var(--color-accent), var(--color-primary))'
                    : 'linear-gradient(90deg, var(--color-border), var(--color-border))',
                backgroundSize: '300% 100%',
              }}
            >
              <div className="relative bg-background rounded-2xl md:rounded-3xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full text-left p-5 sm:p-6 md:p-8 flex items-start gap-4 md:gap-6 group-hover:bg-muted/5 transition-all duration-300"
                  aria-expanded={openIndex === index}
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 pr-2">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                      openIndex === index
                        ? 'bg-linear-to-br from-primary to-secondary rotate-180 shadow-lg shadow-primary/30'
                        : 'bg-muted/20 group-hover:bg-muted/40'
                    }`}
                  >
                    <ChevronDown
                      className={`w-5 h-5 md:w-6 md:h-6 transition-colors duration-300 ${
                        openIndex === index
                          ? 'text-primary-foreground'
                          : 'text-muted-foreground group-hover:text-foreground'
                      }`}
                    />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index
                      ? 'max-h-[500px] opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 sm:px-6 md:px-8 pb-5 sm:pb-6 md:pb-8">
                    <div className="h-px bg-linear-to-r from-transparent via-border to-transparent mb-5 md:mb-6" />
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed md:leading-loose">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 md:mt-16 lg:mt-20 text-center">
          <div className="inline-block relative">
            <div
              className="absolute inset-0 bg-linear-to-r from-primary via-secondary to-accent rounded-2xl blur-xl opacity-60 animate-border"
              style={{ backgroundSize: '200% 100%' }}
            />
            <div
              className="relative bg-linear-to-r from-primary via-secondary to-accent p-0.5 rounded-2xl animate-border"
              style={{ backgroundSize: '200% 100%' }}
            >
              <div className="bg-background px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 rounded-2xl">
                <p className="text-sm sm:text-base md:text-lg font-semibold text-foreground">
                  Still have questions?{' '}
                  <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                    Contact our support team
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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

        .animate-border {
          animation: rotate-border 4s linear infinite;
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  )
}