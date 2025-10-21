"use client";

import React, { useEffect, useRef } from "react";
import { FaReact } from "react-icons/fa6";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const extraCircleRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const extra = extraCircleRef.current;

    let mouseX = 0,
      mouseY = 0;

    const animate = () => {
      if (dot) dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      if (extra)
        extra.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Small dot */}
      <div
        ref={dotRef}
        className="hidden lg:flex fixed top-0 left-0 z-50 w-5 h-5 bg-lightBrand rounded-full pointer-events-none"
      />

      {/* Extra filled circle */}
      <div
        ref={extraCircleRef}
        className="hidden lg:flex justify-center items-center text-2xl font-righteous text-dark fixed top-0 left-0 z-30 w-5 sm:w-7 h-5 sm:h-7 bg-brand rounded-full pointer-events-none"
      >
        <FaReact />
      </div>
    </>
  );
};

export default CustomCursor;
