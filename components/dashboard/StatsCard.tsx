
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown } from 'lucide-react'


export interface StatsCardProps {
  title: string
  value: string | number
  icon: React.ComponentType<{ className?: string }>
  trend?: 'up' | 'down'
  trendValue?: string | number
  delay?: number
  primary?: boolean
}

export default function StatsCard({
  title,
  value,
  icon: Icon,
  trend,
  trendValue,
  delay = 0,
  primary = false,
}: StatsCardProps) {
  const isPositive = trend === 'up'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <Card
        className={`p-6 border-0 shadow-sm hover:shadow-md transition-all duration-300 ${
          primary
            ? 'bg-linear-to-br from-indigo-600 to-indigo-700 text-white'
            : 'bg-white'
        }`}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p
              className={`text-sm font-medium ${primary ? 'text-indigo-100' : 'text-slate-600'}`}
            >
              {title}
            </p>
            <h3
              className={`text-3xl font-bold mt-2 ${primary ? 'text-white' : 'text-slate-900'}`}
            >
              {value}
            </h3>
            {trendValue && (
              <div className="flex items-center gap-1 mt-3">
                {isPositive ? (
                  <TrendingUp
                    className={`w-4 h-4 ${primary ? 'text-green-300' : 'text-green-600'}`}
                  />
                ) : (
                  <TrendingDown
                    className={`w-4 h-4 ${primary ? 'text-red-300' : 'text-red-600'}`}
                  />
                )}
                <span
                  className={`text-sm font-medium ${
                    primary
                      ? isPositive
                        ? 'text-green-300'
                        : 'text-red-300'
                      : isPositive
                        ? 'text-green-600'
                        : 'text-red-600'
                  }`}
                >
                  {trendValue}
                </span>
                <span
                  className={`text-xs ${primary ? 'text-indigo-200' : 'text-slate-500'}`}
                >
                  vs last month
                </span>
              </div>
            )}
          </div>
          <div
            className={`p-3 rounded-xl ${
              primary ? 'bg-white/20' : 'bg-indigo-50'
            }`}
          >
            <Icon
              className={`w-6 h-6 ${primary ? 'text-white' : 'text-indigo-600'}`}
            />
          </div>
        </div>
      </Card>
    </motion.div>
  )
}