"use client"

import React, { useState, useEffect } from 'react'
//import { useQuery } from '@tanstack/react-query'
import { Users, Mail } from 'lucide-react'
import StatsCard from '@/components/dashboard/StatsCard'
import DateFilter from '@/components/dashboard/DateFilter'
import ExportButton from '@/components/dashboard/ExportButton'
import ContactsTable from '@/components/contacts/ContactsTable'
import NewsletterTable from '@/components/newsletter/NewsletterTable'
import { motion } from 'framer-motion'
import { subDays, subMonths, subYears, isAfter } from 'date-fns'

// Define types for our data
interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  status: 'lead' | 'active' | 'inactive';
  lifetime_value?: number;
  last_contact_date?: string;
  created_date: string;
}

interface NewsletterSubscriber {
  id: string;
  name?: string;
  email: string;
  status: 'subscribed' | 'unsubscribed' | 'pending';
  source?: string;
  tags?: string[];
  subscribed_date?: string;
  created_date: string;
}

const ITEMS_PER_PAGE = 10

export default function DashboardPage() {
  const [dateRange, setDateRange] = useState('30d')
  const [contactsPage, setContactsPage] = useState(1)
  const [newsletterPage, setNewsletterPage] = useState(1)

  const [allContacts, setAllContacts] = useState<Contact[]>([])
  const [allSubscribers, setAllSubscribers] = useState<NewsletterSubscriber[]>([])
  const [loading, setLoading] = useState(true)

  

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const contactsRes = await fetch('/api/contacts')
        const subscribersRes = await fetch('/api/subscribers')
        const contactsData = await contactsRes.json()
        const subscribersData = await subscribersRes.json()
        setAllContacts(contactsData)
        setAllSubscribers(subscribersData)
      } catch (error) {
        console.error("Failed to fetch data:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const getDateFilter = (dateStr: string) => {
    const now = new Date()
    switch (dateRange) {
      case '7d':
        return isAfter(new Date(dateStr), subDays(now, 7))
      case '30d':
        return isAfter(new Date(dateStr), subDays(now, 30))
      case '3m':
        return isAfter(new Date(dateStr), subMonths(now, 3))
      case '1y':
        return isAfter(new Date(dateStr), subYears(now, 1))
      default:
        return true
    }
  }

  const filteredContacts = allContacts.filter(c => getDateFilter(c.created_date))
  const filteredSubscribers = allSubscribers.filter(s => getDateFilter(s.created_date))

  const activeContactsCount = filteredContacts.filter(c => c.status === 'active').length
  const newSubscribersCount = filteredSubscribers.length

  const contactsTotalPages = Math.ceil(filteredContacts.length / ITEMS_PER_PAGE)
  const paginatedContacts = filteredContacts.slice(
    (contactsPage - 1) * ITEMS_PER_PAGE,
    contactsPage * ITEMS_PER_PAGE
  )

  const subscribersTotalPages = Math.ceil(filteredSubscribers.length / ITEMS_PER_PAGE)
  const paginatedSubscribers = filteredSubscribers.slice(
    (newsletterPage - 1) * ITEMS_PER_PAGE,
    newsletterPage * ITEMS_PER_PAGE
  )

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Dashboard</h1>
          <p className="text-slate-600">
            Track your contacts and newsletter performance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-6 flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-xl shadow-sm"
        >
          <DateFilter value={dateRange} onChange={setDateRange} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <StatsCard
            title="Active Contacts"
            value={activeContactsCount.toLocaleString()}
            icon={Users}
            trend="up"
            trendValue={`+${filteredContacts.length}`}
            primary={true}
          />
          <StatsCard
            title="New Subscribers"
            value={newSubscribersCount.toLocaleString()}
            icon={Mail}
            trend="up"
            trendValue={`+${newSubscribersCount}`}
            delay={0.1}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-100 rounded-lg">
                <Mail className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Newsletter
                </h2>
                <p className="text-sm text-slate-600">
                  {allSubscribers.length} total subscribers
                </p>
              </div>
            </div>
            <ExportButton
              data={allSubscribers.map(s => ({
                email: s.email,
                name: s.name,
                status: s.status,
                source: s.source,
                subscribed_date: s.subscribed_date || s.created_date,
              }))}
              filename="newsletter_subscribers"
              label="Export Subscribers"
            />
          </div>
          <NewsletterTable
            subscribers={paginatedSubscribers}
            currentPage={newsletterPage}
            totalPages={subscribersTotalPages}
            onPageChange={setNewsletterPage}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Users className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Contacts</h2>
                <p className="text-sm text-slate-600">
                  {allContacts.length} total contacts
                </p>
              </div>
            </div>
            <ExportButton
              data={allContacts.map(c => ({
                name: c.name,
                email: c.email,
                phone: c.phone,
                company: c.company,
                status: c.status,
                lifetime_value: c.lifetime_value,
                last_contact_date: c.last_contact_date,
              }))}
              filename="contacts"
              label="Export Contacts"
            />
          </div>
          <ContactsTable
            contacts={paginatedContacts}
            currentPage={contactsPage}
            totalPages={contactsTotalPages}
            onPageChange={setContactsPage}
          />
        </motion.div>
      </div>
    </div>
  )
}


