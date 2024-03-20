import Button from "@/app/componnents/common/button/page";
import React from "react";

const TopCardDescription = (props) => {
  return (
    <div className= {`flex flex-col ${props.isGrid ? " md:w-4/12 " : " w-full"} gap-2 justify-center `}>
      <p className=" text-xs sm:text-center ">
        {props.Des}
      </p>
      <Button title={"Let's Talk"}/>
    </div>
  );
};

export default TopCardDescription;
