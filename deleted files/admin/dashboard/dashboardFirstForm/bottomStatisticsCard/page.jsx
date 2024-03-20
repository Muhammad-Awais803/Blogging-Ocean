import React from "react";

const BottomStatisticsCard = (props) => {
  return (
    <div className="flex flex-col bg-blue-300 px-5 py-6 w-60 rounded-2xl ">
      <p className="">{props.title}</p>
      <h2 className="text-bold text-xl ">{props.heading}</h2>
      <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div class="bg-blue-600 h-2.5 rounded-full w-[45%]" ></div>
      </div>
    </div>
  );
};

export default BottomStatisticsCard;
