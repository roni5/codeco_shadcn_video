import { Card } from '@/components/ui/card'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import FloatingCode from '@/components/floating-code'
import {
  Shield,
  Users,
  Mail,
  TrendingUp,
  Activity,
  Database,
  Zap,
  AlertCircle,
  CheckCircle,
  Clock,
  BarChart3,
  Settings,
  FileText,
  Lock,
} from 'lucide-react'

// Mock admin check - replace with your actual admin logic
async function isAdmin(session: any): Promise<boolean> {
  // Replace this with your actual admin check logic
  // For example: return session?.user?.role === "admin"
  return true // For demo purposes, always return true
}

// Mock data functions - replace with actual database queries
async function getAdminStats() {
  return {
    totalUsers: 1247,
    activeUsers: 892,
    totalContacts: 3421,
    totalSubscribers: 2156,
    newSignupsToday: 23,
    activeSessionsNow: 156,
    revenueThisMonth: 45678,
    conversionRate: 12.4,
    systemUptime: 99.98,
    storageUsed: 67.3,
  }
}

async function getRecentActivity() {
  return [
    {
      id: 1,
      action: 'New user registration',
      user: 'john@example.com',
      timestamp: '2 mins ago',
    },
    {
      id: 2,
      action: 'Newsletter subscription',
      user: 'sarah@example.com',
      timestamp: '5 mins ago',
    },
    {
      id: 3,
      action: 'Contact form submission',
      user: 'mike@example.com',
      timestamp: '12 mins ago',
    },
    {
      id: 4,
      action: 'Payment processed',
      user: 'emma@example.com',
      timestamp: '18 mins ago',
    },
    {
      id: 5,
      action: 'Account upgraded',
      user: 'david@example.com',
      timestamp: '25 mins ago',
    },
  ]
}

async function getQuickTips() {
  return [
    {
      title: 'Monitor Active Sessions',
      description:
        'Keep track of concurrent users to optimize server resources',
      icon: Activity,
      color: 'from-cyan-600 to-blue-600',
    },
    {
      title: 'Review Analytics Daily',
      description:
        'Check conversion rates and user engagement metrics every morning',
      icon: BarChart3,
      color: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Backup Database Weekly',
      description: 'Schedule automated backups to prevent data loss',
      icon: Database,
      color: 'from-yellow-600 to-orange-600',
    },
    {
      title: 'Security Audits',
      description: 'Run security scans monthly to identify vulnerabilities',
      icon: Lock,
      color: 'from-green-600 to-emerald-600',
    },
  ]
}

