import { Hero } from "@/components/shared/Hero";
import { behindGenContent, ourStoryContent, partnerWithUsContent } from "@/utils/content";
import { MouseFollower } from "@/components/shared/mouse-follower";
import SmoothScroll from "@/components/shared/smooth-scroll";
import PartnerSection from "@/components/partner/SectionBlock";
export default function PartnerWithUsPage() {
  const { title, subtitle } = partnerWithUsContent.hero;

  return (
    <SmoothScroll>
      <MouseFollower />
      <Hero title={title} subtitle={subtitle} />
        <PartnerSection/>
    </SmoothScroll>
  );
}
