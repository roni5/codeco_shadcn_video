import { DrizzleAdapter } from '@auth/drizzle-adapter'
import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import { db } from './db'
import type { Session } from 'next-auth'

const googleId = process.env.AUTH_GOOGLE_ID ?? process.env.AUTH_GOOGLE_CLIENT_ID
const googleSecret = process.env.AUTH_GOOGLE_SECRET ?? process.env.AUTH_GOOGLE_CLIENT_SECRET
const githubId = process.env.AUTH_GITHUB_ID ?? process.env.AUTH_GITHUB_CLIENT_ID
const githubSecret = process.env.AUTH_GITHUB_SECRET ?? process.env.AUTH_GITHUB_CLIENT_SECRET

if (!googleId || !googleSecret || !githubId || !githubSecret) {
  throw new Error('Missing OAuth env: GOOGLE and GITHUB ID/SECRET (v5 or legacy names)')
}

type UserRole = 'ADMIN' | 'USER'

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = (NextAuth as any)({
  adapter: DrizzleAdapter(db),
  session: { strategy: 'database' }, // no JWTs
  providers: [
    // keep explicit options since you already validated envs
    Google({ clientId: String(googleId), clientSecret: String(googleSecret) }),
    GitHub({ clientId: String(githubId), clientSecret: String(githubSecret) }),
  ],
  callbacks: {
    // fully typed to avoid “implicitly has an 'any' type”
    async session({
      session,
      user,
    }: {
      session: Session
      user: { id: string; role?: UserRole }
    }) {
      if (session.user) {
        // ensure these exist on the session used by your page.tsx
        ;(session.user as any).id = user.id
        ;(session.user as any).role = user.role ?? 'USER'
      }
      return session
    },
  },
})

// import { DrizzleAdapter } from '@auth/drizzle-adapter'
// import NextAuth from 'next-auth'
// import GitHub from 'next-auth/providers/github'
// import Google from 'next-auth/providers/google'
// import { db } from './db'

// // v5 reads AUTH_GOOGLE_ID/SECRET and AUTH_GITHUB_ID/SECRET from env automatically

// export const {
//   handlers: { GET, POST },
//   auth,
//   signIn,
//   signOut,
// } = NextAuth({
//   adapter: DrizzleAdapter(db),
//   session: { strategy: 'database' }, // no JWTs
//   providers: [
//     Google, // uses env
//     GitHub, // uses env
//   ],
//   callbacks: {
//     // Type the destructured params to avoid "implicitly has an 'any' type"
//     async session({
//       session,
//       user,
//     }: {
//       session: import('next-auth').Session
//       user: { id: string; role?: 'ADMIN' | 'USER' }
//     }) {
//       if (session.user) {
//         session.user.id = user.id
//         session.user.role = user.role ?? 'USER'
//       }
//       return session
//     },
//   },
// })


// import { DrizzleAdapter } from '@auth/drizzle-adapter'
// import NextAuth from 'next-auth'
// import GitHub from 'next-auth/providers/github'
// import Google from 'next-auth/providers/google'
// import { db } from './db'

// const googleId = process.env.AUTH_GOOGLE_ID ?? process.env.AUTH_GOOGLE_CLIENT_ID
// const googleSecret = process.env.AUTH_GOOGLE_SECRET ?? process.env.AUTH_GOOGLE_CLIENT_SECRET
// const githubId = process.env.AUTH_GITHUB_ID ?? process.env.AUTH_GITHUB_CLIENT_ID
// const githubSecret = process.env.AUTH_GITHUB_SECRET ?? process.env.AUTH_GITHUB_CLIENT_SECRET

// if (!googleId || !googleSecret || !githubId || !githubSecret) {
//   throw new Error('Missing OAuth env: GOOGLE and GITHUB ID/SECRET (v5 or legacy names)')
// }

// export const { handlers: { GET, POST }, auth, signIn, signOut } = (NextAuth as any)({
//   adapter: DrizzleAdapter(db),
//   providers: [
//     Google({ clientId: String(googleId), clientSecret: String(googleSecret) }),
//     GitHub({ clientId: String(githubId), clientSecret: String(githubSecret) }),
//   ],
//   // If you require no JWTs:
//   session: { strategy: 'database' },
//   callbacks: {
//     async session({ session, user }) {
//       if (session.user) {
//         session.user.id = user.id
//         session.user.role = (user as any).role ?? 'USER'
//       }
//       return session
//     },
//   },
// })
// import { DrizzleAdapter } from '@auth/drizzle-adapter'
// import NextAuth from 'next-auth'
// import GitHub from 'next-auth/providers/github'
// import Google from 'next-auth/providers/google'
// import { db } from './db'

// const googleId = process.env.AUTH_GOOGLE_ID ?? process.env.AUTH_GOOGLE_CLIENT_ID
// const googleSecret = process.env.AUTH_GOOGLE_SECRET ?? process.env.AUTH_GOOGLE_CLIENT_SECRET
// const githubId = process.env.AUTH_GITHUB_ID ?? process.env.AUTH_GITHUB_CLIENT_ID
// const githubSecret = process.env.AUTH_GITHUB_SECRET ?? process.env.AUTH_GITHUB_CLIENT_SECRET

// if (!googleId || !googleSecret || !githubId || !githubSecret) {
//   throw new Error('Missing OAuth env: GOOGLE and GITHUB ID/SECRET (v5 or legacy names)')
// }

// export const { handlers: { GET, POST }, auth, signIn, signOut } = (NextAuth as any)({
//   adapter: DrizzleAdapter(db),
//   providers: [
//     Google({ clientId: String(googleId), clientSecret: String(googleSecret) }),
//     GitHub({ clientId: String(githubId), clientSecret: String(githubSecret) }),
//   ],
//   // ADD THIS CALLBACK so role is present on the session
//   callbacks: {
//     async session({ session, user }) {
//       if (session.user) {
//         // Ensure these exist on the session object
//         session.user.id = user.id
//         // Copy role from your users table (set by your “promote to admin” script)
//         session.user.role = (user as any).role ?? 'USER'
//       }
//       return session
//     },
//   },
// })
// import { DrizzleAdapter } from '@auth/drizzle-adapter'
// import NextAuth from 'next-auth'
// import GitHub from 'next-auth/providers/github'
// import Google from 'next-auth/providers/google'
// import { db } from './db'

// // Env with backward-compatible fallbacks
// const googleId = process.env.AUTH_GOOGLE_ID ?? process.env.AUTH_GOOGLE_CLIENT_ID
// const googleSecret = process.env.AUTH_GOOGLE_SECRET ?? process.env.AUTH_GOOGLE_CLIENT_SECRET
// const githubId = process.env.AUTH_GITHUB_ID ?? process.env.AUTH_GITHUB_CLIENT_ID
// const githubSecret = process.env.AUTH_GITHUB_SECRET ?? process.env.AUTH_GITHUB_CLIENT_SECRET

// if (!googleId || !googleSecret || !githubId || !githubSecret) {
//   throw new Error('Missing OAuth env: GOOGLE and GITHUB ID/SECRET (v5 or legacy names)')
// }

// export const { handlers: { GET, POST }, auth, signIn, signOut } = (NextAuth as any)({
//   adapter: DrizzleAdapter(db),
//   providers: [
//     Google({ clientId: String(googleId), clientSecret: String(googleSecret) }),
//     GitHub({ clientId: String(githubId), clientSecret: String(githubSecret) }),
//   ],
// })

