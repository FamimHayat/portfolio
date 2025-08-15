"use client";

import React, { useState } from "react";
import Header from "../(common)/Header";

const AboutMe = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="about" className="relative">
      <Header headingText={"about me"} />
      <div className="container h-[calc(100dvh-150px)] relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full gap-1 md:gap-3 relative">
          {/* Certification Card */}
          <div
            onClick={() => toggle(0)}
            className={`bg-brand rounded-4xl cursor-pointer  overflow-hidden transition-all duration-700 ease-in-out flex flex-row lg:flex-col text-left  text-[calc(20px+5vw)] md:text-[calc(30px+10vw)] lg:text-[calc(50px+10vw)] md:leading-50 font-textFont text-[#121212] text-shadow-light tracking-tighter font-bold md:pt-25
              ${
                activeIndex === 0
                  ? "absolute top-0 left-0 h-full z-20 w-full opacity-100 flex-row! text-[calc(30px+5vw)]! pt-0! pl-5!"
                  : "relative w-full opacity-80"
              }`}
          >
            <p>certifi</p>
            <p>cation</p>
          </div>

          {/* Right-side cards */}
          <div className="grid grid-cols-1 gap-1 md:gap-3">
            <div
              onClick={() => toggle(1)}
              className={`bg-brand rounded-4xl cursor-pointer overflow-hidden transition-all duration-1000 
                ${
                  activeIndex === 1
                    ? "absolute top-0 left-0 h-full z-20 w-full opacity-100"
                    : "relative w-full opacity-80"
                }`}
            >
              <p className="pl-5 text-left text-[calc(20px+5vw)] font-textFont text-[#121212] text-shadow-light tracking-tighter font-bold p-5">
                education
              </p>
            </div>
            <div
              onClick={() => toggle(2)}
              className={`bg-brand rounded-4xl cursor-pointer overflow-hidden transition-all duration-1000 ease-in-out
                ${
                  activeIndex === 2
                    ? "absolute top-0 left-0 h-full z-20 w-full opacity-100"
                    : "relative w-full opacity-80"
                }`}
            >
              <p className="pl-5 text-left text-[calc(20px+5vw)] font-textFont text-[#121212] text-shadow-light tracking-tighter font-bold p-5">
                facts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
