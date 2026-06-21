export type PackageTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  deliverables: string[];
};

export type PackageCategory = {
  id: string;
  title: string;
  subtitle: string;
  tiers: PackageTier[];
  extraContent?: {
    title: string;
    items?: string[];
    clientProvides?: string[];
    weProvide?: string[];
  }[];
};

export const packagesData: PackageCategory[] = [
  {
    id: "digital-marketing",
    title: "Digital Marketing & Content Creation",
    subtitle: "Generic digital marketing packages to boost your online presence",
    tiers: [
      {
        name: "Starter Content Package",
        price: "$100/Week",
        description: "Perfect for education consultancies, migration agents, accountants, real estate agencies, and small businesses looking to maintain a consistent online presence.",
        features: [
          "3 Short-Form Videos Per Week",
          "Professional Video Editing",
          "Captions & Subtitles",
          "Trending Music & Effects",
          "Custom Cover/Thumbnail",
          "Content Posting on 1 Platform",
          "Monthly Performance Report"
        ],
        deliverables: [
          "12 Short Videos",
          "1 Monthly Report"
        ]
      },
      {
        name: "Growth Content Package",
        price: "$200/Week",
        description: "Designed for businesses that want to increase brand awareness, engagement, and lead generation through consistent video content.",
        features: [
          "6 Short-Form Videos Per Week",
          "Premium Video Editing",
          "Captions & Subtitles",
          "Trending Music & Effects",
          "Custom Hooks & Call-to-Actions",
          "Content Posting on Up to 3 Platforms",
          "Content Planning & Scheduling",
          "Monthly Analytics Report"
        ],
        deliverables: [
          "24 Short Videos",
          "Multi-Platform Publishing",
          "Monthly Performance Report"
        ]
      }
    ],
  },
  {
    id: "cleaning",
    title: "Cleaning Company Marketing",
    subtitle: "Specialized packages for cleaning companies to attract local customers",
    tiers: [
      {
        name: "Starter Package",
        price: "$100/Week",
        description: "Perfect for residential and small commercial cleaning businesses looking to build trust and attract local customers.",
        features: [
          "2 Short Videos/Reels Per Week",
          "2 Branded Social Media Posts Per Week",
          "Before & After Content Editing",
          "Captions & Hashtags",
          "Posting on 1 Platform (Facebook or Instagram)",
          "Monthly Performance Report"
        ],
        deliverables: [
          "8 Videos/Reels",
          "8 Graphic Posts",
          "Monthly Analytics Report"
        ]
      },
      {
        name: "Growth Package",
        price: "$200/Week",
        description: "Designed for cleaning companies that want to increase bookings and build a strong local presence.",
        features: [
          "4 Short Videos/Reels Per Week",
          "2 Branded Social Media Posts Per Week",
          "Before & After Transformations",
          "Customer Testimonial Videos",
          "Captions, Hashtags & Call-to-Actions",
          "Posting on Facebook & Instagram",
          "Content Calendar & Scheduling",
          "Monthly Performance Report"
        ],
        deliverables: [
          "16 Videos/Reels",
          "8 Graphic Posts",
          "Monthly Analytics Report"
        ]
      }
    ],
    extraContent: [
      {
        title: "Content Ideas We Create",
        items: [
          "Before & After Cleaning Results",
          "Carpet & Upholstery Cleaning Transformations",
          "End of Lease Cleaning Showcases",
          "Office Cleaning Highlights",
          "Client Testimonials",
          "Cleaning Tips & Hacks",
          "Team Introduction Videos",
          "Behind-the-Scenes Content"
        ]
      },
      {
        title: "Ideal For",
        items: [
          "Residential Cleaning Services",
          "Commercial Cleaning Companies",
          "Carpet Cleaning Businesses",
          "End of Lease Cleaning Services",
          "Pressure Washing Businesses",
          "Window Cleaning Companies"
        ]
      }
    ]
  },
  {
    id: "ndis",
    title: "NDIS Marketing",
    subtitle: "Specialized packages to build trust and attract new NDIS participants",
    tiers: [
      {
        name: "Starter Package",
        price: "$100/Week",
        description: "Perfect for NDIS providers looking to build trust, increase community awareness, and attract new participants.",
        features: [
          "2 Short Videos/Reels Per Week",
          "2 Branded Social Media Posts Per Week",
          "Professional Captions & Hashtags",
          "NDIS Awareness & Educational Content",
          "Posting on 1 Platform (Facebook or Instagram)",
          "Monthly Performance Report"
        ],
        deliverables: [
          "8 Videos/Reels",
          "8 Graphic Posts",
          "Monthly Analytics Report"
        ]
      },
      {
        name: "Growth Package",
        price: "$200/Week",
        description: "Designed for NDIS providers wanting consistent content, stronger engagement, and increased participant enquiries.",
        features: [
          "4 Short Videos/Reels Per Week",
          "2 Branded Social Media Posts Per Week",
          "Service Showcase Videos",
          "Team Introduction & Community Content",
          "Captions, Hashtags & Call-to-Actions",
          "Posting on Facebook & Instagram",
          "Content Planning & Scheduling",
          "Monthly Performance Report"
        ],
        deliverables: [
          "16 Videos/Reels",
          "8 Graphic Posts",
          "Monthly Analytics Report"
        ]
      }
    ]
  }
];
