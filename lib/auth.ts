import { DrizzleAdapter } from "@auth/drizzle-adapter";
import type { Session, User } from "next-auth";
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { db } from "./db";

const googleId =
	process.env.AUTH_GOOGLE_ID ?? process.env.AUTH_GOOGLE_CLIENT_ID;
const googleSecret =
	process.env.AUTH_GOOGLE_SECRET ?? process.env.AUTH_GOOGLE_CLIENT_SECRET;
const githubId =
	process.env.AUTH_GITHUB_ID ?? process.env.AUTH_GITHUB_CLIENT_ID;
const githubSecret =
	process.env.AUTH_GITHUB_SECRET ?? process.env.AUTH_GITHUB_CLIENT_SECRET;

if (!googleId || !googleSecret || !githubId || !githubSecret) {
	throw new Error(
		"Missing OAuth env: GOOGLE and GITHUB ID/SECRET (v5 or legacy names)",
	);
}

export const { handlers, auth, signIn, signOut } = NextAuth({
	adapter: DrizzleAdapter(db),
	session: { strategy: "database" },
	providers: [
		Google({ clientId: googleId, clientSecret: googleSecret }),
		GitHub({ clientId: githubId, clientSecret: githubSecret }),
	],
	callbacks: {
		session({ session, user }) {
			const customUser = user as User & { role?: "ADMIN" | "USER" };

			return {
				...session,
				user: {
					...session.user,
					id: customUser.id,
					role: customUser.role ?? "USER",
				},
			};
		},
	},
});

export const { GET, POST } = handlers;

// import { DrizzleAdapter } from '@auth/drizzle-adapter'
// import NextAuth from 'next-auth'
// import GitHub from 'next-auth/providers/github'
// import Google from 'next-auth/providers/google'
// import { db } from './db'

// const googleId = process.env.AUTH_GOOGLE_ID ?? process.env.AUTH_GOOGLE_CLIENT_ID
// const googleSecret =
// 	process.env.AUTH_GOOGLE_SECRET ?? process.env.AUTH_GOOGLE_CLIENT_SECRET
// const githubId = process.env.AUTH_GITHUB_ID ?? process.env.AUTH_GITHUB_CLIENT_ID
// const githubSecret =
// 	process.env.AUTH_GITHUB_SECRET ?? process.env.AUTH_GITHUB_CLIENT_SECRET

// if (!googleId || !googleSecret || !githubId || !githubSecret) {
// 	throw new Error(
// 		'Missing OAuth env: GOOGLE and GITHUB ID/SECRET (v5 or legacy names)'
// 	)
// }

// export const { handlers, auth, signIn, signOut } = NextAuth({
// 	adapter: DrizzleAdapter(db),
// 	session: { strategy: 'database' },
// 	providers: [
// 		Google({ clientId: googleId, clientSecret: googleSecret }),
// 		GitHub({ clientId: githubId, clientSecret: githubSecret }),
// 	],
// 	callbacks: {
// 		session({ session, user }) {
// 			return {
// 				...session,
// 				user: {
// 					...session.user,
// 					id: user.id,
// 					role: (user as { role?: string }).role ?? 'USER',
// 				},
// 			}
// 		},
// 	},
// })

// export const { GET, POST } = handlers

// import { DrizzleAdapter } from '@auth/drizzle-adapter'
// import type { Session } from 'next-auth'
// import NextAuth, { type AuthConfig } from 'next-auth'
// import GitHub from 'next-auth/providers/github'
// import Google from 'next-auth/providers/google'
// import { db } from './db'

// const googleId = process.env.AUTH_GOOGLE_ID ?? process.env.AUTH_GOOGLE_CLIENT_ID
// const googleSecret =
//   process.env.AUTH_GOOGLE_SECRET ?? process.env.AUTH_GOOGLE_CLIENT_SECRET
// const githubId = process.env.AUTH_GITHUB_ID ?? process.env.AUTH_GITHUB_CLIENT_ID
// const githubSecret =
//   process.env.AUTH_GITHUB_SECRET ?? process.env.AUTH_GITHUB_CLIENT_SECRET

// if (!googleId || !googleSecret || !githubId || !githubSecret) {
//   throw new Error(
//     'Missing OAuth env: GOOGLE and GITHUB ID/SECRET (v5 or legacy names)'
//   )
// }

// type UserRole = 'ADMIN' | 'USER'

// const authConfig: AuthConfig = {
//   adapter: DrizzleAdapter(db),
//   session: { strategy: 'database' }, // no JWTs
//   providers: [
//     Google({ clientId: googleId, clientSecret: googleSecret }),
//     GitHub({ clientId: githubId, clientSecret: githubSecret })
//   ],
//   callbacks: {
//     async session({
//       session,
//       user
//     }: {
//       session: Session
//       user: { id: string; role?: UserRole }
//     }) {
//       if (session.user) {
//         Object.assign(session.user, {
//           id: user.id,
//           role: user.role ?? 'USER'
//         })
//       }
//       return session
//     }
//   }
// }

// export const {
//   handlers: { GET, POST },
//   auth,
//   signIn,
//   signOut
// } = NextAuth(authConfig)

// import { DrizzleAdapter } from '@auth/drizzle-adapter'
// import type { Session } from 'next-auth'
// import NextAuth from 'next-auth'
// import GitHub from 'next-auth/providers/github'
// import Google from 'next-auth/providers/google'
// import { db } from './db'

