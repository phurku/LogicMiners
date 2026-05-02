export const siteConfig = {
  name: "Logic Miners",
  description: "Digital Solutions Agency - Web Development, SEO, Digital Marketing, Graphic Design & Custom Software for Modern Businesses",
  url: "https://logicminers.au",
  ogImage: "https://logicminers.au/og-image.png",
  links: {
    twitter: "#",
    linkedin: "#",
    github: "#",
  },
};

export const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Custom, responsive websites and web applications built with modern technologies for optimal performance and conversion.",
    icon: "Globe",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Fast & Secure",
      "CMS Integration",
    ],
  },
  {
    id: "seo-marketing",
    title: "SEO & Digital Marketing",
    description: "Data-driven SEO and digital marketing strategies to increase your visibility, drive traffic, and generate qualified leads.",
    icon: "TrendingUp",
    features: [
      "SEO Optimization",
      "PPC Campaigns",
      "Content Strategy",
      "Analytics & Reporting",
    ],
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    description: "Professional graphic design services including branding, logos, and marketing materials that make your brand stand out.",
    icon: "Palette",
    features: [
      "Logo Design",
      "Brand Identity",
      "Marketing Materials",
      "Social Media Graphics",
    ],
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    description: "Bespoke software solutions tailored to your unique business challenges and requirements.",
    icon: "Code",
    features: [
      "Scalable Architecture",
      "Business Automation",
      "Quality Assurance",
      "Ongoing Support",
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive, beautiful interfaces improving engagement and user satisfaction.",
    icon: "Palette",
    features: [
      "User Research",
      "Wireframing & Prototyping",
      "Visual Design",
      "Usability Testing",
    ],
  },
  {
    id: "social-media",
    title: "Social Media Management",
    description: "Build and grow your social presence with strategic content, community management, and engaging campaigns.",
    icon: "Share2",
    features: [
      "Content Creation",
      "Community Management",
      "Social Campaigns",
      "Analytics & Growth",
    ],
  },
];

export const projects = [
  {
    id: "nuvision",
    title: "NUVision E-Commerce Platform",
    industry: "E-Commerce & Retail",
    description: "Modern e-commerce platform redesign with integrated inventory management and mobile optimization.",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL"],
    results: "40% increase in sales, 30% reduction in cart abandonment",
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "Team Member",
    role: "Lead Developer",
    image: "/team/member-1.jpg",
  },
  {
    id: 2,
    name: "Team Member",
    role: "UI/UX Designer",
    image: "/team/member-2.jpg",
  },
];

export const colors = {
  primary: "#003D5C",
  primaryLight: "#004D75",
  accent: "#00D9FF",
  accentAlt: "#FF9F1C",
  background: "#0A0E27",
  surface: "#151B3B",
  text: "#FFFFFF",
  textSecondary: "#B0B8D4",
};
