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
  'Explore our completed projects and case studies showcasing our expertise in web development, digital marketing, design, and custom software.',
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

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-card to-background border-b border-border/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              pretitle="Our Work"
              title="Projects That Make an Impact"
              description="Explore the successful projects we've delivered for mining and technology companies"
            />
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 md:py-28 bg-background">
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
              <div className="text-center space-y-6 py-20">
                <p className="text-lg text-muted-foreground">No projects yet</p>
                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                  Add your completed projects in the site configuration to showcase your work and attract new clients.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* How to Add Projects Section */}
        <section className="py-20 md:py-28 bg-card border-t border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Manage Your Projects"
              description="To add or edit projects, update the projects array in lib/siteConfig.ts with the following structure:"
            />

            <div className="mt-12 p-6 rounded-lg bg-background border border-border/40 overflow-x-auto">
              <pre className="text-sm text-muted-foreground font-mono">
                {`{
  id: "project-slug",
  title: "Project Name",
  industry: "Industry Type",
  description: "Brief project description",
  image: "/projects/image.jpg",
  technologies: ["Tech1", "Tech2"],
  results: "Measurable outcome"
}`}
              </pre>
            </div>

            <div className="mt-8 p-6 rounded-lg bg-accent/5 border border-accent/20">
              <h3 className="font-semibold text-foreground mb-3">Quick Tips:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Add project images to /public/projects/ directory</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Use descriptive titles that highlight the value delivered</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Include technologies used for better SEO and credibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent">✓</span>
                  <span>Quantify results (e.g., "40% efficiency increase") when possible</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-background">
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
