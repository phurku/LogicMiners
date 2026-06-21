import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SectionHeading } from '@/components/SectionHeading';
import { services } from '@/lib/siteConfig';
import { createMetadata } from '@/lib/metadata';
import * as LucideIcons from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = createMetadata(
  'Services | Logic Miners',
  'Explore our comprehensive digital services: web development, SEO, digital marketing, graphic design, custom software, UI/UX design, and social media management.',
  '/services'
);

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-card to-background border-b border-border/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              pretitle="Our Services"
              title="Comprehensive Digital Solutions"
              description="From web development and SEO to graphic design and custom software, we provide integrated services to help your business succeed online."
            />
          </div>
        </section>

        {/* Services Detail Grid */}
        <section className="py-12 md:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {services.map((service, idx) => {
                const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.Lightbulb;
                const isEven = idx % 2 === 0;

                return (
                  <div key={service.id} id={service.id} className="scroll-mt-24">
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${isEven ? '' : 'md:grid-flow-dense'}`}>
                      {/* Content */}
                      <div className={`space-y-6 ${!isEven ? 'md:col-start-2' : ''}`}>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 w-fit">
                          <IconComponent className="h-4 w-4 text-accent" />
                          <span className="text-sm font-medium text-accent">{service.title}</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                          {service.title}
                        </h2>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>

                        <div className="space-y-3 pt-4">
                          <h3 className="font-semibold text-foreground">Key Features:</h3>
                          <ul className="space-y-2">
                            {service.features.map((feature, featureIdx) => (
                              <li key={featureIdx} className="flex items-center gap-3">
                                <span className="inline-block h-2 w-2 rounded-full bg-accent" />
                                <span className="text-muted-foreground">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="pt-6">
                          <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
                          >
                            Request This Service
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>

                      {/* Visual */}
                      <div className={`relative h-80 md:h-96 ${!isEven ? 'md:col-start-1 md:row-start-1' : ''}`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent-alt/10 rounded-2xl flex items-center justify-center">
                          <div className="p-8">
                            <IconComponent className="h-32 w-32 text-accent/20" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Divider */}
                    {idx < services.length - 1 && (
                      <div className="mt-20 border-t border-border/40" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 md:py-16 bg-card border-t border-border/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <SectionHeading
                pretitle="Our Process"
                title="How We Work"
                description="A structured approach to delivering exceptional results every time"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Discovery', description: 'Understanding your business, goals, and challenges' },
                { step: '02', title: 'Planning', description: 'Creating a comprehensive strategy and roadmap' },
                { step: '03', title: 'Execution', description: 'Building and implementing the solution' },
                { step: '04', title: 'Support', description: 'Ongoing maintenance and continuous improvement' },
              ].map((item, idx) => (
                <div key={idx} className="relative p-6 rounded-xl border border-border/40 bg-background hover:border-accent/50 transition-colors">
                  <div className="text-4xl font-bold text-accent/20 mb-4">{item.step}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                  {idx < 3 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                      <div className="w-6 h-6 rounded-full border-2 border-accent" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <SectionHeading
              title="Ready to Get Started?"
              description="Contact us today to discuss how our services can help transform your business"
            />

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Schedule a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
