/**
 * Single source of truth for every piece of business content on the site.
 *
 * Everything visible on the page — and every piece of structured data
 * (JSON-LD) — is derived from this file. In particular `faqs` is rendered BOTH
 * in the visible FAQ accordion and in the FAQPage JSON-LD, so the two can
 * never drift apart.
 *
 * This site represents ONE business: Shiva New-Tech Driving School, Varthur.
 */

// Production URL. Set NEXT_PUBLIC_SITE_URL in Netlify (Site settings →
// Environment variables) once the final domain / Netlify subdomain is known —
// it drives the canonical tag, the sitemap, robots.txt and the og:image URL.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://shivanewtechdrivingschool.netlify.app";

export const business = {
  name: "Shiva New-Tech Driving School",
  legalName: "Shiva New-Tech Driving School",
  // Painted on the back of our own training car — a real tagline, not a slogan.
  tagline: "Learn, Pass, Drive",
  shortDesc:
    "Certified car and two-wheeler driving training in Varthur, Bengaluru, with complete RTO licence assistance.",

  // PRIMARY CALL-TO-ACTION NUMBER — used by every Call button on the site.
  phoneDisplay: "+91 96327 81536",
  phoneRaw: "+919632781536",
  phoneTel: "tel:+919632781536",
  sms: "sms:+919632781536",
  whatsapp: "https://wa.me/919632781536",
  whatsappDisplay: "wa.me/919632781536",

  // Second line shown on our training cars. Listed once in Contact as a
  // fallback only — it is deliberately NOT used on any CTA button, so the
  // primary number stays the single, unambiguous action.
  phoneAltDisplay: "+91 98444 61222",
  phoneAltTel: "tel:+919844461222",

  address: {
    line1: "Madhuranagar, 2nd Stage",
    line2: "Muthsandra Main Road, Varthur",
    city: "Bengaluru",
    state: "Karnataka",
    postalCode: "560087",
    country: "IN",
    full: "Madhuranagar, 2nd Stage, Muthsandra Main Road, Varthur, Bengaluru, Karnataka 560087",
  },

  // TODO(owner): open Google Maps → find the shop → "Share" → copy the exact
  // latitude/longitude and paste them here. Precise coordinates measurably
  // improve local-pack ranking for "driving school near me" searches.
  geo: { latitude: "12.9375", longitude: "77.7418" },

  maps: "https://share.google/1CmPmbxuch44qyzGf",
  mapsEmbed:
    "https://www.google.com/maps?q=" +
    encodeURIComponent(
      "Shiva New Tech Driving School, Muthsandra Main Road, Varthur, Bengaluru 560087"
    ) +
    "&output=embed",

  hoursShort: "Open all 7 days · 6:00 AM – 9:00 PM",
  hoursOpen: "06:00",
  hoursClose: "21:00",

  yearsExperience: "7+",
  ogImage: "/images/og.jpg",

  // Live rating shown on this business's own Google Business Profile
  // (read from Google Maps, Sept 2026: 4.9 stars from 188 reviews).
  // The count is written as "180+" deliberately, so it stays accurate as more
  // reviews come in. TODO(owner): refresh these figures every few months.
  //
  // NOTE: this is displayed on the page and linked to Google, but it is NOT
  // emitted as aggregateRating structured data. Google's rich-results policy
  // disallows self-serving review markup for a LocalBusiness, and using it can
  // cost you rich results entirely. Google already shows this rating itself.
  googleRating: "4.9",
  googleReviewCount: "180+",
  reviewsUrl: "https://share.google/1CmPmbxuch44qyzGf",
} as const;

export const ALL_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

/** Headline trust figures. Every one is verifiable — no invented statistics. */
export const heroStats = [
  { value: "7+", label: "Years of Training" },
  { value: "7", label: "Days a Week Open" },
  { value: "3", label: "Training Cars" },
  { value: "All", label: "RTO Services" },
] as const;

