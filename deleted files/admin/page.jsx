import React from "react";
import DashboardSideBar from "./dashboard/dashboardSideBar/page";
import DashboardFirstForm from "./dashboard/dashboardSideBar/dashboardFirstForm/page";
import DashboardProfileForm from "./dashboard/dashboardProfileForm/page";
import DashboardBlogsForm from "./dashboardBlogsForm/page";
import DashboardUsersForm from "./dashboardUsersForm/page";

const Admin = () => {
  return (
    <div className="flex justify-between ">
      <DashboardSideBar />
      {/* <DashboardBlogsForm/> */}
      <DashboardFirstForm />
      {/* <DashboardUsersForm/> */}

      {/* <DashboardFirstForm/> */}

      <DashboardProfileForm />
    </div>
  );
};

export default Admin;
