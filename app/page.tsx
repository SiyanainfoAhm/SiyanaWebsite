
'use client';

import { Metadata } from 'next';
import Hero from '../components/Hero';
import MissionVision from '../components/MissionVision';
import Services from '../components/Services';
import Solutions from '../components/Solutions';
import Industries from '../components/Industries';
import Process from '../components/Process';
import TrustSignals from '../components/TrustSignals';
import PartnersAndCertifications from '../components/PartnersAndCertifications';
import ValuesCulture from '../components/ValuesCulture';
import BlogHighlights from '../components/BlogHighlights';
import CallToAction from '../components/CallToAction';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Siyana Info Solutions",
    "alternateName": "Siyana",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://siyanainfo.com",
    "logo": "https://static.readdy.ai/image/7fe129f8d7ac12cdc97a659d50dae110/8c7f99aa674fd6b39cbe8dfa3abcac9f.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-99746-31174",
      "contactType": "customer service",
      "email": "hr@siyanainfo.com",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1302, 13th Floor, Shivalik Shilp, ISCON Circle, SG Highway",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "postalCode": "380015",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.linkedin.com/company/siyana-info-solutions",
      "https://mobile.twitter.com/Siyanainfo",
      "https://www.facebook.com/siyanainfo"
    ],
    "foundingDate": "2009",
    "description": "Siyana Info Solutions is a premier IT company specializing in enterprise software development, web development, mobile apps, digital marketing, and business intelligence solutions. Trusted by government and enterprise clients across Gujarat.",
    "knowsAbout": [
      "Enterprise Software Development",
      "Web Development",
      "Mobile App Development",
      "Digital Marketing",
      "Business Intelligence",
      "Government IT Solutions"
    ],
    "areaServed": {
      "@type": "Place",
      "name": "Gujarat, India"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "IT Services",
    "provider": {
      "@type": "Organization",
      "name": "Siyana Info Solutions"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Enterprise Software Development",
            "description": "Custom ERP systems and government portals"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Responsive websites and web applications"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "Native and cross-platform mobile applications"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing",
            "description": "SEO, PPC, and social media marketing services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Intelligence",
            "description": "Data analytics and reporting solutions"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationSchema, serviceSchema])
        }}
      />
      <Header />
      <Hero />
      <MissionVision />
      <Services />
      <Solutions />
      <Industries />
      <Process />
      <TrustSignals />
      <PartnersAndCertifications />
      <ValuesCulture />
      <BlogHighlights />
      <CallToAction />
      <Footer />
    </div>
  );
}
