/**
 * Single source of truth for all business content.
 *
 * Everything visible on the page — and every piece of structured data
 * (JSON-LD) — is derived from the objects in this file. In particular the
 * `faqs` array below is rendered BOTH in the visible FAQ accordion and in the
 * FAQPage JSON-LD, so the two can never drift apart.
 */

export const business = {
  name: "Shiva New-Tech Driving School",
  tagline: "Bengaluru's Most Trusted Driving School & RTO Service Centre",
  phoneDisplay: "+91 96327 81536",
  phoneRaw: "+919632781536",
  phoneTel: "tel:+919632781536",
  whatsapp: "https://wa.me/919632781536",
  whatsappDisplay: "wa.me/919632781536",
  hoursShort: "Mon–Sun · 6:00 AM – 9:00 PM",
  owner: {
    name: "Shiva",
    credibility: "12+ Years · Certified Driving Instructor · RTO Specialist",
    image: "/images/owner/owner.jpg",
  },
  // Best shop photo, reused for the hero background and the Open Graph image.
  ogImage: "/images/varthur/shop-1.jpg",
} as const;

export type Branch = {
  id: "varthur" | "whitefield";
  name: string;
  address: string;
  phoneDisplay: string;
  phoneTel: string;
  hours: string;
  maps: string;
  image: string;
  isNew: boolean;
  experience?: string;
  badges?: string[];
};

export const branches: Branch[] = [
  {
    id: "varthur",
    name: "Varthur Branch",
    address:
      "Madhuranagar, Muthsandra Main Rd, Varthur, 2nd Stage, Bengaluru, Karnataka 560087",
    phoneDisplay: "+91 96327 81536",
    phoneTel: "tel:+919632781536",
    hours: "Mon–Sun · 6:00 AM – 9:00 PM",
    // Real Google Maps place link for the Madhuranagar (Varthur) branch.
    maps: "https://share.google/1CmPmbxuch44qyzGf",
    image: "/images/varthur/shop-1.jpg",
    isNew: false,
    experience: "7+ Years at This Location",
  },
  {
    id: "whitefield",
    name: "Whitefield Branch",
    address:
      "Kaithota Main Rd, opp. Pranathi Nest Apartment, Whitefield, Bengaluru, Karnataka 560066",
    phoneDisplay: "+91 96327 81536",
    phoneTel: "tel:+919632781536",
    hours: "Mon–Sun · 6:00 AM – 9:00 PM",
    // Real Google Maps place link for the Whitefield (New Shiva New-Tech) branch.
    maps: "https://share.google/qOkxIBaWgquj3Sn56",
    image: "/images/whitefield/shop-1.jpg",
    isNew: true,
    badges: ["🏅 Women-Owned", "♿ Accessible", "🅿️ Free Parking"],
  },
];

export type Service = { emoji: string; name: string; description: string };

export const services: Service[] = [
  {
    emoji: "🛵",
    name: "Two-Wheeler Driving Training",
    description:
      "Geared and gearless scooters and motorcycles, from absolute beginner to test-ready.",
  },
  {
    emoji: "🚗",
    name: "Four-Wheeler (Car) Driving Training",
    description:
      "Learn manual and automatic transmission in real Bengaluru traffic conditions.",
  },
  {
    emoji: "📋",
    name: "Learner's Licence (LL) Assistance",
    description:
      "We handle the application, paperwork, and test preparation — you just show up.",
  },
  {
    emoji: "🪪",
    name: "Permanent Driving Licence Application",
    description:
      "Full support for new DL applications from slot booking to RTO test day.",
  },
  {
    emoji: "🔄",
    name: "Driving Licence Renewal",
    description:
      "Expired or expiring licence? We manage the renewal process end to end.",
  },
  {
    emoji: "📄",
    name: "Duplicate Driving Licence",
    description:
      "Lost or damaged licence replaced with minimum hassle and paperwork.",
  },
  {
    emoji: "🔑",
    name: "Vehicle Ownership Transfer",
    description:
      "RC transfer handled correctly the first time — no repeated trips to RTO.",
  },
  {
    emoji: "📑",
    name: "Duplicate RC (Registration Certificate)",
    description:
      "Lost your RC? We process the application and follow up with the RTO.",
  },
  {
    emoji: "✅",
    name: "Vehicle Fitness Certificate (FC)",
    description:
      "Commercial vehicle FC inspections and certification assistance.",
  },
  {
    emoji: "🏛️",
    name: "Other RTO & Vehicle Documentation",
    description:
      "Any other licensing or vehicle registration need across Karnataka — ask us.",
  },
];

