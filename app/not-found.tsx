import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center py-12 md:py-16 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <div className="text-8xl md:text-9xl font-bold text-accent/20">404</div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Page Not Found</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or deleted.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Back to Home
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-accent text-accent font-semibold hover:bg-accent/10 transition-colors"
            >
              Explore Services
            </Link>
          </div>

          <div className="p-8 rounded-lg border border-border/40 bg-card space-y-4">
            <p className="text-foreground font-semibold">Need help? Here are some helpful links:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/" className="text-accent hover:text-accent-alt transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-accent hover:text-accent-alt transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-accent hover:text-accent-alt transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-accent hover:text-accent-alt transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-accent hover:text-accent-alt transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
  );
}
