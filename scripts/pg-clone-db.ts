import { Pool } from "pg";

const SOURCE_DB = "codeco_shadcn_basic";
const TARGET_DB = process.argv[2] || "codeco_shadcn_clone";

async function cloneDatabase() {
	// Connect to postgres database (NOT your app database)
	const pool = new Pool({
		user: "ronimc",
		host: "localhost",
		database: "postgres", // Connect to postgres db to manage other databases
		port: 5432,
	});

	try {
		console.log(`🔄 Cloning ${SOURCE_DB} to ${TARGET_DB}...`);

		// 1. Terminate connections to source (safe - just disconnects active sessions)
		console.log("📌 Terminating active connections...");
		await pool.query(
			`
      SELECT pg_terminate_backend(pid) 
      FROM pg_stat_activity 
      WHERE datname = $1 
      AND pid <> pg_backend_pid()
    `,
			[SOURCE_DB],
		);

		// 2. Drop target if exists (idempotent - safe to run multiple times)
		console.log("🗑️  Dropping existing target database if exists...");
		await pool.query(`DROP DATABASE IF EXISTS ${TARGET_DB}`);

		// 3. Create new database from template (READ-ONLY operation on source)
		console.log("📋 Creating database from template...");
		await pool.query(`
      CREATE DATABASE ${TARGET_DB} 
      WITH TEMPLATE ${SOURCE_DB} 
      OWNER ronimc
    `);

		console.log(`✅ Successfully cloned ${SOURCE_DB} to ${TARGET_DB}`);
		console.log(
			`📝 Connection: postgresql://ronimc@localhost:5432/${TARGET_DB}`,
		);
	} catch (error) {
		console.error("❌ Error:", error);
		process.exit(1);
	} finally {
		await pool.end();
	}
}

cloneDatabase();
