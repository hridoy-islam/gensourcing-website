import { Hero } from "@/components/shared/Hero";
import { behindGenContent, ourStoryContent, partnerWithUsContent, sourcingData } from "@/utils/content";
import { MouseFollower } from "@/components/shared/mouse-follower";
import SmoothScroll from "@/components/shared/smooth-scroll";
import PartnerSection from "@/components/partner/SectionBlock";
import { SourcingIntro } from "@/components/sourcing-portfolio/SourcingIntro";
import PortfolioGallery from "@/components/sourcing-portfolio/PortfolioGallery";
export default function SourcingPortfolio() {
  const { title, subtitle } = sourcingData.hero;

  return (
    <SmoothScroll>
      <MouseFollower />
      <Hero title={title} subtitle={subtitle} />
      <SourcingIntro />
      <PortfolioGallery/>
    </SmoothScroll>
  );
}
