"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { site } from "@/data/site";

function isNavActive(pathname: string, hash: string, href: string) {
  if (href === "/") return pathname === "/" && !hash;
  if (href.startsWith("/#")) {
    return pathname === "/" && hash === `#${href.slice(2)}`;
  }
  return pathname === href;
}

function navLinkClass(active: boolean) {
  return [
    "inline-block whitespace-nowrap border-b-2 px-3 py-2.5 text-[0.8rem] font-bold transition-colors",
    active
      ? "border-[#17344d] text-[#17344d]"
      : "border-transparent text-[#26343d] hover:border-[#427a80]/50 hover:text-[#17344d]",
  ].join(" ");
}

export function InstitutionalHeader() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const update = () => setHash(window.location.hash);
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#d7e2e8] bg-white shadow-sm">
      {/* Top contact bar */}
      <div className="border-b border-[#e8f0f3] bg-[#f5f8fa]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs sm:text-sm">
          <p className="text-[#4f5f68]">
            <span className="font-semibold text-[#17344d]">Location:</span> {site.location}
            <span className="mx-2 hidden sm:inline">|</span>
            <span className="hidden sm:inline">Proposed institution · Planning stage</span>
          </p>
          <div className="flex flex-wrap items-center gap-3 font-semibold text-[#17344d]">
            <a href={`tel:${site.phone}`} className="hover:text-[#427a80]">{site.phone}</a>
            <a href={`mailto:${site.email}`} className="hidden hover:text-[#427a80] sm:inline">
              {site.email}
            </a>
          </div>
        </div>
      </div>

      {/* Brand row */}
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="min-w-0 no-underline">
          <BrandLogo />
        </Link>

        <Link
          href="/contact"
          className="hidden shrink-0 rounded-md bg-[#17344d] px-4 py-2.5 text-xs font-bold uppercase tracking-wide text-white shadow-md hover:bg-[#0f2638] lg:inline-flex"
        >
          Contact Us
        </Link>

        <button
          type="button"
          className="rounded border border-[#c5d4dc] px-3 py-1.5 text-xs font-bold uppercase lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-panel"
        >
          Menu
        </button>
      </div>

      {/* Desktop navigation */}
      <nav className="hidden border-t border-[#e8f0f3] lg:block" aria-label="Primary">
        <div className="mx-auto max-w-6xl px-4 py-2">
          <ul className="flex flex-wrap items-center justify-center gap-1">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={navLinkClass(isNavActive(pathname, hash, item.href))}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile / tablet navigation */}
      <nav
        id="mobile-nav-panel"
        className={`border-t border-[#e8f0f3] lg:hidden ${menuOpen ? "block" : "hidden"}`}
        aria-label="Mobile primary"
      >
        <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block ${navLinkClass(isNavActive(pathname, hash, item.href))}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-1 block rounded-md bg-[#17344d] px-3 py-2.5 text-center text-xs font-bold uppercase text-white"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