/* ------------------------------------------------------------------ */
/* Driving courses                                                     */
/* ------------------------------------------------------------------ */

export type Service = {
  emoji: string;
  name: string;
  description: string;
  /** Pre-filled WhatsApp enquiry text for this specific course. */
  enquiry: string;
};

export const courses: Service[] = [
  {
    emoji: "🚗",
    name: "Car Driving Classes for Beginners",
    description:
      "Start from zero. Clutch, gears, steering and road sense taught step by step in a calm, patient way — manual and automatic both available.",
    enquiry: "Hi, I want to join beginner car driving classes at Varthur.",
  },
  {
    emoji: "🛵",
    name: "Two-Wheeler Training",
    description:
      "Geared bikes and gearless scooters, from your first balance lesson through to riding confidently in Bengaluru traffic.",
    enquiry: "Hi, I want to know about two-wheeler driving training.",
  },
  {
    emoji: "🅿️",
    name: "Reverse & Parallel Parking",
    description:
      "The part everyone finds hardest, drilled until it is automatic — reverse, parallel and tight-space parking in real conditions.",
    enquiry: "Hi, I want parking practice classes (reverse and parallel).",
  },
  {
    emoji: "🛡️",
    name: "Defensive Driving & Road Safety",
    description:
      "Hazard awareness, safe following distance, lane discipline and how to handle emergencies — the skills that keep you safe long after the test.",
    enquiry: "Hi, I want to know about defensive driving lessons.",
  },
  {
    emoji: "🔄",
    name: "Refresher Course",
    description:
      "Already have a licence but haven't driven in years? Rebuild your confidence behind the wheel at your own pace.",
    enquiry: "Hi, I have a licence already and need a refresher course.",
  },
  {
    emoji: "🎯",
    name: "RTO Driving Test Preparation",
    description:
      "Coached specifically for the Karnataka RTO test — the figure-8 track, the gradient, the H-reverse and the on-road assessment.",
    enquiry: "Hi, I want RTO driving test preparation classes.",
  },
];

/* ------------------------------------------------------------------ */
/* RTO & licence services                                              */
/* ------------------------------------------------------------------ */

export const rtoServices: Service[] = [
  {
    emoji: "📋",
    name: "Learner's Licence (LL)",
    description:
      "Application, document checklist, online theory-test preparation and RTO slot booking — handled for you end to end.",
    enquiry: "Hi, I need help applying for a Learner's Licence.",
  },
  {
    emoji: "🪪",
    name: "Permanent Driving Licence",
    description:
      "Full support for a new DL application, from slot booking right through to RTO test day.",
    enquiry: "Hi, I want to apply for a permanent driving licence.",
  },
  {
    emoji: "♻️",
    name: "Driving Licence Renewal",
    description:
      "Expired or expiring licence renewed without the queues and the repeat RTO visits.",
    enquiry: "Hi, I need to renew my driving licence.",
  },
  {
    emoji: "📄",
    name: "Duplicate Driving Licence",
    description:
      "Lost or damaged licence replaced with the minimum possible paperwork.",
    enquiry: "Hi, I lost my driving licence and need a duplicate.",
  },
  {
    emoji: "🔑",
    name: "Vehicle Ownership Transfer",
    description:
      "RC transfer completed correctly the first time — buying or selling, we handle both sides of the paperwork.",
    enquiry: "Hi, I need help with vehicle ownership transfer (RC transfer).",
  },
  {
    emoji: "📑",
    name: "Duplicate RC",
    description:
      "Lost your Registration Certificate? We file the application and follow it up with the RTO for you.",
    enquiry: "Hi, I need a duplicate RC for my vehicle.",
  },
  {
    emoji: "✅",
    name: "Fitness Certificate (FC)",
    description:
      "Commercial-vehicle fitness inspection and certification assistance.",
    enquiry: "Hi, I need help with a vehicle Fitness Certificate.",
  },
  {
    emoji: "🏛️",
    name: "Other RTO Documentation",
    description:
      "NOC, address change, hypothecation removal and any other Karnataka RTO work — just ask.",
    enquiry: "Hi, I have an RTO documentation question.",
  },
];