// import React, { useState, useEffect } from 'react'
// import { base44 } from '@/api/base44Client'
// import { useQuery } from '@tanstack/react-query'
// import { DollarSign, TrendingDown, Users, Mail } from 'lucide-react'
// import StatsCard from '../components/dashboard/StatsCard'
// import RevenueChart from '../components/dashboard/RevenueChart'
// import DateFilter from '../components/dashboard/DateFilter'
// import ExportButton from '../components/dashboard/ExportButton'
// import ContactsTable from '../components/contacts/ContactsTable'
// import NewsletterTable from '../components/newsletter/NewsletterTable'
// import { motion } from 'framer-motion'
// import {
//   startOfMonth,
//   subMonths,
//   format,
//   isAfter,
//   isBefore,
//   subDays,
//   subYears,
// } from 'date-fns'

// const ITEMS_PER_PAGE = 10

// export default function Dashboard() {
//   const [dateRange, setDateRange] = useState('30d')
//   const [contactsPage, setContactsPage] = useState(1)
//   const [newsletterPage, setNewsletterPage] = useState(1)

//   const { data: transactions = [], isLoading: loadingTransactions } = useQuery({
//     queryKey: ['transactions'],
//     queryFn: () => base44.entities.Transaction.list('-date'),
//   })

//   const { data: allContacts = [], isLoading: loadingContacts } = useQuery({
//     queryKey: ['contacts'],
//     queryFn: () => base44.entities.Contact.list('-created_date'),
//   })

//   const { data: allSubscribers = [], isLoading: loadingSubscribers } = useQuery(
//     {
//       queryKey: ['subscribers'],
//       queryFn: () => base44.entities.NewsletterSubscriber.list('-created_date'),
//     }
//   )

//   const getDateFilter = () => {
//     const now = new Date()
//     switch (dateRange) {
//       case '7d':
//         return subDays(now, 7)
//       case '30d':
//         return subDays(now, 30)
//       case '3m':
//         return subMonths(now, 3)
//       case '1y':
//         return subYears(now, 1)
//       default:
//         return null
//     }
//   }

//   const filteredTransactions = transactions.filter(t => {
//     const filterDate = getDateFilter()
//     if (!filterDate) return true
//     return isAfter(new Date(t.date), filterDate)
//   })

//   const totalRevenue = filteredTransactions
//     .filter(t => t.type === 'revenue')
//     .reduce((sum, t) => sum + (t.amount || 0), 0)

//   const totalExpenses = filteredTransactions
//     .filter(t => t.type === 'expense')
//     .reduce((sum, t) => sum + (t.amount || 0), 0)

//   const netProfit = totalRevenue - totalExpenses

//   const activeContacts = allContacts.filter(c => c.status === 'active').length

//   const getChartData = () => {
//     const months = []
//     for (let i = 5; i >= 0; i--) {
//       const date = subMonths(new Date(), i)
//       const monthStart = startOfMonth(date)
//       const monthEnd = subMonths(startOfMonth(new Date()), i - 1)

//       const monthRevenue = transactions
//         .filter(
//           t =>
//             t.type === 'revenue' &&
//             isAfter(new Date(t.date), monthStart) &&
//             isBefore(new Date(t.date), monthEnd)
//         )
//         .reduce((sum, t) => sum + (t.amount || 0), 0)

//       const monthExpense = transactions
//         .filter(
//           t =>
//             t.type === 'expense' &&
//             isAfter(new Date(t.date), monthStart) &&
//             isBefore(new Date(t.date), monthEnd)
//         )
//         .reduce((sum, t) => sum + (t.amount || 0), 0)

//       months.push({
//         month: format(date, 'MMM'),
//         revenue: monthRevenue,
//         expense: monthExpense,
//       })
//     }
//     return months
//   }

