"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

import { LettersPullUp } from "./banner-components/LettersPullUp";
import LiveDate from "../common-components/LiveDate";

const Banner = () => {
  const desktopTexts = [
    "hi",
    "famim hayat",
    "portfolio",
    "front-end",
    "web-dev",
    "ui/ux",
  ];

  const [desktopIndex, setDesktopIndex] = useState(0);

  useEffect(() => {
    const text = desktopTexts[desktopIndex];
    const timer = setTimeout(() => {
      setDesktopIndex((prev) => (prev + 1) % desktopTexts.length);
    }, text.length * 80 + 300 + 1000);
    return () => clearTimeout(timer);
  }, [desktopIndex]);

  return (
    <section
      className="relative px-2 h-dvh bg-cover bg-no-repeat bg-center overflow-hidden z-10 sm:bg-fixed"
      style={{ backgroundImage: "url('/banner.png')" }}
    >
      {/* Overlay Layer */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/20 to-transparent will-change-transform">
        <div className="absolute inset-0 mx-5 sm:border-t-2 sm:rounded-t-full sm:border-brand/50"></div>
      </div>

      {/* Header Row */}
      <div className="z-50 container flex items-center justify-between px-2 pt-25 font-righteous relative">
        <div>
          <Link
            href="/resume"
            className="px-5 py-2 border-2 bg-[#00000040] border-brand rounded-4xl text-xl text-lightBrand cursor-pointer font-headerFont text-light text-glow relative z-20"
          >
            resume
          </Link>
        </div>
        <LiveDate />
      </div>

      {/* Subtitle */}
      <p className="hidden sm:block text-xl sm:text-2xl text-center pb-2 font-headerFont text-white/70 animate-pulse">
        crafting clean interfaces
      </p>

      {/* Main Heading */}
      <div className="relative h-full flex flex-col items-center justify-center text-center border-t-2 sm:border-t-2 border-brand/50 rounded-full">
        <h1 className="hidden sm:block text-[clamp(2rem,25vw,27rem)] text-brand font-spacema font-bold uppercase relative [text-shadow:0_0_10px_rgba(245,239,230,0.6),0_0_20px_rgba(245,239,230,0.5),0_0_40px_rgba(245,239,230,0.4)] will-change-transform">
          <LettersPullUp text={desktopTexts[desktopIndex]} />
        </h1>

        <div className="block sm:hidden absolute inset-0 mt-45 border-t-2 rounded-t-4xl border-brand/50"></div>

        <h1 className="sm:hidden text-[clamp(2rem,25vw,10rem)] text-brand font-spacema font-bold uppercase relative text-glow z-10 will-change-transform">
          portfolio
        </h1>

        <div className="text-center pb-2 relative z-10 mt-20">
          <p className="text-xl font-headerFont text-white/70 animate-pulse">
            crafting clean interfaces
          </p>
        </div>

        <div className="absolute inset-0 mt-5 border-t-2 rounded-t-full border-brand/50"></div>
      </div>
    </section>
  );
};

export default Banner;
