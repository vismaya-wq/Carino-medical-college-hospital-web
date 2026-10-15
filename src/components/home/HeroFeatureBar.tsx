import Link from "next/link";
import {
  IconAcademic,
  IconCampus,
  IconClinical,
  IconDisclosure,
} from "@/components/icons/FeatureIcons";
import { heroFeatures } from "@/data/site";

const iconMap = {
  academic: IconAcademic,
  clinical: IconClinical,
  campus: IconCampus,
  disclosure: IconDisclosure,
};

export function HeroFeatureBar() {
  return (
    <div className="relative z-20 -mt-8 px-4">
      <div className="mx-auto grid max-w-6xl gap-3 rounded-xl border border-[#d7e2e8] bg-white p-3 shadow-xl sm:grid-cols-2 lg:grid-cols-4">
        {heroFeatures.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <Link
              key={item.title}
              href={item.href}
              className="group flex gap-3 rounded-lg p-3 transition hover:bg-[#f5f8fa]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e8f0f3] text-[#17344d]">
                <Icon />
              </span>
              <span>
                <span className="block text-sm font-bold text-[#17344d] group-hover:text-[#427a80]">
                  {item.title}
                </span>
                <span className="mt-0.5 block text-xs leading-snug text-[#4f5f68]">
                  {item.description}
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
