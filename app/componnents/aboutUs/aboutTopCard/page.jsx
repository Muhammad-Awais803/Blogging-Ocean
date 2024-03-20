import React from "react";
import TopCardHeading from "./topCardHeading/page";
import TopCardDescription from "./topCardDescription/page";

const AboutTopCard = () => {
  return (
    <div className="sm:flex md:flex sm:flex-col sm:px-20 sm:items-center justify-center md:px-20 lg:px-40 gap-4 w-full my-16">
      <TopCardHeading title={"Our team live and breathe digitaly"} isGrid={true} />
      <TopCardDescription Des={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta accusantium nobis sed praesentium ut eos assumenda distinctio suscipit et odit."} isGrid={true} />
    </div>
  );
};

export default AboutTopCard;
