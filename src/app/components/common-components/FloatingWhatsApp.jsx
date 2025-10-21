import React from "react";
import { FiPhone } from "react-icons/fi";

export default function FloatingWhatsApp({
  size = 56,
  bottom = 24,
  right = 24,
  className = "",
}) {
  const phone = "01722384131"; // WhatsApp number
  const message = "Hello"; // Default message
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={"fixed z-50 " + className}
      style={{ bottom: `${bottom}px`, right: `${right}px` }}
    >
      <div
        style={{ width: `${size}px`, height: `${size}px` }}
        className="flex items-center justify-center rounded-full shadow-lg duration-400 transform hover:scale-105 relative bg-white/30 backdrop-blur-md hover:bg-white/40"
      >
        <FiPhone className="text-white text-4xl drop-shadow-[0_0_8px_white]" />
      </div>
    </a>
  );
}
