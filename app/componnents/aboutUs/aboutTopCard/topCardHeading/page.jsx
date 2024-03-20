import React from "react";

const TopCardHeading = (props) => {
  return (
    <h2 className= {`flex flex-col py-1 ${props.isGrid ? " text-2xl sm:w-1/2 md:w-4/12" : "text-xl w-full"} items-center justify-center font-bold gap-4`} >
      {props.title}
    </h2>
  );
};
export default TopCardHeading;
