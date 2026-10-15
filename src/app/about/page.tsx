import type { Metadata } from "next";
import Link from "next/link";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { images } from "@/data/images";
import { site, values } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Institutional profile of the proposed medical college and teaching hospital — trust, vision, and governance.",
};

export default function AboutPage() {
  return (
    <>
      {/* Editorial intro — 7/5 */}
      <section className="border-b border-line bg-cool">
        <div className="inst-container py-12 md:py-16">
          <div className="inst-grid items-center">
            <div className="col-span-12 lg:col-span-7">
              <p className="label-upper">Institutional profile</p>
              <h1 className="mt-3 font-serif text-[2rem] leading-tight text-navy md:text-4xl">
                Built on purpose, guided by responsibility
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
                {site.institutionName} is presented as a proposed medical college
                with an associated teaching hospital—an integrated model for
                education, clinical training, and community-oriented healthcare
                planning in {site.location}.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                This page describes intent and governance approach. It does not
                state regulatory approval, admissions availability, or operational
                hospital services unless formally verified and published.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="relative aspect-[4/5] border border-line">
                <PlaceholderImage
                  asset={images.aboutEditorial}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust — 5/7 reverse */}
      <section className="py-12 md:py-16">
        <div className="inst-container">
          <div className="inst-grid items-start">
            <div className="col-span-12 md:col-span-5">
              <div className="relative aspect-[3/4] border border-line">
                <PlaceholderImage
                  asset={images.aboutCampus}
                  sizes="(max-width: 768px) 100vw, 38vw"
                  overlay="soft"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pl-10">
              <p className="section-num">Section 01</p>
              <p className="label-upper mt-2">Organisation</p>
              <h2 className="mt-3 font-serif text-3xl text-navy">
                About {site.trustName}
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted md:text-base">
                <p>
                  The trust sponsoring this proposal brings together planning for
                  medical education infrastructure and associated clinical facilities.
                  Its role is to steward institutional development, academic
                  partnerships, and transparent communication with stakeholders.
                </p>
                <p>
                  Why establish this institution? To address the need for
                  structured medical education within the region, paired with
                  supervised clinical exposure through a teaching hospital model that
                  can grow responsibly over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision / mission — 4/4/4 */}
      <section className="border-y border-line bg-pale py-12 md:py-16">
        <div className="inst-container">
          <div className="mb-10 max-w-2xl">
            <p className="label-upper">Purpose</p>
            <h2 className="mt-2 font-serif text-3xl text-navy">
              Project purpose and institutional vision
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <article className="border border-line bg-clinical p-6">
              <h3 className="font-serif text-xl text-navy">Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                To cultivate competent, ethical physicians through rigorous
                education and clinically grounded training—serving public health
                with long-term institutional commitment.
              </p>
            </article>
            <article className="border border-line bg-clinical p-6">
              <h3 className="font-serif text-xl text-navy">Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                To plan and develop an integrated medical college and teaching
                hospital with disciplined governance, faculty-led academics, and
                patient-respectful clinical learning environments.
              </p>
            </article>
            <article className="border border-line bg-clinical p-6">
              <h3 className="font-serif text-xl text-navy">Clinical link</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Education and healthcare are intentionally linked: the hospital is
                not a separate commercial entity, but the clinical complement to
                the college&apos;s academic mandate.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Governance — no fictional people */}
      <section className="py-12 md:py-16">
        <div className="inst-container">
          <div className="inst-grid items-center">
            <div className="col-span-12 lg:col-span-7">
              <p className="section-num">Section 02</p>
              <p className="label-upper mt-2">Governance</p>
              <h2 className="mt-3 font-serif text-3xl text-navy">
                Leadership and governing information
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted md:text-base">
                Names, appointments, and biographical profiles of promoters and
                governing council members will be disclosed only after formal
                confirmation. This site does not use stock photography to represent
                actual individuals.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Board of trustees / governing council",
                  "Academic council (planned)",
                  "Hospital management framework (planned)",
                  "Compliance and documentation office",
                ].map((role) => (
                  <div
                    key={role}
                    className="border border-dashed border-line bg-cool px-4 py-5"
                  >
                    <p className="text-sm font-medium text-navy">{role}</p>
                    <p className="mt-2 text-xs text-muted">
                      Composition to be announced
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="relative aspect-[5/4] border border-line">
                <PlaceholderImage
                  asset={images.governance}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-line bg-navy py-12 text-white md:py-16">
        <div className="inst-container">
          <p className="label-upper text-teal">Values</p>
          <h2 className="mt-2 font-serif text-3xl">Educational and healthcare purpose</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article
                key={value.title}
                className="border border-white/15 bg-white/5 p-5"
              >
                <h3 className="font-serif text-lg">{value.title}</h3>
                <p className="mt-2 text-sm text-white/75">{value.text}</p>
              </article>
            ))}
          </div>
          <Link href="/contact" className="editorial-link mt-10 text-white hover:text-teal">
            Institutional enquiries
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
