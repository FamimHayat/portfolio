"use client";

import React, { useState } from "react";
import { PiFileHtmlDuotone, PiFileCssDuotone } from "react-icons/pi";
import { GrReactjs } from "react-icons/gr";
import { RiNextjsLine } from "react-icons/ri";
import { DiJqueryLogo } from "react-icons/di";
import { BiLogoTailwindCss } from "react-icons/bi";

const OrderCard = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="h-full nav-custom-shadow ">
      <div className="bg-brand rounded-xl h-full pb-6 p-4">
        <p className="text-white text-4xl text-shadow-light font-headerFont navbar-custom-shadow pb-2">
          customize your order
        </p>
        <div className="flex flex-col gap-2 py-5 font-textFont ">
          <label
            htmlFor="options"
            className="text-white font-textFont text-shadow-light"
          >
            Choose an option:
          </label>
          <select
            id="options"
            value={selectedOption}
            onChange={handleChange}
            className="p-2 rounded border-2 text-white text-shadow-light border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" className="text-black">
              Select...
            </option>
            <option value="option1" className="text-black">
              e-commerce
            </option>
            <option value="option2" className="text-black">
              portfolio
            </option>
            <option value="option3" className="text-black">
              blog
            </option>
            <option value="option3" className="text-black">
              agency
            </option>
            <option value="option3" className="text-black">
              media
            </option>
          </select>
          {selectedOption && (
            <p className="text-white mt-2 text-shadow-light">
              You selected: {selectedOption}
            </p>
          )}
        </div>

        <div className=" flex flex-col sm:flex-row gap-8  justify-between pt-5 ">
          <div>
            <div className="flex flex-row sm:flex-col gap-2 items-center sm:items-start justify-center sm:justify-start">
              <ul className="flex gap-3">
                <li>
                  <button className="text-4xl bg-white p-2 rounded-full nav-custom-shadow cursor-pointer hover:bg-black hover:text-brand">
                    <PiFileHtmlDuotone />
                  </button>
                </li>
              </ul>
              <ul className="flex gap-3 sm:mt-3">
                <li>
                  <button className="text-4xl bg-white p-2 rounded-full nav-custom-shadow cursor-pointer hover:bg-black hover:text-brand">
                    <GrReactjs />
                  </button>
                </li>
                <li>
                  <button className="text-4xl bg-white p-2 rounded-full nav-custom-shadow cursor-pointer hover:bg-black hover:text-brand">
                    <RiNextjsLine />
                  </button>
                </li>
              </ul>
            </div>

            <div className="flex flex-row sm:flex-col gap-2 items-center sm:items-start justify-center sm:justify-start mt-3 sm:mt-0">
              <ul className="flex gap-3 sm:mt-3">
                <li>
                  <button className="text-4xl bg-white p-2 rounded-full nav-custom-shadow cursor-pointer hover:bg-black hover:text-brand">
                    <PiFileCssDuotone />
                  </button>
                </li>
                <li>
                  <button className="text-4xl bg-white p-2 rounded-full nav-custom-shadow cursor-pointer hover:bg-black hover:text-brand">
                    <BiLogoTailwindCss />
                  </button>
                </li>
              </ul>
              <ul className="flex gap-3 sm:mt-3">
                <li>
                  <button className="text-4xl bg-white p-2 rounded-full nav-custom-shadow cursor-pointer hover:bg-black hover:text-brand">
                    <DiJqueryLogo />
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-[250px] md:w-[300px] mx-auto sm:mx-0 ">
            <label className="text-white  text-4xl font-headerFont text-shadow-light">
              $cost:
            </label>
            <div className=" flex items-center justify-center py-5 bg-white/90 rounded-xl nav-custom-shadow  mt-2 nav-custom-shadow ">
              <p className="text-[35px] md:text-[calc(20px+3vw)] text-shadow-light text-brand font-semibold font-headerFont">
                ${20}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
