import Link from "next/link";
import { site } from "@/data/site";

export function HomeCtaBand() {
  return (
    <section
      className="bg-gradient-to-r from-primary to-[#1568b3] py-10 text-white"
      aria-labelledby="cta-band-title"
    >
      <div className="inst-container flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div>
          <h2 id="cta-band-title" className="font-serif text-2xl font-bold md:text-3xl">
            Ready to connect?
          </h2>
          <p className="mt-2 text-sm text-white/90">
            Call {site.phone} or use the contact form for project enquiries.
          </p>
        </div>
        <Link
          href="/contact"
          className="shrink-0 rounded-md bg-white px-8 py-3 text-sm font-bold text-primary shadow-md hover:bg-primary-light"
        >
          Contact us today
        </Link>
      </div>
    </section>
  );
}
