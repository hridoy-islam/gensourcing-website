"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/utils/content";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Mission() {
  const { title, description, buttonText, buttonHref,image } = homeContent.mission;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content Reveal
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });

      // Subtle Parallax effect for the background image
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative py-32 md:py-48 overflow-hidden bg-black">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div ref={bgRef} className="relative w-full h-[120%] -top-[10%]">
          <Image
            src={image} // Ensure you have a high-res image here
            alt="Mission Background"
            fill
            className="object-cover opacity-40 grayscale"
            priority
          />
        </div>
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />
      </div>

      <div className="container mx-auto px-4 relative z-20 text-center max-w-5xl" ref={containerRef}>
        <div className="flex justify-center mb-10">
          <Quote className="text-white/20 w-16 h-16 rotate-180" />
        </div>
        
        <h2 className="text-xs md:text-sm font-bold tracking-[8px] uppercase text-zinc-400 mb-10">
          {title}
        </h2>
        
        <p className="text-2xl md:text-5xl font-light text-white leading-[1.2] mb-16 font-serif italic tracking-tight">
          "{description}"
        </p>
        
        <div className="flex justify-center">
          <Link href={buttonHref}>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black px-12 py-8 text-sm md:text-base uppercase tracking-widest rounded-none transition-all duration-500 bg-transparent"
            >
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}