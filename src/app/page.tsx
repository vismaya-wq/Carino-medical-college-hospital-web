import { AdmissionsSection } from "@/components/home/AdmissionsSection";
import { CampusVisionSection } from "@/components/home/CampusVisionSection";
import { EducationFlowSection } from "@/components/home/EducationFlowSection";
import { HomeHero } from "@/components/home/HomeHero";
import { InstitutionalSpotlight } from "@/components/home/InstitutionalSpotlight";
import { NmcDisclosuresSection } from "@/components/home/NmcDisclosuresSection";
import { PillarSections } from "@/components/home/PillarSections";
import { TrustPreviewSection } from "@/components/home/TrustPreviewSection";
import { UpdatesGlanceSection } from "@/components/home/UpdatesGlanceSection";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <InstitutionalSpotlight />
      <UpdatesGlanceSection />
      <PillarSections />
      <AdmissionsSection />
      <CampusVisionSection />
      <EducationFlowSection />
      <NmcDisclosuresSection />
      <TrustPreviewSection />
    </>
  );
}
