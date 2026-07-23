import path from 'node:path';
import nextEnv from '@next/env';

const { loadEnvConfig } = nextEnv;

loadEnvConfig(path.resolve('.'));

const requiredAlways = ['RESEND_API_KEY', 'CONTACT_TO_EMAIL'];
const senderVars = ['CONTACT_FROM_EMAIL', 'RESEND_FROM_EMAIL'];

const missingAlways = requiredAlways.filter((name) => !process.env[name]);
const hasSender = senderVars.some((name) => Boolean(process.env[name]));
const isStrict = process.env.CI === 'true' || process.env.VERCEL === '1' || process.env.NODE_ENV === 'production';

if (missingAlways.length > 0) {
  console.error('Missing required environment variables:');
  for (const name of missingAlways) {
    console.error(`- ${name}`);
  }

  if (isStrict) {
    process.exit(1);
  }
}

if (!hasSender) {
  console.error('Missing sender environment variable. Set one of: CONTACT_FROM_EMAIL or RESEND_FROM_EMAIL');

  if (isStrict) {
    process.exit(1);
  }
}

if (missingAlways.length === 0 && hasSender) {
  console.log('Environment variable check passed.');
} else {
  console.warn('Environment variable check warning (non-strict mode).');
}
