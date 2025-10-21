"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`px-2 sm:px-3 lg:px-5 py-2 border-b border-b-white/30 fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center gap-5">
        {/* Logo */}
        <Link href="/">
          <h2
            data-aos="fade-right"
            className="sm:px-1 lg:px-3 py-1.5 text-lg sm:text-2xl text-white tracking-tighter font-semibold font-righteous [text-shadow:0_0_10px_rgba(245,239,230,0.6),0_0_20px_rgba(245,239,230,0.5),0_0_40px_rgba(245,239,230,0.4)]"
          >
            famim hayat
          </h2>
        </Link>

        {/* Menu */}
        <ul className="flex gap-2 sm:gap-4 lg:gap-6 items-center">
          {/* Home */}
          <li data-aos="fade-up">
            <Link
              href="/"
              className="text-white text-md sm:text-lg lg:text-xl font-righteous hover:text-yellow-300 transition-colors duration-200"
            >
              home
            </Link>
          </li>

          {/* Sites Dropdown */}
          <li data-aos="fade-right" className="relative group">
            <button className="text-white text-md sm:text-lg lg:text-xl font-righteous hover:text-yellow-300 transition-colors duration-200">
              sites
            </button>
            <div className="absolute top-full -left-4 w-40 bg-black/90 backdrop-blur-md p-4 mt-2 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[9999]">
              <ul className="flex flex-col gap-2 font-righteous">
                <li>
                  <Link
                    href="/project1"
                    className="text-white hover:text-yellow-300"
                  >
                    fashion
                  </Link>
                </li>
                <li>
                  <Link
                    href="/project2"
                    className="text-white hover:text-yellow-300"
                  >
                    restaurant
                  </Link>
                </li>
                <li>
                  <Link
                    href="/project3"
                    className="text-white hover:text-yellow-300"
                  >
                    barber
                  </Link>
                </li>
                <li>
                  <Link
                    href="/project4"
                    className="text-white hover:text-yellow-300"
                  >
                    agency
                  </Link>
                </li>
                <li>
                  <Link
                    href="/project5"
                    className="text-white hover:text-yellow-300"
                  >
                    blog
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* Pages Dropdown */}
          <li data-aos="fade-left" className="relative group">
            <button className="text-white text-md sm:text-lg lg:text-xl font-righteous hover:text-yellow-300 transition-colors duration-200">
              pages
            </button>
            <div className="absolute top-full -left-4 w-40 bg-black/90 backdrop-blur-md p-4 mt-2 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[9999]">
              <ul className="flex flex-col gap-2 font-righteous">
                <li>
                  <Link
                    href="/about"
                    className="text-white hover:text-yellow-300"
                  >
                    about
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white hover:text-yellow-300"
                  >
                    contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/404"
                    className="text-white hover:text-yellow-300"
                  >
                    404
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-white hover:text-yellow-300"
                  >
                    blog
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