export default async function AdminDashboardPage() {
  const session = await auth()

  if (!session) {
    redirect('/signin')
  }

  const adminAccess = await isAdmin(session)

  if (!adminAccess) {
    redirect('/')
  }

  const stats = await getAdminStats()
  const recentActivity = await getRecentActivity()
  const quickTips = await getQuickTips()

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Video Background with Gradient Overlay */}
      <div className="fixed inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/images/a-20lava-20lamp-20effect-20with-20oscillating-20waves-20and-20subtle-20movement-2c-20soft-20color-20transitions-2c-20organic-20fluid-20motion-2c-20dreamy-20atmosphere.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 via-purple-500/40 via-pink-500/40 to-yellow-400/40" />
      </div>

      <FloatingCode />

      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-white flex items-center gap-2"
          >
            <Shield className="w-8 h-8" />
            Codex Admin
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-white/90 hover:text-white transition text-sm"
            >
              Public Site
            </Link>
            <Link
              href="/signin"
              className="text-white/90 hover:text-white transition text-sm"
            >
              Sign Out
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 pb-20">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 text-balance">
            Admin Dashboard
          </h1>
          <p className="text-white/90 text-lg">
            Welcome back, {session.user?.name}! Here's your system overview.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Stats Grid (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Primary Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="bg-white/95 backdrop-blur border-0 shadow-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <Users className="w-8 h-8 text-cyan-600" />
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">
                  {stats.totalUsers.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Total Users</div>
                <div className="text-xs text-green-600 font-semibold mt-1">
                  +{stats.newSignupsToday} today
                </div>
              </Card>

              <Card className="bg-white/95 backdrop-blur border-0 shadow-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <Activity className="w-8 h-8 text-purple-600" />
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </div>
                <div className="text-3xl font-bold text-gray-900">
                  {stats.activeUsers.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Active Users</div>
                <div className="text-xs text-gray-500 mt-1">
                  {stats.activeSessionsNow} online now
                </div>
              </Card>

              <Card className="bg-white/95 backdrop-blur border-0 shadow-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <Mail className="w-8 h-8 text-pink-600" />
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">
                  {stats.totalSubscribers.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Subscribers</div>
                <div className="text-xs text-pink-600 font-semibold mt-1">
                  Newsletter
                </div>
              </Card>

              <Card className="bg-white/95 backdrop-blur border-0 shadow-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <FileText className="w-8 h-8 text-yellow-600" />
                  <Database className="w-4 h-4 text-gray-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">
                  {stats.totalContacts.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Total Contacts</div>
                <div className="text-xs text-gray-500 mt-1">All sources</div>
              </Card>
            </div>

            {/* Performance Metrics */}
            <Card className="bg-white/95 backdrop-blur border-0 shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-purple-600" />
                Performance Metrics
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-cyan-200">
                  <div className="text-3xl font-bold text-cyan-600">
                    {stats.conversionRate}%
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    Conversion Rate
                  </div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                  <div className="text-3xl font-bold text-purple-600">
                    {stats.systemUptime}%
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    System Uptime
                  </div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                  <div className="text-3xl font-bold text-yellow-600">
                    {stats.storageUsed}%
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Storage Used</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <div className="text-3xl font-bold text-green-600">
                    ${(stats.revenueThisMonth / 1000).toFixed(1)}k
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Revenue MTD</div>
                </div>
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-white/95 backdrop-blur border-0 shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-6 h-6 text-blue-600" />
                Recent Activity
              </h3>
              <div className="space-y-3">
                {recentActivity.map(activity => (
                  <div
                    key={activity.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {activity.action}
                        </p>
                        <p className="text-xs text-gray-600">{activity.user}</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">
                      {activity.timestamp}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                href="/admin/activity"
                className="mt-4 block text-center text-sm text-purple-600 hover:text-purple-700 font-semibold"
              >
                View All Activity →
              </Link>
            </Card>
          </div>

          {/* Right Column - Quick Actions & Tips */}
          <div className="space-y-6">
            {/* System Status */}
            <Card className="bg-gradient-to-br from-green-600 to-emerald-600 text-white border-0 shadow-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-8 h-8" />
                <h3 className="font-bold text-xl">System Status</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/90">API Server</span>
                  <span className="font-semibold">Operational</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/90">Database</span>
                  <span className="font-semibold">Healthy</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/90">CDN</span>
                  <span className="font-semibold">Active</span>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-white/95 backdrop-blur border-0 shadow-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-600" />
                Quick Actions
              </h3>
              <div className="space-y-2">
                <Link
                  href="/admin/users"
                  className="flex items-center gap-3 p-3 bg-cyan-50 rounded-lg hover:bg-cyan-100 transition border border-cyan-200"
                >
                  <Users className="w-5 h-5 text-cyan-600" />
                  <span className="text-sm font-semibold text-gray-900">
                    Manage Users
                  </span>
                </Link>
                <Link
                  href="/admin/newsletter"
                  className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition border border-purple-200"
                >
                  <Mail className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-semibold text-gray-900">
                    Newsletter
                  </span>
                </Link>
                <Link
                  href="/admin/settings"
                  className="flex items-center gap-3 p-3 bg-pink-50 rounded-lg hover:bg-pink-100 transition border border-pink-200"
                >
                  <Settings className="w-5 h-5 text-pink-600" />
                  <span className="text-sm font-semibold text-gray-900">
                    Settings
                  </span>
                </Link>
                <Link
                  href="/admin/analytics"
                  className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition border border-yellow-200"
                >
                  <BarChart3 className="w-5 h-5 text-yellow-600" />
                  <span className="text-sm font-semibold text-gray-900">
                    Analytics
                  </span>
                </Link>
              </div>
            </Card>

            {/* Alerts */}
            <Card className="bg-gradient-to-br from-orange-600 to-red-600 text-white border-0 shadow-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <AlertCircle className="w-6 h-6" />
                <h3 className="font-bold text-lg">Alerts</h3>
              </div>
              <div className="space-y-2">
                <div className="text-sm bg-white/20 rounded p-2">
                  <p className="font-semibold">Storage at 67%</p>
                  <p className="text-xs text-white/90">
                    Consider upgrading soon
                  </p>
                </div>
                <div className="text-sm bg-white/20 rounded p-2">
                  <p className="font-semibold">2 pending reviews</p>
                  <p className="text-xs text-white/90">
                    User reports awaiting action
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Admin Tips Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <Zap className="w-6 h-6" />
            Pro Tips & Best Practices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickTips.map((tip, index) => {
              const Icon = tip.icon
              return (
                <Card
                  key={index}
                  className={`bg-gradient-to-br ${tip.color} text-white border-0 shadow-xl p-6`}
                >
                  <Icon className="w-8 h-8 mb-3" />
                  <h4 className="font-bold text-lg mb-2">{tip.title}</h4>
                  <p className="text-sm text-white/90">{tip.description}</p>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Quick Overview Card */}
        <Card className="mt-8 bg-white/95 backdrop-blur border-0 shadow-xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-6 h-6 text-blue-600" />
            Quick Overview & Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-2">
                Data Management
              </h4>
              <p className="text-sm text-gray-600">
                Your mock JSON data is loaded from the dashboard. Connect to
                Drizzle ORM to persist data to PostgreSQL.
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-gray-900 mb-2">
                Authentication
              </h4>
              <p className="text-sm text-gray-600">
                Admin logic checks session role. Implement proper role-based
                access control in production.
              </p>
            </div>
            <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
              <h4 className="font-semibold text-gray-900 mb-2">Scaling Tips</h4>
              <p className="text-sm text-gray-600">
                Monitor active sessions and storage usage. Set up alerts when
                thresholds are reached.
              </p>
            </div>
          </div>
        </Card>
      </main>
    </div>
  )
}


// import { auth, signIn, signOut } from '@/lib/auth'

// // import { auth } from "@/lib/auth";
// function SignIn() {
//   return (
//     <form
//       action={async () => {
//         'use server'
//         await signIn('github')
//       }}
//     >
//       <p>You are not logged in</p>
//       <button type="submit">Sign in with GitHub</button>
//     </form>
//   )
// }

// function SignOut({ children }: { children: React.ReactNode }) {
//   return (
//     <>
//       <form
//         action={async () => {
//           'use server'
//           await signOut()
//         }}
//       >
//         <p>{children}</p>
//         <button type="submit">Sign out</button>
//       </form>
//       <form
//         action={async () => {
//           'use server'
//           await signIn('google') // <-- This is the key change for Google!
//         }}
//       >
//         <button type="submit">Sign in with Google</button>
//       </form>
//     </>
//   )
// }

// export default async function Page() {
//   const session = await auth()
//   const user = session?.user?.email

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center gap-2 space-y-8 mt-12">
//       <section className="space-y-3 text-center">
//         <h1>Home</h1>
//         <div>{user ? <SignOut>{`Welcome ${user}`}</SignOut> : <SignIn />}</div>
//       </section>
//     </main>
//   )
// }