/* ------------------------------------------------------------------ */
/* Why choose us                                                       */
/* ------------------------------------------------------------------ */

export type WhyPoint = { number: string; title: string; body: string };

export const whyChooseUs: WhyPoint[] = [
  {
    number: "01",
    title: "Taught by an Instructor with 7+ Years' Experience",
    body: "Every lesson is taken by an experienced instructor with a deep working knowledge of road rules, defensive driving technique and vehicle control — not a rotating pool of trainees. Lessons are paced to suit you, whether you have never touched a steering wheel or are returning after years away.",
  },
  {
    number: "02",
    title: "Complete RTO Work Under One Roof",
    body: "Learner's licence, permanent licence, renewals, duplicates, RC transfer and fitness certificates are all handled at our Varthur office. You get the training and the paperwork in one place, without making repeated trips to the RTO yourself.",
  },
  {
    number: "03",
    title: "Real Bengaluru Roads, Not an Empty Ground",
    body: "You learn where you will actually drive — Varthur Main Road, Whitefield traffic, roundabouts, narrow lanes and highway stretches. That is what turns a test pass into genuine everyday confidence.",
  },
  {
    number: "04",
    title: "Open 6 AM to 9 PM, All Seven Days",
    body: "Early-morning slots before work, evening slots after it, and weekends too — including Sundays. Pick a time that fits your schedule and keep a steady rhythm, so your skills build quickly.",
  },
  {
    number: "05",
    title: "Hatchback, Sedan and SUV to Learn In",
    body: "Train in a Hyundai i20, a Maruti Swift Dzire or a Tata Nexon — all properly marked L-board training vehicles, kept clean and well maintained, so you are comfortable in whatever you end up driving.",
  },
  {
    number: "06",
    title: "Walk In Any Day — No Appointment Needed",
    body: "Drop by the office on Muthsandra Main Road during working hours, or simply call and we will explain the fees, the timings and exactly which documents to bring.",
  },
];

/* ------------------------------------------------------------------ */
/* Training fleet — real photographs of our own vehicles               */
/* ------------------------------------------------------------------ */

export type FleetCar = {
  src: string;
  alt: string;
  name: string;
  type: string;
  note: string;
};

export const fleet: FleetCar[] = [
  {
    src: "/images/car-i20-front.jpg",
    alt: "Hyundai i20 training car with L board at Shiva New-Tech Driving School, Varthur, Bengaluru",
    name: "Hyundai i20",
    type: "Hatchback",
    note: "Light steering and great visibility — the car most beginners start in.",
  },
  {
    src: "/images/car-dzire.jpg",
    alt: "Maruti Suzuki Swift Dzire driving school car on Varthur Main Road, Bengaluru",
    name: "Maruti Swift Dzire",
    type: "Sedan",
    note: "The kind of car most learners take their Karnataka RTO test in.",
  },
  {
    src: "/images/car-nexon.jpg",
    alt: "Tata Nexon SUV driving lesson car from Shiva New-Tech Driving School in Bengaluru city traffic",
    name: "Tata Nexon",
    type: "SUV",
    note: "For learners who want to be confident in a bigger vehicle.",
  },
];

/* ------------------------------------------------------------------ */
/* Areas served — genuine catchment around the Varthur branch          */
/* ------------------------------------------------------------------ */

export const areasServed: string[] = [
  "Varthur",
  "Muthsandra",
  "Gunjur",
  "Whitefield",
  "Panathur",
  "Balagere",
  "Kadugodi",
  "Channasandra",
  "Immadihalli",
  "Nagondanahalli",
  "Siddapura",
  "Ramagondanahalli",
  "Thubarahalli",
  "Sarjapur Road",
  "Marathahalli",
  "Belathur",
  "Hoodi",
  "Varthur Kodi",
];

