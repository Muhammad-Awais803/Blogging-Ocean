import React from "react";
import AboutTopCard from "./aboutTopCard/page";
import AboutSecondCard from "./aboutSecondCard/page";
import { Calistoga } from "next/font/google";
import TopCardDescription from "./aboutTopCard/topCardDescription/page";
import TopCardHeading from "./aboutTopCard/topCardHeading/page";
import AboutThirdSection from "./aboutThirdSection/page";
import AboutFourthSection from "./aboutFourthSection/page";
import CategoryCard from "../home/categoryCard/page";
import AboutSixSection from "./aboutSixSection/page";

const AboutUs = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <AboutTopCard />
      <TopCardHeading title={"Big brands trust their digital strategy to agencies like witrey"} isGrid={false}/>
      <AboutSecondCard Des={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta accusantium nobis sed praesentium ut eos assumenda distinctio suscipit et odit."} title={"We are a professional, innovative, creative and dedicated team."} mainHeading={"About Us"} isGrid={true} />
      <AboutSecondCard Des={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta accusantium nobis sed praesentium ut eos assumenda distinctio suscipit et odit."} title={"We have been visionaries since day one."} mainHeading={"Our Vision"} isGrid={false} />
      <AboutFourthSection/>
      <AboutSixSection/>

    </div>
  );
};

export default AboutUs;
