import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
import { createMetadata } from '@/lib/metadata';
import Link from 'next/link';
import {
  ArrowRight,
  Code2,
  ServerCog,
  Megaphone,
  PenTool,
  ClipboardCheck,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { projects, teamMembers } from '@/lib/siteConfig';

export const metadata: Metadata = createMetadata(
  'About Us | Logic Miners',
  'Learn about Logic Miners, a digital solutions agency specializing in web development, SEO, digital marketing, and custom software.',
  '/about'
);

export default function AboutPage() {
  const getTeamIcon = (memberName: string): LucideIcon => {
    const iconMap: Record<string, LucideIcon> = {
      'Development Team': Code2,
      'Domain and Hosting Team': ServerCog,
      'Marketing Team': Megaphone,
      'Design Team': PenTool,
      'Operations Team': ClipboardCheck,
    };

    return iconMap[memberName] || Users;
  };

  const getTeamInitials = (memberName: string): string => {
    return memberName
      .split(' ')
      .map((word) => word[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  };

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
    <main>
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-card to-background border-b border-border/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              pretitle="About Us"
              title="We Build Digital Systems That Help Your Business Grow"
              description="Fast websites, stronger visibility, and practical execution focused on real customer enquiries and measurable results."
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
                  We help businesses turn digital work into real results: better visibility, stronger trust, and more enquiries.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  You work directly with specialists across engineering, design, infrastructure, and growth, with transparent scope and delivery.
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
                  description: 'Build practical digital systems that improve operations and drive growth.',
                },
                {
                  label: 'Vision',
                  title: 'Industry-Leading Solutions',
                  description: 'Be the most trusted delivery partner for digital transformation.',
                },
                {
                  label: 'Values',
                  title: 'Excellence & Innovation',
                  description: 'Quality first, honest communication, and long-term client partnerships.',
                },
              ].map((item, idx) => (
                <div key={idx} className="p-8 rounded-xl border border-border/40 bg-background space-y-4">
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
                <div key={member.id} className="rounded-xl border border-border/40 bg-background overflow-hidden">
                  {(() => {
                    const TeamIcon = getTeamIcon(member.name);
                    const teamInitials = getTeamInitials(member.name);

                    return (
                      <>
                        <div className="relative h-64 bg-gradient-to-br from-accent/10 via-background to-accent-alt/10 overflow-hidden flex items-center justify-center">
                          <div className="flex flex-col items-center gap-4">
                            <div className="h-20 w-20 rounded-2xl border border-accent/30 bg-accent/10 flex items-center justify-center">
                              <TeamIcon className="h-10 w-10 text-accent" />
                            </div>
                            <div className="h-10 min-w-10 px-3 rounded-full border border-border/50 bg-background/80 text-xs font-semibold tracking-wide text-foreground flex items-center justify-center">
                              {teamInitials}
                            </div>
                          </div>
                        </div>
                        <div className="p-6 space-y-4">
                          <div className="space-y-2">
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
                      </>
                    );
                  })()}
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
              description="Clear process, accountable delivery, and outcomes you can track."
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
              description="Tell us your goals. We&apos;ll propose a practical plan."
            />

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-accent text-accent-foreground font-semibold"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
    </main>
  );
}
