import React from "react";
import Image from "next/image";
import BottomStatisticsCard from "./bottomStatisticsCard/page";
import DashboardStatisticsCard from "../dashboardStatisticsCard/page";

const DashboardFirstForm = () => {
  return (
    <div className="flex flex-col p-10 w-[58%] gap-5">
      <div className="flex justify-between">
        <h2 className="flex text-2xl  ">Dashboard</h2>
        <div className="flex gap-2">
          <Image
            src="/search.png"
            width={30}
            height={150}
            alt="Picture of the author"
            className="text-white"
          />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <DashboardStatisticsCard />

      <h2 className="flex text-2xl  ">Dashboard</h2>

      <div>
        <Image
          src="/line-chart.png"
          width={300}
          height={300}
          alt="Picture of the author"
          className="text-white"
        />
      </div>
      <div className="flex gap-4 ">
        <BottomStatisticsCard title={"Total Bonus"} heading={"$724"} />
        <BottomStatisticsCard title={"Total Bonus"} heading={"$724"} />
        <BottomStatisticsCard title={"Total Bonus"} heading={"$724"} />
        <div className="w-[120px] h-[120px] bg-red-200 rounded-full flex items-center justify-center ">
          <div className="w-[90px] h-[90px] bg-white rounded-full flex items-center justify-center">
            <h2>85%</h2>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default DashboardFirstForm;
