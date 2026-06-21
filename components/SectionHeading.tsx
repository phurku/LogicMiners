'use client';

interface SectionHeadingProps {
  pretitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeading({
  pretitle,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} space-y-3 animate-reveal-up`}>
      {pretitle && (
        <p className="text-xs md:text-sm font-black text-primary uppercase tracking-[0.3em]">
          {pretitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight tracking-tight">
        {title}
      </h2>
      {description && (
        <p className={`text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
}