export type WhyPoint = { number: string; title: string; body: string };

export const whyChooseUs: WhyPoint[] = [
  {
    number: "01",
    title: "Certified & Experienced Instructor",
    body: "Led by Shiva with 12+ years of professional driving instruction and RTO expertise. Lessons tailored to complete beginners and nervous returners alike.",
  },
  {
    number: "02",
    title: "Full RTO Assistance Included",
    body: "We handle your learner's licence, permanent licence, renewals, ownership transfers, and all vehicle documentation — everything under one roof, no repeated trips to the RTO.",
  },
  {
    number: "03",
    title: "Two Branches, Open 7 Days",
    body: "Both Varthur and Whitefield locations open Monday to Sunday, 6 AM to 9 PM — morning, afternoon, or evening slots to fit around your schedule.",
  },
  {
    number: "04",
    title: "Walk-In Welcome, Free Parking",
    body: "No advance appointment needed at either branch. Free parking available. Whitefield branch is fully wheelchair accessible.",
  },
];

export const areasServed: string[] = [
  "Whitefield",
  "Varthur",
  "Kadugodi",
  "Channasandra",
  "Belathur",
  "Krishnarajapuram",
  "Harohalli",
  "Siddapura",
  "Immadihalli",
  "Nagondanahalli",
  "Thirumalashettyhally",
  "Samethanahalli",
  "Valepura",
  "Angondahalli",
  "Varthur Kodi",
  "Palm Meadows",
  "Bengaluru & surrounding areas",
];

export type Step = { number: string; emoji: string; title: string; body: string };

export const licenceSteps: Step[] = [
  {
    number: "01",
    emoji: "📝",
    title: "Apply for Learner's Licence",
    body: "Visit your nearest RTO or apply online at parivahan.gov.in. You'll need your Aadhaar card, a passport-size photo, and approximately ₹200–300 in fees. We assist with the complete application and form filling at no extra charge.",
  },
  {
    number: "02",
    emoji: "🚗",
    title: "Complete Your Driving Training",
    body: "Karnataka law requires minimum 30 hours of certified training before the licence test. Most students at Shiva New-Tech are test-ready in 4–5 weeks, training daily in real Bengaluru traffic conditions with our experienced instructor.",
  },
  {
    number: "03",
    emoji: "🎯",
    title: "Clear Your RTO Driving Test",
    body: "The Karnataka RTO test includes a track test (figure-8, gradient, parking) and an on-road test. We coach you specifically for the Bengaluru RTO test format and can accompany you on test day for support and confidence.",
  },
];

export type Faq = { question: string; answer: string };

/**
 * FAQ source of truth — rendered verbatim in BOTH the visible accordion
 * (components/Faq.tsx) and the FAQPage JSON-LD (app/layout.tsx). Do not
 * duplicate this content anywhere; always import from here.
 */
