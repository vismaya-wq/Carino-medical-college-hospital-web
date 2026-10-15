"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

export function AdmissionsSection() {
  return (
    <section id="admissions" className="section-block scroll-mt-28">
      <div className="inst-container py-12 md:py-16">
        <div className="inst-grid items-start">
          <div className="span-12 span-lg-5">
            <Reveal>
              <p className="label-upper">Admissions</p>
              <h2 className="section-block__title">Admission information</h2>
              <p className="section-block__lead">
                The institution is in a pre-operational planning stage. Student admission
                notices, eligibility criteria, and seat matrix will be published here only
                after formal approval and institutional announcement.
              </p>
            </Reveal>
          </div>
          <div className="span-12 span-lg-7">
            <Reveal delay={120}>
              <div className="admissions-panel panel-interactive">
                <h3 className="font-serif text-xl text-navy">Current status</h3>
                <ul className="mt-4 space-y-3 text-sm text-muted">
                  <li>• Admissions are not open at this time.</li>
                  <li>• No fee structure or counselling schedule is published.</li>
                  <li>• Enquiries may be directed through the contact page.</li>
                </ul>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex rounded-md bg-[#17344d] px-5 py-3 text-xs font-bold uppercase text-white hover:bg-[#0f2638]"
                >
                  Admission Enquiry
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
