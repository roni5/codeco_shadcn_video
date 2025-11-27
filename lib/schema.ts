import type { AdapterAccount } from "@auth/core/adapters";
import {
	decimal,
	integer,
	pgEnum,
	pgTable,
	primaryKey,
	text,
	timestamp,
	uuid,
} from "drizzle-orm/pg-core";

// add timestamp
//  createdAt: timestamp('created_at').defaultNow().notNull(),
//updatedAt: timestamp('updated_at').defaultNow().notNull(),

// Extend default Session type to include role
// Extend Auth.js types
declare module "@auth/core/types" {
	interface Session {
		user?: {
			id: string;
			name?: string;
			email?: string;
			image?: string;
			role: UserRole;
		} & DefaultSession["user"];
	}
}

declare module "@auth/core/adapters" {
	interface AdapterUser {
		role: UserRole;
	}
}

export const userRoleEnum = pgEnum("user_role", ["USER", "ADMIN"]);

export type UserRole = (typeof userRoleEnum.enumValues)[number];

export const users = pgTable("user", {
	id: text("id").notNull().primaryKey(),
	name: text("name"),
	email: text("email").notNull(),
	emailVerified: timestamp("emailVerified", { mode: "date" }),
	image: text("image"),
	role: userRoleEnum("role").default("USER").notNull(),
});

export const accounts = pgTable(
	"account",
	{
		userId: text("userId")
			.notNull()
			.references(() => users.id, { onDelete: "cascade" }),
		type: text("type").$type<AdapterAccount["type"]>().notNull(),
		provider: text("provider").notNull(),
		providerAccountId: text("providerAccountId").notNull(),
		refresh_token: text("refresh_token"),
		access_token: text("access_token"),
		expires_at: integer("expires_at"),
		token_type: text("token_type"),
		scope: text("scope"),
		id_token: text("id_token"),
		session_state: text("session_state"),
	},
	(account) => ({
		compoundKey: primaryKey({
			columns: [account.provider, account.providerAccountId],
		}),
	}),
);

export const sessions = pgTable("session", {
	sessionToken: text("sessionToken").notNull().primaryKey(),
	userId: text("userId")
		.notNull()
		.references(() => users.id, { onDelete: "cascade" }),
	expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable(
	"verificationToken",
	{
		identifier: text("identifier").notNull(),
		token: text("token").notNull(),
		expires: timestamp("expires", { mode: "date" }).notNull(),
	},
	(vt) => ({
		compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
	}),
);

// Contact Status Enum
export const contactStatusEnum = pgEnum("contact_status", [
	"lead",
	"active",
	"inactive",
]);

// Newsletter Status Enum
export const newsletterStatusEnum = pgEnum("newsletter_status", [
	"subscribed",
	"unsubscribed",
	"pending",
]);

// Updated Contacts Table
export const contacts = pgTable("contact", {
	id: uuid("id").primaryKey().defaultRandom(),
	name: text("name").notNull(),
	email: text("email").notNull().unique(),
	phone: text("phone"),
	company: text("company"),
	message: text("message"),
	subject: text("subject"),
	status: contactStatusEnum("status").default("lead").notNull(),
	lifetimeValue: decimal("lifetime_value", { precision: 10, scale: 2 })
		.default("0")
		.notNull(),
	lastContactDate: timestamp("last_contact_date"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Updated Newsletters Table
export const newsletters = pgTable("newsletters", {
	id: uuid("id").primaryKey().defaultRandom(),
	email: text("email").notNull().unique(),
	name: text("name"),
	status: newsletterStatusEnum("status").default("subscribed").notNull(),
	source: text("source"), // e.g., 'website', 'landing-page', 'referral'
	tags: text("tags").array(), // PostgreSQL array for tags
	subscribedDate: timestamp("subscribed_date"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// export const newsletters = pgTable('newsletters', {
//   id: uuid('id').primaryKey().defaultRandom(),
//   email: text('email').notNull().unique(),
// })

// export const contacts = pgTable('contact', {
//   id: uuid('id').primaryKey().defaultRandom(),
//   name: text('name').notNull(),
//   email: text('email').notNull(),
//   message: text('message').notNull(),
//   phone: text('phone'),
//   subject: text('subject'),
//   createdAt: timestamp('created_at').defaultNow().notNull(),
// })
