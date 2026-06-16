import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './db-schema';

const url = import.meta.env.TURSO_DATABASE_URL;
const authToken = import.meta.env.TURSO_AUTH_TOKEN;

// `isDbConfigured` lets API routes return a clean error (instead of crashing)
// when the Turso environment variables haven't been set yet.
export const isDbConfigured = Boolean(url);

const client = createClient({
  url: url ?? 'file:local.db', // harmless local fallback for dev/build
  authToken,
});

export const db = drizzle(client, { schema });
