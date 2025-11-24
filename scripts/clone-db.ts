

/*
Install the missing package (safe - just adds to node_modules)
npm install postgres
*/

// import { drizzle } from 'drizzle-orm/postgres-js'
// import postgres from 'postgres'
// import { sql } from 'drizzle-orm'
// import { execSync } from 'child_process'

// const SOURCE_DB = 'codeco_shadcn_basic'
// const TARGET_DB = process.argv[2] || 'codeco_shadcn_clone'

// async function cloneDatabase() {
//   console.log(`🔄 Cloning ${SOURCE_DB} to ${TARGET_DB}...`)

//   try {
//     // 1. Connect to postgres db to manage databases
//     const adminClient = postgres('postgresql://ronimc@localhost:5432/postgres')
//     const adminDb = drizzle(adminClient)

//     // 2. Terminate existing connections to source
//     console.log('📌 Terminating active connections...')
//     await adminDb.execute(sql`
//       SELECT pg_terminate_backend(pid) 
//       FROM pg_stat_activity 
//       WHERE datname = ${SOURCE_DB} 
//       AND pid <> pg_backend_pid()
//     `)

//     // 3. Drop target database if exists (idempotent)
//     console.log('🗑️  Dropping existing target database...')
//     await adminDb.execute(
//       sql`DROP DATABASE IF EXISTS ${sql.identifier(TARGET_DB)}`
//     )

//     // 4. Create new database from template
//     console.log('📋 Creating database from template...')
//     await adminDb.execute(sql`
//       CREATE DATABASE ${sql.identifier(TARGET_DB)} 
//       WITH TEMPLATE ${sql.identifier(SOURCE_DB)} 
//       OWNER ronimc
//     `)

//     await adminClient.end()

//     console.log(`✅ Successfully cloned ${SOURCE_DB} to ${TARGET_DB}`)
//     console.log(
//       `📝 Connection string: postgresql://ronimc@localhost:5432/${TARGET_DB}`
//     )
//   } catch (error) {
//     console.error('❌ Clone failed:', error)
//     process.exit(1)
//   }
// }

// cloneDatabase()
