"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`px-2 sm:px-3 lg:px-5 py-2 border-b border-b-light/50 fixed top-0 left-0 w-full z-[9999] transition-all duration-500 ease-in-out ${
        scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex gap-5 justify-between">
        <Link href={"/"}>
          <h2
            data-aos="fade-right"
            className="sm:px-1 lg:px-3 py-1.5 text-lg sm:text-2xl text-brand tracking-tighter font-semibold font-righteous [text-shadow:0_0_10px_rgba(245,239,230,0.6),0_0_20px_rgba(245,239,230,0.5),0_0_40px_rgba(245,239,230,0.4)]"
          >
            famim hayat
          </h2>
        </Link>
        <ul className="py-2 flex gap-1 sm:gap-2 lg:gap-4">
          <li data-aos="fade-up">
            <Link
              href={"/"}
              className="text-md sm:text-lg lg:text-xl text-brand font-righteous brandButtonEffect [text-shadow:0_0_10px_rgba(245,239,230,0.6),0_0_20px_rgba(245,239,230,0.5),0_0_40px_rgba(245,239,230,0.4)]"
            >
              home,
            </Link>
          </li>
          <li data-aos="fade-right" className="relative group">
            <button className="text-md sm:text-lg lg:text-xl text-brand font-righteous brandButtonEffect [text-shadow:0_0_10px_rgba(245,239,230,0.6),0_0_20px_rgba(245,239,230,0.5),0_0_40px_rgba(245,239,230,0.4)]">
              sites,
            </button>
            <div className="absolute top-full -left-4 w-fit bg-black/90 backdrop-blur-md p-4 mt-2 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[9999]">
              <ul className="flex flex-col gap-2 font-righteous">
                <li>
                  <Link
                    href="/project1"
                    className=" text-white hover:text-brand border-b border-transparent duration-200  hover:border-white"
                  >
                    fashion
                  </Link>
                </li>
                <li>
                  <Link
                    href="/project2"
                    className=" text-white hover:text-brand border-b border-transparent duration-200  hover:border-white"
                  >
                    restaurant
                  </Link>
                </li>{" "}
                <li>
                  <Link
                    href="/project2"
                    className=" text-white hover:text-brand border-b border-transparent duration-200  hover:border-white"
                  >
                    barber
                  </Link>
                </li>
                <li>
                  <Link
                    href="/project3"
                    className=" text-white hover:text-brand border-b border-transparent duration-200  hover:border-white"
                  >
                    agency
                  </Link>
                </li>
                <li>
                  <Link
                    href="/project4"
                    className=" text-white hover:text-brand border-b border-transparent duration-200  hover:border-white"
                  >
                    blog
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li data-aos="fade-left" className="relative group">
            <button className="text-md sm:text-lg lg:text-xl text-brand font-righteous brandButtonEffect [text-shadow:0_0_10px_rgba(245,239,230,0.6),0_0_20px_rgba(245,239,230,0.5),0_0_40px_rgba(245,239,230,0.4)]">
              pages,
            </button>
            <div className="absolute top-full -left-4 w-fit bg-black/90 backdrop-blur-md p-4 mt-2 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[9999]">
              <ul className="flex flex-col gap-2 font-righteous">
                <li>
                  <Link
                    href="/project1"
                    className=" text-white hover:text-brand border-b border-transparent duration-200  hover:border-white"
                  >
                    about
                  </Link>
                </li>
                <li>
                  <Link
                    href="/project2"
                    className=" text-white hover:text-brand border-b border-transparent duration-200  hover:border-white"
                  >
                    contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/project3"
                    className=" text-white hover:text-brand border-b border-transparent duration-200  hover:border-white"
                  >
                    404
                  </Link>
                </li>
                <li>
                  <Link
                    href="/project4"
                    className=" text-white hover:text-brand border-b border-transparent duration-200  hover:border-white"
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
