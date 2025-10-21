import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

const SocialBar = ({ className }) => {
  return (
    <div>
      <h3
        className={`pb-2 font-semibold text-brand text-shadow-light  text-center text-4xl lg:text-6xl font-spacema ${className}`}
      >
        social media
      </h3>
      <div className="flex gap-3">
        <Link
          href={"/"}
          className={`
        relative overflow-hidden  border border-brand  p-2 md:p-2.5!  rounded-full 
        group inline-flex items-center justify-center h-fit w-fit
        backdrop-blur-none transition-all duration-300  font-headerFont font-normal
        hover:backdrop-blur-sm nav-custom-shadow text-3xl text-brand
      `}
          style={{ minWidth: "max-content" }}
        >
          <span className="absolute left-full top-0 h-full flex items-center  justify-center gap-2 transition-transform duration-300 group-hover:translate-x-[-115%]">
            <FaFacebookF />
          </span>

          <span className="relative flex items-center h-full justify-center transition-opacity duration-300 group-hover:opacity-0">
            <FaFacebookF />
          </span>
        </Link>
        <Link
          href={"/linkedin"}
          className={`
        relative overflow-hidden  border border-brand  p-2 md:p-2.5!  rounded-full 
        group inline-flex items-center justify-center h-fit w-fit
        backdrop-blur-none transition-all duration-300  font-headerFont font-normal
        hover:backdrop-blur-sm nav-custom-shadow text-3xl text-brand
      `}
          style={{ minWidth: "max-content" }}
        >
          <span className="absolute left-full top-0 h-full flex items-center  justify-center gap-2 transition-transform duration-300 group-hover:translate-x-[-115%]">
            <FaLinkedin />
          </span>

          <span className="relative flex items-center h-full justify-center transition-opacity duration-300 group-hover:opacity-0">
            <FaLinkedin />
          </span>
        </Link>
        <Link
          href={"/instagram"}
          className={`
        relative overflow-hidden  border border-brand  p-2 md:p-2.5!  rounded-full 
        group inline-flex items-center justify-center h-fit w-fit
        backdrop-blur-none transition-all duration-300  font-headerFont font-normal
        hover:backdrop-blur-sm nav-custom-shadow text-3xl text-brand
      `}
          style={{ minWidth: "max-content" }}
        >
          <span className="absolute left-full top-0 h-full flex items-center  justify-center gap-2 transition-transform duration-300 group-hover:translate-x-[-115%]">
            <FaInstagram />
          </span>

          <span className="relative flex items-center h-full justify-center transition-opacity duration-300 group-hover:opacity-0">
            <FaInstagram />
          </span>
        </Link>
        <Link
          href={"/twitter"}
          className={`
        relative overflow-hidden  border border-brand  p-2 md:p-2.5!  rounded-full 
        group inline-flex items-center justify-center h-fit w-fit
        backdrop-blur-none transition-all duration-300  font-headerFont font-normal
        hover:backdrop-blur-sm nav-custom-shadow text-3xl text-brand
      `}
          style={{ minWidth: "max-content" }}
        >
          <span className="absolute left-full top-0 h-full flex items-center  justify-center gap-2 transition-transform duration-300 group-hover:translate-x-[-115%]">
            <FaTwitter />
          </span>

          <span className="relative flex items-center h-full justify-center transition-opacity duration-300 group-hover:opacity-0">
            <FaTwitter />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default SocialBar;
