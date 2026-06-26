"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/utils/content";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Introduction() {
  const { pretitle, title, description, buttonText, buttonHref } = homeContent.introduction;
  
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Unsplash image for apparel/office setting
  const imageSrc = "/hero4.avif";

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!imageRef.current || !textRef.current) return;

      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        x: -50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // Select direct children of the text container
      gsap.from(textRef.current.children, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div ref={imageRef} className="w-full lg:w-1/2 relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
            {/* Loading Skeleton */}
            <div className={`absolute inset-0 bg-gray-200 transition-opacity duration-700 ${
              imageLoaded ? 'opacity-0' : 'opacity-100'
            }`}>
              <div className="w-full h-full animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200" />
            </div>
            
            <Image
              src={imageSrc}
              alt="Sultan Apparels Office"
              fill
              className={`object-cover transition-opacity duration-700 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={90}
              unoptimized
            />
            
            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 backdrop-blur-sm" />
            <div className="absolute top-0 right-0 w-32 h-32 border-2 border-white/20 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            {/* Overlay Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent" />
          </div>

          {/* Text Side */}
          <div ref={textRef} className="w-full lg:w-1/2 space-y-6">
            <span className="text-sm font-bold tracking-[4px] uppercase text-zinc-500">
              {pretitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              {title}
            </h2>
            <div className="w-20 h-1 bg-primary" />
            <p className="text-lg text-zinc-600 leading-relaxed">
              {description}
            </p>
            <div className="pt-4">
              <Link href={buttonHref}>
                <Button variant="default" size="lg" className="rounded-none px-8">
                  {buttonText}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}