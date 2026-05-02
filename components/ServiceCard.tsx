'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export function ServiceCard({
  id,
  title,
  description,
  icon,
  features,
}: ServiceCardProps) {
  // Get icon component from lucide-react
  const IconComponent = (LucideIcons as any)[icon] || LucideIcons.Lightbulb;

  return (
    <Link href={`/services#${id}`} className="block h-full">
      <div className="group relative h-full p-8 rounded-2xl border border-border/40 bg-card/40 backdrop-blur-sm hover:border-primary/50 hover:bg-card/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] overflow-hidden">
        {/* Animated Background Glow */}
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-[60px] group-hover:bg-primary/20 transition-all duration-500" />
        <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-accent/5 blur-[60px] group-hover:bg-accent/10 transition-all duration-500" />

        <div className="relative space-y-6">
          {/* Icon Container with Glow */}
          <div className="relative inline-flex p-4 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(109,40,217,0.3)]">
            <IconComponent className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-500" />
          </div>

          {/* Title and description */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-500">
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          {/* Features list */}
          <ul className="space-y-3 pt-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                <span className="h-2 w-2 rounded-full bg-primary mt-1.5 flex-shrink-0 group-hover:bg-accent group-hover:scale-125 transition-all duration-300" />
                {feature}
              </li>
            ))}
          </ul>

          {/* CTA with animated arrow */}
          <div className="flex items-center gap-2 text-primary font-bold pt-4 group-hover:gap-4 group-hover:text-accent transition-all duration-500">
            <span className="relative">
              Learn More
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-500 group-hover:w-full" />
            </span>
            <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
