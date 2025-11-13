'use client'

import clsx from 'clsx'

interface GradientCardProps {
  title: string
  value: string | number
  percentage?: string
  subtitle?: string
  imageUrl?: string
  duration?: number // seconds
  colors?: {
    start?: string
    mid?: string
    end?: string
    accent?: string
  }
  className?: string
  children?: React.ReactNode
}

/**
 * Reusable Animated Gradient Border Card
 */
export default function GradientCard({
  title,
  value,
  percentage = '+0%',
  subtitle,
  imageUrl,
  duration = 4,
  colors = {
    start: '#172033',
    mid: '#1e293b', // slate-800
    end: '#172033',
    accent: '#6366f1', // indigo-500
  },
  className,
  children,
}: GradientCardProps) {
  const gradientStyle = {
    background: `
      linear-gradient(45deg, ${colors.start}, ${colors.mid} 50%, ${colors.end}) padding-box,
      conic-gradient(
        from var(--border-angle),
        color-mix(in srgb, ${colors.mid} 80%, transparent),
        ${colors.accent} 86%,
        color-mix(in srgb, ${colors.accent} 70%, white) 90%,
        ${colors.accent} 94%,
        color-mix(in srgb, ${colors.mid} 80%, transparent)
      ) border-box
    `,
    animation: `rotate-border ${duration}s linear infinite`,
  } as React.CSSProperties

  return (
    <section className={clsx('flex justify-center', className)}>
      <div
        className="w-full max-w-[622px] rounded-2xl border border-transparent"
        style={gradientStyle}
      >
        <div className="p-5">
          <div className="flex justify-between items-center">
            <div>
              <div className="flex space-x-2 items-center mb-0.5">
                <div className="text-2xl font-bold text-slate-200 mb-1">
                  {value}
                </div>
                <div className="text-xs font-medium text-emerald-500">
                  {percentage}
                </div>
              </div>
              {subtitle && (
                <div className="text-sm font-medium text-slate-500">
                  {subtitle}
                </div>
              )}
            </div>
            <button className="w-8 h-8 flex justify-center items-center text-slate-500 hover:text-slate-400">
              <span className="sr-only">Open menu</span>
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="4"
                fill="none"
              >
                <path d="M8 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM14 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
              </svg>
            </button>
          </div>
        </div>
        {imageUrl && (
          <div className="px-5 pb-5">
            <img
              className="rounded-lg transition-opacity duration-500"
              src={imageUrl}
              width="380"
              height="173"
              alt={title}
            />
          </div>
        )}
        {children && <div className="p-5">{children}</div>}
      </div>
    </section>
  )
}
