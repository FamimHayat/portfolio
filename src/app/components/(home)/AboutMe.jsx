import React from "react";
import Header from "../(common)/Header";

const AboutMe = () => {
  return (
    <section id="about">
      <Header headingText={"about me"} />
      <div className="h-[calc(100dvh-150px)] parallax"></div>
    </section>
  );
};

export default AboutMe;
