"use client";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToAboutEnd = ({ offset = 100 }) => {
    const section = document.getElementById("about");
    if (section) {
      const targetPosition =
        section.offsetTop + section.offsetHeight - window.innerHeight + offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav className="mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between border-b pt-4 pb-6 border-lightBrand/40 navbar-custom-shadow shadow-brand">
          <div>
            <h2 className="text-[20px] md:text-[22px] lg:text-[26px] font-bold text-white rounded-full border-2 px-2 py-1 border-brand font-headerFont text-shadow-light">
              famim hayat
            </h2>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center md:gap-3 lg:gap-5 xl:gap-8">
              <li>
                <a
                  href="/"
                  className="nav-li-css text-[20px] px-3 h-fit bg-[#00000040] rounded-4xl border-2 border-brand duration-150 text-shadow-light hover:bg-[#f97316] text-white font-headerFont md:text-[22px] lg:text-[26px] button-shadow-hover"
                >
                  home
                </a>
              </li>
              <li>
                <button
                  onClick={scrollToAboutEnd}
                  className="nav-li-css text-[20px] px-3 h-fit bg-[#00000040] rounded-4xl border-2 border-brand duration-150 text-shadow-light hover:bg-[#f97316] text-white font-headerFont md:text-[22px] lg:text-[26px] button-shadow-hover cursor-pointer"
                >
                  about
                </button>
              </li>
              <li>
                <a
                  href="/services"
                  className="nav-li-css text-[20px] px-3 h-fit bg-[#00000040] rounded-4xl border-2 border-brand duration-150 text-shadow-light hover:bg-[#f97316] text-white font-headerFont md:text-[22px] lg:text-[26px] button-shadow-hover"
                >
                  services
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="nav-li-css text-[20px] px-3 h-fit bg-[#00000040] rounded-4xl border-2 border-brand duration-150 text-shadow-light hover:bg-[#f97316] text-white font-headerFont md:text-[22px] lg:text-[26px] button-shadow-hover"
                >
                  demo
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="nav-li-css text-[20px] px-3 h-fit rounded-4xl border-2 border-brand duration-150 bg-[#f97316] text-white font-headerFont md:text-[22px] lg:text-[26px] text-shadow-light button-shadow-hover"
                >
                  contact
                </a>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              className="cursor-pointer outline-none mobile-menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <BsThreeDots className="text-[35px] text-white" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? "" : "hidden"} md:hidden`}>
          <ul className="my-4 space-y-4">
            <li>
              <a
                href="/"
                className="block px-4 py-2 text-[30px] w-full duration-150 bg-lightBrand hover:bg-brand text-white font-headerFont rounded nav-custom-shadow text-shadow-light"
              >
                home
              </a>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToAboutEnd({ offset: 100 });
                  setMenuOpen(false);
                }}
                className="block text-left px-4 py-2 text-[30px] w-full text-white font-headerFont duration-150 bg-lightBrand hover:bg-brand rounded nav-custom-shadow text-shadow-light"
              >
                about
              </button>
            </li>
            <li>
              <a
                href="/services"
                className="block px-4 py-2 text-[30px] w-full text-white font-headerFont duration-150 bg-lightBrand hover:bg-brand rounded nav-custom-shadow text-shadow-light"
              >
                services
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="block px-4 py-2 text-[30px] w-full text-white font-headerFont duration-150 bg-lightBrand hover:bg-brand rounded nav-custom-shadow text-shadow-light"
              >
                demo
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block w-full px-2 py-2 border-2 border-lightBrand text-[30px] font-headerFont text-white rounded active:bg-primaryColor"
              >
                <div className="bg-lightBrand text-shadow-light px-2">
                  contact
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
