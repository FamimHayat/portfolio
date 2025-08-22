import React from "react";

const GridBack = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen bg-[#121212]">
      {/* Background grid */}
      <div className="absolute inset-0 grid grid-cols-4 sm:grid-cols-5 h-full">
        <div className="  lg:border-r border-[#ffffff0f]"></div>
        <div className="  lg:border-r border-[#ffffff0f]"></div>
        <div className="  lg:border-r border-[#ffffff0f]"></div>
        <div className="  lg:border-r border-[#ffffff0f] hidden sm:flex"></div>
        <div className=""></div>
      </div>

      {/* Content on top of grid */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GridBack;
