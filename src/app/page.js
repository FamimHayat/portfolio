import React from "react";
import Banner from "./components/(home)/Banner";
import AboutMe from "./components/(home)/AboutMe";
import Skills from "./components/(home)/Skills";
import GridBack from "./components/(common)/GridBack";
import Services from "./components/(home)/Services";

const page = () => {
  return (
    <main>
      <Banner />
      <AboutMe />
      <Skills />
      <Services />
    </main>
  );
};

export default page;
