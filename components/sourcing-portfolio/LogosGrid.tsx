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
    <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
      {logos.map((src, index) => (
        <div
          key={index}
          className="flex items-center justify-center transition duration-300"
        >
          <div className="relative w-[140px] h-[70px]">
            <Image
              src={src}
              alt={`Logo ${index + 1}`}
              fill
              className="object-contain transition duration-300 hover:scale-105"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
