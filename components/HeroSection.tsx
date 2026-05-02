'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Lightbulb } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] md:min-h-[800px] flex items-center overflow-hidden bg-gradient-to-b from-background via-card/30 to-background">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-reveal-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md animate-glow">
              <Lightbulb className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Digital Innovation</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight tracking-tight">
                Digital Solutions <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                  That Drive Growth
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                We craft high-performance websites, custom software, and digital strategies that transform your business potential into reality.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:shadow-[0_0_20px_rgba(109,40,217,0.4)] transition-all duration-300 transform hover:-translate-y-1"
              >
                Get Started
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass glass-hover text-foreground font-bold"
              >
                View Projects
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-12 pt-8 border-t border-border/40">
              <div className="animate-reveal-up delay-100">
                <div className="text-3xl md:text-4xl font-black text-accent">50+</div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Completed</p>
              </div>
              <div className="animate-reveal-up delay-200">
                <div className="text-3xl md:text-4xl font-black text-primary">30+</div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Happy Clients</p>
              </div>
              <div className="animate-reveal-up delay-300">
                <div className="text-3xl md:text-4xl font-black text-accent-alt">8+</div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Experience</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-[400px] md:h-[650px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-[100px] animate-pulse" />
            <div className="relative w-72 h-72 md:w-96 md:h-96 animate-float">
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-20" />
              <Image
                src="/logo.png"
                alt="Logic Miners"
                fill
                className="object-contain drop-shadow-[0_0_50px_rgba(109,40,217,0.5)] z-20"
                priority
              />
            </div>

            {/* Floating cards - Enhanced with Glassmorphism */}
            <div className="absolute top-10 right-0 p-4 rounded-2xl glass glass-hover shadow-2xl animate-reveal-up delay-200">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary mb-0.5">Software</p>
                  <p className="text-sm font-semibold text-foreground">Custom Solutions</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-20 -left-5 p-4 rounded-2xl glass glass-hover shadow-2xl animate-reveal-up delay-400">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-accent/20 flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-accent" />
                </div>
                <div>
                  <p className="text-xs font-bold text-accent mb-0.5">Automation</p>
                  <p className="text-sm font-semibold text-foreground">Streamlined</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 right-10 p-4 rounded-2xl glass glass-hover shadow-2xl animate-reveal-up delay-500">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-lg bg-accent-alt/20 flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-accent-alt" />
                </div>
                <div>
                  <p className="text-xs font-bold text-accent-alt mb-0.5">Web Design</p>
                  <p className="text-sm font-semibold text-foreground">Modern Tech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
