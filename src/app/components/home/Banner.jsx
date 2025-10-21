"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
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
    const timer = setTimeout(() => {
      setDesktopIndex((prev) => (prev + 1) % desktopTexts.length);
    }, desktopTexts[desktopIndex].length * 80 + 1300);
    return () => clearTimeout(timer);
  }, [desktopIndex]);

  const text = desktopTexts[desktopIndex];
  const letters = useMemo(() => text.split(""), [text]);

  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.03, duration: 0.3, ease: "easeOut" },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  const child = {
    hidden: { y: 15, opacity: 0, willChange: "transform, opacity" },
    show: { y: 0, opacity: 1, transition: { duration: 0.25, ease: "easeOut" } },
  };

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], ["0%", "20%"]);

  return (
    <section className="relative h-dvh overflow-hidden z-10">
      {/* Parallax Background */}
      <motion.div
        style={{
          backgroundImage: "url('/banner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y,
        }}
        className="absolute inset-0 will-change-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent" />

      {/* Top Nav Section */}
      <div className="relative z-20 container flex items-center justify-between px-2 pt-25 font-righteous">
        <Link
          href="/resume"
          className="px-5 py-2 border-2 border-brand rounded-4xl text-xl text-white cursor-pointer"
        >
          resume
        </Link>
        <LiveDate />
      </div>

      {/* Subtext */}
      <p className="hidden sm:block text-xl sm:text-2xl text-center pb-5 text-white/70 relative z-20">
        crafting clean interfaces
      </p>

      {/* Animated Title */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center border-t-2 border-brand/50 rounded-full">
        <motion.div
          key={text}
          className="hidden md:flex justify-center"
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          {letters.map((char, i) => (
            <motion.span
              key={i}
              variants={child}
              className="[text-shadow:0_0_10px_rgba(245,239,230,0.6),0_0_20px_rgba(245,239,230,0.5),0_0_40px_rgba(245,239,230,0.4)] text-[clamp(2rem,25vw,27rem)] text-brand font-spacema font-bold uppercase"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>

        {/* Mobile Static Title */}
        <h1 className="sm:hidden text-[clamp(2rem,25vw,10rem)] text-brand font-spacema font-bold uppercase text-glow">
          portfolio
        </h1>

        <div className="text-center pb-2 mt-20">
          <p className="text-xl text-white/70">crafting clean interfaces</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
