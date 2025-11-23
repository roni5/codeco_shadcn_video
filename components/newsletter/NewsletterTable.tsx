
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Mail, Tag } from 'lucide-react'
import { motion } from 'framer-motion'
import { format } from 'date-fns'

const statusColors = {
  subscribed: 'bg-green-100 text-green-800 border-green-200',
  unsubscribed: 'bg-slate-100 text-slate-800 border-slate-200',
  pending: 'bg-amber-100 text-amber-800 border-amber-200',
}

export interface Subscriber {
  id: string | number
  name?: string
  email: string
  status?: 'subscribed' | 'unsubscribed' | 'pending'
  source?: string
  tags?: string[]
  subscribed_date?: string | Date
  created_date: string | Date
}

export interface NewsletterTableProps {
  subscribers: Subscriber[]
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function NewsletterTable({
  subscribers,
  currentPage,
  totalPages,
  onPageChange,
}: NewsletterTableProps) {
  return (
    <Card className="border-0 shadow-sm bg-white overflow-hidden">
      <div className="p-6 border-b border-slate-100">
        <h2 className="text-xl font-semibold text-slate-900">
          Newsletter Subscribers
        </h2>
        <p className="text-sm text-slate-600 mt-1">
          Manage your email subscribers
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Subscriber
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Source
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Tags
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Subscribed Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {subscribers.map((subscriber, index) => (
              <motion.tr
                key={subscriber.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="hover:bg-slate-50 transition-colors"
              >
                <td className="px-6 py-4">
                  <div>
                    <div className="font-medium text-slate-900">
                      {subscriber.name || 'Anonymous'}
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-sm text-slate-600">
                      <Mail className="w-3 h-3" />
                      {subscriber.email}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <Badge
                    className={`${statusColors[subscriber.status || 'subscribed']} border font-medium`}
                  >
                    {subscriber.status || 'subscribed'}
                  </Badge>
                </td>
                <td className="px-6 py-4 text-sm text-slate-700">
                  {subscriber.source || '—'}
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-1 flex-wrap">
                    {subscriber.tags && subscriber.tags.length > 0 ? (
                      subscriber.tags.map((tag, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="text-xs bg-indigo-50 text-indigo-700 border-indigo-200"
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))
                    ) : (
                      <span className="text-sm text-slate-400">—</span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  {subscriber.subscribed_date
                    ? format(
                        new Date(subscriber.subscribed_date),
                        'MMM d, yyyy'
                      )
                    : format(new Date(subscriber.created_date), 'MMM d, yyyy')}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between">
          <p className="text-sm text-slate-600">
            Page {currentPage} of {totalPages}
          </p>
          <div className="flex gap-2">
            <Button
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              variant="outline"
              size="sm"
              className="gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>
            <Button
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              variant="outline"
              size="sm"
              className="gap-1"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </Card>
  )
}