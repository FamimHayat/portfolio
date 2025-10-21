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
    }, text.length * 80 + 1300);
    return () => clearTimeout(timer);
  }, [desktopIndex]);

  return (
    <section className="relative px-2 h-dvh overflow-hidden z-10">
      <div className="z-50 container flex items-center justify-between px-2 pt-25 font-righteous relative overflow-hidden">
        <Link
          href="/resume"
          className="px-5 py-2 border-2 border-brand rounded-4xl text-xl text-white cursor-pointer text-glow"
        >
          resume
        </Link>
        <LiveDate />
      </div>

      <p className="hidden sm:block text-xl sm:text-2xl text-center pb-5 text-white/70">
        crafting clean interfaces
      </p>

      <div className="relative h-full flex flex-col items-center justify-center text-center border-t-2 sm:border-t-2 border-brand/50 rounded-full">
        <h1 className="hidden sm:block text-[clamp(2rem,25vw,27rem)] text-brand font-spacema font-bold uppercase [text-shadow:0_0_10px_rgba(245,239,230,0.6),0_0_20px_rgba(245,239,230,0.5),0_0_40px_rgba(245,239,230,0.4)]">
          <LettersPullUp text={desktopTexts[desktopIndex]} />
        </h1>

        <h1 className="sm:hidden text-[clamp(2rem,25vw,10rem)] text-brand font-spacema font-bold uppercase text-glow z-10">
          portfolio
        </h1>

        <div className="text-center pb-2 relative z-10 mt-20">
          <p className="text-xl text-white/70">crafting clean interfaces</p>
        </div>

        <div className="absolute inset-0 mt-5 border-t-2 rounded-t-full border-brand/50"></div>
      </div>
    </section>
  );
};

export default Banner;
