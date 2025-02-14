import { integer, pgTable, varchar, timestamp, text, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: uuid("id").primaryKey(),
    clerkId: varchar("clerk_id", { length: 255}).notNull(),
    firstName: varchar("firstname", { length: 255 }).notNull(), 
    lastName: varchar("lastname", { length: 255 }).notNull()
})

export const keepsafes = pgTable("keepsafe", {
    id: uuid("id").primaryKey(),
    message: text(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
})

