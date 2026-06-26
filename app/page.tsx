import { Hero } from "@/components/home/hero";

import SmoothScroll from "@/components/shared/smooth-scroll";
import { MouseFollower } from "@/components/shared/mouse-follower";
import { Introduction } from "@/components/home/Introduction";
import { Highlights } from "@/components/home/Highlights";
import { Mission } from "@/components/home/Mission";
import { DeliveryProcess } from "@/components/home/DeliveryProcess";
import { AboutSection } from "@/components/home/AboutSection";
import { Portfolio } from "@/components/home/Portfolio";

export default function Home() {
  return (
    <SmoothScroll>
      {/* <MouseFollower /> */}
      <main className="flex flex-col min-h-screen">
        <Hero />
        
        <Introduction />
        <Highlights />
        
        <Mission />
        <DeliveryProcess />
        
        <AboutSection />
        <Portfolio />
        
      </main>
    </SmoothScroll>
  );
}