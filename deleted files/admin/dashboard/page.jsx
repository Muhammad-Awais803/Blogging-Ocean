import React from "react";
import DashboardStatisticsCard from "./dashboardStatisticsCard/page";
import DashboardSideBar from "./dashboardSideBar/page";
import DashboardFirstForm from "./dashboardSideBar/dashboardFirstForm/page";
import DashboardProfileForm from "./dashboardProfileForm/page";
import DashboardUsersForm from "../dashboardUsersForm/page";
import DashboardBlogsForm from "../dashboardBlogsForm/page";
import Blogs from "@/app/componnents/admin/blogs/page";

const Dashboard = () => {
  return (
    <div className="flex justify-between ">
        <DashboardSideBar />
        {/* <DashboardBlogsForm/> */}
        {/* <DashboardFirstForm/> */}

        <Blogs/>
        
        {/* <DashboardFirstForm/> */}

        <DashboardProfileForm/>
    </div>
  );
};

export default Dashboard;
