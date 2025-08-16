"use client";

import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const extraCircleRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    const extra = extraCircleRef.current;

    let mouseX = 0,
      mouseY = 0;
    let outlineX = 0,
      outlineY = 0;
    const delay = 0.1;

    const animate = () => {
      // Smoothly follow the cursor
      outlineX += (mouseX - outlineX) * delay;
      outlineY += (mouseY - outlineY) * delay;

      if (dot) dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      if (outline)
        outline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0)`;
      if (extra)
        extra.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0)`;

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

      {/* Outline circle */}
      <div
        ref={outlineRef}
        className="hidden lg:flex fixed top-0 left-0 z-40 w-10 sm:w-20 h-10 sm:h-20 border-[6px] border-white rounded-full pointer-events-none"
      />

      {/* Extra filled circle */}
      <div
        ref={extraCircleRef}
        className="hidden lg:flex fixed top-0 left-0 z-30 w-5 sm:w-10 h-5 sm:h-10 bg-brand opacity-20 rounded-full pointer-events-none"
      />
    </>
  );
};

export default CustomCursor;
