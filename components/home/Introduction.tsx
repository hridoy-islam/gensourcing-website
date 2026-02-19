"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { homeContent } from "@/utils/content";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Introduction() {
  const { pretitle, title, description, buttonText, buttonHref, image } = homeContent.introduction;
  
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

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
            <Image
              src={image}
              alt="Gen Sourcing Office"
              fill
              className="object-cover"
            />
            {/* Decorative Element */}
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/5" />
          </div>

          {/* Text Side */}
          <div ref={textRef} className="w-full lg:w-1/2 space-y-6">
            <span className="text-sm font-bold tracking-[4px] uppercase text-zinc-500">
              {pretitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              {title}
            </h2>
            <div className="w-20 h-1 bg-black" />
            <p className="text-lg text-zinc-600 leading-relaxed">
              {description}
            </p>
            <div className="pt-4">
              <Link href={buttonHref}>
                <Button size="lg" className="bg-black text-white hover:bg-zinc-800 rounded-none px-8">
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