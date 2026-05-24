export interface ServiceItem {
  title: string;
}

export interface ValueCard {
  title: string;
  description: string;
  iconName: 'Heart' | 'ShieldCheck' | 'Clock' | 'Star';
  color: string; // Tailwind icon color wrapper e.g. text-rose-500
}

export interface PriceDetail {
  rate: string;
  currency: string;
  period: string;
  features: string[];
}

export interface Certification {
  badge: string;
  title: string;
  subtitle: string;
  details: {
    label: string;
    value: string;
    subValue?: string;
  }[];
  status: string;
  isActive: boolean;
}

export interface ContactInfo {
  phone: string;
  phoneLabel: string;
  email: string;
  emailLabel: string;
  location: string;
  locationLabel: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  url: string;
}

export interface PortfolioContent {
  personalInfo: {
    name: string;
    brandName: string;
    profileImage: string;
    fallbackImage: string;
  };
  seo: SEOConfig;
  hero: {
    badgeText: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    bullets: {
      text: string;
      iconName: 'ShieldCheck' | 'Clock';
      color: string;
    }[];
  };
  about: {
    title: string;
    bioParagraphs: string[];
    values: ValueCard[];
  };
  services: {
    title: string;
    description: string;
    list: string[];
    aiPlanner: {
      title: string;
      description: string;
      placeholder: string;
      ctaText: string;
    };
  };
  pricing: {
    title: string;
    description: string;
    disclaimer: string;
    options: {
      day: PriceDetail;
      night: PriceDetail;
    };
  };
  credentials: {
    badgeText: string;
    title: string;
    description: string;
    certifications: Certification[];
  };
  contact: {
    heading: string;
    description: string;
    details: ContactInfo;
    form: {
      servicesOptions: string[];
      shiftOptions: string[];
      submitCta: string;
      footerNote: string;
    };
  };
}

