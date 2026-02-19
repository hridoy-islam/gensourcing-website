"use client";

import Link from "next/link";
import { homeContent } from "@/utils/content";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { title, subtitle, buttonText, buttonHref, video } = homeContent.hero;
  const sectionRef = useRef(null);
  
  // Lazy Load State
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax effect for video
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  // Content fades out faster
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[115vh] flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Layer: Video */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 h-[120%] w-full top-[-10%]"
      >
        <div className="relative w-full h-full">
            {/* Lazy Load Implementation: 
              We only render the video tag after the component has mounted on the client.
              brightness-[0.4] darkens the video so text pops.
            */}
            {isMounted && (
              <video
                className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={video} type="video/mp4" />
                {/* Fallback for browsers that don't support video */}
                <div className="absolute inset-0 bg-neutral-900" />
              </video>
            )}
            
            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
        </div>
      </motion.div>

      {/* Content Layer */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="container relative z-10 text-center max-w-5xl px-4"
      >
        <div className="space-y-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-lg md:text-xl text-zinc-300 font-bold tracking-[6px] uppercase mb-4"
          >
            Gen Sourcing Ltd.
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-tight mb-8"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mx-auto text-lg md:text-2xl text-white/90 font-medium leading-relaxed max-w-3xl mb-10"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4"
          >
            <Link href={buttonHref}>
              <Button
                size="xl"
              >
                {buttonText}
                <span className="ml-4 h-8 w-8 bg-black/10 rounded-full flex items-center justify-center">
                  <ArrowUpRight size={18} />
                </span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Curved Bottom Edge */}
      <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] z-20">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] md:h-[100px] fill-background"
        >
          <path d="M0,0 C300,130 900,130 1200,0 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}