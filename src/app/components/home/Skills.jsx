import React from "react";

import { PiFileHtmlDuotone } from "react-icons/pi";
import { PiFileCssDuotone } from "react-icons/pi";
import { PiFileJsDuotone } from "react-icons/pi";
import { GrReactjs } from "react-icons/gr";
import { RiNextjsLine } from "react-icons/ri";
import { RxFigmaLogo } from "react-icons/rx";

const Skills = () => {
  return (
    <section className="overflow-hidden px-2 h-fit container sm:py-10 md:py-20">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 place-items-center mb-10 lg:pb-15 xl:pb-20">
        <div
          data-aos="zoom-in"
          data-aos-duration="800"
          style={{ animationDuration: "2s" }}
          className="fade-glow"
        >
          <PiFileHtmlDuotone className="text-[130px] sm:text-[150px] md:text-[200px] border-5 border-brand text-light shadow-2xl bg-transparent mt-7 md:mt-10 p-4 rounded-full" />
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="900"
          style={{ animationDuration: "2.5s" }}
          className="fade-glow"
        >
          <PiFileCssDuotone className="text-[130px] sm:text-[150px] md:text-[200px] border-5 border-brand text-light shadow-2xl bg-transparent mt-7 md:mt-10 p-4 rounded-full" />
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          style={{ animationDuration: "3s" }}
          className="fade-glow"
        >
          <PiFileJsDuotone className="text-[130px] sm:text-[150px] md:text-[200px] border-5 border-brand text-light shadow-2xl bg-transparent mt-7 md:mt-10 p-4 rounded-full" />
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="1100"
          style={{ animationDuration: "3.5s" }}
          className="fade-glow"
        >
          <GrReactjs className="text-[130px] sm:text-[150px] md:text-[200px] border-5 border-brand text-light shadow-2xl bg-transparent mt-5 md:mt-10 p-4 rounded-full" />
        </div>

        {/* Spacing div */}
        <div className="hidden lg:block 2xl:hidden"></div>

        <div
          data-aos="zoom-in"
          data-aos-duration="1200"
          style={{ animationDuration: "4s" }}
          className="fade-glow"
        >
          <RiNextjsLine className="text-[130px] sm:text-[150px] md:text-[200px] border-5 border-brand text-light shadow-2xl bg-transparent mt-7 md:mt-10 p-4 rounded-full" />
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="1300"
          style={{ animationDuration: "4.5s" }}
          className="fade-glow"
        >
          <RxFigmaLogo className="text-[130px] sm:text-[150px] md:text-[200px] border-5 border-brand text-light shadow-2xl bg-transparent mt-7 md:mt-10 p-4 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