export const faqs: Faq[] = [
  {
    question: "Which is the best driving school near Varthur, Bangalore?",
    answer:
      "Shiva New-Tech Driving School on Muthsandra Main Road, Varthur, is one of the area's most established training schools, with 7+ years at this location. We offer two-wheeler and four-wheeler training, learner's licence assistance, and full RTO services, open Monday to Sunday from 6 AM to 9 PM.",
  },
  {
    question: "Which is the best driving school near Whitefield, Bengaluru?",
    answer:
      "Our Whitefield branch on Kaithota Main Road, opposite Pranathi Nest Apartment, offers certified two-wheeler and car driving training, plus complete RTO documentation services. Open all seven days from 6 AM to 9 PM, no appointment needed, free parking, and fully wheelchair accessible.",
  },
  {
    question: "Do you offer two-wheeler driving training?",
    answer:
      "Yes. We train students on both geared motorcycles and gearless scooters at both our Varthur and Whitefield branches. Training is tailored for complete beginners through to licence-test preparation.",
  },
  {
    question:
      "Do you help with the learner's licence (LL) application in Bangalore?",
    answer:
      "Yes. We assist with the complete LL process — application form, document checklist, test preparation for the online theory exam, and RTO slot booking. Most students get their learner's licence within a week of starting the process with us.",
  },
  {
    question: "Can you help with driving licence renewal and duplicate licence?",
    answer:
      "Yes, both licence renewal and duplicate licence (for lost or damaged licences) are services we handle at both branches. We manage the application, documentation, and follow-up with the Karnataka RTO on your behalf.",
  },
  {
    question: "Do you assist with vehicle ownership transfer and duplicate RC?",
    answer:
      "Yes. Vehicle ownership transfer and duplicate RC (Registration Certificate) applications are part of our RTO documentation services at both branches. We handle the paperwork and RTO follow-up so you don't need multiple visits.",
  },
  {
    question: "Do I need to book an appointment in advance?",
    answer:
      "No appointment is necessary at either branch. Walk-in enquiries are welcome at both Varthur (Muthsandra Main Road) and Whitefield (Kaithota Main Road) during our working hours of 6:00 AM to 9:00 PM, seven days a week.",
  },
  {
    question: "What are your working hours?",
    answer:
      "Both branches are open Monday to Sunday, 6:00 AM to 9:00 PM. No holidays, no appointment needed. Call or WhatsApp +91 96327 81536 any day before visiting if you want to confirm slot availability for training sessions.",
  },
  {
    question: "Is parking available?",
    answer:
      "Yes. The Whitefield branch on Kaithota Main Road has free on-site parking plus free street parking nearby. The Varthur branch on Muthsandra Main Road also has parking available. Call ahead if you need specific parking guidance.",
  },
  {
    question: "Is your Whitefield branch wheelchair accessible?",
    answer:
      "Yes. The Whitefield branch is fully wheelchair accessible, with an accessible entrance, seating, toilet facilities, and car park. We welcome all learners regardless of mobility requirements.",
  },
  {
    question: "How many classes do I need before the driving test?",
    answer:
      "Most students are ready for their Karnataka RTO driving test within 4–5 weeks of regular daily training. Karnataka law requires a minimum of 30 hours of certified training. The exact number of sessions depends on your prior experience and comfort level.",
  },
  {
    question: "Do you serve areas like Kadugodi, Channasandra, and Belathur?",
    answer:
      "Yes. We serve learners across Whitefield, Varthur, Kadugodi, Channasandra, Belathur, Krishnarajapuram, Siddapura, Immadihalli, Nagondanahalli, and all surrounding areas of East Bengaluru from both our Varthur and Whitefield branches.",
  },
  {
    question: "What documents are needed for a driving licence in Karnataka?",
    answer:
      "For a Learner's Licence: Aadhaar card (address proof and identity), one passport-size photo, and the application fee (approximately ₹200–300). For a Permanent Licence: your Learner's Licence, completed driving training certificate, and RTO test clearance. We guide you through every document step at no additional charge.",
  },
  {
    question: "Is the Whitefield branch women-owned?",
    answer:
      "Yes. The Whitefield branch (New Shiva New-Tech Driving School) is identified as a women-owned business. We particularly welcome women learners and offer a safe, patient training environment at both branches, with flexible timing to suit your schedule.",
  },
];

export type GalleryImage = { src: string; alt: string };

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/gallery-v1.jpg",
    alt: "Shiva New-Tech Driving School exterior, Varthur branch, Bengaluru",
  },
  {
    src: "/images/gallery/gallery-v2.jpg",
    alt: "Training vehicle at Shiva New-Tech Driving School Varthur",
  },
  {
    src: "/images/gallery/gallery-w1.jpg",
    alt: "New Shiva New-Tech Driving School entrance, Whitefield, Bengaluru",
  },
  {
    src: "/images/gallery/gallery-w2.jpg",
    alt: "Whitefield branch facilities at Shiva New-Tech Driving School",
  },
  {
    src: "/images/varthur/shop-2.jpg",
    alt: "Driving training session, Varthur branch",
  },
  {
    src: "/images/whitefield/shop-2.jpg",
    alt: "Whitefield driving school interior",
  },
];

// Navigation links for the sticky header (all in-page anchors).
export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Branches", href: "#branches" },
  { label: "Why Us", href: "#whyus" },
  { label: "Areas", href: "#areas" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

// Replace with the real production domain once known.
// TODO: set NEXT_PUBLIC_SITE_URL in Vercel, or hardcode the final domain here.
export const SITE_URL = "https://YOURDOMAIN.com";
