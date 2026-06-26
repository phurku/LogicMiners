import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const contactToEmail = process.env.CONTACT_TO_EMAIL || 'contact@logicminers.au';
const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Logic Miners <contact@logicminers.au>';
const smtpHost = process.env.SMTP_HOST || 'smtp.hostinger.com';
const smtpPort = Number(process.env.SMTP_PORT || '465');
const smtpSecure = (process.env.SMTP_SECURE || 'true') === 'true';
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;

export async function POST(request: NextRequest) {
  try {
    if (!smtpUser || !smtpPass) {
      console.error('Missing SMTP credentials');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

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

    const sendResult = await transporter.sendMail({
      from: fromEmail,
      to: contactToEmail,
      subject: `New Contact Form Submission: ${subject}`,
      text: emailContent,
      replyTo: email,
    });

    // Optionally send a confirmation email to the user
    try {
      await transporter.sendMail({
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
      messageId: sendResult.messageId,
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
