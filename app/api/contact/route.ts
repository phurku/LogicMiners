import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
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

    // Here you would typically:
    // 1. Send an email notification to your team
    // 2. Store the contact in a database
    // 3. Send a confirmation email to the user

    // For now, we'll just log it and return success
    console.log('[Contact Form]', {
      name,
      email,
      company,
      subject,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Implement email service (e.g., SendGrid, Resend, Nodemailer)
    // const emailSent = await sendEmail({
    //   to: 'contact@logicminers.au',
    //   from: 'noreply@logicminers.au',
    //   subject: `New Contact Form Submission: ${subject}`,
    //   text: `
    //     Name: ${name}
    //     Email: ${email}
    //     Company: ${company}
    //     Subject: ${subject}
    //     Message: ${message}
    //   `,
    // });

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
