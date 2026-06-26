"use client";

import Link from "next/link";
import Image from "next/image";
import { homeContent } from "@/utils/content";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

// Unsplash image data
const heroImages = [
  {
    src: "hero1.avif",
    alt: "Modern fashion manufacturing facility"
  },
  {
    src: "hero2.avif",
    alt: "Fashion retail and apparel display"
  },
  {
    src: "hero3.avif",
    alt: "Clothing manufacturing and textile"
  },
  {
    src: "hero4.avif",
    alt: "Garment factory production line"
  },
  {
    src: "hero5.avif",
    alt: "Fashion design and tailoring"
  }
];

export function Hero() {
  const { title, subtitle, buttonText, buttonHref } = homeContent.hero;

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});

  const autoplayRef = useRef(
    Autoplay({ 
      delay: 4000, 
      stopOnInteraction: false,
      stopOnMouseEnter: true 
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      // speed: 20,
      skipSnaps: true,
    },
    [autoplayRef.current]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image Carousel Layer */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 overflow-hidden" ref={emblaRef}>
          <div className="flex h-full">
            {heroImages.map((image, index) => (
              <div 
                className="flex-[0_0_100%] min-w-0 relative" 
                key={index}
              >
                <motion.div 
                  className="relative w-full h-full"
                  style={{ scale }}
                >
                  {/* Low quality placeholder */}
                  <div className={`absolute inset-0 bg-gray-900 transition-opacity duration-700 ${
                    imagesLoaded[index] ? 'opacity-0' : 'opacity-100'
                  }`}>
                    <div className="w-full h-full animate-pulse bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900" />
                  </div>
                  
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className={`object-cover transition-opacity duration-1000 ${
                      imagesLoaded[index] ? 'opacity-100' : 'opacity-0'
                    }`}
                    priority={index === 0}
                    sizes="100vw"
                    quality={90}
                    onLoad={() => setImagesLoaded(prev => ({ ...prev, [index]: true }))}
                    unoptimized
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Modern Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
        <div className="absolute inset-0 backdrop-blur-[1px]" />
      </motion.div>

      {/* Carousel Navigation */}
      <div className="absolute bottom-20 md:bottom-16 left-0 right-0 z-20">
        <div className="container mx-auto px-4 flex justify-center items-center gap-4">
          <button
            onClick={scrollPrev}
            className="group w-12 h-12 rounded-full border border-white/20 hover:border-white/40 bg-black/30 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:bg-white/10 hover:scale-110"
            aria-label="Previous slide"
          >
            <svg 
              className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Carousel Indicators */}
          <div className="flex gap-2 mx-6">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-500 ease-out ${
                  selectedIndex === index 
                    ? 'bg-white w-8' 
                    : 'bg-white/30 hover:bg-white/50 w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={scrollNext}
            className="group w-12 h-12 rounded-full border border-white/20 hover:border-white/40 bg-black/30 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:bg-white/10 hover:scale-110"
            aria-label="Next slide"
          >
            <svg 
              className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/90 via-black/50 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10" />

      {/* Grid pattern overlay for texture */}
      <div className="absolute inset-0 z-[1] opacity-[0.02]">
        <div 
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content Layer */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="container relative z-20 text-center   pb-24"
      >
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs md:text-sm text-white font-semibold tracking-[3px] uppercase bg-primary/50 backdrop-blur-md px-6 py-3 rounded-full border border-primary">
              Sultan Apparels Ltd.
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mx-auto text-base md:text-2xl text-white/80 font-medium leading-relaxed max-w-3xl"
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
                className="bg-white text-black hover:bg-white/90 shadow-2xl shadow-white/20 hover:shadow-white/30 transform hover:-translate-y-0.5 transition-all duration-300 group"
              >
                {buttonText}
                <span className="ml-4 h-8 w-8 bg-black/5 rounded-full flex items-center justify-center group-hover:bg-black/10 transition-colors">
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