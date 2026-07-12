import { Fragment } from "react";
import Photo from "@/components/Photo";
import Faq from "@/components/Faq";
import {
  business,
  branches,
  services,
  whyChooseUs,
  areasServed,
  licenceSteps,
  galleryImages,
} from "@/lib/data";

export default function Home() {
  return (
    <main className="pb-20 md:pb-0">
      {/* ============================================================= */}
      {/* SECTION B — HERO                                              */}
      {/* ============================================================= */}
      <section id="top" className="relative isolate overflow-hidden bg-brand-navy">
        {/* Darkened shop photo behind the navy. If the image is missing the
            Photo component falls back to a solid navy panel automatically. */}
        <Photo
          src={business.ogImage}
          alt="Shiva New-Tech Driving School, Varthur branch, Bengaluru"
          emoji="🏫"
          priority
          sizes="100vw"
          className="absolute inset-0 -z-10 h-full w-full"
          imgClassName="object-cover opacity-20"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-navy/85 to-brand-navy/95" />

        <div className="mx-auto max-w-6xl px-4 py-16 text-center md:py-24">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white ring-1 ring-white/20">
            ⭐ Google Verified · Serving Varthur &amp; Whitefield
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            Learn to Drive with Confidence in Bengaluru
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            Shiva New-Tech Driving School — two branches in Varthur and
            Whitefield. Certified training, complete RTO assistance, and 12+
            years of experience.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={business.phoneTel} className="btn-amber w-full sm:w-auto">
              📞 Call +91 96327 81536
            </a>
            <a
              href={business.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full sm:w-auto"
            >
              💬 WhatsApp Us
            </a>
          </div>

          {/* Stats strip */}
          <dl className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { value: "12+", label: "Years Experience" },
              { value: "2", label: "Branches in Bengaluru" },
              { value: "7", label: "Days a Week" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-white/5 px-4 py-5 ring-1 ring-white/15"
              >
                <dt className="text-3xl font-extrabold text-brand-amber">
                  {s.value}
                </dt>
                <dd className="mt-1 text-sm text-white/80">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION C — BRANCH CARDS                                      */}
      {/* ============================================================= */}
      <section id="branches" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="section-heading text-center">📍 Our Two Branches</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-brand-ink">
            The same trusted team and services at both locations across East
            Bengaluru.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {branches.map((b) => (
              <div
                key={b.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md"
              >
                <div className="relative">
                  <Photo
                    src={b.image}
                    alt={`${b.name} of Shiva New-Tech Driving School, Bengaluru`}
                    emoji="🏢"
                    priority
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="relative aspect-video w-full rounded-t-2xl"
                  />
                  {b.isNew && (
                    <span className="absolute right-3 top-3 rounded-full bg-brand-amber px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-brand-navy shadow-md">
                      New
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col gap-3 p-5 md:p-6">
                  <h3 className="text-xl font-bold text-brand-navy">
                    🏢 {b.name}
                  </h3>

                  <p className="flex items-start gap-2 text-brand-ink">
                    <span aria-hidden="true">📍</span>
                    <span>{b.address}</span>
                  </p>

                  <p className="flex items-center gap-2 text-brand-ink">
                    <span aria-hidden="true">📞</span>
                    <a
                      href={b.phoneTel}
                      className="font-semibold text-brand-navy underline-offset-2 hover:underline"
                    >
                      {b.phoneDisplay}
                    </a>
                  </p>

                  <p className="flex items-center gap-2 text-brand-ink">
                    <span aria-hidden="true">⏰</span>
                    <span>{b.hours}</span>
                  </p>

                  {b.experience && (
                    <p className="flex items-center gap-2 font-semibold text-brand-navy">
                      <span aria-hidden="true">🏆</span>
                      <span>{b.experience}</span>
                    </p>
                  )}

                  {b.badges && b.badges.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {b.badges.map((badge) => (
                        <span
                          key={badge}
                          className="rounded-full bg-brand-mist px-3 py-1 text-xs font-semibold text-brand-navy ring-1 ring-slate-200"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto flex flex-col gap-2 pt-2 sm:flex-row">
                    <a
                      href={b.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline-navy flex-1"
                    >
                      🗺 Get Directions
                    </a>
                    <a href={b.phoneTel} className="btn-amber flex-1">
                      📞 Call Branch
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION D — SERVICES GRID                                     */}
      {/* ============================================================= */}
      <section id="services" className="bg-brand-mist py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="section-heading text-center">🛠 Our Services</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-brand-ink">
            All services available at both Varthur and Whitefield branches
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {services.map((s) => (
              <div
                key={s.name}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-md transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-4xl" aria-hidden="true">
                  {s.emoji}
                </span>
                <h3 className="mt-3 text-base font-bold leading-snug text-brand-navy">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-ink">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION E — WHY CHOOSE US                                     */}
      {/* ============================================================= */}
      <section id="whyus" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="section-heading text-center">Why Choose Us</h2>

          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {whyChooseUs.map((w) => (
              <div key={w.number}>
                <div className="text-4xl font-extrabold text-brand-amber">
                  {w.number}
                </div>
                <h3 className="mt-2 text-lg font-bold text-brand-navy">
                  {w.title}
                </h3>
                <p className="mt-2 leading-relaxed text-brand-ink">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION F — OWNER / ABOUT                                     */}
      {/* ============================================================= */}
      <section className="bg-brand-mist py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="section-heading text-center">Meet Your Instructor</h2>

          <div className="mt-10 flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
            <div className="flex-none">
              <Photo
                src={business.owner.image}
                alt="Shiva, certified driving instructor and owner of Shiva New-Tech Driving School"
                emoji="🧑‍🏫"
                sizes="200px"
                className="relative h-[200px] w-[200px] rounded-full ring-4 ring-brand-navy/20"
              />
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-brand-navy">
                {business.owner.name}
              </h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-brand-amber">
                {business.owner.credibility}
              </p>

              <div className="mt-4 space-y-4 leading-relaxed text-brand-ink">
                <p>
                  Hello, I&apos;m Shiva. For over 12 years I&apos;ve been
                  teaching people across Karnataka how to drive — from complete
                  first-timers who&apos;ve never sat behind a wheel, to nervous
                  returners getting their confidence back on the road.
                </p>
                <p>
                  I run both our Varthur and Whitefield branches personally, and
                  I handle the full RTO side too — learner&apos;s licences,
                  permanent licences, renewals, ownership transfers and all
                  vehicle documentation — so you never have to make repeated
                  trips to the RTO on your own.
                </p>
                <p>
                  My promise is simple: patient, practical training in real
                  Bengaluru traffic, honest guidance on every document, and
                  support right up to — and on — your test day. Come by either
                  branch any day of the week, or just give me a call.
                </p>
              </div>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
                <a href={business.phoneTel} className="btn-amber">
                  📞 Call Shiva
                </a>
                <a
                  href={business.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-navy"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION G — AREAS WE SERVE                                    */}
      {/* ============================================================= */}
      <section id="areas" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="section-heading text-center">🗺 Areas We Serve</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-brand-ink">
            Serving learners across East &amp; South-East Bengaluru
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {areasServed.map((area) => (
              <span
                key={area}
                className="rounded-full border border-brand-navy/25 bg-white px-4 py-2 text-sm font-medium text-brand-navy"
              >
                📍 {area}
              </span>
            ))}
            <span className="rounded-full border border-brand-navy/25 bg-brand-navy px-4 py-2 text-sm font-semibold text-white">
              &amp; More
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION H — LICENCE GUIDE                                     */}
      {/* ============================================================= */}
      <section className="bg-brand-navy py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-extrabold sm:text-3xl md:text-4xl">
            How to Get a Driving Licence in Karnataka
          </h2>

          <div className="mt-12 flex flex-col items-stretch gap-6 md:flex-row">
            {licenceSteps.map((step, i) => (
              <Fragment key={step.number}>
                {i > 0 && (
                  <div
                    aria-hidden="true"
                    className="flex items-center justify-center text-3xl font-bold text-brand-amber"
                  >
                    <span className="md:hidden">↓</span>
                    <span className="hidden md:inline">→</span>
                  </div>
                )}
                <div className="flex-1 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-amber text-2xl font-extrabold text-brand-navy">
                    {step.number}
                  </div>
                  <h3 className="mt-4 text-lg font-bold">
                    {step.emoji} {step.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-white/80">
                    {step.body}
                  </p>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION I — TESTIMONIALS                                      */}
      {/* ============================================================= */}
      <section id="reviews" className="bg-brand-mist py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="section-heading text-center">
            ⭐ What Our Students Say
          </h2>

          {/*
            TODO: Replace with 5–10 real Google review quotes + reviewer first
            names before launch. Do NOT invent placeholder testimonials.
            Ask Shiva to share real reviews via WhatsApp or Google Business Profile.
          */}
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-md">
            <p className="text-2xl" aria-hidden="true">
              ⭐⭐⭐⭐⭐
            </p>
            <p className="mt-4 text-lg leading-relaxed text-brand-ink">
              Student reviews coming soon. Call us to speak with a past student
              if you&apos;d like a reference.
            </p>
            <div className="mt-6">
              <a href={business.phoneTel} className="btn-amber">
                📞 Call for a Reference
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION J — GALLERY                                           */}
      {/* ============================================================= */}
      <section id="gallery" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="section-heading text-center">📸 Our School</h2>

          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {galleryImages.map((img) => (
              <Photo
                key={img.src}
                src={img.src}
                alt={img.alt}
                emoji="📸"
                sizes="(min-width: 768px) 33vw, 50vw"
                className="relative aspect-[4/3] w-full rounded-2xl shadow-md"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION K — FAQ                                               */}
      {/* ============================================================= */}
      <section id="faq" className="bg-brand-mist py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="section-heading text-center">❓ Common Questions</h2>
          <div className="mt-10">
            <Faq />
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* SECTION L — CONTACT / FOOTER                                  */}
      {/* ============================================================= */}
      <footer id="contact" className="bg-brand-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-3">
            {/* Col 1 — Contact */}
            <div>
              <h2 className="text-lg font-bold uppercase tracking-wide text-brand-amber">
                Contact Us
              </h2>
              <p className="mt-4 flex items-center gap-2">
                <span aria-hidden="true">📞</span>
                <a href={business.phoneTel} className="hover:underline">
                  {business.phoneDisplay}
                </a>
              </p>
              <p className="mt-2 flex items-center gap-2">
                <span aria-hidden="true">💬</span>
                <a
                  href={business.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {business.whatsappDisplay}
                </a>
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
                <a href={business.phoneTel} className="btn-amber">
                  📞 Call Now
                </a>
                <a
                  href={business.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>

            {/* Col 2 & 3 — Branches */}
            {branches.map((b) => (
              <div key={b.id}>
                <h2 className="text-lg font-bold uppercase tracking-wide text-brand-amber">
                  {b.name}
                </h2>
                <p className="mt-4 flex items-start gap-2 text-white/85">
                  <span aria-hidden="true">📍</span>
                  <span>{b.address}</span>
                </p>
                <p className="mt-2 flex items-center gap-2 text-white/85">
                  <span aria-hidden="true">⏰</span>
                  <span>{b.hours}</span>
                </p>
                <p className="mt-3">
                  <a
                    href={b.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-brand-amber hover:underline"
                  >
                    🗺 Get Directions
                  </a>
                </p>
                {b.id === "whitefield" && (
                  <p className="mt-3 text-sm text-white/85">
                    🏅 Women-Owned · ♿ Accessible
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-white/15">
          <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-white/70">
            <p>
              © 2026 Shiva New-Tech Driving School · Varthur &amp; Whitefield,
              Bengaluru · Driving School · {business.phoneDisplay}
            </p>
            {/* Plain-text service list — kept for search-engine content, not navigation. */}
            <p className="mt-3 leading-relaxed">
              {services.map((s) => s.name).join(" · ")}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