/* ------------------------------------------------------------------ */
/* Licence guide (long-form SEO content)                               */
/* ------------------------------------------------------------------ */

export type Step = { number: string; emoji: string; title: string; body: string };

export const licenceSteps: Step[] = [
  {
    number: "01",
    emoji: "📝",
    title: "Get Your Learner's Licence (LL)",
    body: "Apply online at parivahan.gov.in, or simply through our Varthur office. You will need your Aadhaar card as proof of identity and address, a passport-size photograph, and roughly ₹200–300 in government fees. There is a short online theory test on road signs and rules. We fill in the application, prepare you for that test and book your RTO slot at no extra charge.",
  },
  {
    number: "02",
    emoji: "🚗",
    title: "Complete Your Driving Training",
    body: "Your learner's licence is valid for six months, and Karnataka requires a minimum of 30 days between the LL and the permanent licence test. Most of our students at Varthur are genuinely test-ready in about 4–6 weeks of regular training. You practise in live Bengaluru traffic rather than only on a quiet ground — clutch control, gear changes, hill starts, reverse and parallel parking, and lane discipline.",
  },
  {
    number: "03",
    emoji: "🎯",
    title: "Clear the RTO Driving Test",
    body: "The Karnataka RTO test has two parts: an automated track test (the figure-8, the H-reverse and the gradient) and an on-road assessment with an inspector. We coach you for the exact format used at the Bengaluru RTO, run mock tests beforehand and support you on test day. Once you pass, your permanent driving licence is issued and posted to your registered address.",
  },
];

