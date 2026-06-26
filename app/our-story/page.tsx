import { Hero } from "@/components/shared/Hero";
import { ourStoryContent } from "@/utils/content";
import { MouseFollower } from "@/components/shared/mouse-follower";
import SmoothScroll from "@/components/shared/smooth-scroll";
import { CompanyIntro } from "@/components/ourStory/CompanyIntro";
import { CtaStrategies } from "@/components/ourStory/CtaStrategies";
import { TeamFeatures } from "@/components/ourStory/TeamFeatures";

export default function StoryPage() {
  const { title, subtitle } = ourStoryContent.hero;

  return (
    <SmoothScroll>
      {/* <MouseFollower /> */}
      <Hero title={title} subtitle={subtitle} />
      <CompanyIntro data={ourStoryContent.companyIntro} />

      <CtaStrategies data={ourStoryContent.ctaStrategies} />

      <TeamFeatures data={ourStoryContent.teamFeatures} />
    </SmoothScroll>
  );
}
