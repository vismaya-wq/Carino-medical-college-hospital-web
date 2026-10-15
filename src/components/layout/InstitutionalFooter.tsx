import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { site } from "@/data/site";

export function InstitutionalFooter() {
  return (
    <footer className="mt-auto border-t border-[#d7e2e8] bg-[#17344d] text-white">
      <div className="inst-container py-12 md:py-14">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <BrandLogo size="sm" variant="light" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">
              Proposal website for a planned medical college and teaching hospital.
              Information presented here is subject to verification and formal announcement.
            </p>
          </div>
          <div className="md:col-span-4 md:col-start-7">
            <p className="label-upper text-white/50">Navigation</p>
            <ul className="mt-4 space-y-2">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/80 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="label-upper text-white/50">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-white/75">
              <li>{site.location}</li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
              </li>
              <li>
                <a href={`tel:${site.phone}`} className="hover:text-white">{site.phone}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="inst-container flex flex-col gap-2 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.trustName}. Pre-operational project presentation.</p>
          <p>Imagery: illustrative stock until official project media is released.</p>
        </div>
      </div>
    </footer>
  );
}
