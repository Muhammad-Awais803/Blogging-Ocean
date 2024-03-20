import React from "react";
import SideBarCard from "./sideBarCard/page";

const DashboardSideBar = () => {
  return (
    <div className="flex flex-col gap-2 p-10 border-2 h-screen ">
      <h2 className="text-xl font-bold w-fit ml-2"> Admin</h2>
      <SideBarCard heading={"Dashboard"} src={"/apps.png"} link="/admin/dashboard" />
      <SideBarCard heading={"Blogs"} src={"/Blogs.png"} link="/admin/blogs" />
      <SideBarCard heading={"Users"} src={"/apps.png"}  link="/admin/users"/>
    </div>
  );
};

export default DashboardSideBar;
