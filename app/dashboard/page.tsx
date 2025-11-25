import { redirect } from 'next/navigation'
import { db } from '@/lib/db'
import { contacts, newsletters, users, type UserRole } from '@/lib/schema'
import { desc, eq, sql } from 'drizzle-orm'
import { auth } from '@/lib/auth'
import type { Session } from 'next-auth'
import DashboardClient from './DashboardClient'

function isAdminRole(role: UserRole | null | undefined): boolean {
  return role === 'ADMIN'
}

async function getContacts() {
  return db.select().from(contacts).orderBy(desc(contacts.createdAt))
}

async function getNewsletters() {
  return db.select().from(newsletters).orderBy(desc(newsletters.createdAt))
}

async function getUserRoleByEmail(email: string): Promise<UserRole | null> {
  const rows = await db
    .select({ role: users.role, email: users.email })
    .from(users)
    .where(eq(users.email, email))
    .limit(1)

  // TEMP: log what the DB actually returned
  console.log('[DBG] role lookup rows:', rows)
  return rows[0]?.role ?? null
}

export default async function DashboardPage() {
  const session: Session | null = await auth()

  // TEMP: which DB is the app using?
  const dbName = await db.execute(sql`select current_database() as db`)
  console.log('[DBG] current_database():', dbName.rows?.[0])

  if (!session?.user?.email) {
    console.log('[DBG] no session email, redirecting to /signin')
    redirect('/signin')
  }
  const email = session.user.email
  console.log('[DBG] session email:', email)

  const role = await getUserRoleByEmail(email)
  console.log('[DBG] resolved role:', role)

  if (!isAdminRole(role)) {
    //console.log('[DBG] not admin, redirecting to /')
    redirect('/')
  }

  const [allContacts, allNewsletters] = await Promise.all([
    getContacts(),
    getNewsletters(),
  ])

  return (
    <DashboardClient
      initialContacts={allContacts}
      initialNewsletters={allNewsletters}
      session={session}
    />
  )
}
