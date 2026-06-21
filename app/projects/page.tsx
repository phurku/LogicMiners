import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SectionHeading } from '@/components/SectionHeading';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/lib/siteConfig';
import { createMetadata } from '@/lib/metadata';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = createMetadata(
  'Projects | Logic Miners',
  'Explore Logic Miners portfolio projects, including BoostUp Cleaning Services and Baba Farid Roofing websites built with modern web development, SEO, and UI/UX design.',
  '/projects'
);

// Template for future projects
const emptyProjectTemplate = {
  id: 'template',
  title: 'Your Project Here',
  industry: 'Industry',
  description: 'Add your completed project details to showcase your work.',
  technologies: ['Tech 1', 'Tech 2', 'Tech 3'],
  results: 'Measurable business impact',
};

export default function ProjectsPage() {
  // Combine real projects with template for demonstration
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
      <Header />
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
                      results={project.results}
                    />
                  ))}
                </div>

                {displayProjects.length < 6 && (
                  <div className="mt-12">
                    <p className="text-center text-muted-foreground mb-8">
                      More projects coming soon. Add your completed work to showcase your portfolio.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                      {[1, 2, 3].map((idx) => (
                        <div key={`empty-${idx}`} className="relative rounded-xl border border-dashed border-border/40 bg-card/50 p-6 flex items-center justify-center min-h-64">
                          <div className="text-center space-y-2">
                            <div className="text-muted-foreground text-3xl">+</div>
                            <p className="text-sm text-muted-foreground">New Project</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
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
      <Footer />
    </>
  );
}
