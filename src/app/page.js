import React from "react";
import Banner from "./components/(home)/Banner";
import AboutMe from "./components/(home)/AboutMe";
import Skills from "./components/(home)/Skills";

import Services from "./components/(home)/Services";
import Marquee from "./components/(home)/Marquee";
import Testimonial from "./components/(home)/Testimonial";

const page = () => {
  return (
    <main>
      <Banner />
      <AboutMe />
      <Skills />
      <Services />
      <Marquee/>
      <Testimonial/>
    </main>
  );
};

export default page;
