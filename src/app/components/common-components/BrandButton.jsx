import Link from "next/link";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

const BrandButton = ({ href = "", text, className }) => {
  return (
    <Link
      href={href}
      className={`
        relative overflow-hidden  border border-brand px-4! py-1.5! rounded-full 
        group inline-flex items-center justify-center
        backdrop-blur-none transition-all duration-300  font-righteous font-normal
        hover:backdrop-blur-sm nav-custom-shadow ${className}
      `}
      style={{ minWidth: "max-content" }}
    >
      <span className=" absolute left-full top-0 h-full flex items-center  justify-center gap-2 transition-transform duration-300 group-hover:translate-x-[-105%]">
        <HiArrowLongRight /> {text}
      </span>

      <span className=" relative flex items-center h-full justify-center transition-opacity duration-300 group-hover:opacity-0">
        {text} <HiArrowLongRight />
      </span>
    </Link>
  );
};

export default BrandButton;
