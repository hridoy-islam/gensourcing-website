"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  badgeText?: string;
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonHref?: string;
}

export function Hero({
  badgeText = "Innovating the Future", 
  title,
  subtitle,
  buttonText,
  buttonHref,
}: HeroProps) {
  // Check if both text and href are provided to show the button
  const showButton = buttonText && buttonHref;

  return (
    <section className="relative min-h-[40vh] flex items-center justify-center pt-32 pb-20 bg-[#030303] overflow-hidden">
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1400px] pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)]" />

      {/* --- CONTENT --- */}
      <div className="container relative z-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          >
            <Sparkles size={14} className="text-secondary" />
            <span className="text-xs md:text-xs font-bold uppercase tracking-[0.2em] text-white/70">
              {badgeText}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-center text-5xl md:text-8xl font-black tracking-tight text-white mb-8 leading-[0.95]"
          >
            {title.split(" ").map((word, i) => (
              <span key={i} className="inline-block mr-3 last:mr-0">
              
                    {word}
          
              </span>
            ))}
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-center text-zinc-400 text-lg md:text-xl md:max-w-2xl leading-relaxed mb-12"
          >
            {subtitle}
          </motion.p>
          
          {/* Main CTA - Conditional Rendering */}
          {showButton && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <Link href={buttonHref} className="group">
                <Button 
                  size="lg" 
                  className="bg-white text-black hover:bg-zinc-200 h-14 px-10 rounded-full text-sm font-bold tracking-widest transition-all hover:scale-105 active:scale-95"
                >
                  {buttonText}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          )}

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#030303] to-transparent" />
    </section>
  );
}