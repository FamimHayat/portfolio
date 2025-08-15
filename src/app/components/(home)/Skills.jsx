import React from "react";
import Header from "../(common)/Header";
import { PiFileHtmlDuotone } from "react-icons/pi";
import { PiFileCssDuotone } from "react-icons/pi";
import { PiFileJsDuotone } from "react-icons/pi";
import { GrReactjs } from "react-icons/gr";
import { RiNextjsLine } from "react-icons/ri";
import { RxFigmaLogo } from "react-icons/rx";

const Skills = () => {
  return (
    <section className="px-2 h-fit container">
      <Header headingText={"skills"} />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  2xl:grid-cols-6 place-items-center mb-10 lg:pb-15  xl:pb-20">
        <PiFileHtmlDuotone className=" text-[120px] sm:text-[150px] md:text-[200px] text-lightBrand shadow-2xl bg-white mt-7 md:mt-10 p-5 duration-250 hover:bg-lightBrand hover:text-white rounded-full" />

        <PiFileCssDuotone className=" text-[120px] sm:text-[150px] md:text-[200px] text-lightBrand shadow-2xl bg-white mt-7 md:mt-10 p-5 duration-250 hover:bg-lightBrand hover:text-white rounded-full" />

        <PiFileJsDuotone className=" text-[120px] sm:text-[150px] md:text-[200px] text-lightBrand shadow-2xl bg-white mt-7 md:mt-10 p-5 duration-250 hover:bg-lightBrand hover:text-white rounded-full" />

        <GrReactjs className=" text-[120px] sm:text-[150px] md:text-[200px] text-lightBrand shadow-2xl bg-white mt-5 p-7 md:mt-10 duration-250 hover:bg-lightBrand hover:text-white rounded-full" />

        {/* This empty div creates spacing so the last row centers */}
        <div className="hidden lg:block 2xl:hidden"></div>

        <RiNextjsLine className=" text-[120px] sm:text-[150px] md:text-[200px] text-lightBrand shadow-2xl bg-white mt-7 md:mt-10 p-5 duration-250 hover:bg-lightBrand hover:text-white rounded-full" />

        <RxFigmaLogo className=" text-[120px] sm:text-[150px] md:text-[200px] text-lightBrand shadow-2xl bg-white mt-7 md:mt-10 p-5 duration-250 hover:bg-lightBrand hover:text-white rounded-full" />
      </div>
    </section>
  );
};

export default Skills;
