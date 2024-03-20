import UsersAnalytics from "@/app/componnents/admin/users/useranalytics/page";
import React from "react";
import Image from "next/image";
import UsersCard from "@/app/componnents/admin/users/userscard/page";

const Users = () => {
  return (
    <div className="flex flex-col w-full gap-3 w-full">
      {/* Users Statistics section starts */}
      <div className="flex  xl:gap-10 xl:p-5 items-center justify-center bg-zinc-100 w-full flex-wrap ">
        <UsersAnalytics />
        <UsersAnalytics />
        <UsersAnalytics />
        <UsersAnalytics />
      </div>
      <div className="flex justify-between px-5">
        <div className="flex items-center  gap-3 ">
          <h2>Users</h2>
          <div className="flex bg-zinc-100 xl:w-[300px] 2xl:w-[500px] items-center rounded-lg">
            <Image
              src="/search.png"
              width={50}
              height={150}
              alt="Picture of the author"
              className="text-white"
            />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent"
            />
          </div>
        </div>
        <div className="flex w-full justify-end gap-10">
          {/* Here we add the filter for sorting accordin to the date vise e.g latest or oldest.  */}
          <div className=" flex w-fit items-center gap-4 ">
            <p className=" text-grey-100 text-sm w-fit ">Sort-by:</p>
            <select name="" id="" className="shadow-md rounded-xl p-2">
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
          {/* here we add the filter for a category e.g Blogs, Novels, Stories etc.  */}
          <div className=" flex w-fit items-center gap-4 ">
            <p className=" text-grey-100 text-sm w-fit ">Filter-by:</p>
            <select name="" id="" className="shadow-md rounded-xl p-2">
              <option value="latest">Blogs</option>
              <option value="oldest">Novels</option>
              <option value="oldest">Stories</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex bg-zinc-100 items-center xl:justify-between shadow-lg p-10 lg:gap-5 flex-wrap">
        <UsersCard />
        <UsersCard />
        <UsersCard />
        <UsersCard />
      </div>
    </div>
  );
};

export default Users;
