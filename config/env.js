import { config } from "dotenv";

// Load default .env, then override with environment-specific file
config({ path: `.env` });

// Load specific environment config if available
if (process.env.NODE_ENV === "development") {
  config({ path: `.env.development.local` });
} else if (process.env.NODE_ENV === "production") {
  config({ path: `.env.production.local` });
}

// Export variables
export const {
  PORT,
  NODE_ENV,
  DB_URI,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  ARCJET_ENV,
  ARCJET_KEY,
  QSTASH_URL,
  QSTASH_TOKEN,
  QSTASH_CURRENT_SIGNING_KEY,
  QSTASH_NEXT_SIGNING_KEY,
} = process.env;


// .env                   => Shared variables (used in all environments)
// .env.development.local => Development-specific variables
// .env.production.local  => Production-specific variables