// const googleId = process.env.AUTH_GOOGLE_ID ?? process.env.AUTH_GOOGLE_CLIENT_ID
// const googleSecret =
// 	process.env.AUTH_GOOGLE_SECRET ?? process.env.AUTH_GOOGLE_CLIENT_SECRET
// const githubId = process.env.AUTH_GITHUB_ID ?? process.env.AUTH_GITHUB_CLIENT_ID
// const githubSecret =
// 	process.env.AUTH_GITHUB_SECRET ?? process.env.AUTH_GITHUB_CLIENT_SECRET

// if (!googleId || !googleSecret || !githubId || !githubSecret) {
// 	throw new Error(
// 		'Missing OAuth env: GOOGLE and GITHUB ID/SECRET (v5 or legacy names)'
// 	)
// }

// type UserRole = 'ADMIN' | 'USER'

// export const {
// 	handlers: { GET, POST },
// 	auth,
// 	signIn,
// 	signOut,
// } = NextAuth({
// 	adapter: DrizzleAdapter(db),
// 	session: { strategy: 'database' },
// 	providers: [
// 		Google({ clientId: googleId, clientSecret: googleSecret }),
// 		GitHub({ clientId: githubId, clientSecret: githubSecret }),
// 	],
// 	callbacks: {
// 		async session({
// 			session,
// 			user,
// 		}: {
// 			session: Session
// 			user: { id: string; role?: UserRole }
// 		}) {
// 			if (session.user) {
// 				session.user = {
// 					...session.user,
// 					id: user.id,
// 					role: user.role ?? 'USER',
// 				}
// 			}
// 			return session
// 		},
// 	},
// })
// import { DrizzleAdapter } from '@auth/drizzle-adapter'
// import type { Session } from 'next-auth'
// import NextAuth from 'next-auth'
// import GitHub from 'next-auth/providers/github'
// import Google from 'next-auth/providers/google'
// import { db } from './db'

// const googleId = process.env.AUTH_GOOGLE_ID ?? process.env.AUTH_GOOGLE_CLIENT_ID
// const googleSecret =
//   process.env.AUTH_GOOGLE_SECRET ?? process.env.AUTH_GOOGLE_CLIENT_SECRET
// const githubId = process.env.AUTH_GITHUB_ID ?? process.env.AUTH_GITHUB_CLIENT_ID
// const githubSecret =
//   process.env.AUTH_GITHUB_SECRET ?? process.env.AUTH_GITHUB_CLIENT_SECRET

// if (!googleId || !googleSecret || !githubId || !githubSecret) {
//   throw new Error(
//     'Missing OAuth env: GOOGLE and GITHUB ID/SECRET (v5 or legacy names)'
//   )
// }

// type UserRole = 'ADMIN' | 'USER'

// export const {
//   handlers: { GET, POST },
//   auth,
//   signIn,
//   signOut
// } = NextAuth({
//   adapter: DrizzleAdapter(db),
//   session: { strategy: 'database' }, // no JWTs
//   providers: [
//     Google({ clientId: googleId, clientSecret: googleSecret }),
//     GitHub({ clientId: githubId, clientSecret: githubSecret })
//   ],
//   callbacks: {
//     async session({
//       session,
//       user
//     }: {
//       session: Session
//       user: { id: string; role?: UserRole }
//     }) {
//       if (session.user) {
//         // add fields without using `any`
//         Object.assign(session.user, {
//           id: user.id,
//           role: user.role ?? 'USER'
//         })
//       }
//       return session
//     }
//   }
// })
// import { DrizzleAdapter } from '@auth/drizzle-adapter'
// import type { Session, NextAuthConfig } from 'next-auth'
// import NextAuth from 'next-auth'
// import GitHub from 'next-auth/providers/github'
// import Google from 'next-auth/providers/google'
// import { db } from './db'

// const googleId = process.env.AUTH_GOOGLE_ID ?? process.env.AUTH_GOOGLE_CLIENT_ID
// const googleSecret =
//   process.env.AUTH_GOOGLE_SECRET ?? process.env.AUTH_GOOGLE_CLIENT_SECRET
// const githubId = process.env.AUTH_GITHUB_ID ?? process.env.AUTH_GITHUB_CLIENT_ID
// const githubSecret =
//   process.env.AUTH_GITHUB_SECRET ?? process.env.AUTH_GITHUB_CLIENT_SECRET

// if (!googleId || !googleSecret || !githubId || !githubSecret) {
//   throw new Error(
//     'Missing OAuth env: GOOGLE and GITHUB ID/SECRET (v5 or legacy names)'
//   )
// }

// type UserRole = 'ADMIN' | 'USER'

// export const {
//   handlers: { GET, POST },
//   auth,
//   signIn,
//   signOut
// } = NextAuth({
//   adapter: DrizzleAdapter(db),
//   session: { strategy: 'database' }, // no JWTs
//   providers: [
//     Google({ clientId: googleId, clientSecret: googleSecret }),
//     GitHub({ clientId: githubId, clientSecret: githubSecret })
//   ],
//   callbacks: {
//     async session({
//       session,
//       user
//     }: {
//       session: Session
//       user: { id: string; role?: UserRole }
//     }) {
//       if (session.user) {
//         // add strongly-typed fields without any
//         Object.assign(session.user, {
//           id: user.id,
//           role: user.role ?? 'USER'
//         })
//       }
//       return session
//     }
//   }
// } satisfies NextAuthConfig)
