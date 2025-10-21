import React from "react";
import SocialBar from "./SocialBar";
import BrandButton from "./BrandButton";
import { HiArrowLongRight } from "react-icons/hi2";

const Footer = () => {
  return (
    <section
      className="relative h-fit bg-cover bg-center px-5 pt-10 overflow-hidden"
      style={{ backgroundImage: "url('/banner.png')" }}
    >
      <div>
        <h4 className="text-[calc(50px+10vw)] text-brand font-spacema font-semibold tracking-tighter text-glow">
          let's connect
        </h4>
      </div>

      {/* <input
              type="text"
              placeholder="write anything"
              className="w-full max-w-xl text-lg lg:text-xl  focus:bg-white/10 z-20 focus:backdrop-blur-md focus:outline-none border-b-2 border-dark/50 px-4 py-2 rounded transition-all duration-300 placeholder:text-dark/70"
            /> */}

      <div className=" border-t-2 border-brand/50  flex items-center">
        <p className="z-100 text-xl text-brand py-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet,
          nostrum officiis natus debitis dolore obcaecati ab sed quos libero
        </p>
      </div>
    </section>
  );
};

export default Footer;
