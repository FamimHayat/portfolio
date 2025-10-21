"use client"; // ensures this component is only rendered on the client

import React, { useEffect, useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 200); // show after 200px scroll
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // smooth scroll to top
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed text-4xl border-2 border-brand text-white/90 bottom-5 right-5 bg-transparent cursor-pointer p-1 rounded-full shadow-lg hover:bg-white hover:text-dark text-shadow-light transition duration-300 z-50"
        aria-label="Back to top"
      >
        <RiArrowUpSLine className="text-shadow-deep" />
      </button>
    )
  );
};

export default BackToTop;
