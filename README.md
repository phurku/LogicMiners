# Logic Miners Website

A modern, SEO-optimized website for Logic Miners - Empowering Businesses Through Digital Transformation.

## Project Overview

This is a complete redesign of the Logic Miners website built with Next.js 16, featuring:

- **Modern Dark Design**: Dark blue brand colors (#003D5C) with bright cyan (#00D9FF) accents
- **Full SEO Optimization**: JSON-LD structured data, dynamic sitemaps, robots.txt, meta tags
- **Responsive Design**: Mobile-first approach, works perfectly on all devices
- **Component Architecture**: Reusable, modular components for easy maintenance
- **Performance Optimized**: Image optimization, lazy loading, code splitting
- **Scalable Structure**: Easy to add new projects, services, and content

## Features

### Pages
- **Home** (`/`) - Hero section with services overview and CTA
- **Services** (`/services`) - Detailed service descriptions with process flow
- **Projects** (`/projects`) - Portfolio of completed work with scalable template
- **About** (`/about`) - Company mission, values, team, and achievements
- **Contact** (`/contact`) - Contact form, FAQ, and business information
- **404** - Custom error page with helpful navigation

### Components
- Responsive Header with mobile navigation
- Footer with company info and links
- Hero section with animations
- Service cards with hover effects
- Project cards with filtering capability
- Contact form with validation
- Reusable section headings and layouts

### SEO Features
- Dynamic meta tags and Open Graph tags
- JSON-LD structured data (Organization, LocalBusiness, Service)
- Dynamic sitemap generation (`/sitemap.xml`)
- robots.txt for search engine crawling
- Image optimization with next/image
- Proper heading hierarchy (H1, H2, H3)
- Alt text for all images
- Mobile responsive viewport meta tags

## Getting Started

### Installation

1. **Install dependencies:**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

2. **Run development server:**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

3. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Configuration

### Update Site Information

Edit `/lib/siteConfig.ts` to customize:
- Company name and description
- Navigation links
- Services list
- Projects portfolio
- Team members
- Colors and branding

```typescript
export const siteConfig = {
  name: "Logic Miners",
  description: "Your company description",
  url: "https://logicminers.au",
  // ... more config
};
```

### Add Projects

Add your completed projects to the `projects` array in `/lib/siteConfig.ts`:

```typescript
{
  id: "project-slug",
  title: "Project Name",
  industry: "Industry Type",
  description: "Brief project description",
  image: "/projects/image.jpg",
  technologies: ["Tech1", "Tech2"],
  results: "Measurable outcome"
}
```

**Note:** Add project images to `/public/projects/` directory.

### Update Metadata

Edit `/lib/metadata.ts` for:
- Default page titles and descriptions
- Open Graph tags
- Twitter card information
- Robot meta tags

## Directory Structure

```
/app
  /api/contact           # Contact form endpoint
  /services              # Services page
  /projects              # Projects page
  /about                 # About page
  /contact               # Contact page
  layout.tsx             # Root layout with SEO
  page.tsx               # Homepage
  globals.css            # Global styles and animations
  sitemap.ts             # Dynamic sitemap

/components
  Header.tsx             # Navigation header
  Footer.tsx             # Footer component
  HeroSection.tsx        # Hero section
  ServiceCard.tsx        # Service card component
  ProjectCard.tsx        # Project card component
  ContactForm.tsx        # Contact form
  SectionHeading.tsx     # Reusable section heading

/lib
  siteConfig.ts          # Site configuration
  metadata.ts            # SEO metadata config
  utils.ts               # Utility functions

/public
  logo.png               # Company logo
  projects/              # Project images
  teams/                 # Team photos

tailwind.config.ts       # Tailwind CSS configuration
next.config.mjs          # Next.js configuration
```

## Customization

### Colors

The site uses CSS variables defined in `/app/globals.css` and `/tailwind.config.ts`:

```css
--primary: #003D5C;        /* Dark blue */
--accent: #00D9FF;         /* Bright cyan */
--accent-alt: #FF9F1C;     /* Orange accent */
--background: #0A0E27;     /* Dark background */
```

To change colors, update both files.

### Typography

Fonts are configured in `/app/layout.tsx`:
- Sans-serif: Geist (default)
- Mono: Geist Mono

To change fonts, update the font imports and tailwind config.

### Animations

Animations are defined in `/app/globals.css`. Modify the keyframes to adjust animation behavior.

## Contact Form Setup

The contact form sends emails through SMTP (Hostinger-compatible). Configure these values in `.env.local`:

```
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=contact@logicminers.au
SMTP_PASS=your_mailbox_password
CONTACT_TO_EMAIL=contact@logicminers.au
CONTACT_FROM_EMAIL="Logic Miners <contact@logicminers.au>"
```

For most Hostinger mailboxes, `SMTP_PORT=465` with `SMTP_SECURE=true` works best. Use `SMTP_PORT=587` and `SMTP_SECURE=false` only if your mailbox is configured for STARTTLS.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Deploy Elsewhere

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## Performance

The site is optimized for performance:

- Images optimized with next/image
- CSS and JavaScript minified
- Static generation for fast page loads
- Lazy loading for below-fold components
- Optimized Core Web Vitals
- Mobile Lighthouse score target: >85

## SEO Checklist

- [x] Meta titles and descriptions
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] JSON-LD structured data
- [x] Dynamic sitemap
- [x] robots.txt
- [x] Mobile responsive
- [x] Fast page load
- [x] Image alt text
- [x] Internal linking
- [x] 404 page

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Maintenance

### Regular Updates

- Update project list quarterly
- Add new service descriptions as needed
- Keep technology stack current
- Monitor Core Web Vitals
- Test contact form regularly

### Security

- Keep dependencies updated: `pnpm update`
- Use environment variables for sensitive data
- Validate all form submissions
- Use HTTPS in production
- Follow Next.js security best practices

## Troubleshooting

### Contact Form Not Working

1. Check browser console for errors
2. Verify API route exists at `/app/api/contact/route.ts`
3. Check network tab in DevTools
4. Ensure email service is configured

### Images Not Loading

1. Verify images exist in `/public` directory
2. Check image paths are correct
3. Clear browser cache
4. Rebuild with `pnpm build`

### Styling Issues

1. Clear Tailwind cache: `rm -rf .next`
2. Rebuild: `pnpm build`
3. Clear browser cache
4. Verify CSS is imported in layout.tsx

## Support

For issues or questions:
- Email: contact@logicminers.au
- Update the configuration files as needed

## License

All content and code are proprietary to Logic Miners.

## Version

Current Version: 1.0.0
Last Updated: 2024
