"use client";

import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Minus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { partnerWithUsContent } from "@/utils/content";

gsap.registerPlugin(ScrollTrigger);

export default function PartnerSection() {
  const containerRef = useRef(null);
  const { hero, partnership } = partnerWithUsContent;

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // 1. Hero Animation (Stark & Bold)
      tl.from(".hero-line", { scaleX: 0, duration: 1, ease: "expo.out" })
        .from(".hero-title", { y: 60, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.5")
        .from(".hero-subtitle", { y: 30, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.7");

      // 2. Requirements List Animation
      gsap.from(".req-row", {
        scrollTrigger: {
          trigger: ".checklist-container",
          start: "top 80%",
        },
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });

      // 3. Image Reveal with Parallax
      gsap.fromTo(
        ".partner-image",
        { scale: 1.15, filter: "grayscale(100%)" },
        {
          scale: 1,
          filter: "grayscale(0%)",
          scrollTrigger: {
            trigger: ".image-container",
            start: "top 80%",
            end: "bottom top",
            scrub: 1.5, // Slow, heavy scrub feel
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <main ref={containerRef} className="bg-white min-h-screen text-black selection:bg-black selection:text-white font-sans">
      
    
      {/* --- 2. MAIN SPLIT CONTENT --- */}
      <section className="main-content w-full pb-24 lg:pb-40 border-t border-neutral-100">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start pt-16 lg:pt-24">
            
            {/* LEFT COLUMN: Sticky Narrative (Span 5) */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-12 h-fit">
              
              {/* Header Group */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-400">
                    {partnership.pretitle}
                  </span>
                </div>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl leading-[1.1]">
                  {partnership.title}
                </h2>
              </div>

              {/* Description */}
              <div className="prose prose-lg text-neutral-600 font-light leading-relaxed whitespace-pre-line text-lg">
                {partnership.description}
              </div>

              {/* CTA Section */}
              <div className="pt-6 border-t border-neutral-100">
                <p className="text-lg font-medium text-black italic mb-6">
                  &quot;{partnership.closingText}&quot;
                </p>
                <Button
                  size="lg"
                  className="w-full sm:w-auto rounded-none h-14 px-10 text-md bg-black hover:bg-neutral-800 text-white transition-all duration-300 flex items-center justify-between group"
                  asChild
                >
                  <a href={partnership.buttonHref}>
                    <span className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        {partnership.buttonText}
                    </span>
                    <ArrowRight className="ml-4 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <p className="mt-4 text-xs text-neutral-400 uppercase tracking-wider">
                  Response within 24 Hours
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: Technical Details (Span 7) */}
            <div className="lg:col-span-7 space-y-20">
              
              {/* Image Block */}
              <div className="space-y-4">
                <div className="image-container relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                  <img
                    src={partnership.image}
                    alt="Partner Factory"
                    className="partner-image object-cover w-full h-full will-change-transform"
                  />
                  {/* Technical Overlay Lines */}
                  <div className="absolute inset-0 border border-black/5 pointer-events-none" />
                </div>
                {/* Image Caption / Metadata */}
                <div className="flex justify-between items-center text-xs text-neutral-400 font-mono border-b border-neutral-100 pb-2">
                  <span>FIG 1.0 — GLOBAL STANDARDS</span>
                  <span>GEN SOURCING ARCHIVE</span>
                </div>
              </div>

              {/* Requirements "Spec Sheet" */}
              <div className="checklist-container">
                <h3 className="text-xl font-bold mb-8 uppercase tracking-widest flex items-center gap-4">
                  {partnership.requirementsTitle}
                  <div className="h-[1px] flex-1 bg-black/10" />
                </h3>
                
                <div className="flex flex-col">
                  {partnership.requirements.map((req, idx) => (
                    <div 
                      key={idx} 
                      className="req-row group flex items-start py-6 border-t border-neutral-200 hover:border-black transition-colors duration-500"
                    >
                      {/* Numbering */}
                      <span className="text-sm font-mono text-neutral-400 group-hover:text-black w-12 pt-1 transition-colors">
                        0{idx + 1}
                      </span>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <span className="text-xl md:text-2xl text-neutral-800 font-light group-hover:text-black transition-colors duration-300 block">
                          {req}
                        </span>
                      </div>

                      {/* Icon */}
                      <Minus className="w-5 h-5 text-neutral-300 group-hover:text-black transition-colors transform group-hover:rotate-180 duration-500" />
                    </div>
                  ))}
                  {/* Closing Border */}
                  <div className="w-full h-[1px] bg-neutral-200" />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
}