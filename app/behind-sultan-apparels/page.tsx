import { Hero } from "@/components/shared/Hero";
import { behindGenContent, ourStoryContent } from "@/utils/content";
import { MouseFollower } from "@/components/shared/mouse-follower";
import SmoothScroll from "@/components/shared/smooth-scroll";
import { ContentBlock } from "@/components/shared/contentBlock";

export default function BehindGenPage() {
  const { title, subtitle } = behindGenContent.hero;
const contentSections = [
    behindGenContent.sectionOne,
    behindGenContent.sectionTwo,
    behindGenContent.sectionThree,
    behindGenContent.sectionFour,
  ];
  return (
    <SmoothScroll>
      {/* <MouseFollower /> */}
      <Hero title={title} subtitle={subtitle} />
      {contentSections.map((section, index) => (
        <ContentBlock 
          key={index} 
          data={section} 
          index={index} // 0=White, 1=Black, 2=White, 3=Black
        />
      ))}
    </SmoothScroll>
  );
}
