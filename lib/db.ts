import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE_URL is missing");

export const pool = new Pool({ connectionString });
export const db = drizzle(pool);

// import config from '@/lib/config'
// import { drizzle } from 'drizzle-orm/node-postgres'
// import { Pool } from 'pg'

// let sslmode = ''
// if (config.APP_ENV === 'prod') {
//   sslmode = '?sslmode=require'
// }

// export const pool = new Pool({
//   connectionString: config.POSTGRES_URL + sslmode,
// })

// export const db = drizzle(pool, { logger: true })
