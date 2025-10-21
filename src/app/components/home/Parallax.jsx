import React from "react";

const Parallax = () => {
  return (
    <section className="overflow-hidden relative h-[70dvh] parallax">
      {" "}
      <div className="absolute  inset-0 bg-gradient-to-t mt-2 from-dark/70 via-dark/20 to-transparent" />
      <div className="h-full flex items-center justify-center">
        <h2
          data-aos="zoom-in"
          data-aos-duration="1400"
          className="font-semibold z-20 text-9xl text-white font-spacema text-glow"
        >
          modren
          <br />
          designs
        </h2>
      </div>
    </section>
  );
};

export default Parallax;
