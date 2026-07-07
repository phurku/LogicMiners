import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { defaultMetadata } from '@/lib/metadata'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist-sans'
});
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
});

export const metadata: Metadata = defaultMetadata

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#FFFFFF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Logic Miners',
              url: 'https://logicminers.au',
              logo: 'https://logicminers.au/logo.png',
              description: 'Digital solutions agency offering web development, SEO, UI/UX design, digital marketing, and custom software.',
              sameAs: [
                'https://www.linkedin.com/company/logic-miners',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Sales',
                email: 'contact@logicminers.au',
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground" suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
