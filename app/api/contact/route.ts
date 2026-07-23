import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const contactToEmail = process.env.CONTACT_TO_EMAIL || 'contact@logicminers.au';
const fromEmail = process.env.CONTACT_FROM_EMAIL || process.env.RESEND_FROM_EMAIL;
const resendApiKey = process.env.RESEND_API_KEY;

export async function POST(request: NextRequest) {
  try {
    if (!resendApiKey) {
      console.error('Missing RESEND_API_KEY');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    if (!fromEmail) {
      console.error('Missing CONTACT_FROM_EMAIL/RESEND_FROM_EMAIL');
      return NextResponse.json(
        { error: 'Sender email is not configured' },
        { status: 500 }
      );
    }


    const resend = new Resend(resendApiKey);

    const body = await request.json();
    const { name, email, company, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Send email to Logic Miners team
    const emailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Subject: ${subject}

Message:
${message}
    `.trim();

    const sendResult = await resend.emails.send({
      from: fromEmail,
      to: contactToEmail,
      subject: `New Contact Form Submission: ${subject}`,
      text: emailContent,
      replyTo: email,
    });

    if (sendResult.error) {
      console.error('Primary email delivery failed:', sendResult.error);

      const resendMessage = sendResult.error.message || 'Unknown Resend error';
      const resendHint = resendMessage.toLowerCase().includes('sandbox') || resendMessage.toLowerCase().includes('verify')
        ? 'Resend is likely in test mode. Use a verified sender domain and a permitted recipient email.'
        : undefined;

      return NextResponse.json(
        {
          error: 'Unable to send message right now. Please try again shortly.',
          details: resendMessage,
          hint: resendHint,
        },
        { status: 502 }
      );
    }

    // Optionally send a confirmation email to the user
    try {
      await resend.emails.send({
        from: fromEmail,
        to: email,
        subject: 'We received your message - Logic Miners',
        text: `Hi ${name},\n\nThank you for reaching out to Logic Miners. We've received your message and will get back to you as soon as possible.\n\nBest regards,\nThe Logic Miners Team`,
      });
    } catch (confirmationError) {
      console.log('Confirmation email failed:', confirmationError); // Don't fail if confirmation email doesn't work
    }

    console.log('[Contact Form]', {
      name,
      email,
      company,
      subject,
      message,
      deliveredTo: contactToEmail,
      messageId: sendResult.data?.id,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: 'Contact form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
