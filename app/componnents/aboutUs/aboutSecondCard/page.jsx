import React from "react";
import TopCardHeading from "../aboutTopCard/topCardHeading/page";
import TopCardDescription from "../aboutTopCard/topCardDescription/page";
import Image from "next/image";
import CardMainHeading from "./cardMainHeading/page";

const AboutSecondCard = (props) => {
  return (
    <div className= {`md:flex sm:w-full sm:items-center ${props.isGrid ? " flex-row" : " flex-row-reverse"} gap-4 justify-center sm:flex sm:flex-col md:20 lg:px-40 mt-16 `}>
      <Image
        src="/Man.jpg"
        width={360}
        height={300}
        alt="Picture of the author"
        className=""
      />
      <div className="flex flex-col md:w-4/12 sm:w-full px-3 ">
        <CardMainHeading mainHeading={props.mainHeading} isGrid={false}/>
        <TopCardHeading title={props.title} isGrid={false} />
        <TopCardDescription Des={props.Des} isGrid={false} />
      </div>
    </div>
  );
};

export default AboutSecondCard;
