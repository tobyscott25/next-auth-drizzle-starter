import { defineConfig, type Config } from "drizzle-kit";
import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const config = {
  schema: "./src/db/schema/*",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL as string,
  },
} satisfies Config;

export default defineConfig(config);
