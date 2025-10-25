import { DrizzleAdapter } from '@auth/drizzle-adapter'
import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import { db } from './db'

// Env with backward-compatible fallbacks
const googleId = process.env.AUTH_GOOGLE_ID ?? process.env.AUTH_GOOGLE_CLIENT_ID
const googleSecret = process.env.AUTH_GOOGLE_SECRET ?? process.env.AUTH_GOOGLE_CLIENT_SECRET
const githubId = process.env.AUTH_GITHUB_ID ?? process.env.AUTH_GITHUB_CLIENT_ID
const githubSecret = process.env.AUTH_GITHUB_SECRET ?? process.env.AUTH_GITHUB_CLIENT_SECRET

if (!googleId || !googleSecret || !githubId || !githubSecret) {
  throw new Error('Missing OAuth env: GOOGLE and GITHUB ID/SECRET (v5 or legacy names)')
}

export const { handlers: { GET, POST }, auth, signIn, signOut } = (NextAuth as any)({
  adapter: DrizzleAdapter(db),
  providers: [
    Google({ clientId: String(googleId), clientSecret: String(googleSecret) }),
    GitHub({ clientId: String(githubId), clientSecret: String(githubSecret) }),
  ],
})

