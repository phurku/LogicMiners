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
    <Link href={`/services#${id}`}>
      <div className="group relative h-full p-6 rounded-xl border border-border/40 bg-card hover:border-accent/50 hover:shadow-lg transition-all duration-300 cursor-pointer">
        {/* Background gradient on hover */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative space-y-4">
          {/* Icon */}
          <div className="inline-flex p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
            <IconComponent className="h-6 w-6 text-accent" />
          </div>

          {/* Title and description */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>

          {/* Features list */}
          <ul className="space-y-2 pt-4">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex items-center gap-2 text-accent font-semibold pt-2 group-hover:gap-3 transition-all">
            Learn More
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  );
}
