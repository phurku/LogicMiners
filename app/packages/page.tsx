import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
import { createMetadata } from '@/lib/metadata';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Check, ArrowRight } from 'lucide-react';
import { packagesData } from '@/lib/packagesData';
import Link from 'next/link';

export const metadata: Metadata = createMetadata(
  'Marketing Packages | Logic Miners',
  'Explore our digital marketing and content creation packages tailored for various industries including general businesses, cleaning companies, and NDIS providers.',
  '/packages'
);

export default function PackagesPage() {
  return (
    <main>
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-card to-background border-b border-border/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              pretitle="Pricing Packages"
              title="Marketing Solutions for Every Stage"
              description="Choose the right digital marketing and content creation package to accelerate your business growth."
            />
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-12 md:py-16 bg-background min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue={packagesData[0].id} className="w-full">
              <div className="flex justify-center mb-12 overflow-x-auto pb-4">
                <TabsList className="bg-card border border-border/40 p-1">
                  {packagesData.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="px-6 py-3 text-sm md:text-base data-[state=active]:bg-accent data-[state=active]:text-accent-foreground rounded-md transition-all"
                    >
                      {category.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {packagesData.map((category) => (
                <TabsContent key={category.id} value={category.id} className="animate-in fade-in-50 duration-500">
                  <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold text-foreground mb-4">{category.title}</h2>
                    <p className="text-muted-foreground">{category.subtitle}</p>
                  </div>

                  {/* Pricing Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                    {category.tiers.map((tier, idx) => (
                      <div
                        key={tier.name}
                        className={`relative rounded-2xl p-8 flex flex-col ${
                          idx === 1
                            ? 'bg-card border-2 border-accent shadow-[0_0_30px_rgba(0,217,255,0.1)]'
                            : 'bg-card/50 border border-border/40 hover:border-accent/50 transition-colors'
                        }`}
                      >
                        {idx === 1 && (
                          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full uppercase tracking-wider">
                            Most Popular
                          </div>
                        )}
                        <div className="mb-8">
                          <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                          <div className="flex items-baseline gap-2 mb-4">
                            <span className="text-4xl font-extrabold text-accent">{tier.price.split('/')[0]}</span>
                            <span className="text-muted-foreground">/{tier.price.split('/')[1]}</span>
                          </div>
                          <p className="text-sm text-muted-foreground h-16">{tier.description}</p>
                        </div>

                        <div className="space-y-6 flex-grow">
                          <div>
                            <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">What&apos;s Included</h4>
                            <ul className="space-y-3">
                              {tier.features.map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-start gap-3">
                                  <Check className="h-5 w-5 text-accent shrink-0" />
                                  <span className="text-sm text-foreground/80">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-6 border-t border-border/40">
                            <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">Monthly Deliverables</h4>
                            <ul className="space-y-3">
                              {tier.deliverables.map((deliverable, dIdx) => (
                                <li key={dIdx} className="flex items-start gap-3">
                                  <span className="h-1.5 w-1.5 rounded-full bg-accent/50 mt-2 shrink-0" />
                                  <span className="text-sm text-muted-foreground">{deliverable}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="mt-8 pt-6">
                          <Link
                            href="/contact"
                            className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                              idx === 1
                                ? 'bg-accent text-accent-foreground hover:opacity-90'
                                : 'bg-accent/10 text-accent hover:bg-accent/20'
                            }`}
                          >
                            Choose {tier.name.split(' ')[0]}
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Extra Content Blocks (if any) */}
                  {category.extraContent && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                      {category.extraContent.map((extra, eIdx) => (
                        <div key={eIdx} className="p-8 rounded-xl bg-card border border-border/40">
                          <h3 className="text-xl font-bold text-foreground mb-6">{extra.title}</h3>
                          
                          {extra.items && (
                            <ul className="space-y-3">
                              {extra.items.map((item, iIdx) => (
                                <li key={iIdx} className="flex items-start gap-3">
                                  <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 shrink-0" />
                                  <span className="text-muted-foreground">{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {extra.clientProvides && (
                            <div className="mb-6">
                              <h4 className="font-semibold text-foreground mb-3">Client Provides:</h4>
                              <ul className="space-y-2">
                                {extra.clientProvides.map((item, iIdx) => (
                                  <li key={iIdx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <span className="h-1 w-1 rounded-full bg-muted-foreground shrink-0" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {extra.weProvide && (
                            <div>
                              <h4 className="font-semibold text-foreground mb-3">We Provide:</h4>
                              <ul className="space-y-2">
                                {extra.weProvide.map((item, iIdx) => (
                                  <li key={iIdx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <span className="h-1 w-1 rounded-full bg-accent shrink-0" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-card border-t border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <SectionHeading
              title="Need a Custom Package?"
              description="Don't see exactly what you're looking for? Contact us to discuss a tailored solution for your specific business needs."
            />

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
            >
              Get a Custom Quote
            </Link>
          </div>
        </section>
    </main>
  );
}
