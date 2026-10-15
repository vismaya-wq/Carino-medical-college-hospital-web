import { HomeCtaBand } from "@/components/home/HomeCtaBand";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeInfoCards } from "@/components/home/HomeInfoCards";
import { HomeProjectGrid } from "@/components/home/HomeProjectGrid";
import { HomeStatsBar } from "@/components/home/HomeStatsBar";
import { HomeTrustShowcase } from "@/components/home/HomeTrustShowcase";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeProjectGrid />
      <HomeTrustShowcase />
      <HomeStatsBar />
      <HomeInfoCards />
      <HomeCtaBand />
    </>
  );
}
