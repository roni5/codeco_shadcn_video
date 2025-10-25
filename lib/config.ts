import { loadEnvConfig } from '@next/env'

const projectDir = process.cwd()
loadEnvConfig(projectDir)

const config = {
  APP_ENV: process.env.APP_ENV ?? 'development',
  POSTGRES_URL: process.env.POSTGRES_URL ?? '',
}

// const config = {
//   APP_ENV: process.env.APP_ENV!,
//   POSTGRES_URL: process.env.POSTGRES_URL!,
// }

export default config

/*   function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

const config = {
  APP_ENV: requireEnv("APP_ENV"),
  POSTGRES_URL: requireEnv("POSTGRES_URL"),
};  */
