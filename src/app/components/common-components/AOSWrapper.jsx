"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSWrapper = ({ children, duration = 800, once = true }) => {
  useEffect(() => {
    AOS.init({
      duration, // global animation duration
      once, // whether animation happens only once
    });
    AOS.refresh(); // refresh AOS after initialization
  }, [duration, once]);

  return <>{children}</>;
};

export default AOSWrapper;
