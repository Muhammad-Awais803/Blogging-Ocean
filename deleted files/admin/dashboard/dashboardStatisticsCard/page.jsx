import React from "react";

const DashboardStatisticsCard = () => {
  return (
    <div className="flex flex-wrap md:justify-around ">
      <div className="bg-green my-2 md:my-0 w-full md:w-[46%] h-40 rounded-xl relative">
        <div className="h-28 w-28 absolute bg-red-400 right-2 bottom-0 rounded-br-[70%] "></div>
        <div className="h-[110px] w-1/2 absolute right-12 top-4 rounded-tl-xl rounded-bl-xl bg-transparent border-white border-2 rounded-tr-[100%]"></div>
        <div className="h-10 w-10 absolute bg-red-400 right-28 top-1 rounded-full "></div>
        <div className="h-full w-1/2 absolute left-0 rounded-tl-xl rounded-bl-xl bg-blue-500 rounded-tr-[100%]"></div>
      </div>

      
      <div className="bg-green my-2 md:my-0 w-full md:w-[46%] h-40 rounded-xl relative">
        <div className="w-full h-full absolute bg-blue-500 rounded-xl"></div>
        <div className="h-0 w-0 absolute bottom-0 left-0 border-l-[80px] border-l-transparent border-b-[50px] border-b-red-300 border-r-[20px] border-r-transparent "></div>
        <div className="h-0 w-0 absolute top-5 left-0 border-l-[80px] border-l-transparent border-b-[50px] border-b-red-300 border-r-[20px] border-r-transparent rotate-[-10deg] "></div>
        <div className="h-28 w-28 absolute bg-red-300 right-4 top-1 rounded-full "></div>
      </div>
    </div>
  );
};

export default DashboardStatisticsCard;
