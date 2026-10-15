import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { site } from "@/data/site";

export function InstitutionalFooter() {
  return (
    <footer className="mt-auto bg-[#0a3d6b] text-white">
      <div className="border-b border-white/10 bg-primary py-8">
        <div className="inst-container flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-serif text-xl font-bold">Your health. Our education mission.</p>
          <Link
            href="/contact"
            className="rounded-md bg-white px-6 py-2.5 text-sm font-bold text-primary hover:bg-primary-light"
          >
            Contact us
          </Link>
        </div>
      </div>

      <div className="inst-container grid gap-10 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <BrandLogo size="sm" variant="light" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            Proposed medical college and teaching hospital by {site.trustName}, {site.location}.
          </p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-white/50">Quick links</p>
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
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-white/50">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li>{site.location}</li>
            <li>
              <a href={`tel:${site.phoneTel}`} className="hover:text-white">{site.phone}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="inst-container py-5 text-center text-xs text-white/50 sm:text-left">
          © 2026 {site.trustName}
        </div>
      </div>
    </footer>
  );
}
