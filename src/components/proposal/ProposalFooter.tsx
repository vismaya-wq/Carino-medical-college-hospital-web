import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { site } from "@/data/site";

export function ProposalFooter() {
  return (
    <footer className="mt-auto shrink-0 border-t border-[#dde3dc] bg-white">
      <div className="proposal-container py-10 lg:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <BrandLogo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-sage">
              Institutional project presentation for the proposed {site.projectName},{" "}
              {site.location}. {site.projectStatus}.
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-sage">
              Navigation
            </p>
            <ul className="mt-4 space-y-2">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-charcoal/80 transition hover:text-forest"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-sage">
              Correspondence
            </p>
            <ul className="mt-4 space-y-2 text-sm text-charcoal/80">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-forest">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phoneTel}`} className="hover:text-forest">
                  {site.phone}
                </a>
              </li>
              <li className="text-sage">{site.trustName}</li>
            </ul>
          </div>
        </div>

        <div
          className="mt-10 flex flex-col gap-2 border-t border-[#dde3dc] pt-6 text-xs text-sage sm:flex-row sm:items-center sm:justify-between"
        >
          <p>© 2026 {site.trustName}</p>
          <Link href="/contact" className="link-arrow !text-xs text-sage hover:text-forest">
            Project correspondence ↗
          </Link>
        </div>
      </div>
    </footer>
  );
}
