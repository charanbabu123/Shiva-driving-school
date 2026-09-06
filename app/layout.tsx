import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import MobileBottomBar from "@/components/MobileBottomBar";
import {
  ALL_DAYS,
  areasServed,
  business,
  courses,
  faqs,
  rtoServices,
  SITE_URL,
} from "@/lib/data";

// Inter is downloaded at build time and self-hosted by Next — no external font
// CDN request, which keeps Largest Contentful Paint fast (a ranking factor).
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const TITLE =
  "Driving School in Varthur, Bangalore | Shiva New-Tech Driving School";
const DESCRIPTION =
  "Shiva New-Tech Driving School — car & two-wheeler driving classes in Varthur, Bengaluru. 7+ years' experience, complete RTO licence assistance, open all 7 days 6 AM–9 PM. Call +91 96327 81536.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Shiva New-Tech Driving School",
  },
  description: DESCRIPTION,
  applicationName: business.name,
  authors: [{ name: business.name }],
  creator: business.name,
  publisher: business.name,
  keywords: [
    "driving school in Varthur",
    "driving school near me",
    "best driving school Varthur Bangalore",
    "car driving classes Varthur",
    "two wheeler driving school Varthur",
    "driving school Whitefield Bangalore",
    "driving classes Gunjur Muthsandra",
    "learners licence Varthur",
    "RTO services Varthur Bangalore",
    "driving licence renewal Bangalore",
    "Shiva New-Tech Driving School",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: business.name,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: business.ogImage,
        width: 1200,
        height: 630,
        alt: "Shiva New-Tech Driving School training cars at Varthur, Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [business.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Driving School",
  // TODO(owner): after adding the site in Google Search Console, paste the
  // HTML-tag verification code here to verify ownership.
  // verification: { google: "your-search-console-token" },
};

export const viewport: Viewport = {
  themeColor: "#0A2E4A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const domain = SITE_URL;

  /* ---------------------------------------------------------------- */
  /* JSON-LD: one business, one place, one phone number.               */
  /* ---------------------------------------------------------------- */

  // AutomotiveBusiness is a LocalBusiness subtype (so it inherits address,
  // geo and openingHours); EducationalOrganization captures the teaching side.
  const localBusinessLd = {
    "@type": ["AutomotiveBusiness", "EducationalOrganization"],
    "@id": `${domain}/#business`,
    name: business.name,
    legalName: business.legalName,
    slogan: business.tagline,
    url: `${domain}/`,
    image: [
      `${domain}/images/og.jpg`,
      `${domain}/images/hero-fleet.jpg`,
      `${domain}/images/car-i20-front.jpg`,
      `${domain}/images/office-rto.jpg`,
    ],
    logo: `${domain}/icon.png`,
    description:
      "Shiva New-Tech Driving School is a driving school in Varthur, Bengaluru, led by an instructor with 7+ years of experience. We offer car and two-wheeler driving training for beginners and experienced drivers, defensive driving and parking practice, RTO driving-test preparation, and complete licence and vehicle documentation services. Open all seven days, 6:00 AM to 9:00 PM.",
    telephone: business.phoneRaw,
    email: undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${business.address.line1}, ${business.address.line2}`,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    hasMap: business.maps,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...ALL_DAYS],
        opens: business.hoursOpen,
        closes: business.hoursClose,
      },
    ],
    areaServed: areasServed.map((a) => ({
      "@type": "Place",
      name: `${a}, Bengaluru`,
    })),
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI",
    knowsLanguage: ["en", "kn", "hi", "ta", "te"],
    // Every course and RTO service we actually offer, so search engines can
    // match long-tail queries such as "duplicate RC Varthur" to this page.
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Driving Courses & RTO Services",
      itemListElement: [...courses, ...rtoServices].map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.description,
          serviceType: s.name,
          areaServed: { "@type": "City", name: "Bengaluru" },
          provider: { "@id": `${domain}/#business` },
        },
      })),
    },
    potentialAction: {
      "@type": "ReserveAction",
      name: "Call to book a driving lesson",
      target: business.phoneTel,
    },
    // TODO(owner): add your Google Business Profile, Justdial, Facebook and
    // Instagram URLs here — sameAs links are a strong local-SEO trust signal.
    sameAs: [business.maps],
  };

  const websiteLd = {
    "@type": "WebSite",
    "@id": `${domain}/#website`,
    url: `${domain}/`,
    name: business.name,
    inLanguage: "en-IN",
    publisher: { "@id": `${domain}/#business` },
  };

  // Built from the SAME `faqs` array the visible accordion renders, so the
  // structured data and the on-page copy can never disagree.
  const faqLd = {
    "@type": "FAQPage",
    "@id": `${domain}/#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumbLd = {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${domain}/` },
    ],
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [localBusinessLd, websiteLd, faqLd, breadcrumbLd],
  };

  return (
    <html lang="en-IN" className={inter.variable}>
      <head>
        {/* Warm up the WhatsApp origin so the CTA opens instantly on tap. */}
        <link rel="preconnect" href="https://wa.me" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans text-brand-ink antialiased">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Header />
        {children}
        <MobileBottomBar />
      </body>
    </html>
  );
}