export const portfolioContent: PortfolioContent = {
  personalInfo: {
    name: "Mohamed Rifai Mohamed Isham",
    brandName: "Isham Care",
    profileImage: "/images/caregiver.png",
    fallbackImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
  },
  seo: {
    title: "Mohamed Rifai Mohamed Isham | Certified Home Caregiver Sri Lanka",
    description: "Professional, compassionate home caregiver certified by the American Caregiver Association. Specializing in short-term post-surgery recovery, elderly care, and mobility assistance in Colombo, Sri Lanka.",
    keywords: [
      "home caregiving Sri Lanka",
      "certified caregiver Colombo",
      "elderly care Sri Lanka",
      "post-surgery care Colombo",
      "American Caregiver Association certified",
      "home visit caregiver Colombo",
      "Rifai Mohamed Isham",
      "Isham Care"
    ],
    ogImage: "/images/caregiver.png",
    url: "https://isham.care" // Replace with actual production domain when active
  },
  hero: {
    badgeText: "Available for Short-Term Care in Sri Lanka",
    title: "Professional, Compassionate",
    titleHighlight: "Home Caregiving.",
    subtitle: "Dedicated home visit caregiving tailored to recovery, comfort, and daily assistance. Providing families with peace of mind through internationally certified, standard-setting care.",
    ctaPrimary: "Book a Home Visit",
    ctaSecondary: "View Credentials",
    bullets: [
      { text: "ACA Certified", iconName: "ShieldCheck", color: "text-emerald-500" },
      { text: "Day & Night Shifts", iconName: "Clock", color: "text-blue-500" }
    ]
  },
  about: {
    title: "About Me",
    bioParagraphs: [
      "Hello, I am Mohamed Rifai Mohamed Isham. I specialize in providing premium, short-term home caregiving services.",
      "My approach is rooted in compassion, dignity, and clinical precision. Whether recovering from surgery or needing dedicated daily assistance, I ensure my clients receive the highest standard of personalized care in the comfort of their own homes."
    ],
    values: [
      {
        title: "Patient Dignity",
        description: "Prioritizing respect and emotional well-being alongside physical care.",
        iconName: "Heart",
        color: "text-rose-500"
      },
      {
        title: "International Standards",
        description: "Trained under the rigorous guidelines of the American Caregiver Association.",
        iconName: "ShieldCheck",
        color: "text-blue-500"
      },
      {
        title: "Flexible Scheduling",
        description: "Available for critical short-term care, adapting to your family's timeline.",
        iconName: "Clock",
        color: "text-amber-500"
      },
      {
        title: "Holistic Approach",
        description: "Integrating traditional care with alternative medicine principles for complete recovery.",
        iconName: "Star",
        color: "text-teal-500"
      }
    ]
  },
  services: {
    title: "Specialized Care Services",
    description: "Transparent, high-quality care tailored to your specific short-term needs.",
    list: [
      "Post-Surgery Recovery",
      "Elderly Assistance & Companionship",
      "Mobility & Transfer Support",
      "Medication Reminders",
      "Vital Signs Monitoring",
      "Personal Hygiene & Grooming"
    ],
    aiPlanner: {
      title: "Visualize Your Care",
      description: "Not sure what a professional home visit looks like? Briefly describe your loved one's situation, and our AI will generate a sample, personalized daily routine to give you peace of mind.",
      placeholder: "e.g. 75yr old recovering from knee surgery",
      ctaText: "Generate Routine"
    }
  },
  pricing: {
    title: "Visit Charges",
    description: "Standard rates for short-term home visits.",
    disclaimer: "* Rates may vary based on exact location and specific medical requirements. Emergency call-outs subject to availability.",
    options: {
      day: {
        rate: "5,000",
        currency: "LKR",
        period: "per shift",
        features: [
          "Standard 8-hour daytime shift",
          "Continuous dedicated attention",
          "Flexible booking (minimum 1 day)"
        ]
      },
      night: {
        rate: "7,500",
        currency: "LKR",
        period: "per shift",
        features: [
          "Overnight monitoring & assistance",
          "Continuous dedicated attention",
          "Flexible booking (minimum 1 day)"
        ]
      }
    }
  },
  credentials: {
    badgeText: "Verified Credentials",
    title: "Certified & Recognized",
    description: "Professional qualifications ensuring the highest standard of care.",
    certifications: [
      {
        badge: "Active",
        title: "National Caregiver Certification",
        subtitle: "Home Health Aide",
        details: [
          { label: "Issuing Body", value: "American Caregiver Association (ACA)", subValue: "The National Standard Since 1905" },
          { label: "Course of Study", value: "120 Hours" },
          { label: "Certification No.", value: "20252234P" },
          { label: "Renewal Date", value: "April 28, 2026" }
        ],
        status: "Active",
        isActive: true
      },
      {
        badge: "Graduated 2024",
        title: "Diploma in Caregiving",
        subtitle: "Medicina Alternativa (Alma-Ata 1962)",
        details: [
          { label: "Affiliation", value: "Universidad Azteca", subValue: "Recognized by UGC Sri Lanka" },
          { label: "Location", value: "Colombo, Sri Lanka" },
          { label: "Registered No.", value: "D04202408236MA" },
          { label: "Date Issued", value: "November 2024" }
        ],
        status: "Graduated 2024",
        isActive: false
      }
    ]
  },
  contact: {
    heading: "Let's discuss your care needs.",
    description: "Fill out the form to request a short-term visit, or reach out directly for urgent care requirements.",
    details: {
      phone: "+94 (77) 123-4567",
      phoneLabel: "Call / WhatsApp",
      email: "isham.care@example.com",
      emailLabel: "Email",
      location: "Colombo & Suburbs, Sri Lanka",
      locationLabel: "Service Area"
    },
    form: {
      servicesOptions: [
        "Post-Surgery Recovery",
        "Elderly Care",
        "Mobility Assistance",
        "General Companionship",
        "Other"
      ],
      shiftOptions: [
        "Day Visit (8 Hours)",
        "Night Visit (Overnight)",
        "Undecided / Flexible"
      ],
      submitCta: "Submit Request",
      footerNote: "Your information is kept strictly confidential. I will get back to you within 24 hours."
    }
  }
};