//   const contactsTotalPages = Math.ceil(allContacts.length / ITEMS_PER_PAGE)
//   const paginatedContacts = allContacts.slice(
//     (contactsPage - 1) * ITEMS_PER_PAGE,
//     contactsPage * ITEMS_PER_PAGE
//   )

//   const subscribersTotalPages = Math.ceil(
//     allSubscribers.length / ITEMS_PER_PAGE
//   )
//   const paginatedSubscribers = allSubscribers.slice(
//     (newsletterPage - 1) * ITEMS_PER_PAGE,
//     newsletterPage * ITEMS_PER_PAGE
//   )

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mb-8"
//         >
//           <h1 className="text-4xl font-bold text-slate-900 mb-2">Dashboard</h1>
//           <p className="text-slate-600">
//             Track your business performance at a glance
//           </p>
//         </motion.div>

//         {/* Filters and Export */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.1 }}
//           className="mb-6 flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-xl shadow-sm"
//         >
//           <DateFilter value={dateRange} onChange={setDateRange} />
//           <ExportButton
//             data={filteredTransactions.map(t => ({
//               date: t.date,
//               type: t.type,
//               amount: t.amount,
//               category: t.category,
//               description: t.description,
//             }))}
//             filename="transactions"
//             label="Export Transactions"
//           />
//         </motion.div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           <StatsCard
//             title="Total Revenue"
//             value={`$${totalRevenue.toLocaleString()}`}
//             icon={DollarSign}
//             trend="up"
//             trendValue="+12.5%"
//             primary={true}
//           />
//           <StatsCard
//             title="Total Expenses"
//             value={`$${totalExpenses.toLocaleString()}`}
//             icon={TrendingDown}
//             trend="down"
//             trendValue="-3.2%"
//             delay={0.1}
//           />
//           <StatsCard
//             title="Net Profit"
//             value={`$${netProfit.toLocaleString()}`}
//             icon={DollarSign}
//             trend="up"
//             trendValue="+18.7%"
//             delay={0.2}
//           />
//           <StatsCard
//             title="Active Contacts"
//             value={activeContacts}
//             icon={Users}
//             trend="up"
//             trendValue="+24"
//             delay={0.3}
//           />
//         </div>

//         {/* Revenue Chart */}
//         <div className="mb-8">
//           <RevenueChart data={getChartData()} />
//         </div>

//         {/* Newsletter Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           className="mb-8"
//         >
//           <div className="flex items-center justify-between mb-4">
//             <div className="flex items-center gap-3">
//               <div className="p-2 bg-amber-100 rounded-lg">
//                 <Mail className="w-5 h-5 text-amber-600" />
//               </div>
//               <div>
//                 <h2 className="text-2xl font-bold text-slate-900">
//                   Newsletter
//                 </h2>
//                 <p className="text-sm text-slate-600">
//                   {allSubscribers.length} total subscribers
//                 </p>
//               </div>
//             </div>
//             <ExportButton
//               data={allSubscribers.map(s => ({
//                 email: s.email,
//                 name: s.name,
//                 status: s.status,
//                 source: s.source,
//                 subscribed_date: s.subscribed_date || s.created_date,
//               }))}
//               filename="newsletter_subscribers"
//               label="Export Subscribers"
//             />
//           </div>
//           <NewsletterTable
//             subscribers={paginatedSubscribers}
//             currentPage={newsletterPage}
//             totalPages={subscribersTotalPages}
//             onPageChange={setNewsletterPage}
//           />
//         </motion.div>

//         {/* Contacts Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//         >
//           <div className="flex items-center justify-between mb-4">
//             <div className="flex items-center gap-3">
//               <div className="p-2 bg-indigo-100 rounded-lg">
//                 <Users className="w-5 h-5 text-indigo-600" />
//               </div>
//               <div>
//                 <h2 className="text-2xl font-bold text-slate-900">Contacts</h2>
//                 <p className="text-sm text-slate-600">
//                   {allContacts.length} total contacts
//                 </p>
//               </div>
//             </div>
//             <ExportButton
//               data={allContacts.map(c => ({
//                 name: c.name,
//                 email: c.email,
//                 phone: c.phone,
//                 company: c.company,
//                 status: c.status,
//                 lifetime_value: c.lifetime_value,
//                 last_contact_date: c.last_contact_date,
//               }))}
//               filename="contacts"
//               label="Export Contacts"
//             />
//           </div>
//           <ContactsTable
//             contacts={paginatedContacts}
//             currentPage={contactsPage}
//             totalPages={contactsTotalPages}
//             onPageChange={setContactsPage}
//           />
//         </motion.div>
//       </div>
//     </div>
//   )
// }