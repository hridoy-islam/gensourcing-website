"use client";

import Image from "next/image";

export const LogosGrid = () => {
  const logos = [
    "/logo/l1.svg",
    "/logo/l2.png",
    "/logo/l3.svg",
    "/logo/l4.png",
    "/logo/l5.png",
    "/logo/l6.svg",
    "/logo/l7.png",
    "/logo/l8.svg",
    "/logo/l9.png",
    "/logo/l10.png",
    "/logo/l11.png",
    "/logo/l12.jpg",
    "/logo/l13.png",
    "/logo/l14.png",
    "/logo/l15.jpg",
    "/logo/l16.png",
    "/logo/l17.png",
    "/logo/l18.png",
    "/logo/l19.png",
    "/logo/l20.png",
    "/logo/l21.svg",
    "/logo/l22.png",
    "/logo/l23.png",
  ];

  return (
    <div className="relative container mx-auto">
      {/* Grid Container with Border */}
      <div className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-y divide-gray-100">
          {logos.map((src, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center p-8 transition-all duration-300 hover:bg-gray-50/50"
            >
              <div className="relative w-full h-16 max-w-[140px]">
                <Image
                  src={src}
                  alt={`Partner logo ${index + 1}`}
                  fill
                  className="object-contain  transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      
    </div>
  );
};