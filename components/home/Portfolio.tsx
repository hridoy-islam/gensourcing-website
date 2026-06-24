"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/utils/content";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, ArrowLeft } from "lucide-react";

export function Portfolio() {
  const { title, description, buttonText, buttonHref, image } = homeContent.portfolio;
  const [currentSlide, setCurrentSlide] = useState(0);

  // Placeholder images 
  const portfolioImages = [
  "/p1.jpg",
  "/p2.jpg",
  "/p3.jpg",
  "/p4.jpg",
  "/p5.jpg",
  "/p6.jpg",
  "/p7.jpg",
  "/p8.jpg",

  "/p10.jpg",
  "/p11.jpg",
  "/p12.jpg",
  "/p13.jpg",
  "/p14.jpg",
];


  // Initialize Embla
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" }, 
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  // Update slide counter
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 md:py-32 bg-zinc-50 border-t border-zinc-200 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Added items-start to prevent stretching if heights differ */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
          
          {/* LEFT: Content & Controls */}
          {/* Added flex-shrink-0 to ensure text div retains its width */}
          <div className="w-full lg:w-4/12 flex-shrink-0 z-10">
            <div className="sticky top-24"> {/* Optional: Keeps text visible if you scroll */}
                <div>
                <span className="text-xs font-bold tracking-[0.2em]  uppercase mb-4 block">
                    Selected Works
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-[1.1] mb-8">
                    {title}
                </h2>
                </div>
                
                <p className="text-lg  leading-relaxed font-light mb-10">
                {description}
                </p>
                
                {/* Custom Navigation Controls */}
                <div className="flex items-center gap-6 mb-8">
                <button 
                    onClick={scrollPrev}
                    className="w-14 h-14 rounded-full border border-zinc-300 flex items-center justify-center text-zinc-600 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 group"
                    aria-label="Previous Slide"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                </button>
                
                <span className="text-sm font-mono text-zinc-400 tracking-widest">
                    <span className="text-black font-bold">0{currentSlide + 1}</span> / 0{portfolioImages.length}
                </span>

                <button 
                    onClick={scrollNext}
                    className="w-14 h-14 rounded-full border border-zinc-300 flex items-center justify-center text-zinc-600 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 group"
                    aria-label="Next Slide"
                >
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                </div>

                <Link href={buttonHref}>
                <Button variant="link" className="p-0 text-black text-lg font-medium hover:text-zinc-600 transition-colors underline-offset-8 decoration-1">
                    {buttonText} &rarr;
                </Button>
                </Link>
            </div>
          </div>

          {/* RIGHT: Slider */}
          {/* min-w-0 is CRITICAL in flex containers to prevent overflow issues */}
          <div className="w-full lg:w-8/12 min-w-0 relative">
             
            {/* Changed overflow-visible to overflow-hidden and added rounded corners */}
            <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
              <div className="flex -ml-4 md:-ml-6 touch-pan-y">
                {portfolioImages.map((src, index) => (
                  <div key={index} className="flex-[0_0_85%] md:flex-[0_0_50%] min-w-0 pl-4 md:pl-6">
                    <div className="group relative aspect-[3/4] md:aspect-[4/5] bg-zinc-200 rounded-xl overflow-hidden">
                      <Image
                        src={src}
                        alt={`Portfolio Item ${index + 1}`}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-1000"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Caption */}
                      
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}