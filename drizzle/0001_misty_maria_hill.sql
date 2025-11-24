CREATE TYPE "public"."contact_status" AS ENUM('lead', 'active', 'inactive');--> statement-breakpoint
CREATE TYPE "public"."newsletter_status" AS ENUM('subscribed', 'unsubscribed', 'pending');--> statement-breakpoint
ALTER TABLE "contact" ALTER COLUMN "message" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "contact" ADD COLUMN "company" text;--> statement-breakpoint
ALTER TABLE "contact" ADD COLUMN "status" "contact_status" DEFAULT 'lead' NOT NULL;--> statement-breakpoint
ALTER TABLE "contact" ADD COLUMN "lifetime_value" numeric(10, 2) DEFAULT '0' NOT NULL;--> statement-breakpoint
ALTER TABLE "contact" ADD COLUMN "last_contact_date" timestamp;--> statement-breakpoint
ALTER TABLE "contact" ADD COLUMN "updated_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "newsletters" ADD COLUMN "name" text;--> statement-breakpoint
ALTER TABLE "newsletters" ADD COLUMN "status" "newsletter_status" DEFAULT 'subscribed' NOT NULL;--> statement-breakpoint
ALTER TABLE "newsletters" ADD COLUMN "source" text;--> statement-breakpoint
ALTER TABLE "newsletters" ADD COLUMN "tags" text[];--> statement-breakpoint
ALTER TABLE "newsletters" ADD COLUMN "subscribed_date" timestamp;--> statement-breakpoint
ALTER TABLE "newsletters" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "newsletters" ADD COLUMN "updated_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "contact" ADD CONSTRAINT "contact_email_unique" UNIQUE("email");