import React from "react";
import Banner from "./components/home/Banner";
import AboutMe from "./components/home/AboutMe";
import Marquee from "./components/common-components/Marquee";
import Skills from "./components/home/Skills";
import Parallax from "./components/home/Parallax";
import Works from "./components/home/Works";
import Footer from "./components/common-components/Footer";

const Page = () => {
  return (
    <>
      <Banner />
      <AboutMe />
      <Marquee />
      <Skills />
      <Parallax />
      <Works />

      <Footer />
    </>
  );
};

export default Page;
