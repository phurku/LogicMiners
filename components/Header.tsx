'use client';

import Link from 'next/link';
import Image from 'next/image';
import { navigationItems } from '@/lib/siteConfig';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#1A1F2E]/80 backdrop-blur-2xl transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Light Background Pill */}
          <Link href="/" className="flex items-center group relative">
            <div className="absolute -inset-2 bg-white/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="bg-white/90 p-1.5 rounded-lg shadow-inner group-hover:bg-white transition-colors duration-300">
              <Image
                src="/logo.png"
                alt="Logic Miners"
                width={50}
                height={50}
                className="h-10 w-auto relative z-10 transition-all duration-500 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-lg text-sm font-bold text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="hidden sm:inline-flex px-6 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold hover:shadow-[0_0_15px_rgba(109,40,217,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:bg-primary/10 rounded-xl transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-6 pt-2 animate-reveal-up border-t border-border/40">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 rounded-xl text-base font-bold text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block w-full mt-4 px-4 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-center hover:opacity-90 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
