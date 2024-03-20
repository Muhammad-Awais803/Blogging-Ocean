import React from "react";
import CardMainHeading from "../aboutSecondCard/cardMainHeading/page";
import TopCardHeading from "../aboutTopCard/topCardHeading/page";
import Imagecomponent from "./imageComponent/page";


const AboutThirdSection = () => {
  return (
    <>
      <div className="pt-20 mt-16 bg-slate-400 w-full bg-[url('/Man.jpg')] bg-cover bg-center ">
        <CardMainHeading mainHeading={"Our Great Team"} isGrid={true} />
        <TopCardHeading isGrid={false} title={"Our Leadership & Team."} />
      </div>
      <div>
        <Imagecomponent />
      </div>
    </>
  );
};

export default AboutThirdSection;
