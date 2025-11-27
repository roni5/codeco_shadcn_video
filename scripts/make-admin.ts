import "dotenv/config";
import { db } from "@/lib/db";
import { type UserRole, users } from "@/lib/schema";
import { eq, ilike, sql } from "drizzle-orm";

async function main() {
	const [, , emailArg, roleArg] = process.argv;
	if (!emailArg) {
		console.error("Usage: npx tsx scripts/make-admin.ts <email> [ADMIN|USER]");
		process.exit(1);
	}
	const desiredRole = (roleArg ?? "ADMIN").toUpperCase() as UserRole;
	if (!["ADMIN", "USER"].includes(desiredRole)) {
		console.error("Role must be ADMIN or USER");
		process.exit(1);
	}

	// Show which DB we are operating on (prevents “wrong DB” mistakes)
	const dbName = await db.execute(sql`select current_database() as db`);
	console.log(`Operating on DB: ${dbName.rows?.[0]?.db}`);

	// Case-insensitive lookup to avoid subtle mismatches
	const found = await db
		.select({ id: users.id, email: users.email, role: users.role })
		.from(users)
		.where(ilike(users.email, emailArg.trim()))
		.limit(1);

	if (found.length === 0) {
		console.error(`User not found: ${emailArg}`);
		process.exit(1);
	}

	const current = found[0];
	if (current.role === desiredRole) {
		console.log(`No change: ${current.email} already ${current.role}`);
		process.exit(0);
	}

	const updated = await db
		.update(users)
		.set({ role: desiredRole })
		.where(eq(users.id, current.id))
		.returning({ id: users.id, email: users.email, role: users.role });

	console.log("Updated:", updated[0]);
	process.exit(0);
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
// import 'dotenv/config'
// import { db } from '@/lib/db'
// import { users } from '@/lib/schema'
// import { eq } from 'drizzle-orm'

// async function main() {
//   const email = process.argv[2]
//   if (!email) {
//     console.error('Usage: tsx scripts/make-admin.ts user@example.com')
//     process.exit(1)
//   }

//   const updated = await db
//     .update(users)
//     .set({ role: 'ADMIN' })
//     .where(eq(users.email, email))
//     .returning({ id: users.id, email: users.email, role: users.role })

//   if (updated.length === 0) {
//     console.error('User not found:', email)
//     process.exit(1)
//   }

//   console.log('User promoted to ADMIN:', updated[0])
// }

// main().catch((e) => {
//   console.error(e)
//   process.exit(1)
// })

/*
Promote: npx tsx scripts/make-admin.ts bornhappy5@gmail.com
Demote: npx tsx scripts/make-admin.ts bornhappy5@gmail.com USER
*/
