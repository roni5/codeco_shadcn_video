import "next-auth";

declare module "next-auth" {
	interface User {
		role?: "ADMIN" | "USER";
	}

	interface Session {
		user: {
			id: string;
			role: "ADMIN" | "USER";
			name?: string | null;
			email?: string | null;
			image?: string | null;
		};
	}
}
// import 'next-auth'

// declare module 'next-auth' {
// 	interface User {
// 		role?: 'ADMIN' | 'USER'
// 	}

// 	interface Session {
// 		user: {
// 			id: string
// 			role: 'ADMIN' | 'USER'
// 			name?: string | null
// 			email?: string | null
// 			image?: string | null
// 		}
// 	}
// }

// declare module "next-auth" {
// 	/**
// 	 * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
// 	 */
// 	interface Session {
// 		user: {
// 			id: string;
// 			name: string;
// 			email: string;
// 			image: string;
// 		};
// 	}
// }
