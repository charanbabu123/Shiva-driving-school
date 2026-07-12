import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import MobileBottomBar from "@/components/MobileBottomBar";
import { faqs, SITE_URL } from "@/lib/data";

// Inter loaded and self-hosted by Next — no external font CDN calls.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// CANONICAL / OG BASE URL
// TODO: replace SITE_URL in lib/data.ts (currently "https://YOURDOMAIN.com")
// with the real production domain once known. metadataBase below resolves the
// canonical link and the absolute og:image URL from it.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Shiva New-Tech Driving School | Varthur & Whitefield, Bengaluru",
  description:
    "Learn to drive with Shiva New-Tech Driving School in Varthur and Whitefield, Bengaluru. 12+ years of certified training, complete RTO licence assistance, open 7 days. Call +91 96327 81536.",
  alternates: {
    // Resolves to `${SITE_URL}/` — update SITE_URL to set the real canonical.
    canonical: "/",
  },
  openGraph: {
    title: "Shiva New-Tech Driving School | Varthur & Whitefield, Bengaluru",
    description:
      "Learn to drive with Shiva New-Tech Driving School in Varthur and Whitefield, Bengaluru. 12+ years of certified training, complete RTO licence assistance, open 7 days. Call +91 96327 81536.",
    type: "website",
    images: [
      {
        url: "/images/varthur/shop-1.jpg",
        width: 1600,
        height: 900,
        alt: "Shiva New-Tech Driving School, Varthur branch, Bengaluru",
      },
    ],
  },
  robots: { index: true, follow: true },
};

const ALL_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const domain = SITE_URL; // "https://YOURDOMAIN.com" — replace before launch

  // --- BLOCK 1: Varthur branch (LocalBusiness + EducationalOrganization) ---
  const varthurLd = {
    "@type": ["LocalBusiness", "EducationalOrganization"],
    "@id": `${domain}/#varthur`,
    name: "Shiva New-Tech Driving School",
    image: `${domain}/images/varthur/shop-1.jpg`,
    description:
      "Certified driving school in Varthur, Bengaluru offering two-wheeler and four-wheeler training, learner's licence assistance, and complete RTO documentation services. Open Monday to Sunday, 6 AM to 9 PM.",
    telephone: "+919632781536",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Madhuranagar, 2nd Stage, Muthsandra Main Road",
      addressLocality: "Varthur",
      addressRegion: "Karnataka",
      postalCode: "560087",
      addressCountry: "IN",
    },
    // TODO: replace geo coordinates with exact values from Google Maps for this address before going live
    geo: {
      "@type": "GeoCoordinates",
      latitude: "12.9422",
      longitude: "77.7512",
    },
    hasMap: "https://share.google/1CmPmbxuch44qyzGf",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ALL_DAYS,
        opens: "06:00",
        closes: "21:00",
      },
    ],
    areaServed: ["Varthur", "Whitefield", "Kadugodi", "Channasandra", "Bengaluru"],
    priceRange: "₹",
    sameAs: [],
  };

  // --- BLOCK 2: Whitefield branch (LocalBusiness + EducationalOrganization) ---
  const whitefieldLd = {
    "@type": ["LocalBusiness", "EducationalOrganization"],
    "@id": `${domain}/#whitefield`,
    name: "New Shiva New-Tech Driving School",
    image: `${domain}/images/whitefield/shop-1.jpg`,
    description:
      "Certified driving school in Whitefield, Bengaluru. Women-owned and wheelchair accessible. Two-wheeler and car driving training, complete RTO licence and vehicle documentation services. Open all 7 days, 6 AM to 9 PM. Walk-ins welcome.",
    telephone: "+919632781536",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kaithota Main Road, opposite Pranathi Nest Apartment",
      addressLocality: "Whitefield",
      addressRegion: "Karnataka",
      postalCode: "560066",
      addressCountry: "IN",
    },
    // TODO: replace with exact coordinates from Google Maps share link for this address.
    geo: {
      "@type": "GeoCoordinates",
      latitude: "12.9716",
      longitude: "77.7506",
    },
    hasMap: "https://share.google/qOkxIBaWgquj3Sn56",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ALL_DAYS,
        opens: "06:00",
        closes: "21:00",
      },
    ],
    areaServed: [
      "Whitefield",
      "Kadugodi",
      "Channasandra",
      "Immadihalli",
      "Nagondanahalli",
      "Bengaluru",
    ],
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Wheelchair Accessible",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Free Parking",
        value: true,
      },
    ],
    priceRange: "₹",
    sameAs: [],
  };

  // --- BLOCK 3: FAQPage, built from the SAME `faqs` array as the visible accordion ---
  const faqLd = {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  // --- Breadcrumb (single homepage item) ---
  const breadcrumbLd = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${domain}/`,
      },
    ],
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [varthurLd, whitefieldLd, faqLd, breadcrumbLd],
  };

  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans text-brand-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <MobileBottomBar />
      </body>
    </html>
  );
}
