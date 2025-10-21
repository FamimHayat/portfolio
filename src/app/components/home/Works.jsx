import Link from "next/link";
import React from "react";

const Works = () => {
  return (
    <section className="overflow-hidden h-fit px-5">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pt-20 pb-20 lg:pb-40">
        <Link
          href="https://fashion-fhy.vercel.app/"
          target="_blank"
          className="duration-200 lg:hover:scale-105"
        >
          <div
            data-aos="flip-down"
            data-aos-duration="800"
            className="relative h-[40dvh] md:h-[60dvh] bg-center  flex items-center justify-center lg:h-[50dvh] bg-cover group"
            style={{ backgroundImage: "url('/works.jpg')" }}
          >
            {/* Black drop + blur overlay */}
            <div className="absolute inset-0 bg-black/0 backdrop-blur-0 transition-all duration-300 group-hover:bg-black/50 group-hover:backdrop-blur-sm" />

            <p className="relative text-5xl font-spacema text-white opacity-0 duration-150 group-hover:opacity-100">
              see
            </p>
          </div>
        </Link>

        <Link href={"/"} className="duration-200 lg:hover:scale-105">
          <div
            data-aos="flip-down"
            data-aos-duration="1000"
            className="relative h-[40dvh] md:h-[60dvh] flex items-center justify-center lg:h-[50dvh] bg-cover group"
            style={{ backgroundImage: "url('/works2.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/0 backdrop-blur-0 transition-all duration-300 group-hover:bg-black/50 group-hover:backdrop-blur-sm" />
            <p className="relative text-5xl font-spacema text-white opacity-0 duration-150 group-hover:opacity-100">
              see
            </p>
          </div>
        </Link>

        <Link href={"/"} className="duration-200 lg:hover:scale-105">
          <div
            data-aos="flip-down"
            data-aos-duration="1200"
            className="relative h-[40dvh] md:h-[60dvh] flex items-center justify-center lg:h-[50dvh] bg-cover group"
            style={{ backgroundImage: "url('/works3.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/0 backdrop-blur-0 transition-all duration-300 group-hover:bg-black/50 group-hover:backdrop-blur-sm" />
            <p className="relative text-5xl font-spacema text-white opacity-0 duration-150 group-hover:opacity-100">
              see
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Works;
