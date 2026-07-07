export const siteConfig = {
  name: "Logic Miners",
  description: "Digital Solutions Agency - Web Development, SEO, Digital Marketing, Graphic Design & Custom Software for Modern Businesses",
  url: "https://logicminers.au",
  ogImage: "https://logicminers.au/logo.png",
  links: {
    linkedin: "https://www.linkedin.com/company/logic-miners?lipi=urn%3Ali%3Apage%3Ad_flagship3_messaging_conversation_detail%3Bh5iY%2FlS6Tvag40zU%2FJDRTA%3D%3D",
    facebook: "https://www.facebook.com/profile.php?id=61584286401697",
    gmail: "mailto:contact@logicminers.au",
  },
};

export const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
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
    id: "digital-strategy-advisory",
    title: "Digital Strategy & Advisory",
    description: "Clear digital roadmaps, market positioning, and practical advisory support to help your business make better technology and growth decisions.",
    icon: "Compass",
    features: [
      "Digital Roadmaps",
      "Technology Planning",
      "Growth Strategy",
      "Ongoing Advisory",
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

export type Project = {
  id: string;
  title: string;
  industry: string;
  description: string;
  image: string;
  screenshot: string;
  imageType?: "photo" | "logo";
  websiteUrl?: string;
  technologies: string[];
  highlights: string[];
  problem: string;
  solution: string;
  clientResults: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  results: string;
};

export const projects: Project[] = [
  {
    id: "boostup-cleaning-services",
    title: "BoostUp Cleaning Services",
    industry: "Cleaning Services",
    description: "Responsive service website for a Dubbo-based cleaning business with clear service pages, quote pathways, trust signals, and local SEO content.",
    image: "/boostup-logo.png",
    screenshot: "/boostup-logo.png",
    imageType: "logo",
    websiteUrl: "https://boostupcleaningservices.au/",
    technologies: ["Next.js", "SEO", "Responsive Design", "Lead Generation"],
    highlights: [
      "Built clear service pathways for faster quote actions",
      "Structured local SEO content for Dubbo service-area visibility",
      "Improved trust signals with focused layout and messaging",
    ],
    problem: "The business needed a stronger online presence with clearer service information and a faster path from visitor to quote request.",
    solution: "We designed a conversion-first service site with local SEO architecture, scannable content, and clear enquiry calls-to-action.",
    clientResults: [
      "Clearer user journey from homepage to quote enquiry",
      "Improved local service visibility through targeted page structure",
      "Stronger trust presentation for first-time visitors",
    ],
    testimonial: {
      quote: "The new site looks professional and makes it much easier for customers to understand our services and contact us.",
      author: "BoostUp Cleaning Services",
      role: "Business Owner",
    },
    results: "Professional brand presence with streamlined quote enquiries and local service-area visibility",
  },
  {
    id: "baba-farid-roofing",
    title: "Baba Farid Roofing",
    industry: "Roofing Services",
    description: "Single-page roofing website for a Sydney trade business with service sections, reviews, project proof, FAQs, and direct quote conversion paths.",
    image: "/baba-farid-roofing-logo.png",
    screenshot: "/baba-farid-roofing-logo.png",
    imageType: "logo",
    websiteUrl: "https://www.babafaridroofing.com/",
    technologies: ["Next.js", "UI/UX Design", "SEO", "Conversion Optimization"],
    highlights: [
      "Created a single-page quote-focused conversion flow",
      "Positioned reviews and project proof to support credibility",
      "Optimized section hierarchy for fast mobile browsing",
    ],
    problem: "The client needed a high-conversion site experience focused on calls and quote requests without overwhelming users with complexity.",
    solution: "We built a focused single-page structure with service clarity, social proof placement, and direct quote CTAs across key sections.",
    clientResults: [
      "Reduced friction for mobile quote requests",
      "Stronger trust through visible reviews and project proof",
      "Clearer service messaging aligned to trade customer intent",
    ],
    testimonial: {
      quote: "The structure is simple and effective. Customers can quickly see our work and request a quote without confusion.",
      author: "Baba Farid Roofing",
      role: "Director",
    },
    results: "Focused roofing landing experience built for phone calls, free quote enquiries, and customer trust",
  },
  {
    id: "nuvision-driving-school",
    title: "NUVision Driving School",
    industry: "Driving School",
    description: "Professional driving school website designed to promote lesson packages, instructor credibility, and simple learner enquiry pathways.",
    image: "/Images/Nuvision.png",
    screenshot: "/Images/Nuvision.png",
    imageType: "logo",
    websiteUrl: "https://nuvisiondrivingschool.com.au/",
    technologies: ["Next.js", "Responsive Design", "UI/UX Design", "Lead Generation"],
    highlights: [
      "Designed package-led content blocks for quick comparison",
      "Streamlined learner enquiry actions across key sections",
      "Strengthened instructor trust cues in the page narrative",
    ],
    problem: "The school needed a clearer way to present lesson options and build confidence with first-time learner drivers.",
    solution: "We designed a package-led layout with stronger instructor credibility signals and simplified enquiry pathways.",
    clientResults: [
      "Improved clarity of lesson packages for new learners",
      "More direct enquiry flow from key content blocks",
      "Higher trust perception through professional presentation",
    ],
    testimonial: {
      quote: "Our website now explains packages clearly and helps students reach out with confidence.",
      author: "NUVision Driving School",
      role: "Operations Team",
    },
    results: "Clear service presentation with improved trust signals and streamlined enquiry conversion for new student bookings",
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "Development Team",
    role: "Web and Software Engineering",
    skills: ["Next.js", "React", "TypeScript", "API Development"],
  },
  {
    id: 2,
    name: "Domain and Hosting Team",
    role: "Domain and Infrastructure Management",
    skills: ["Domain Setup", "DNS Management", "Hosting", "Email Configuration"],
  },
  {
    id: 3,
    name: "Marketing Team",
    role: "Digital Growth and Campaign Strategy",
    skills: ["SEO", "Content Planning", "Social Media", "Performance Reporting"],
  },
  {
    id: 4,
    name: "Design Team",
    role: "UI/UX and Brand Experience",
    skills: ["UI Design", "UX Research", "Wireframing", "Prototyping"],
  },
  {
    id: 5,
    name: "Operations Team",
    role: "Project Delivery and Client Support",
    skills: ["Project Planning", "Client Communication", "QA Coordination", "Process Management"],
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
