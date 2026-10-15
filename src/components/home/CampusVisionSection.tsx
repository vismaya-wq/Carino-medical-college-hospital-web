import { PlaceholderImage } from "@/components/PlaceholderImage";
import { images } from "@/data/images";

export function CampusVisionSection() {
  const { campus } = images;

  return (
    <section id="campus" className="bg-charcoal text-white scroll-mt-28">
      <div className="relative min-h-[28rem] md:min-h-[34rem]">
        <PlaceholderImage
          asset={campus}
          overlay="navy"
          sizes="100vw"
          className="absolute inset-0 h-full w-full opacity-90"
        />
        <div className="relative inst-container flex min-h-[inherit] flex-col justify-end py-12 md:py-16">
          <div className="max-w-2xl border-l-2 border-teal pl-6 md:pl-8">
            <p className="label-upper text-teal">Architecture &amp; campus vision</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
              A campus planned for academic and clinical integration
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
              The Resurgent India Trust campus is conceived as a unified environment—where
              lecture spaces, skills laboratories, and hospital adjacencies support
              continuous learning and supervised clinical training.
            </p>
            {campus.caption ? (
              <p className="mt-4 text-xs text-white/55">{campus.caption}</p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
