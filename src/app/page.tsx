import type { Metadata } from 'next';
import React from 'react';
import { portfolioContent } from '@/data/portfolio-content';

// Import modular components
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import Credentials from '@/components/Credentials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// Static SEO metadata export for the page
export const metadata: Metadata = {
  metadataBase: new URL(portfolioContent.seo.url),
  title: portfolioContent.seo.title,
  description: portfolioContent.seo.description,
  keywords: portfolioContent.seo.keywords,
  openGraph: {
    title: portfolioContent.seo.title,
    description: portfolioContent.seo.description,
    url: portfolioContent.seo.url,
    siteName: portfolioContent.personalInfo.brandName,
    images: [
      {
        url: portfolioContent.seo.ogImage,
        width: 1200,
        height: 1200,
        alt: `${portfolioContent.personalInfo.name} Caregiver Portrait`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: portfolioContent.seo.title,
    description: portfolioContent.seo.description,
    images: [portfolioContent.seo.ogImage],
  },
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  const { personalInfo, seo, contact, credentials } = portfolioContent;

  // JSON-LD structured data for Google Search rich snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${personalInfo.name} (${personalInfo.brandName})`,
    "image": personalInfo.profileImage,
    "description": seo.description,
    "url": seo.url,
    "telephone": contact.details.phone,
    "priceRange": "LKR 5000 - LKR 7500 per shift",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Colombo",
      "addressRegion": "Western Province",
      "addressCountry": "LK",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 6.9271, // Colombo latitude coordinates
      "longitude": 79.8612, // Colombo longitude coordinates
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": contact.details.location,
    },
    "knowsAbout": [
      "Home Health Aide",
      "Post-Surgery Recovery Assistance",
      "Elderly Care",
      "Mobility Transfer",
      "Vital Signs Monitoring",
      "Medication Management",
    ],
    "award": credentials.certifications.map((c) => `${c.title} (${c.subtitle})`),
  };

  return (
    <>
      {/* Inject Structured SEO schema in HTML head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />
      
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Credentials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
