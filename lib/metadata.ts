import type { Metadata } from "next";
import { siteConfig } from "./siteConfig";

export const defaultMetadata: Metadata = {
  title: {
    default: "Logic Miners - Digital Solutions Agency",
    template: "%s | Logic Miners",
  },
  description: siteConfig.description,
  keywords: [
    "Web Development",
    "Digital Marketing",
    "SEO",
    "Graphic Design",
    "Custom Software",
    "UI/UX Design",
    "Social Media Management",
    "Digital Agency",
  ],
  authors: [{ name: "Logic Miners" }],
  creator: "Logic Miners",
  publisher: "Logic Miners",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteConfig.url,
    title: "Logic Miners - Digital Solutions Agency",
    description: siteConfig.description,
    siteName: "Logic Miners",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Logic Miners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Logic Miners - Digital Solutions Agency",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export function createMetadata(
  title: string,
  description: string,
  pathname: string
): Metadata {
  const canonicalUrl = `${siteConfig.url}${pathname}`;
  const siteSuffix = ` | ${siteConfig.name}`;
  const pageTitle = title.endsWith(siteSuffix)
    ? title.slice(0, -siteSuffix.length)
    : title;
  const fullTitle = `${pageTitle}${siteSuffix}`;

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      type: "website",
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [siteConfig.ogImage],
    },
  };
}
