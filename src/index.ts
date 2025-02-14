import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import type { users, keepsafes } from './db/schema';

if (!process.env.DATABASE_URL) {
    throw new Error("No Database URL set.")
}

const db = drizzle(process.env.DATABASE_URL)

async function main() {
    const userData: (typeof users.$inferInsert)[] = [
        {
            "id": "0192ce07-8c4f-7d66-afec-2482b5c9b03c",
            "clerkId": "user_2t30c9AHWMzdJeERjN6khfaK7Ca",
            "firstName": "Ajay",
            "lastName": "Bhargava"
        },
    ];
}