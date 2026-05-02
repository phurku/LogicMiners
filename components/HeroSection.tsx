'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Lightbulb } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden bg-gradient-to-b from-background via-card to-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-accent-alt/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
              <Lightbulb className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Digital Growth</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Digital Solutions That Drive{' '}
              <span className="text-accent">Real Results</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              We create websites, develop custom software, and execute digital marketing strategies that help your business grow online and reach more customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
              >
                View Projects
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-border/40">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-accent">50+</div>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-accent">30+</div>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-accent">8+</div>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-[400px] md:h-[600px] animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-alt/20 rounded-2xl blur-xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <Image
                  src="/logo.png"
                  alt="Logic Miners"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute top-10 right-10 p-4 rounded-lg bg-card border border-border/40 backdrop-blur-sm shadow-lg animate-slide-up">
              <p className="text-xs font-semibold text-accent mb-1">Custom Software</p>
              <p className="text-sm text-foreground">Tailored Solutions</p>
            </div>

            <div className="absolute bottom-20 left-10 p-4 rounded-lg bg-card border border-border/40 backdrop-blur-sm shadow-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-xs font-semibold text-accent mb-1">Automation</p>
              <p className="text-sm text-foreground">Streamlined Ops</p>
            </div>

            <div className="absolute bottom-10 right-20 p-4 rounded-lg bg-card border border-border/40 backdrop-blur-sm shadow-lg animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-xs font-semibold text-accent mb-1">Web Development</p>
              <p className="text-sm text-foreground">Modern Tech</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
