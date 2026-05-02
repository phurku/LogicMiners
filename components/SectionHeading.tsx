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
    <div className={`${centered ? 'text-center' : ''} space-y-4`}>
      {pretitle && (
        <p className="text-sm font-semibold text-accent uppercase tracking-widest">
          {pretitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
