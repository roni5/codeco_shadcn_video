'use client'

import { useState, useMemo, useCallback } from 'react'
//import Image from 'next/image' 
import { ImageWithFallback } from '@/components/ImageWithFallback' 
import { Users, Mail, TrendingUp, DollarSign, LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'
import StatsCard from '@/components/dashboard/StatsCard'
import DateFilter from '@/components/dashboard/DateFilter'
import ExportButton from '@/components/dashboard/ExportButton'
import ContactsTable from '@/components/contacts/ContactsTable'
import NewsletterTable from '@/components/newsletter/NewsletterTable'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { subDays, subMonths, subYears, isAfter } from 'date-fns'
import type { Contact, Newsletter } from '@/types/database'
import type { Session } from 'next-auth'

const ITEMS_PER_PAGE = 10

interface DashboardClientProps {
  initialContacts: Contact[]
  initialNewsletters: Newsletter[]
  session: Session
}

export default function DashboardClient({
  initialContacts,
  initialNewsletters,
  session,
}: DashboardClientProps) {
  const [dateRange, setDateRange] = useState('30d')
  const [contactsPage, setContactsPage] = useState(1)
  const [newsletterPage, setNewsletterPage] = useState(1)

  const getDateFilter = useCallback(
    (date: Date) => {
      const now = new Date()
      switch (dateRange) {
        case '7d':
          return isAfter(date, subDays(now, 7))
        case '30d':
          return isAfter(date, subDays(now, 30))
        case '3m':
          return isAfter(date, subMonths(now, 3))
        case '1y':
          return isAfter(date, subYears(now, 1))
        case 'all':
          return true
        default:
          return true
      }
    },
    [dateRange]
  )

  const { filteredContacts, filteredNewsletters, stats } = useMemo(() => {
    const filtered = {
      filteredContacts: initialContacts.filter(c => getDateFilter(c.createdAt)),
      filteredNewsletters: initialNewsletters.filter(n =>
        getDateFilter(n.createdAt)
      ),
    }

    const activeContacts = filtered.filteredContacts.filter(
      c => c.status === 'active'
    ).length

    const subscribedCount = filtered.filteredNewsletters.filter(
      n => n.status === 'subscribed'
    ).length

    const totalLifetimeValue = filtered.filteredContacts.reduce(
      (sum, c) => sum + Number(c.lifetimeValue || 0),
      0
    )

    return {
      ...filtered,
      stats: {
        activeContacts,
        subscribedCount,
        totalLifetimeValue,
        totalContacts: filtered.filteredContacts.length,
        totalNewsletters: filtered.filteredNewsletters.length,
      },
    }
  }, [initialContacts, initialNewsletters, getDateFilter])

  const contactsTotalPages = Math.ceil(filteredContacts.length / ITEMS_PER_PAGE)
  const paginatedContacts = filteredContacts.slice(
    (contactsPage - 1) * ITEMS_PER_PAGE,
    contactsPage * ITEMS_PER_PAGE
  )

  const newslettersTotalPages = Math.ceil(
    filteredNewsletters.length / ITEMS_PER_PAGE
  )
  const paginatedNewsletters = filteredNewsletters.slice(
    (newsletterPage - 1) * ITEMS_PER_PAGE,
    newsletterPage * ITEMS_PER_PAGE
  )

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header with User Info */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center justify-between"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Admin Dashboard
            </h1>
            <p className="text-white/80 text-lg">
              Welcome back,{' '}
              <span className="font-semibold text-white">
                {session.user?.name}
              </span>
              ! Here&apos;s your system overview.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-end sm:items-center  gap-3 mt-6 md:mt-12">
            {session.user?.image && (
              <ImageWithFallback
                src={session.user?.image}
                alt={session.user?.name ?? 'User'}
                width={48}
                height={48}
                sizes="48px"
                className="w-12 h-12 rounded-full border-2 border-white/20 object-cover shrink-0"
              />
              // <Image
              //   src={
              //     session.user?.image ?? '/placeholder.svg?height=48&width=48'
              //   }
              //   alt={session.user?.name ?? 'User'}
              //   width={48}
              //   height={48}
              //   sizes="48px"
              //   className="w-12 h-12 rounded-full border-2 border-white/20 object-cover  shrink-0"
              //   priority
              // />
            )}
            <Button
              onClick={() => signOut({ callbackUrl: '/' })}
              variant="outline"
              className="w-full sm:w-auto h-9 sm:h-10 px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base gap-1.5 sm:gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20
    "
            >
              <LogOut className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Sign Out
            </Button>
          </div>
        </motion.div>

        {/* Date Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-8 flex flex-wrap items-center justify-between gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20"
        >
          <DateFilter value={dateRange} onChange={setDateRange} />
          <div className="text-sm text-white/70">
            Showing{' '}
            <span className="font-semibold text-white">
              {stats.totalContacts}
            </span>{' '}
            contacts and{' '}
            <span className="font-semibold text-white">
              {stats.totalNewsletters}
            </span>{' '}
            subscribers
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Active Contacts"
            value={stats.activeContacts.toLocaleString()}
            icon={Users}
            trend="up"
            trendValue={`${stats.totalContacts} total`}
            primary={true}
            delay={0}
          />
          <StatsCard
            title="Subscribed"
            value={stats.subscribedCount.toLocaleString()}
            icon={Mail}
            trend="up"
            trendValue={`${stats.totalNewsletters} total`}
            delay={0.1}
          />
          <StatsCard
            title="Total Revenue"
            value={`$${stats.totalLifetimeValue.toLocaleString()}`}
            icon={DollarSign}
            trend="up"
            trendValue="Lifetime value"
            delay={0.2}
          />
          <StatsCard
            title="Growth Rate"
            value={`${Math.round((stats.subscribedCount / Math.max(stats.totalNewsletters, 1)) * 100)}%`}
            icon={TrendingUp}
            trend="up"
            trendValue="Conversion rate"
            delay={0.3}
          />
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl shadow-lg shadow-emerald-500/20">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Newsletter Subscribers
                </h2>
                <p className="text-sm text-white/70 mt-0.5">
                  {initialNewsletters.length} total •{' '}
                  <span className="text-emerald-400 font-medium">
                    {stats.subscribedCount} active
                  </span>
                </p>
              </div>
            </div>
            <ExportButton
              data={filteredNewsletters.map(n => ({
                email: n.email,
                name: n.name || '',
                status: n.status,
                source: n.source || '',
                tags: n.tags?.join(', ') || '',
                subscribed_date:
                  n.subscribedDate?.toISOString() || n.createdAt.toISOString(),
              }))}
              filename="newsletter_subscribers"
              label="Export Subscribers"
            />
          </div>
          <NewsletterTable
            subscribers={paginatedNewsletters.map(n => ({
              id: n.id,
              name: n.name ?? undefined,
              email: n.email,
              status: n.status,
              source: n.source ?? undefined,
              tags: n.tags ?? undefined,
              subscribed_date: n.subscribedDate || n.createdAt,
              created_date: n.createdAt,
            }))}
            currentPage={newsletterPage}
            totalPages={newslettersTotalPages}
            onPageChange={setNewsletterPage}
          />
        </motion.div>

        {/* Contacts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl shadow-lg shadow-indigo-500/20">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Contacts
                </h2>
                <p className="text-sm text-white/70 mt-0.5">
                  {initialContacts.length} total •{' '}
                  <span className="text-indigo-400 font-medium">
                    {stats.activeContacts} active
                  </span>
                </p>
              </div>
            </div>
            <ExportButton
              data={filteredContacts.map(c => ({
                name: c.name,
                email: c.email,
                phone: c.phone || '',
                company: c.company || '',
                status: c.status,
                lifetime_value: Number(c.lifetimeValue),
                last_contact_date: c.lastContactDate?.toISOString() || '',
              }))}
              filename="contacts"
              label="Export Contacts"
            />
          </div>
          <ContactsTable
            contacts={paginatedContacts.map(c => ({
              id: c.id,
              name: c.name,
              email: c.email,
              phone: c.phone ?? undefined,
              company: c.company ?? undefined,
              status: c.status,
              lifetime_value: Number(c.lifetimeValue),
              last_contact_date: c.lastContactDate ?? undefined,
            }))}
            currentPage={contactsPage}
            totalPages={contactsTotalPages}
            onPageChange={setContactsPage}
          />
        </motion.div>
      </div>
    </div>
  )
}
