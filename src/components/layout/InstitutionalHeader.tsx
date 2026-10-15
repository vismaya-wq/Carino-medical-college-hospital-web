"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { site } from "@/data/site";

function navClass(active: boolean) {
  return active
    ? "font-semibold text-primary"
    : "font-medium text-charcoal hover:text-primary";
}

export function InstitutionalHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white shadow-[0_2px_12px_rgba(12,74,122,0.08)]">
      <div className="inst-container flex flex-wrap items-center justify-between gap-3 py-3 lg:py-4">
        <Link href="/" className="shrink-0 no-underline">
          <BrandLogo />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className={`text-sm ${navClass(pathname === item.href)}`}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`mailto:${site.email}`}
            className="hidden text-sm font-semibold text-navy hover:text-primary xl:inline"
          >
            {site.email}
          </a>
          <a
            href={`tel:${site.phoneTel}`}
            className="flex items-center gap-2 text-sm font-bold text-[#c0392b]"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#fdecea]" aria-hidden>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M6.6 10.8c1.5 3.1 3.9 5.5 7 7l2.2-2.2c.3-.3.8-.4 1.2-.2 1.3.5 2.7.8 4 .8.7 0 1.2.5 1.2 1.2V20c0 .7-.5 1.2-1.2 1.2C10.9 21.2 2.8 13.1 2.8 3.2 2.8 2.5 3.3 2 4 2h3.5c.7 0 1.2.5 1.2 1.2 0 1.3.3 2.7.8 4 .1.4 0 .9-.2 1.2L6.6 10.8z"
                />
              </svg>
            </span>
            {site.phone}
          </a>
          <Link href="/about" className="btn-outline !px-4 !py-2 !text-xs">
            About project
          </Link>
          <Link href="/contact" className="btn-primary !px-4 !py-2 !text-xs">
            Contact us
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md border border-line px-3 py-2 text-xs font-bold uppercase text-navy lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
        >
          Menu
        </button>
      </div>

      {menuOpen ? (
        <nav className="border-t border-line bg-white px-4 py-3 lg:hidden" aria-label="Mobile">
          <ul className="space-y-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 text-sm font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a href={`tel:${site.phoneTel}`} className="block py-2 text-sm font-bold text-[#c0392b]">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="block py-2 text-sm font-medium text-navy">
                {site.email}
              </a>
            </li>
            <li>
              <Link href="/contact" className="btn-primary mt-2 w-full" onClick={() => setMenuOpen(false)}>
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
