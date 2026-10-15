import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Official project correspondence for the proposed ${site.projectName}.`,
};

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-2 border-b border-[#dde3dc] py-5 sm:grid-cols-[10rem_1fr] sm:gap-8">
      <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-sage">
        {label}
      </dt>
      <dd className="text-sm font-medium text-charcoal">{children}</dd>
    </div>
  );
}

export default function ContactPage() {
  return (
    <section className="bg-white">
      <div className="proposal-container py-14 lg:py-20">
        <div className="proposal-grid">
          <div className="col-span-12 lg:col-span-5">
            <h1 className="heading-serif">Project Correspondence</h1>
            <p className="body-muted mt-5">
              For official correspondence regarding the proposed {site.projectName}.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <dl className="border-t border-[#dde3dc]">
              <Row label="Sponsoring organisation">{site.trustName}</Row>
              <Row label="Chairman &amp; Managing Trustee">{site.chairmanName}</Row>
              <Row label="Registered office">{site.registeredOffice}</Row>
              <Row label="Proposed project location">{site.projectLocationFull}</Row>
              <Row label="Email">
                <a href={`mailto:${site.email}`} className="text-forest hover:underline">
                  {site.email}
                </a>
              </Row>
              <Row label="Telephone">
                <a href={`tel:${site.phoneTel}`} className="text-forest hover:underline">
                  {site.phone}
                </a>
              </Row>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
