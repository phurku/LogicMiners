import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
import { ContactForm } from '@/components/ContactForm';
import { createMetadata } from '@/lib/metadata';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = createMetadata(
  'Contact Us | Logic Miners',
  'Get in touch with Logic Miners. Contact us to discuss your web development, SEO, design, or custom software needs.',
  '/contact'
);

export default function ContactPage() {
  return (
    <main>
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-card to-background border-b border-border/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              pretitle="Get In Touch"
              title="Let's Start a Conversation"
              description="Have a question or ready to start your next project? We'd love to hear from you. Get in touch and let's create something amazing together."
            />
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                {/* Email */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-accent/10">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                  </div>
                  <div className="space-y-1 ml-12">
                    <p className="text-muted-foreground">General Inquiries</p>
                    <a
                      href="mailto:contact@logicminers.au"
                      className="text-accent hover:text-accent-alt transition-colors break-all"
                    >
                      contact@logicminers.au
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-accent/10">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                  </div>
                  <div className="space-y-1 ml-12">
                    <p className="text-muted-foreground">Available during business hours</p>
                    <p className="text-foreground font-medium">Contact via email for immediate assistance</p>
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-accent/10">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                  </div>
                  <div className="space-y-1 ml-12">
                    <p className="text-foreground">Australia</p>
                    <p className="text-muted-foreground text-sm">Serving clients globally</p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="space-y-3 p-4 rounded-lg border border-accent/20 bg-accent/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground">Response Time</h3>
                  </div>
                  <p className="text-sm text-muted-foreground ml-12">
                    We aim to respond to all inquiries within 24 hours during business days.
                  </p>
                </div>

                {/* Business Hours */}
                <div className="space-y-2 p-4 rounded-lg border border-border/40 bg-card">
                  <h4 className="font-semibold text-foreground">Business Hours</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>Monday - Friday: 9:00 AM - 5:00 PM AEST</li>
                    <li>Saturday - Sunday: Closed</li>
                    <li>Public Holidays: Closed</li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="p-8 rounded-xl border border-border/40 bg-card">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-card border-t border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Frequently Asked Questions"
              description="Quick answers to common questions"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {[
                {
                  q: "What is your typical project timeline?",
                  a: "Project timelines vary based on scope and complexity. We'll provide a detailed estimate during our discovery phase. Most projects range from 4-16 weeks.",
                },
                {
                  q: "Do you offer ongoing support?",
                  a: "Yes! We provide comprehensive post-launch support, maintenance, and optimization services to ensure your solution continues to deliver value.",
                },
                {
                  q: "What industries do you serve?",
                  a: "We work with businesses across all sectors to deliver tailored digital solutions that drive growth and innovation.",
                },
                {
                  q: "Do you work with remote clients?",
                  a: "Absolutely! We work with clients across Australia and internationally. Remote collaboration is seamless with our virtual communication setup.",
                },
                {
                  q: "What technologies do you use?",
                  a: "We use modern, industry-leading technologies including React, Node.js, Python, PostgreSQL, and AWS. We customize the tech stack for each project.",
                },
                {
                  q: "How much does a typical project cost?",
                  a: "Pricing depends on project complexity and scope. Contact us for a free consultation and detailed quote based on your specific needs.",
                },
              ].map((faq, idx) => (
                <div key={idx} className="p-6 rounded-lg border border-border/40 bg-background hover:border-accent/50 transition-colors space-y-3">
                  <h3 className="font-semibold text-foreground">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <SectionHeading
              title="Still Have Questions?"
              description="Our team is ready to help. Reach out to us and let's discuss your project."
            />

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@logicminers.au"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                <Mail className="h-4 w-4" />
                Send an Email
              </a>
              <a
                href="tel:+61430081037"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Call Us
              </a>
            </div>
          </div>
        </section>
    </main>
  );
}
