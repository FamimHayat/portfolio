"use client";
import React, { useRef } from "react";

import SocialBar from "../common-components/SocialBar";

const AboutMe = () => {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="relative px-4 md:px-8 lg:px-16 pt-32 md:pt-40 xl:pt-60 pb-32 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex flex-col justify-between items-center md:items-start gap-10 md:gap-0">
          <h4 className="text-[calc(50px+10vw)] text-brand font-spacema font-semibold tracking-tighter text-glow text-center md:text-left">
            about me
          </h4>
          <div className="flex flex-col gap-6">
            <p className="text-lg md:text-xl lg:text-2xl text-brand font-righteous text-center md:text-left">
              <span className="ml-30">I am</span> a developer and UX/UI designer
              based in <span className="text-green-500 underline">bangla</span>
              <span className="text-red-500 underline">desh</span>. I have many
              years of experience in consulting in all areas of Digital. I love
              minimal and brutalist design. I love nature, pizza, and code. I am
              a creative director at weblaa.
            </p>

            <div className="flex justify-between pt-16">
              <SocialBar className="text-left" />
            </div>
          </div>
        </div>
        <div className="flex gap-5"></div>
      </div>
    </section>
  );
};

export default AboutMe;
