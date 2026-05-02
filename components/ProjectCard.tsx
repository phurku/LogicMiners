'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  industry: string;
  description: string;
  image?: string;
  technologies: string[];
  results: string;
}

export function ProjectCard({
  id,
  title,
  industry,
  description,
  image,
  technologies,
  results,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${id}`}>
      <div className="group relative rounded-xl overflow-hidden border border-border/40 bg-card hover:border-accent/50 transition-all duration-300 cursor-pointer">
        {/* Image Container */}
        <div className="relative h-48 bg-gradient-to-br from-accent/10 to-accent-alt/10 overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-2">
                <div className="text-accent text-4xl">📊</div>
                <p className="text-sm text-muted-foreground">No image available</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content Container */}
        <div className="p-6 space-y-4">
          {/* Industry Badge */}
          <span className="inline-block px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
            {industry}
          </span>

          {/* Title */}
          <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed line-clamp-2">
            {description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 pt-2">
            {technologies.slice(0, 3).map((tech, idx) => (
              <span key={idx} className="px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs">
                {tech}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className="px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs">
                +{technologies.length - 3}
              </span>
            )}
          </div>

          {/* Results */}
          <div className="pt-4 border-t border-border/40">
            <p className="text-sm text-accent font-semibold mb-2">Key Result:</p>
            <p className="text-sm text-foreground">{results}</p>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 text-accent font-semibold pt-2 group-hover:gap-3 transition-all">
            View Project
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
