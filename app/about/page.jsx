import React from "react";

import { Calistoga } from "next/font/google";
import AboutTopCard from "../componnents/aboutUs/aboutTopCard/page";
import TopCardHeading from "../componnents/aboutUs/aboutTopCard/topCardHeading/page";
import AboutSecondCard from "../componnents/aboutUs/aboutSecondCard/page";
import AboutFourthSection from "../componnents/aboutUs/aboutFourthSection/page";
import AboutSixSection from "../componnents/aboutUs/aboutSixSection/page";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <AboutTopCard/>
      <TopCardHeading title={"Big brands trust their digital strategy to agencies like witrey"} isGrid={false}/>
      <AboutSecondCard Des={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta accusantium nobis sed praesentium ut eos assumenda distinctio suscipit et odit."} title={"We are a professional, innovative, creative and dedicated team."} mainHeading={"About Us"} isGrid={true} />
      <AboutSecondCard Des={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta accusantium nobis sed praesentium ut eos assumenda distinctio suscipit et odit."} title={"We have been visionaries since day one."} mainHeading={"Our Vision"} isGrid={false} />
      <AboutFourthSection/>
      <AboutSixSection/>

    </div>
  );
};

export default About;
