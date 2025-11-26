'use client'
import {
  Bot,
  ChevronRight,
  Clock,
  MessageSquare,
  Phone,
  Sparkles,
  Zap,
} from 'lucide-react'
import { useState } from 'react'

export default function GoatSupport() {
  const [hoveredCard, setHoveredCard] = useState<number | undefined>(undefined)

  // const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const supportChannels = [
    {
      icon: Bot,
      title: 'AI Chat Assistant',
      description:
        'Instant answers powered by advanced AI. Available 24/7 for immediate support.',
      action: 'Start Chat',
      priority: 'Recommended',
      gradient: 'from-primary to-secondary',
    },
    {
      icon: MessageSquare,
      title: 'Contact Form',
      description:
        "Detailed inquiries? Send us a message and we'll respond within 24 hours.",
      action: 'Send Message',
      priority: null,
      gradient: 'from-secondary to-accent',
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our team during business hours.',
      phone: '0203 355 9722',
      action: 'Call Now',
      priority: null,
      gradient: 'from-accent to-primary',
    },
  ]

  const supportStats = [
    { label: 'Avg Response Time', value: '< 2 min', icon: Clock },
    { label: 'AI Resolution Rate', value: '89%', icon: Zap },
    { label: 'Customer Satisfaction', value: '4.8/5', icon: Sparkles },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-secondary/5 to-accent/5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20 lg:pt-32 lg:pb-24">
          <div className="text-center space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                AI-Powered Support
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
              <span className="block text-foreground">How can we</span>
              <span className="block bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                help you today?
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Choose your preferred way to connect. Our AI assistant is ready to
              help instantly, or reach out through traditional channels.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {supportStats.map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-background/80 backdrop-blur-sm border border-border rounded-2xl p-6 text-center">
                  <stat.icon className="w-6 h-6 mx-auto mb-3 text-primary" />
                  <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Support Channels */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {supportChannels.map((channel, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(undefined)}
              className="relative group"
            >
              {/* Animated border wrapper */}
              <div
                className="absolute inset-0 rounded-3xl p-0.5 transition-all duration-500"
                style={{
                  backgroundImage:
                    hoveredCard === index
                      ? 'linear-gradient(var(--border-angle), var(--color-primary), var(--color-secondary), var(--color-accent), var(--color-primary))'
                      : 'linear-gradient(90deg, var(--color-border), var(--color-border))',
                  backgroundSize: '300% 100%',
                  animation:
                    hoveredCard === index
                      ? 'rotate-border 4s linear infinite'
                      : 'none',
                }}
              />

              {/* Card content */}
              <div className="relative bg-background rounded-3xl p-8 md:p-10 h-full flex flex-col">
                {channel.priority && (
                  <div className="absolute top-6 right-6">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-linear-to-r from-primary to-secondary text-xs font-semibold text-primary-foreground">
                      <Zap className="w-3 h-3" />
                      {channel.priority}
                    </span>
                  </div>
                )}

                <div
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-linear-to-br ${channel.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                >
                  <channel.icon className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground" />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {channel.title}
                </h3>

                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 grow">
                  {channel.description}
                </p>

                {channel.phone && (
                  <a
                    href={`tel:${channel.phone}`}
                    className="text-xl md:text-2xl font-bold text-primary mb-6 hover:text-secondary transition-colors inline-flex items-center gap-2"
                  >
                    {channel.phone}
                    <Phone className="w-5 h-5" />
                  </a>
                )}

                <button
                  type="button"
                  className="w-full py-4 px-6 rounded-xl bg-linear-to-r from-foreground to-foreground/90 text-background font-semibold text-base md:text-lg flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 group-hover:scale-[1.02]"
                  onClick={() => {
                    if (channel.phone) {
                      window.location.href = `tel:${channel.phone}`
                    }
                  }}
                >
                  {channel.action}
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 md:mt-24 text-center">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-linear-to-r from-primary via-secondary to-accent rounded-2xl blur-2xl opacity-30" />
            <div className="relative bg-linear-to-r from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-sm border border-primary/20 rounded-2xl px-8 py-6 md:px-12 md:py-8">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                Business Hours
              </h3>
              <p className="text-base md:text-lg text-muted-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM GMT
              </p>
              <p className="text-sm md:text-base text-muted-foreground mt-2">
                AI Chat Assistant available 24/7
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="mt-16 md:mt-24 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-12 md:mb-16">
            Why our support is{' '}
            <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
              different
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: 'AI-First Approach',
                description:
                  'Get instant answers from our advanced AI trained on millions of support interactions.',
              },
              {
                title: 'Human When Needed',
                description:
                  'Complex issues? Seamlessly escalate to our expert team without repeating yourself.',
              },
              {
                title: 'No Forms, Just Solutions',
                description:
                  "We've eliminated unnecessary forms. Chat naturally or call directly for faster resolution.",
              },
              {
                title: 'Always Learning',
                description:
                  'Our AI improves daily, learning from every interaction to serve you better.',
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="shrink-0 w-2 bg-gradient-to-b from-primary via-secondary to-accent rounded-full" />
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
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
      `}</style>
    </div>
  )
}
