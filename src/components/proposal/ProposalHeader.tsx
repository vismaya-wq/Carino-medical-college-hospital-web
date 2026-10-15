"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "@/components/BrandLogo";
import { site } from "@/data/site";

export function ProposalHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-line bg-paper">
      <div className="proposal-container flex items-center justify-between gap-6 py-5 lg:py-6">
        <Link href="/" className="shrink-0 no-underline">
          <BrandLogo />
        </Link>
        <nav className="flex items-center gap-6 sm:gap-8" aria-label="Primary">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition ${
                pathname === item.href
                  ? "font-semibold text-forest"
                  : "font-medium text-charcoal/70 hover:text-forest"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
