import React from "react";
import Header from "../(common)/Header";

import OrderCard from "./(services-components)/OrderCard";

const Services = () => {
  return (
    <section id="services" className="px-2 h-fit pb-15 pt-5">
      <Header headingText={"services"} />
      <div className="container grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-2 h-fit">
        <div className="grid grid-cols-1 gap-3 md:gap-5 ">
          <div className="py-3 px-4 bg-brand w-full md:max-w-2xl rounded-xl nav-custom-shadow">
            <p className=" text-3xl md:text-[calc(10px+3vw)] lg:text-[calc(10px+2vw)] text-white text-shadow-light font-textFont">
              api integration
            </p>
          </div>
          <div className="py-3 px-4 bg-brand w-full md:max-w-2xl rounded-xl nav-custom-shadow">
            <p className=" text-3xl md:text-[calc(10px+3vw)] lg:text-[calc(10px+2vw)] text-white text-shadow-light font-textFont">
              Performance Optimization
            </p>
          </div>
          <div className="py-3 px-4 bg-brand w-full md:max-w-2xl rounded-xl nav-custom-shadow">
            <p className=" text-3xl md:text-[calc(10px+3vw)] lg:text-[calc(10px+2vw)] text-white text-shadow-light font-textFont">
              UI/UX Implementation
            </p>
          </div>
          <div className="py-3 px-4 bg-brand w-full md:max-w-2xl rounded-xl nav-custom-shadow">
            <p className=" text-3xl md:text-[calc(10px+3vw)] lg:text-[calc(10px+2vw)] text-white text-shadow-light font-textFont">
              api integration
            </p>
          </div>
        </div>
        <div className="h-full">
          <OrderCard />
        </div>
      </div>
    </section>
  );
};

export default Services;
