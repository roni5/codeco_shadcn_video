// db/schema.ts
import {
	boolean,
	integer,
	jsonb,
	pgTable,
	serial,
	text,
	timestamp,
	varchar,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
	id: serial("id").primaryKey(),
	email: varchar("email", { length: 255 }).notNull().unique(),
	name: varchar("name", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const conversations = pgTable("conversations", {
	id: serial("id").primaryKey(),
	userId: integer("user_id").references(() => users.id),
	title: varchar("title", { length: 255 }),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const messages = pgTable("messages", {
	id: serial("id").primaryKey(),
	conversationId: integer("conversation_id")
		.references(() => conversations.id)
		.notNull(),
	role: varchar("role", { length: 20 }).notNull(), // 'user', 'assistant', 'system'
	content: text("content").notNull(),

	// File attachments stored as JSON
	attachments: jsonb("attachments"), // Array of { name, mimeType, data, type }

	// Metadata
	tokenCount: integer("token_count"),
	model: varchar("model", { length: 100 }), // e.g., 'claude-3-5-haiku'

	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const files = pgTable("files", {
	id: serial("id").primaryKey(),
	messageId: integer("message_id").references(() => messages.id),
	fileName: varchar("file_name", { length: 255 }).notNull(),
	mimeType: varchar("mime_type", { length: 100 }).notNull(),
	fileSize: integer("file_size"),

	// For large files, store in S3 and keep reference
	s3Key: varchar("s3_key", { length: 500 }),
	s3Bucket: varchar("s3_bucket", { length: 100 }),

	// For small files, store base64 data directly
	data: text("data"),

	fileType: varchar("file_type", { length: 20 }).notNull(), // 'image', 'text', 'document'
	isProcessed: boolean("is_processed").default(false),

	createdAt: timestamp("created_at").defaultNow().notNull(),
});

// biome-ignore lint/suspicious/noExplicitAny: drizzle recursive table reference requires any
export const knowledge_base: any = pgTable("knowledge_base", {
	id: serial("id").primaryKey(),
	title: varchar("title", { length: 255 }).notNull(),
	content: text("content").notNull(),

	// Vector embeddings for semantic search
	embedding: text("embedding"), // Store as JSON string or use pgvector

	// Metadata
	source: varchar("source", { length: 500 }), // URL, file name, etc.
	category: varchar("category", { length: 100 }),
	tags: jsonb("tags"), // Array of strings

	// For chunked content
	chunkIndex: integer("chunk_index").default(0),
	parentDocumentId: integer("parent_document_id").references(
		() => knowledge_base.id,
	),

	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Types for TypeScript
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

export type Conversation = typeof conversations.$inferSelect;
export type NewConversation = typeof conversations.$inferInsert;

export type Message = typeof messages.$inferSelect;
export type NewMessage = typeof messages.$inferInsert;

export type File = typeof files.$inferSelect;
export type NewFile = typeof files.$inferInsert;

export type KnowledgeBase = typeof knowledge_base.$inferSelect;
export type NewKnowledgeBase = typeof knowledge_base.$inferInsert;

// // db/schema.ts
// import {
// 	boolean,
// 	integer,
// 	jsonb,
// 	pgTable,
// 	serial,
// 	text,
// 	timestamp,
// 	varchar,
// } from "drizzle-orm/pg-core";

// export const users = pgTable("users", {
// 	id: serial("id").primaryKey(),
// 	email: varchar("email", { length: 255 }).notNull().unique(),
// 	name: varchar("name", { length: 255 }),
// 	createdAt: timestamp("created_at").defaultNow().notNull(),
// 	updatedAt: timestamp("updated_at").defaultNow().notNull(),
// });

// export const conversations = pgTable("conversations", {
// 	id: serial("id").primaryKey(),
// 	userId: integer("user_id").references(() => users.id),
// 	title: varchar("title", { length: 255 }),
// 	createdAt: timestamp("created_at").defaultNow().notNull(),
// 	updatedAt: timestamp("updated_at").defaultNow().notNull(),
// });

// export const messages = pgTable("messages", {
// 	id: serial("id").primaryKey(),
// 	conversationId: integer("conversation_id")
// 		.references(() => conversations.id)
// 		.notNull(),
// 	role: varchar("role", { length: 20 }).notNull(), // 'user', 'assistant', 'system'
// 	content: text("content").notNull(),

// 	// File attachments stored as JSON
// 	attachments: jsonb("attachments"), // Array of { name, mimeType, data, type }

// 	// Metadata
// 	tokenCount: integer("token_count"),
// 	model: varchar("model", { length: 100 }), // e.g., 'claude-3-5-haiku'

// 	createdAt: timestamp("created_at").defaultNow().notNull(),
// });

// export const files = pgTable("files", {
// 	id: serial("id").primaryKey(),
// 	messageId: integer("message_id").references(() => messages.id),
// 	fileName: varchar("file_name", { length: 255 }).notNull(),
// 	mimeType: varchar("mime_type", { length: 100 }).notNull(),
// 	fileSize: integer("file_size"),

// 	// For large files, store in S3 and keep reference
// 	s3Key: varchar("s3_key", { length: 500 }),
// 	s3Bucket: varchar("s3_bucket", { length: 100 }),

// 	// For small files, store base64 data directly
// 	data: text("data"),

// 	fileType: varchar("file_type", { length: 20 }).notNull(), // 'image', 'text', 'document'
// 	isProcessed: boolean("is_processed").default(false),

// 	createdAt: timestamp("created_at").defaultNow().notNull(),
// });

// /* biome-disable-next-line lint/suspicious/noExplicitAny -- drizzle table typing is recursive; keep `any` here for now */
// export const knowledge_base = pgTable('knowledge_base', {
// 	id: serial('id').primaryKey(),
// 	title: varchar('title', { length: 255 }).notNull(),
// 	content: text('content').notNull(),

// 	// Vector embeddings for semantic search
// 	embedding: text('embedding'), // Store as JSON string or use pgvector

// 	// Metadata
// 	source: varchar('source', { length: 500 }), // URL, file name, etc.
// 	category: varchar('category', { length: 100 }),
// 	tags: jsonb('tags'), // Array of strings

// 	// For chunked content
// 	chunkIndex: integer('chunk_index').default(0),
// 	parentDocumentId: integer('parent_document_id').references(
// 		() => knowledge_base.id
// 	),

// 	createdAt: timestamp('created_at').defaultNow().notNull(),
// 	updatedAt: timestamp('updated_at').defaultNow().notNull(),
// })

// // Types for TypeScript
// export type User = typeof users.$inferSelect;
// export type NewUser = typeof users.$inferInsert;

// export type Conversation = typeof conversations.$inferSelect;
// export type NewConversation = typeof conversations.$inferInsert;

// export type Message = typeof messages.$inferSelect;
// export type NewMessage = typeof messages.$inferInsert;

// export type File = typeof files.$inferSelect;
// export type NewFile = typeof files.$inferInsert;

// export type KnowledgeBase = typeof knowledge_base.$inferSelect;
// export type NewKnowledgeBase = typeof knowledge_base.$inferInsert;
