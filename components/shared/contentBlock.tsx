"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/utils/utils"; // Standard Shadcn utility

gsap.registerPlugin(ScrollTrigger);

interface ContentSectionProps {
  data: {
    title: string;
    description: string;
    image: string;
  };
  index: number;
}

export const ContentBlock = ({ data, index }: ContentSectionProps) => {
  const containerRef = useRef(null);
  const isEven = index % 2 === 0; // Alternating Logic

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate Text
      tl.from(".content-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
      // Animate Image Reveal
      .from(
        ".content-image-wrapper",
        {
          clipPath: isEven ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)", // Swipe effect
          duration: 1.2,
          ease: "expo.out",
        },
        "-=0.8"
      )
      .from(".content-image", {
        scale: 1.2,
        duration: 1.5,
        ease: "expo.out",
      }, "-=1.2");

    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className={cn(
        "w-full py-24 lg:py-32 overflow-hidden",
        isEven ? "bg-background text-foreground" : "bg-secondary-foreground text-background"
      )}
    >
      <div className="container mx-auto">
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center",
            // If it's an odd index (Black bg), flip the order so image is on Left
            !isEven && "lg:grid-flow-dense" 
          )}
        >
          {/* Text Side */}
          <div className={cn("content-text space-y-8", !isEven && "lg:col-start-2")}>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl leading-none">
                {data.title}
              </h2>
              {/* Decorative Line */}
              <div className={cn("h-1 w-24", isEven ? "bg-primary" : "bg-background")} />
            </div>
            
            <div className={cn("prose max-w-none text-lg leading-relaxed font-light whitespace-pre-line", isEven ? "text-neutral-600" : "text-neutral-300")}>
              {data.description}
            </div>
          </div>

          {/* Image Side */}
          <div className={cn("content-image-wrapper relative aspect-[4/5] w-full overflow-hidden", !isEven && "lg:col-start-1")}>
             {/* NOTE: Ideally, use Next.js <Image /> here. 
                Using <img> for portability in this example. 
             */}
            <img
              src={data.image}
              alt={data.title}
              className="content-image object-cover w-full h-full  transition-all duration-700 ease-in-out"
            />
            
            {/* Minimal Border Frame */}
            <div className={cn("absolute inset-0 border-[1px] pointer-events-none", isEven ? "border-black/10" : "border-white/10")} />
          </div>
        </div>
      </div>
    </section>
  );
};