import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.institutionName} — ${site.location}.`,
};

export default function ContactPage() {
  const showEmail = !site.email.startsWith("[");

  return (
    <section className="py-12 md:py-16">
      <div className="inst-container">
        <div className="inst-grid items-start">
          <div className="col-span-12 lg:col-span-4">
            <h1 className="font-serif text-3xl text-navy">Contact</h1>
            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="text-muted">Location</dt>
                <dd className="mt-0.5 font-medium text-charcoal">{site.location}</dd>
              </div>
              <div>
                <dt className="text-muted">Phone</dt>
                <dd className="mt-0.5">
                  <a href={`tel:${site.phoneTel}`} className="font-medium text-navy hover:text-teal">
                    {site.phone}
                  </a>
                </dd>
              </div>
              {showEmail ? (
                <div>
                  <dt className="text-muted">Email</dt>
                  <dd className="mt-0.5">
                    <a href={`mailto:${site.email}`} className="font-medium text-navy hover:text-teal">
                      {site.email}
                    </a>
                  </dd>
                </div>
              ) : null}
            </dl>
          </div>

          <div className="col-span-12 lg:col-span-8">
            <div className="border border-line bg-cool p-6 md:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