/* ------------------------------------------------------------------ */
/* FAQ — mirrored verbatim into FAQPage JSON-LD                        */
/* ------------------------------------------------------------------ */

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "Which is the best driving school in Varthur, Bangalore?",
    answer:
      "Shiva New-Tech Driving School on Muthsandra Main Road, Madhuranagar 2nd Stage, Varthur, is one of the area's most established driving schools, run by an instructor with more than 7 years of professional teaching experience. We offer car and two-wheeler training plus complete RTO licence services, and we are open all seven days from 6:00 AM to 9:00 PM. Call +91 96327 81536 to check slot availability.",
  },
  {
    question: "How much do driving classes cost in Varthur?",
    answer:
      "Fees depend on the course you choose — car or two-wheeler, beginner or refresher, and how many sessions you need. Because packages are tailored to each learner, we quote the exact price over the phone rather than publishing a single figure. Call or WhatsApp +91 96327 81536 and we will give you a clear, all-inclusive price with no hidden charges.",
  },
  {
    question: "How many days does it take to learn car driving?",
    answer:
      "Most complete beginners are ready for their Karnataka RTO driving test in about 4 to 6 weeks of regular training. Karnataka law also requires a minimum of 30 days between getting your learner's licence and taking the permanent licence test, so that period sets the practical minimum. Learners with some previous experience often need fewer sessions.",
  },
  {
    question: "Do you help with the learner's licence application in Bangalore?",
    answer:
      "Yes. We handle the complete learner's licence process — the application form, the document checklist, preparation for the online theory test, and RTO slot booking. You bring your Aadhaar card and a passport-size photograph, and we take care of the rest at our Varthur office.",
  },
  {
    question: "What documents do I need for a driving licence in Karnataka?",
    answer:
      "For a Learner's Licence you need your Aadhaar card (as identity and address proof), one passport-size photograph, and the government fee of approximately ₹200–300. For the Permanent Driving Licence you need your valid Learner's Licence, your driving training certificate, and to clear the RTO test. We guide you through every document at no additional charge.",
  },
  {
    question: "Do you offer two-wheeler driving training?",
    answer:
      "Yes. We train on both geared motorcycles and gearless scooters, from your very first balance lesson through to riding confidently in Bengaluru traffic and being ready for the licence test. Two-wheeler training is available at our Varthur branch all seven days of the week.",
  },
  {
    question: "Do you teach automatic cars as well as manual?",
    answer:
      "Yes, we teach both. If you only intend to drive an automatic we can focus your training there, but we usually recommend learning manual first — a manual licence lets you drive both, while an automatic-only licence restricts you to automatic vehicles.",
  },
  {
    question: "Can you help with driving licence renewal or a duplicate licence?",
    answer:
      "Yes. Licence renewal and duplicate licence applications for lost or damaged licences are both handled at our Varthur office. We manage the application, the documentation and the follow-up with the Karnataka RTO on your behalf, so you do not need to make repeated trips yourself.",
  },
  {
    question: "Do you assist with vehicle ownership transfer and duplicate RC?",
    answer:
      "Yes. Vehicle ownership transfer (RC transfer), duplicate RC, fitness certificates and other RTO documentation are all part of our services. We prepare the paperwork correctly the first time and follow it up with the RTO directly.",
  },
  {
    question: "Do I need to book an appointment in advance?",
    answer:
      "No appointment is required. You are welcome to walk in to our office on Muthsandra Main Road, Varthur, any day between 6:00 AM and 9:00 PM. That said, a quick call to +91 96327 81536 beforehand lets us confirm a training slot that suits your timing.",
  },
  {
    question: "What are your working hours?",
    answer:
      "We are open Monday to Sunday, 6:00 AM to 9:00 PM, with no weekly holiday. Early-morning and evening slots are both available, which suits students and working professionals across Varthur and Whitefield.",
  },
  {
    question: "Do you teach women learners?",
    answer:
      "Yes, absolutely. We regularly train women learners of all ages and provide a patient, respectful and safe learning environment, with flexible daytime slots. Many of our students are first-time women drivers from Varthur, Whitefield and the surrounding areas.",
  },
  {
    question: "Which areas around Varthur and Whitefield do you serve?",
    answer:
      "We train learners from Varthur, Muthsandra, Gunjur, Whitefield, Panathur, Balagere, Kadugodi, Channasandra, Immadihalli, Nagondanahalli, Siddapura, Ramagondanahalli, Thubarahalli, Sarjapur Road, Marathahalli, Belathur, Hoodi and the surrounding parts of East Bengaluru.",
  },
  {
    question: "What if I am nervous or have failed the driving test before?",
    answer:
      "That is a very common starting point and nothing to be embarrassed about. Lessons are paced entirely to your comfort level, and we focus on the specific things that went wrong last time — usually parking, hill starts or the track test. Many of our students come to us precisely after an unsuccessful attempt elsewhere.",
  },
];

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */

/**
 * REAL REVIEWS ONLY — this array intentionally ships EMPTY.
 *
 * The testimonials section renders only when this array has entries, so
 * nothing fabricated ever reaches the live site. To switch the section on,
 * copy genuine reviews from your Google Business Profile in here:
 *
 *   export const testimonials: Testimonial[] = [
 *     { name: "Priya R.", area: "Varthur", quote: "…their actual words…" },
 *   ];
 *
 * Please do not invent reviews. Google penalises fabricated review content,
 * and it is the fastest way to lose a local-pack ranking you have earned.
 */
export type Testimonial = { name: string; area: string; quote: string };

export const testimonials: Testimonial[] = [];

/* ------------------------------------------------------------------ */
/* Helpers & navigation                                                */
/* ------------------------------------------------------------------ */

/** Build a WhatsApp deep link carrying a pre-filled enquiry message. */
export function waLink(message: string): string {
  return `${business.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { label: "Courses", href: "#courses" },
  { label: "RTO Services", href: "#rto" },
  { label: "Why Us", href: "#whyus" },
  { label: "Our Cars", href: "#fleet" },
  { label: "Licence Guide", href: "#guide" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
