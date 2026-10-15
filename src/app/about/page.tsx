import type { Metadata } from "next";
import Link from "next/link";
import { aboutCopy, site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `Sponsoring organisation and leadership for the proposed ${site.projectName}.`,
};

export default function AboutPage() {
  return (
    <div className="bg-paper">
      <section className="border-b border-line bg-white">
        <div className="proposal-container py-14 lg:py-20">
          <p className="section-eyebrow">The sponsoring organisation</p>
          <h1 className="heading-serif mt-3">{site.trustName}</h1>
          <p className="body-muted mt-6 max-w-2xl">{aboutCopy.trust}</p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="proposal-container py-14 lg:py-20">
          <h2 className="heading-serif">Leadership &amp; Institutional Experience</h2>
          <p className="mt-6 font-medium text-charcoal">{site.chairmanName}</p>
          <p className="mt-1 text-sm text-sage">{site.chairmanDesignation}</p>
          <p className="body-muted mt-6 max-w-2xl">{aboutCopy.leadershipIntro}</p>
          <p className="body-muted mt-4 max-w-2xl">{aboutCopy.leadershipSupport}</p>
        </div>
      </section>

      <section>
        <div className="proposal-container py-14 lg:py-20">
          <h2 className="heading-serif">Healthcare, Education &amp; Community Welfare</h2>
          <p className="body-muted mt-6 max-w-2xl">{aboutCopy.objectives}</p>

          <Link href="/contact" className="link-arrow mt-12">
            Project correspondence <span aria-hidden>↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
