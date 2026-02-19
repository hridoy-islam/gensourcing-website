"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface CtaStrategiesData {
  pretitle: string;
  title: string;
  items: Array<{
    heading: string;
    description: string;
  }>;
  buttonHref: string;
  buttonText: string;
  image: string;
}

export const CtaStrategies = ({ data }: { data: CtaStrategiesData }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      tl.from(".strategy-header", { y: 30, opacity: 0, duration: 0.8 })
        .from(
          ".strategy-item",
          {
            x: -30,
            opacity: 0,
            stagger: 0.2,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".strategy-image-container",
          { x: 50, opacity: 0, duration: 1.2, ease: "expo.out" },
          "-=0.8"
        );

      // Subtle parallax effect on the image itself
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: 40,
        ease: "none",
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="w-full py-20 lg:py-32 bg-black text-white overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Content Side */}
          <div className="order-2 lg:order-1 space-y-10">
            <div className="strategy-header space-y-6">
              <Badge
                variant="outline"
                className="text-white border-white/40 px-4 py-2 uppercase tracking-[0.2em] text-xs rounded-full"
              >
                {data.pretitle}
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white leading-tight">
                {data.title}
              </h2>
            </div>

            <div className="space-y-8">
              {data.items.map((item, idx) => (
                <div
                  key={idx}
                  className="strategy-item group flex flex-col gap-3 border-l-2 border-neutral-800 hover:border-white pl-6 transition-colors duration-500"
                >
                  <h3 className="font-semibold text-2xl text-white group-hover:translate-x-1 transition-transform duration-300">
                    {item.heading}
                  </h3>
                  <p className="text-neutral-400 leading-relaxed text-lg font-light">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="mt-6 bg-white text-black hover:bg-neutral-200 rounded-none px-10 h-14 text-md font-medium group"
              asChild
            >
              <a href={data.buttonHref}>
                {data.buttonText}
              </a>
            </Button>
          </div>

          {/* Image Side - RESTORED */}
          <div className="strategy-image-container order-1 lg:order-2 relative group">
            <div className="relative h-[500px] lg:h-[650px] w-full overflow-hidden border border-white/10">
              <img
                ref={imageRef}
                src={data.image}
                alt="Global Sourcing"
                className="object-cover w-full h-[110%] grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
              {/* Modern Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Decorative white frame that shifts on hover */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-white/20 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
          </div>

        </div>
      </div>
    </section>
  );
};