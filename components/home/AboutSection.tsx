"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/utils/content";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const { title, description, description2,  image } = homeContent.about;
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
       // Animate Text
       gsap.from(".about-text", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
      });
      // Animate Image
      gsap.from(".about-image", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        x: 50,
        opacity: 0,
        duration: 1.2,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-secondary-foreground text-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="about-text text-4xl font-bold text-background">{title}</h2>
            <div className="about-text space-y-6 text-zinc-200 leading-relaxed text-lg">
              <p>{description}</p>
              <p>{description2}</p>
            </div>
            
          </div>

          <div className="about-image w-full lg:w-1/2 relative h-[600px] bg-zinc-800">
             {/* Use grayscale for professional look */}
             <Image
              src={image}
              alt="Founders"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
             {/* Border frame effect */}
            <div className="absolute inset-4 border border-white/20 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}