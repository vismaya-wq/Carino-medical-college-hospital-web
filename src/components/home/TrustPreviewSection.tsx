import Link from "next/link";
import { site } from "@/data/site";

export function TrustPreviewSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="inst-container">
        <div className="inst-grid items-center border border-line bg-clinical">
          <div className="col-span-12 border-b border-line bg-pale p-8 md:col-span-5 md:border-b-0 md:border-r md:p-10">
            <p className="label-upper">People behind the vision</p>
            <h2 className="mt-2 font-serif text-2xl text-navy md:text-3xl">
              {site.trustName}
            </h2>
          </div>
          <div className="col-span-12 p-8 md:col-span-7 md:p-10">
            <p className="text-sm leading-relaxed text-muted md:text-base">
              The sponsoring organisation is preparing this integrated medical
              college and teaching hospital proposal with emphasis on accountable
              governance, academic planning, and responsible healthcare
              infrastructure development. Leadership profiles and governing body
              details will be published when formally confirmed—not represented
              here with placeholder names or stock portraits.
            </p>
            <Link href="/about" className="editorial-link mt-6">
              About the institution
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
