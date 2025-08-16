"use client";

import React, { useState } from "react";
import Header from "../(common)/Header";
import Image from "next/image"; // ✅ import Next.js Image

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
            className={`bg-brand rounded-4xl cursor-pointer overflow-hidden transition-all duration-500 ease-in-out
              ${
                activeIndex === 0
                  ? "absolute top-0 left-0 h-full z-20 w-full opacity-100"
                  : "relative w-full opacity-80"
              }`}
          >
            {activeIndex === 0 ? (
              <div className="w-full h-fit mt-20 md:mt-0! md:h-full flex flex-col lg:flex-row  gap-5 md:gap-0 items-center justify-center">
                {/* ✅ Optimized Next.js Image */}
                <div className="p-5 lg:w-1/2 flex flex-col justify-center">
                  <h3 className="text-[calc(25px+5vw)] font-headerFont font-semibold tracking-tight text-shadow-light text-[#121212]">
                    Certification
                  </h3>
                  <p className="mt-3 text-xl text-white/90 font-textFont text-shadow-extraLight ">
                    front-end web development with react
                    <br />
                    passed from creative it institute
                  </p>
                </div>
                <div className="relative w-[calc(250px+10vw)] md:w-[calc(450px+10vw)]  lg:w-[calc(350px+10vw)] xl:w-[calc(400px+10vh)] h-[calc(150px+5vh)] md:h-[calc(350px+5vh)] lg:h-[calc(300px+5vh)] xl:h-[calc(350px+5vh)]">
                  <Image
                    src="/certificate.jpg"
                    alt="Certification"
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>

                {/* Text content */}
              </div>
            ) : (
              <p className="text-left flex flex-row  lg:flex-col  md:mt-25 text-[calc(20px+5vw)] md:text-[calc(30px+10vw)] lg:text-[calc(40px+10vw)] md:leading-50 font-textFont text-[#121212] text-shadow-light tracking-tighter font-bold p-5">
                certifi<span>cation</span>
              </p>
            )}
          </div>

          {/* Right-side cards */}
          <div className="grid grid-cols-1 gap-1 md:gap-3">
            <div
              onClick={() => toggle(1)}
              className={`bg-brand rounded-4xl cursor-pointer overflow-hidden transition-all duration-500 ease-in-out
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
              className={`bg-brand rounded-4xl cursor-pointer overflow-hidden transition-all duration-500 ease-in-out
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
