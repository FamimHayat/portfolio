"use client";
import React, { useState, useEffect } from "react";
import { LettersPullUp } from "./(banner-components)/LettersPullUp";

const Banner = () => {
  const texts = ["hi", "portfolio", "front-end", "web-dev", "ui/ux"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0); // force re-render LettersPullUp

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
      setKey((prev) => prev + 1); // reset LettersPullUp animation
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-2  h-[calc(100dvh-160px)] leading-[calc(100dvh-160px)]">
      <div className="h-fit flex items-center justify-center">
        <LettersPullUp
          key={key} // forces re-mount to replay animation
          text={texts[currentIndex]}
          className=" text-[calc(16px+15vw)] sm:text-[calc(35px+20vw)] md:text-[calc(40px+20vw)] lg:text-[calc(50px+20vw)] text-center text-brand font-headerFont font-semibold tracking-tighter"
        />
      </div>
    </section>
  );
};

export default Banner;
