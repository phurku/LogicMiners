import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SectionHeading } from '@/components/SectionHeading';
import { createMetadata } from '@/lib/metadata';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { projects, teamMembers } from '@/lib/siteConfig';

export const metadata: Metadata = createMetadata(
  'About Us | Logic Miners',
  'Learn about Logic Miners, a digital solutions agency specializing in web development, SEO, digital marketing, and custom software.',
  '/about'
);

export default function AboutPage() {
  const foundedDate = new Date('2026-01-01T00:00:00');
  const now = new Date();
  let totalMonths =
    (now.getFullYear() - foundedDate.getFullYear()) * 12 +
    (now.getMonth() - foundedDate.getMonth());

  if (now.getDate() < foundedDate.getDate()) {
    totalMonths -= 1;
  }

  totalMonths = Math.max(0, totalMonths);
  const yearsActive = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;
  const lifespanStat = yearsActive > 0 ? `${yearsActive}y ${remainingMonths} months` : `${remainingMonths} months`;
  const projectsDelivered = projects.length;
  const happyClients = projects.length;

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-card to-background border-b border-border/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              pretitle="About Us"
              title="Your Partner for Digital Success"
              description="We&apos;re a team of experienced developers, designers, and digital strategists dedicated to helping businesses grow through innovative digital solutions."
            />
          </div>
        </section>

        {/* Our Story */}
        <section className="py-12 md:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Story</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded to bridge the gap between business goals and digital technology, Logic Miners started with a clear mission: deliver exceptional digital solutions that actually move the needle for our clients. We focus on quality over quantity.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Over the years, we&apos;ve grown into a full-service digital agency. We&apos;ve completed 150+ projects, worked with 100+ satisfied clients, and built a team of passionate developers, designers, and strategists who genuinely care about their work.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, we continue to evolve our services to help businesses succeed online, whether through stunning websites, effective SEO, creative design, or custom software solutions. Your success is our mission.
                </p>
              </div>

              <div className="relative h-96 bg-gradient-to-br from-accent/10 to-accent-alt/10 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="inline-block p-4 rounded-full bg-accent/10">
                    <div className="text-accent">
                      <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-foreground font-semibold">{lifespanStat}<br />of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-12 md:py-16 bg-card border-t border-border/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <SectionHeading
                title="Our Mission, Vision & Values"
                description="What drives us every day"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  label: 'Mission',
                  title: 'Transform Businesses Through Technology',
                  description: 'To deliver innovative digital solutions that help businesses operate more efficiently and grow sustainably.',
                },
                {
                  label: 'Vision',
                  title: 'Industry-Leading Solutions',
                  description: 'To be the trusted partner for comprehensive digital transformation globally.',
                },
                {
                  label: 'Values',
                  title: 'Excellence & Innovation',
                  description: 'We believe in delivering exceptional quality, embracing innovation, and building long-term partnerships with our clients.',
                },
              ].map((item, idx) => (
                <div key={idx} className="p-8 rounded-xl border border-border/40 bg-background hover:border-accent/50 transition-colors space-y-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                    {item.label}
                  </span>
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 md:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="By The Numbers"
              description="Our impact and commitment to excellence"
            />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
              {[
                { stat: `${projectsDelivered}`, label: 'Projects Delivered' },
                { stat: `${happyClients}`, label: 'Happy Clients' },
                { stat: lifespanStat, label: 'Active Years' },
                { stat: '100%', label: 'Client Satisfaction' },
              ].map((item, idx) => (
                <div key={idx} className="text-center space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-accent">{item.stat}</div>
                  <p className="text-muted-foreground font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-12 md:py-16 bg-card border-t border-border/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <SectionHeading
                title="Meet the Teams"
                description="Specialized departments working together to deliver your digital success"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="rounded-xl border border-border/40 bg-background hover:border-accent/50 transition-all hover:shadow-lg overflow-hidden">
                  <div className="relative h-64 bg-gradient-to-br from-accent/20 to-accent-alt/20 overflow-hidden flex items-center justify-center">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      />
                    ) : (
                      <div className="text-6xl text-accent/20">👤</div>
                    )}
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                      <p className="text-sm text-accent font-medium mt-1">{member.role}</p>
                    </div>
                    {member.skills && (
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Skills</p>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.map((skill, idx) => (
                            <span key={idx} className="inline-block px-2 py-1 text-xs bg-accent/10 text-accent rounded">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            
          </div>
        </section>

        {/* Why Partner With Us */}
        <section className="py-12 md:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Why Partner With Logic Miners?"
              description="As a growing startup, we focus on practical execution, transparent communication, and steady results for every client."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {[
                {
                  title: 'Startup Agility',
                  items: [
                    'Faster decision-making and delivery cycles',
                    'Flexible plans that adapt to your feedback',
                    'Direct collaboration with the working team',
                  ],
                },
                {
                  title: 'Practical Technology Choices',
                  items: [
                    'Modern tools selected based on your goals',
                    'Clean, maintainable code and reliable handover',
                    'Built with future growth in mind',
                  ],
                },
                {
                  title: 'Transparent Collaboration',
                  items: [
                    'Clear timelines, scope, and progress updates',
                    'Honest advice on priorities and trade-offs',
                    'Simple communication without unnecessary jargon',
                  ],
                },
                {
                  title: 'Commitment to Improvement',
                  items: [
                    'Continuous refinement after launch',
                    'Focus on measurable outcomes over promises',
                    'Long-term support as your business grows',
                  ],
                },
              ].map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3">
                        <span className="inline-block h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-card border-t border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <SectionHeading
              title="Ready to Work With Us?"
              description="Let's discuss how we can help transform your business digitally"
            />

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
