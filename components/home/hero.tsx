"use client";

import Link from "next/link";
import { homeContent } from "@/utils/content";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { title, subtitle, buttonText, buttonHref, video } =
    homeContent.hero;

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <section
      ref={sectionRef}
      // min-h-screen so it fills the full viewport from top: 0
      // Content is padded inside to clear the fixed header (pt-20 mobile, pt-48 desktop)
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Video Layer */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 h-[120%] w-full top-[-10%]"
      >
        <div className="relative w-full h-full bg-black overflow-hidden">
          <iframe
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-1000 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
            style={{
              width: "max(100%, calc(100vh * 16 / 9))",
              height: "max(100%, calc(100vw * 9 / 16))",
            }}
            src={video}
            title="Hero Background Video"
            allow="autoplay; fullscreen"
            onLoad={() => setVideoLoaded(true)}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </motion.div>

      {/* Content Layer */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        // pt-20 on mobile clears the fixed nav (h-20)
        // pt-48 on desktop clears top bar (h-28) + nav (h-20)
        className="container relative z-10 text-center max-w-5xl px-4 pt-20 md:pt-48"
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
              <Button size="xl">
                {buttonText}
                <span className="ml-4 h-8 w-8 bg-black/10 rounded-full flex items-center justify-center">
                  <ArrowUpRight size={18} />
                </span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}