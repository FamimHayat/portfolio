"use client";
import Link from "next/link";
import React, { useState } from "react";

import { BsThreeDots } from "react-icons/bs";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="mx-auto px-3  sm:px-6 ">
        <div className="flex items-center justify-between border-b pt-4 pb-6 border-lightBrand/40">
          <div>
            <h2 className=" text-[20px] md:text-[22px] lg:text-[26px] font-bold text-white rounded-full border-2 px-2 py-1 border-brand font-headerFont text-shadow-light">
              famim hayat
            </h2>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center md:gap-3 lg:gap-5 xl:gap-8 ">
              <li className=" cursor pointer">
                <Link
                  href="/"
                  className="nav-li-css  text-[20px] px-3  h-fit bg-[#00000040] rounded-4xl border-2 border-brand duration-150  text-shadow-light hover:bg-[#f97316]  text-white font-headerFont md:text-[22px] lg:text-[26px] button-shadow-hover"
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className=" nav-li-css  text-[20px] px-3 h-fit  bg-[#00000040] rounded-4xl border-2 border-brand duration-150 text-shadow-light hover:bg-[#f97316] text-white font-headerFont md:text-[22px] lg:text-[26px]  button-shadow-hover"
                >
                  about
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className=" nav-li-css  text-[20px] px-3 h-fit  bg-[#00000040] rounded-4xl border-2 border-brand duration-150 text-shadow-light hover:bg-[#f97316] text-white font-headerFont md:text-[22px] lg:text-[26px] button-shadow-hover"
                >
                  services
                </Link>
              </li>
              <li>
                <Link
                  href="/demo"
                  className=" nav-li-css  text-[20px] px-3 h-fit  bg-[#00000040] rounded-4xl border-2 border-brand duration-150 text-shadow-light hover:bg-[#f97316] text-white font-headerFont md:text-[22px] lg:text-[26px] button-shadow-hover"
                >
                  demo
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className=" nav-li-css  text-[20px] px-3 h-fit   rounded-4xl border-2 border-brand duration-150 bg-[#f97316] text-white font-headerFont md:text-[22px] lg:text-[26px] text-shadow-light button-shadow-hover"
                >
                  contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button
              className="cursor-pointer outline-none mobile-menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <BsThreeDots className="text-[35px] text-white" />
            </button>
          </div>
        </div>

        <div className={`mobile-menu ${menuOpen ? "" : "hidden"} md:hidden`}>
          <ul className=" my-4 space-y-4">
            <li>
              <Link
                href="/"
                className=" block px-4 py-2 text-[30px] w-full duration-150 bg-lightBrand hover:bg-brand text-white font-headerFont   rounded nav-custom-shadow text-shadow-light active:bg-black focus:text-brandColor"
              >
                home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block px-4 py-2 text-[30px] w-full text-white font-headerFont duration-150 bg-lightBrand hover:bg-brand rounded nav-custom-shadow text-shadow-light active:bg-black focus:text-brandColor"
              >
                about
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="block px-4 py-2 text-[30px] w-full text-white font-headerFont duration-150 bg-lightBrand hover:bg-brand rounded nav-custom-shadow text-shadow-light active:bg-black focus:text-brandColor"
              >
                services
              </Link>
            </li>
            <li>
              <Link
                href="/demo"
                className="block px-4 py-2 text-[30px] w-full text-white font-headerFont duration-150 bg-lightBrand hover:bg-brand rounded nav-custom-shadow text-shadow-light active:bg-black focus:text-brandColor "
              >
                demo
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className=" block w-full px-2 py-2 border-2 border-lightBrand text-[30px] font-headerFont text-white  rounded   active:bg-primaryColor "
              >
                <div className="bg-lightBrand text-shadow-light px-2">
                  contact
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
