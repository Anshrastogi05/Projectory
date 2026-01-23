import {
  pgTable,
  serial,
  text,
  varchar,
  integer,
  timestamp,
  json,
  uniqueIndex,
  index,
} from "drizzle-orm/pg-core";

// ============= PRODUCTS =============
export const products = pgTable(
  "products",
  {
    id: serial("id").primaryKey(),

    // Core product info
    name: varchar("name", { length: 120 }).notNull(),
    slug: varchar("slug", { length: 140 }).notNull(),
    tagline: varchar("tagline", { length: 200 }),
    description: text("description"), // human-written

    // 🤖 AI-generated content
    aiDescription: text("ai_description"), // OpenAI generated

    // Links & media
    websiteUrl: text("website_url"),
    tags: json("tags").$type<string[]>(),

    // Voting
    voteCount: integer("vote_count").notNull().default(0),

    // Metadata
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
    approvedAt: timestamp("approved_at", { withTimezone: true }),
    status: varchar("status", { length: 20 }).default("pending"),
    submittedBy: varchar("submitted_by", { length: 120 }).default("anonymous"),
    userId: varchar("user_id", { length: 255 }),

    // Organization reference
    organizationId: varchar("organization_id", { length: 255 }),

    // 🤖 AI metadata (optional but powerful)
    aiMetadata: json("ai_metadata").$type<{
      model: string;
      generatedAt: string;
      promptVersion: string;
    }>(),
  },
  (table) => ({
    slugIdx: uniqueIndex("products_slug_idx").on(table.slug),
    statusIdx: index("products_status_idx").on(table.status),
    organizationIdx: index("products_organization_idx").on(
      table.organizationId
    ),
  })
);
