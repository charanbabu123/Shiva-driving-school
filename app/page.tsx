import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import OpenNowBadge from "@/components/OpenNowBadge";
import Pic from "@/components/Pic";
import SectionHead from "@/components/SectionHead";
import {
  areasServed,
  business,
  courses,
  doorstep,
  fleet,
  heroStats,
  licenceSteps,
  rtoServices,
  testimonials,
  waLink,
  whyChooseUs,
} from "@/lib/data";

const HERO_ENQUIRY =
  "Hi, I found you on your website. I'd like to know about driving classes at Varthur.";

export default function Home() {
  return (
    // Bottom padding on mobile reserves room for the fixed contact bar.
    <main id="main" className="pb-20 md:pb-0">
      {/* ============================================================ */}
      {/* HERO                                                          */}
      {/* ============================================================ */}
      <section
        id="top"
        className="relative overflow-hidden bg-brand-navy text-white"
      >
        {/* Depth: navy gradient, an amber glow, and a fine dot texture. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-navy-700 via-brand-navy to-brand-navy-900"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-amber/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-dot-grid bg-[length:24px_24px] opacity-60"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-24">
          {/* ---- Copy + CTAs ---- */}
          <div className="animate-fade-up">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={business.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-amber/15 px-3 py-1 text-xs font-bold text-brand-amber ring-1 ring-brand-amber/30 transition-colors hover:bg-brand-amber/25"
              >
                ⭐ {business.googleRating} on Google ·{" "}
                {business.googleReviewCount} reviews
              </a>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white/80 ring-1 ring-white/20">
                🏅 {business.yearsExperience} Years in Varthur
              </span>
              <OpenNowBadge />
            </div>

            <h1 className="mt-5 text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:text-[3.25rem]">
              Learn to Drive with Confidence in{" "}
              <span className="text-gradient-amber">Varthur, Bengaluru</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Car and two-wheeler training from an instructor with{" "}
              {business.yearsExperience} years&rsquo; experience.{" "}
              <strong className="font-semibold text-white">
                We pick you up from home and drop you back
              </strong>
              , and your learner&rsquo;s licence and RTO paperwork are handled
              here too. Open every single day, 6 AM to 9 PM.
            </p>

            {/* Primary conversion point — Call is the dominant action. */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={business.phoneTel}
                className="btn-amber text-base sm:text-lg"
                aria-label={`Call Shiva New-Tech Driving School on ${business.phoneDisplay}`}
              >
                📞 Call {business.phoneDisplay}
              </a>
              <a
                href={waLink(HERO_ENQUIRY)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-base"
              >
                💬 WhatsApp Us
              </a>
            </div>

            <p className="mt-4 text-sm text-white/60">
              ✅ Doorstep pickup &amp; drop &nbsp;·&nbsp; ✅ Walk-ins welcome
              &nbsp;·&nbsp; ✅ Talk directly to your instructor
            </p>

            {/* ---- Trust figures ---- */}
            <dl className="mt-10 grid max-w-lg grid-cols-2 gap-4 sm:grid-cols-4">
              {heroStats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-white/[0.07] px-3 py-4 text-center ring-1 ring-white/10"
                >
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block text-2xl font-extrabold text-brand-amber">
                      {s.value}
                    </span>
                    <span className="mt-1 block text-[11px] font-semibold uppercase leading-tight tracking-wide text-white/70">
                      {s.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* ---- Hero photograph ---- */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/15">
              <Pic
                src="/images/hero-fleet.jpg"
                alt="Shiva New-Tech Driving School training cars parked outside the office on Muthsandra Main Road, Varthur, Bengaluru"
                width={1600}
                height={900}
                priority
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Address chip floating over the photo. `relative` is load-bearing:
                a static block's background paints *below* in-flow replaced
                content, so without it the photo covers the overlapping strip. */}
            <div className="relative z-10 mx-4 -mt-8 rounded-2xl bg-white p-4 shadow-card ring-1 ring-black/5 sm:mx-8">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-amber">
                📍 Visit our office
              </p>
              <p className="mt-1 text-sm font-semibold leading-snug text-brand-navy">
                {business.address.line1}, {business.address.line2}
                <br />
                {business.address.city} {business.address.postalCode}
              </p>
              <a
                href={business.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-bold text-brand-navy underline decoration-brand-amber decoration-2 underline-offset-4 hover:text-brand-amber"
              >
                Get directions →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* TRUST STRIP                                                   */}
      {/* ============================================================ */}
      <section className="border-b border-slate-100 bg-brand-mist">
        <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-4 py-6 text-center md:grid-cols-4">
          {[
            ["🚙", "Doorstep Pickup & Drop", "We come to you"],
            ["🕕", "Open 6 AM – 9 PM", "All seven days"],
            ["🚘", "Hatchback · Sedan · SUV", "Learn in any of the three"],
            ["🏛️", "All RTO Work Handled", "Licence to RC transfer"],
          ].map(([emoji, title, sub]) => (
            <li key={title} className="px-2 py-2">
              <span className="text-2xl" aria-hidden="true">
                {emoji}
              </span>
              <p className="mt-1 text-sm font-bold text-brand-navy">{title}</p>
              <p className="text-xs text-slate-500">{sub}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ============================================================ */}
      {/* DOORSTEP PICKUP & DROP                                        */}
      {/* The school's biggest differentiator, so it sits high on the    */}
      {/* page in the one colour reserved for things that must be seen.  */}
      {/* ============================================================ */}
      <section id="doorstep" className="bg-white pt-14 md:pt-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-amber-light to-brand-amber px-6 py-10 shadow-card md:px-12 md:py-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/30 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-dot-grid-navy bg-[length:22px_22px] opacity-40"
            />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-amber">
                  🚙 {doorstep.eyebrow}
                </span>
                <h2 className="mt-4 text-2xl font-extrabold leading-tight text-brand-navy sm:text-3xl md:text-4xl">
                  {doorstep.title}
                </h2>
                <p className="mt-3 text-base leading-relaxed text-brand-navy/80">
                  {doorstep.body}
                </p>
                {doorstep.priceNote && (
                  <p className="mt-3 text-base font-bold text-brand-navy">
                    {doorstep.priceNote}
                  </p>
                )}
                <ul className="mt-5 flex flex-wrap gap-2">
                  {doorstep.points.map((p) => (
                    <li
                      key={p}
                      className="rounded-full bg-white/75 px-4 py-2 text-sm font-semibold text-brand-navy ring-1 ring-brand-navy/10"
                    >
                      ✓ {p}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-none">
                <a
                  href={business.phoneTel}
                  className="btn-navy whitespace-nowrap px-6 py-3 text-base"
                  aria-label={`Call ${business.phoneDisplay} about doorstep pickup and drop`}
                >
                  📞 Call {business.phoneDisplay}
                </a>
                <a
                  href={waLink(doorstep.enquiry)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-white whitespace-nowrap"
                >
                  💬 Ask about pickup
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* COURSES                                                       */}
      {/* ============================================================ */}
      <section id="courses" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHead
            eyebrow="Our Driving Courses"
            title="Everything You Need to Get on the Road"
            sub="Whether you have never sat behind a steering wheel or you simply want to shake off the rust, there is a course here built for exactly where you are."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => (
              <article
                key={c.name}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-amber/40 hover:shadow-card-hover"
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-mist text-2xl transition-colors group-hover:bg-brand-amber/15"
                  aria-hidden="true"
                >
                  {c.emoji}
                </span>
                <h3 className="mt-4 text-lg font-bold text-brand-navy">
                  {c.name}
                </h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-slate-600">
                  {c.description}
                </p>
                <div className="mt-5 flex gap-2 border-t border-slate-100 pt-4">
                  <a
                    href={business.phoneTel}
                    className="flex-1 rounded-full bg-brand-navy px-3 py-2 text-center text-sm font-bold text-white transition-colors hover:bg-brand-navy-700"
                  >
                    📞 Call
                  </a>
                  <a
                    href={waLink(c.enquiry)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-full border-2 border-slate-200 px-3 py-2 text-center text-sm font-bold text-brand-navy transition-colors hover:border-brand-amber hover:bg-brand-amber/10"
                  >
                    💬 Enquire
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Ready when you are"
        title="Book Your First Driving Lesson Today"
        sub="One phone call is all it takes. We will explain the fees, the timings and exactly what to bring — no obligation."
        variant="amber"
      />

      {/* ============================================================ */}
      {/* RTO SERVICES                                                  */}
      {/* ============================================================ */}
      <section id="rto" className="bg-brand-mist py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHead
            eyebrow="RTO & Licence Services"
            title="All Your RTO Paperwork, Handled for You"
            sub="Skip the queues and the repeat visits. From your first learner's licence to an RC transfer years later, we prepare the documents and follow them up with the Karnataka RTO on your behalf."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {rtoServices.map((s) => (
              <a
                key={s.name}
                href={waLink(s.enquiry)}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-amber/50 hover:shadow-card"
              >
                <span className="text-2xl" aria-hidden="true">
                  {s.emoji}
                </span>
                <h3 className="mt-3 text-base font-bold text-brand-navy">
                  {s.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {s.description}
                </p>
                <span className="mt-3 inline-block text-sm font-bold text-brand-amber opacity-0 transition-opacity group-hover:opacity-100">
                  Ask about this →
                </span>
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href={business.phoneTel} className="btn-amber">
              📞 Call {business.phoneDisplay} for RTO Help
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHY US                                                        */}
      {/* ============================================================ */}
      <section id="whyus" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHead
            eyebrow="Why Choose Us"
            title="A Driving School in Varthur You Can Actually Trust"
            sub="Seven years of teaching on these exact roads — and a genuine interest in you leaving here as a safe driver, not just a licence holder."
          />

          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Photographs of the real business. Sticky on desktop so they stay
                in view alongside the taller list of reasons beside them. */}
            <div className="space-y-4 lg:sticky lg:top-24">
              <div className="overflow-hidden rounded-2xl shadow-card">
                <Pic
                  src="/images/office-rto.jpg"
                  alt="Instructor at Shiva New-Tech Driving School office in Varthur processing RTO licence applications"
                  width={1400}
                  height={900}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-card">
                <Pic
                  src="/images/team-new-car.jpg"
                  alt="Shiva New-Tech Driving School team with a newly delivered Hyundai i20 training car"
                  width={1400}
                  height={788}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="text-center text-sm text-slate-500">
                Our Varthur office and our newest training car — real photos, not
                stock images.
              </p>
            </div>

            <ol className="space-y-5">
              {whyChooseUs.map((w, i) => (
                <li
                  key={w.title}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-card"
                >
                  <span
                    className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-brand-navy text-sm font-extrabold text-brand-amber"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-brand-navy md:text-lg">
                      {w.title}
                    </h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-slate-600">
                      {w.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FLEET                                                         */}
      {/* ============================================================ */}
      <section id="fleet" className="bg-brand-mist py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHead
            eyebrow="Our Training Cars"
            title="Learn in a Hatchback, a Sedan or an SUV"
            sub="Three clearly marked L-board training vehicles, kept clean and well maintained — so you are comfortable in whatever you end up driving after the test."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {fleet.map((car) => (
              <figure
                key={car.name}
                className="group overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="overflow-hidden">
                  <Pic
                    src={car.src}
                    alt={car.alt}
                    width={720}
                    height={960}
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-amber">
                    {car.type}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-brand-navy">
                    {car.name}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {car.note}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl shadow-card">
            <Pic
              src="/images/fleet-lineup.jpg"
              alt="The full fleet of Shiva New-Tech Driving School training cars outside the Varthur office"
              width={1400}
              height={900}
              sizes="100vw"
              className="aspect-[16/7] w-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Speak to your instructor"
        title="Have a Question? Just Call — We Pick Up"
        sub="No call centre and no forms. You will be speaking to the person who will actually be teaching you."
        variant="navy"
      />

      {/* ============================================================ */}
      {/* LICENCE GUIDE                                                 */}
      {/* ============================================================ */}
      <section id="guide" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHead
            eyebrow="Complete Guide"
            title="How to Get a Driving Licence in Bangalore"
            sub="The Karnataka process in three clear steps. We take care of every form and every RTO visit along the way."
          />

          <ol className="mt-12 grid gap-6 lg:grid-cols-3">
            {licenceSteps.map((s) => (
              <li
                key={s.number}
                className="relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card"
              >
                <span
                  className="absolute right-5 top-4 text-4xl font-extrabold text-brand-mist"
                  aria-hidden="true"
                >
                  {s.number}
                </span>
                <span className="text-3xl" aria-hidden="true">
                  {s.emoji}
                </span>
                <h3 className="mt-3 text-lg font-bold text-brand-navy">
                  {s.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-600">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>

          <p className="mx-auto mt-8 max-w-3xl rounded-2xl bg-brand-mist p-5 text-center text-[15px] leading-relaxed text-slate-600">
            <strong className="text-brand-navy">
              Not sure where you are in the process?
            </strong>{" "}
            Call{" "}
            <a
              href={business.phoneTel}
              className="font-bold text-brand-navy underline decoration-brand-amber decoration-2 underline-offset-4"
            >
              {business.phoneDisplay}
            </a>{" "}
            and we will tell you exactly what your next step is and what to bring.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* AREAS SERVED                                                  */}
      {/* ============================================================ */}
      <section id="areas" className="bg-brand-navy py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHead
            eyebrow="Areas We Serve"
            title="Training Learners Across East Bengaluru"
            sub="Based on Muthsandra Main Road in Varthur, we teach students from all of these neighbourhoods and everywhere in between."
            tone="light"
          />

          <ul className="mt-10 flex flex-wrap justify-center gap-2.5">
            {areasServed.map((a) => (
              <li
                key={a}
                className="rounded-full bg-white/[0.08] px-4 py-2 text-sm font-semibold text-white/90 ring-1 ring-white/15 transition-colors hover:bg-brand-amber hover:text-brand-navy"
              >
                📍 {a}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-center text-white/70">
            Not on the list?{" "}
            <a
              href={business.phoneTel}
              className="font-bold text-brand-amber underline underline-offset-4"
            >
              Call us
            </a>{" "}
            — if you can reach Varthur, we can train you.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* REVIEWS                                                       */}
      {/* ============================================================ */}
      <section id="reviews" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHead
            eyebrow="Student Reviews"
            title="Rated 4.9 Out of 5 by Our Students"
            sub="Our reviews live on Google, where every one of them is from a verified visitor — nothing curated, nothing written by us."
          />

          <div className="mt-10 grid items-center gap-8 md:grid-cols-2">
            {/* Our own car, carrying the tagline the school actually uses. */}
            <figure className="overflow-hidden rounded-3xl shadow-card">
              <Pic
                src="/images/car-i20-rear.jpg"
                alt="Shiva New-Tech Driving School training car in Varthur carrying the words Learn, Pass, Drive"
                width={720}
                height={960}
                sizes="(min-width: 768px) 45vw, 100vw"
                // Square keeps both the roof board and the "learn, Pass,
                // Drive" lettering on the boot inside the frame.
                className="aspect-square w-full object-cover object-center"
              />
            </figure>

            {/* Real, verifiable rating — links straight to the Google profile. */}
            <a
              href={business.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center rounded-3xl border border-slate-200 bg-brand-mist p-8 text-center shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="text-5xl font-extrabold text-brand-navy">
                {business.googleRating}
              </span>
              <span className="mt-2 text-2xl tracking-widest text-brand-amber">
                ★★★★★
              </span>
              <span className="mt-3 text-[15px] font-semibold text-slate-600">
                {business.googleReviewCount} reviews on Google
              </span>
              <span className="mt-4 inline-block rounded-full bg-brand-navy px-5 py-2 text-sm font-bold text-white">
                Read our Google reviews →
              </span>
            </a>
          </div>

          {testimonials.length > 0 && (
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <figure
                  key={t.name}
                  className="rounded-2xl border border-slate-200 bg-brand-mist p-6 shadow-sm"
                >
                  <div className="text-brand-amber" aria-label="5 out of 5">
                    ★★★★★
                  </div>
                  <blockquote className="mt-3 text-[15px] leading-relaxed text-slate-700">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 text-sm font-bold text-brand-navy">
                    {t.name}
                    <span className="block font-normal text-slate-500">
                      {t.area}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ                                                           */}
      {/* ============================================================ */}
      <section id="faq" className="bg-brand-mist py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHead
            eyebrow="Questions & Answers"
            title="Frequently Asked Questions"
            sub="Fees, timings, documents and how long it takes — the things people ask us on the phone every day."
          />
          <div className="mt-12">
            <Faq />
          </div>
          <p className="mt-8 text-center text-slate-600">
            Still have a question?{" "}
            <a
              href={business.phoneTel}
              className="font-bold text-brand-navy underline decoration-brand-amber decoration-2 underline-offset-4"
            >
              Call {business.phoneDisplay}
            </a>
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CONTACT                                                       */}
      {/* ============================================================ */}
      <section id="contact" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHead
            eyebrow="Get in Touch"
            title="Visit, Call or WhatsApp Us Today"
            sub="We are on Muthsandra Main Road in Varthur, open from 6 in the morning until 9 at night, every day of the week."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* ---- Contact details ---- */}
            <div className="space-y-4">
              {/* Primary call card — the single most important element here. */}
              <a
                href={business.phoneTel}
                className="block rounded-2xl bg-gradient-to-br from-brand-amber-light to-brand-amber p-6 shadow-card transition-transform hover:-translate-y-1"
              >
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-navy/70">
                  📞 Call us now
                </span>
                <p className="mt-2 text-2xl font-extrabold text-brand-navy sm:text-3xl">
                  {business.phoneDisplay}
                </p>
                <p className="mt-1 text-sm font-semibold text-brand-navy/80">
                  Tap to call — we answer 6 AM to 9 PM, all seven days
                </p>
              </a>

              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href={waLink(HERO_ENQUIRY)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border-2 border-emerald-500/30 bg-emerald-50 p-5 transition-colors hover:border-emerald-500"
                >
                  <span className="text-2xl" aria-hidden="true">
                    💬
                  </span>
                  <p className="mt-1 font-bold text-brand-navy">WhatsApp</p>
                  <p className="text-sm text-slate-600">
                    {business.whatsappDisplay}
                  </p>
                </a>
                <a
                  href={business.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border-2 border-slate-200 bg-brand-mist p-5 transition-colors hover:border-brand-navy"
                >
                  <span className="text-2xl" aria-hidden="true">
                    🗺️
                  </span>
                  <p className="mt-1 font-bold text-brand-navy">Directions</p>
                  <p className="text-sm text-slate-600">Open in Google Maps</p>
                </a>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <dl className="space-y-4 text-[15px]">
                  <div className="flex gap-3">
                    <dt className="text-xl" aria-hidden="true">
                      📍
                    </dt>
                    <dd>
                      <span className="block font-bold text-brand-navy">
                        Address
                      </span>
                      <address className="not-italic leading-relaxed text-slate-600">
                        {business.address.line1}
                        <br />
                        {business.address.line2}
                        <br />
                        {business.address.city}, {business.address.state}{" "}
                        {business.address.postalCode}
                      </address>
                    </dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="text-xl" aria-hidden="true">
                      🕕
                    </dt>
                    <dd>
                      <span className="block font-bold text-brand-navy">
                        Opening hours
                      </span>
                      <span className="text-slate-600">
                        Monday to Sunday · 6:00 AM – 9:00 PM
                        <br />
                        No weekly holiday
                      </span>
                    </dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="text-xl" aria-hidden="true">
                      ☎️
                    </dt>
                    <dd>
                      <span className="block font-bold text-brand-navy">
                        Phone
                      </span>
                      <a
                        href={business.phoneTel}
                        className="font-semibold text-brand-navy underline decoration-brand-amber decoration-2 underline-offset-4"
                      >
                        {business.phoneDisplay}
                      </a>
                      <span className="block text-sm text-slate-500">
                        Alternate:{" "}
                        <a
                          href={business.phoneAltTel}
                          className="underline underline-offset-2"
                        >
                          {business.phoneAltDisplay}
                        </a>
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* ---- Map ---- */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-card">
              <iframe
                src={business.mapsEmbed}
                title="Map showing Shiva New-Tech Driving School on Muthsandra Main Road, Varthur, Bengaluru"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[420px] w-full border-0 lg:h-full lg:min-h-[520px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FOOTER                                                        */}
      {/* ============================================================ */}
      <footer className="bg-brand-navy-900 text-white/70">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="flex items-center gap-2 text-lg font-extrabold text-white">
                <span aria-hidden="true">🚗</span> {business.name}
              </p>
              <p className="mt-3 text-sm leading-relaxed">
                {business.shortDesc} Open all seven days, 6:00 AM to 9:00 PM.
              </p>
              <p className="mt-3 text-sm font-bold text-brand-amber">
                &ldquo;{business.tagline}&rdquo;
              </p>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-white">
                Quick links
              </p>
              <ul className="mt-3 space-y-2 text-sm">
                {[
                  ["Driving Courses", "#courses"],
                  ["RTO & Licence Services", "#rto"],
                  ["Why Choose Us", "#whyus"],
                  ["Our Training Cars", "#fleet"],
                  ["Licence Guide", "#guide"],
                  ["FAQ", "#faq"],
                ].map(([label, href]) => (
                  <li key={href}>
                    {/* py-1.5 keeps these comfortably tappable on a phone. */}
                    <a
                      href={href}
                      className="inline-block py-1.5 hover:text-brand-amber"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-white">
                Contact
              </p>
              <address className="mt-3 space-y-2 text-sm not-italic leading-relaxed">
                <a
                  href={business.phoneTel}
                  className="block font-bold text-brand-amber"
                >
                  📞 {business.phoneDisplay}
                </a>
                <a
                  href={business.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-brand-amber"
                >
                  💬 WhatsApp
                </a>
                <span className="block">
                  📍 {business.address.line1},<br />
                  {business.address.line2},<br />
                  {business.address.city} {business.address.postalCode}
                </span>
                <span className="block">🕕 {business.hoursShort}</span>
              </address>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs">
            <p>
              © {new Date().getFullYear()} {business.name}, Varthur, Bengaluru.
              All rights reserved.
            </p>
            <p className="mt-1">
              Driving school in Varthur with doorstep pickup &amp; drop · Car &amp;
              two-wheeler training · RTO
              licence services · Serving Whitefield, Gunjur, Panathur, Sarjapur
              Road and East Bengaluru.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
