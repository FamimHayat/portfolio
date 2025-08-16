// components/(common)/Preloader.js
"use client";
import React, { useEffect, useState } from "react";

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Start fade out
          setFadeOut(true);
          // Wait for fade-out animation before calling onComplete
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 800); // 800ms fade-out duration
          return 100;
        }
        return prev + 1; // ~1.2s total if interval=12ms
      });
    }, 12);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-[#121212] z-50 transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="text-[calc(50px+8vw)] font-bold mb-4 text-brand font-headerFont">
        {progress}%
      </div>
    </div>
  );
};

export default Preloader;
