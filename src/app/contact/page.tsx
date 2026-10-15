import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the proposed medical college and teaching hospital — address, phone, email, and enquiry form.",
};

export default function ContactPage() {
  const hasVerifiedLocation =
    !site.location.startsWith("[") && !site.address.startsWith("[");

  return (
    <section className="py-12 md:py-16">
      <div className="inst-container">
        <div className="inst-grid items-start">
          <div className="col-span-12 lg:col-span-5">
            <p className="label-upper">Contact</p>
            <h1 className="mt-2 font-serif text-3xl text-navy md:text-4xl">
              Institutional enquiries
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              For project presentations, partnership discussions, or general
              information about the proposed institution, use the form or contact
              details below.
            </p>

            <dl className="mt-10 space-y-6 border-t border-line pt-8">
              <div>
                <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted">
                  Proposed location
                </dt>
                <dd className="mt-1 text-sm font-medium text-charcoal">
                  {site.location}
                </dd>
                <dd className="mt-1 text-sm text-muted">{site.address}</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-sm font-medium text-navy hover:text-teal"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${site.phone}`}
                    className="text-sm font-medium text-navy hover:text-teal"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted">
                  Sponsoring trust
                </dt>
                <dd className="mt-1 text-sm text-charcoal">{site.trustName}</dd>
              </div>
            </dl>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="border border-line bg-cool p-6 md:p-8 lg:p-10">
              <h2 className="font-serif text-2xl text-navy">Enquiry form</h2>
              <p className="mt-2 text-sm text-muted">
                Submissions are validated on this device. Server delivery will be
                enabled when an email or CRM integration is configured.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>

        {hasVerifiedLocation ? (
          <div className="mt-14 border border-line bg-pale p-6 md:p-8">
            <p className="label-upper">Location</p>
            <p className="mt-2 text-sm text-muted">
              Map embed can be placed here when the proposed site address is
              confirmed and published.
            </p>
          </div>
        ) : (
          <p className="mt-10 text-xs text-muted">
            Map and directions will be added when a verified project location is
            available for public disclosure.
          </p>
        )}
      </div>
    </section>
  );
}
