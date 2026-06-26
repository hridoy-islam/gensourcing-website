"use client";

import React, { useRef } from "react";
import { Hero } from "@/components/shared/Hero";
import { MouseFollower } from "@/components/shared/mouse-follower";
import SmoothScroll from "@/components/shared/smooth-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Globe, TrendingUp, ShoppingBag, MonitorPlay } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// --- Content Data ---
const marketInsightsContent = {
  hero: {
    title: "Market Insights",
    subtitle:
      "Anticipating the Future of Fashion. We track global shifts to keep your brand ahead of demand in the US, UK, and Europe.",
  },
  intro: {
    heading: "Fashion Moves Fast — And So Must Sourcing.",
    description:
      "Our designers and merchandisers continuously research fashion trends, seasonal colours, and consumer preferences in key markets such as the US and Europe.\n\nFrom knitwear to workwear, we deliver collections that combine quality, style, and commercial value. By staying aligned with evolving demand, we ensure our partners remain competitive in the global marketplace.",
  },
  strategy: {
    title: "Our Methodology",
    points: [
      {
        icon: Globe,
        title: "Global Presence",
        text: "We actively attend major international fashion and trade shows to capture emerging macro-trends before they hit the mainstream.",
      },
      {
        icon: ShoppingBag,
        title: "Retail Intelligence",
        text: "Our teams visit leading trendsetting retail and designer stores globally to analyze real-world merchandising and consumer behavior.",
      },
      {
        icon: TrendingUp,
        title: "Market Analytics",
        text: "We track best-selling apparel products across key markets, including the US and Europe, to validate design direction with data.",
      },
      {
        icon: MonitorPlay,
        title: "Digital Forecasting",
        text: "In-depth online research using leading fashion and design platforms allows us to predict aesthetic shifts and color stories.",
      },
    ],
  },
  impact: {
    text: "This dedicated approach allows us to provide clients with clear design and product development direction, ensuring trend relevance, faster speed-to-market, and stronger commercial results.",
  },
};

export default function MarketInsightsPage() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // 1. Intro Text Animation
      gsap.from(".intro-fade", {
        scrollTrigger: {
          trigger: ".intro-section",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });

      // 2. Strategy Grid Animation
      gsap.from(".strategy-card", {
        scrollTrigger: {
          trigger: ".strategy-section",
          start: "top 75%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
      });
      
      // 3. Impact Text Animation
      gsap.from(".impact-text", {
        scrollTrigger: {
          trigger: ".impact-section",
          start: "top 85%",
        },
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
      });
    },
    { scope: containerRef }
  );

  return (
    <SmoothScroll>
      {/* <MouseFollower /> */}
      <div ref={containerRef} className="bg-white min-h-screen">
        
        {/* --- 1. Hero Section --- */}
        <Hero 
          title={marketInsightsContent.hero.title} 
          subtitle={marketInsightsContent.hero.subtitle} 
        />

        {/* --- 2. Editorial Intro --- */}
        <section className="intro-section py-24 lg:py-32 container mx-auto ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="intro-fade text-4xl lg:text-5xl font-bold tracking-tighter leading-[1.1]">
                {marketInsightsContent.intro.heading}
              </h2>
              <div className="intro-fade h-[2px] w-24 bg-black mt-8" />
            </div>
            <div>
              <p className="intro-fade text-lg lg:text-xl font-light leading-relaxed whitespace-pre-line">
                {marketInsightsContent.intro.description}
              </p>
            </div>
          </div>
        </section>

        {/* --- 3. Strategy Grid (Dark Mode) --- */}
        <section className="strategy-section py-24 bg-secondary-foreground text-primary">
          <div className="container mx-auto">
            <div className="mb-16 border-b border-primary pb-8">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-white">
                Active Research
              </span>
              <h3 className="text-3xl md:text-4xl font-bold mt-4">
                {marketInsightsContent.strategy.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {marketInsightsContent.strategy.points.map((item, idx) => (
                <div 
                  key={idx} 
                  className="strategy-card group p-8 bg-white border border-white hover:border-primary transition-colors duration-500"
                >
                  <div className="mb-6   transition-colors duration-300">
                    <item.icon size={32} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                  <p className="text-black font-light leading-relaxed text-sm">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 4. Impact / Closing --- */}
        <section className="impact-section py-24 lg:py-40 bg-white border-t border-neutral-100">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
             <p className="impact-text text-2xl md:text-3xl lg:text-4xl font-light text-black leading-tight">
               &ldquo;{marketInsightsContent.impact.text}&rdquo;
             </p>
          </div>
        </section>

      </div>
    </SmoothScroll>
  );
}