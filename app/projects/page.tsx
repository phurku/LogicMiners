import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/lib/siteConfig';
import { createMetadata } from '@/lib/metadata';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Quote } from 'lucide-react';

export const metadata: Metadata = createMetadata(
  'Projects | Logic Miners',
  'Explore Logic Miners portfolio projects, including BoostUp Cleaning Services and Baba Farid Roofing websites built with modern web development, SEO, and UI/UX design.',
  '/projects'
);

export default function ProjectsPage() {
  const displayProjects = [...projects];
  const projectStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Logic Miners Projects',
    description: 'A portfolio of websites and digital experiences delivered by Logic Miners.',
    url: 'https://logicminers.au/projects',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: displayProjects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'CreativeWork',
          name: project.title,
          description: project.description,
          image: `https://logicminers.au${project.image}`,
          url: project.websiteUrl,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectStructuredData) }}
      />
      <main>
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-card to-background border-b border-border/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              pretitle="Our Work"
              title="Projects That Make an Impact"
              description="Explore the successful projects we've delivered for businesses across various industries"
            />
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 md:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {displayProjects.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {displayProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      id={project.id}
                      title={project.title}
                      industry={project.industry}
                      description={project.description}
                      image={project.image}
                      imageType={project.imageType}
                      websiteUrl={project.websiteUrl}
                      technologies={project.technologies}
                      highlights={project.highlights}
                      results={project.results}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center space-y-6 py-12">
                <p className="text-lg text-muted-foreground">No projects yet</p>
                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                  Add your completed projects in the site configuration to showcase your work and attract new clients.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-12 md:py-16 bg-card border-t border-border/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <SectionHeading
              title="Detailed Case Studies"
              description="How we solved real business problems and delivered measurable outcomes."
            />

            <div className="space-y-10">
              {displayProjects.map((project) => (
                <article key={`${project.id}-case-study`} className="rounded-xl border border-border/40 bg-background overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative min-h-[220px] lg:min-h-[300px] border-b lg:border-b-0 lg:border-r border-border/40 bg-muted/10">
                      <Image
                        src={project.screenshot}
                        alt={`${project.title} project screenshot`}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className={project.imageType === 'logo' ? 'object-contain p-10 md:p-14' : 'object-cover'}
                      />
                    </div>

                    <div className="p-6 md:p-8 space-y-6">
                      <div className="space-y-2">
                        <p className="text-xs font-semibold tracking-wide uppercase text-accent">{project.industry}</p>
                        <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                        <p className="text-muted-foreground">{project.description}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg border border-border/40 bg-card space-y-2">
                          <p className="text-sm font-semibold text-foreground">Problem</p>
                          <p className="text-sm text-muted-foreground">{project.problem}</p>
                        </div>
                        <div className="p-4 rounded-lg border border-border/40 bg-card space-y-2">
                          <p className="text-sm font-semibold text-foreground">Solution</p>
                          <p className="text-sm text-muted-foreground">{project.solution}</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-foreground">Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="px-2 py-1 rounded-md bg-accent/10 text-accent text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-foreground">Client Results</p>
                        <ul className="space-y-1.5">
                          {project.clientResults.map((result, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <blockquote className="p-4 rounded-lg border border-accent/25 bg-accent/5">
                        <div className="flex items-start gap-2">
                          <Quote className="h-4 w-4 text-accent mt-0.5" />
                          <div>
                            <p className="text-sm text-foreground">{project.testimonial.quote}</p>
                            <p className="text-xs text-muted-foreground mt-2">
                              {project.testimonial.author} - {project.testimonial.role}
                            </p>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <SectionHeading
              title="Let's Create Your Success Story"
              description="Ready to start your next project? Contact us to discuss how we can help achieve your goals."
            />

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
