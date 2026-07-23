import { NextResponse } from 'next/server';

export async function GET() {
  const hasApiKey = Boolean(process.env.RESEND_API_KEY);
  const hasRecipient = Boolean(process.env.CONTACT_TO_EMAIL);
  const hasSender = Boolean(process.env.CONTACT_FROM_EMAIL || process.env.RESEND_FROM_EMAIL);

  const ok = hasApiKey && hasRecipient && hasSender;

  return NextResponse.json(
    {
      ok,
      checks: {
        RESEND_API_KEY: hasApiKey,
        CONTACT_TO_EMAIL: hasRecipient,
        CONTACT_FROM_EMAIL_or_RESEND_FROM_EMAIL: hasSender,
      },
      message: ok
        ? 'Mail environment variables are configured.'
        : 'Mail environment variables are missing. Configure deployment env and redeploy.',
    },
    { status: ok ? 200 : 500 }
  );
}
