import React from "react";
import Image from "next/image";
import RecentBlogs from "./recentblogs/page";
import Charts from "../componnents/common/charts/page";

const PublisherAdmin = () => {
  return (
    <div className="flex bg-zinc-100 h-full  ">
      {/* Side Bar Starts  */}
      <div className=" hidden lg:flex lg:w-4/12 xl:w-3/12 2xl:w-2/12 h-screen flex sticky top-0 bg-theme flex flex-col px-5 py-16 gap-10">
        <div className="flex gap-3">
          <Image
            src="/dashboard.png"
            width={30}
            height={150}
            alt="Picture of the author"
            className="text-white"
          />
          <h2 className="text-xl text-white font-bold">Dashboard</h2>
        </div>
        <div className="flex gap-3 items-center">
          <Image
            src="/blog.png"
            width={40}
            height={150}
            alt="Picture of the author"
            className="text-white"
          />
          <h2 className="text-xl text-white font-bold">Blogs</h2>
        </div>
        <div className="flex gap-3 items-center">
          <Image
            src="/categoryIcon.png"
            width={40}
            height={150}
            alt="Picture of the author"
            className="text-white"
          />
          <h2 className="text-xl text-white font-bold">Categories</h2>
        </div>
        <div className="flex gap-3">
          <Image
            src="/Draft.png"
            width={40}
            height={150}
            alt="Picture of the author"
            className="text-white"
          />
          <h2 className="text-xl text-white font-bold">Drafts</h2>
        </div>
      </div>
      {/* Side bar ends  */}
      <div className="flex flex-col w-full px-5 md:px-10 py-5 gap-16">
        <div className="flex gap-80 w-4/5">
          <div className=" hidden md:flex flex bg-zinc-100 shadow-lg xl:w-[300px] 2xl:w-[350px] items-center rounded-lg">
            <Image
              src="/search.png"
              width={40}
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
          <div className="flex gap-2 items-center">
            <Image
              src="/search.png"
              width={50}
              height={150}
              alt="Picture of the author"
              className="text-white"
            />
            <p className="text-sm text-zinc-500">Today</p>
            <p className="text-sm font-bold">March,16</p>
          </div>
        </div>

        {/* Welcome Message  */}
        <div className="flex flex-col">
          <div className="flex items-center">
            <h2 className="text-3xl font-bold text-zinc-400">Welcome Back!</h2>
            {/* <Image
              src="/hello.png"
              width={50}
              height={150}
              alt="Picture of the author"
              className="text-white"
            /> */}
          </div>
          <p className="text-base font-bold text-zinc-400">Good evening!</p>
        </div>
        {/* Welcome message ends  */}
        <div className="flex gap-20 xl:gap-10 2xl:gap-20 flex-wrap xl:flex-nowrap">
          {/* Writer name and Writer type starts  */}
          <div className="relative flex flex-col gap-10 h-[230px] w-[350px] bg-white p-10 shadow-lg rounded-2xl ">
            <div className="flex flex-col gap-1 ">
              <h2 className="text-3xl text-zinc-500 font-semibold">Saad Ali</h2>
              <p className="text-md text-zinc-400 font-semibold">
                Writter/Author
              </p>
            </div>
            <div className="flex ">
              <div className="flex gap-2 items-center">
                <h2 className="text-3xl font-bold text-zinc-600">32</h2>
                <p className="text-lg text-zinc-400 font-semibold ">
                  Subscribers
                </p>
              </div>
            </div>
            <Image
              src="/userDashboard.png"
              width={400}
              height={150}
              alt="Picture of the author"
              className=" hidden md:flex absolute top-[-100px] right-[-100px] md:top-[-150px] md:right-[-150px] xl:top-[-80px] xl:right-[-120px] 2xl:top-[-130px] 2xl:right-[-130px] "
            />
          </div>
          {/* Writer name and Writer type ends  */}

          {/* Total Post, comments, likes Card section starts    */}
          <div className="relative h-full flex flex-col items-center 2xl:items-start gap-2 md:gap-10 h-[230px] w-[125px] md:w-3/12 xl:w-1/6 bg-white p-10 shadow-lg rounded-2xl ">
            <Image
              src="/totalPosts.png"
              width={100}
              height={150}
              alt="Picture of the author"
              className="absolute top-[-30px] "
            />

            <div className="flex flex-col gap-1 absolute bottom-6 ">
              <p className="text-lg text-zinc-400 font-semibold ">
                Total Blogs
              </p>
              <h2 className="text-2xl font-bold text-blue-500">32</h2>
            </div>
          </div>

          <div className="relative h-full flex flex-col items-center 2xl:items-start gap-10 h-[230px] w-[125px] md:w-3/12 xl:w-1/6 bg-white p-10 shadow-lg rounded-2xl ">
            <Image
              src="/dashboardcomments.png"
              width={100}
              height={150}
              alt="Picture of the author"
              className="absolute top-[-30px] "
            />

            <div className="flex flex-col gap-1 absolute bottom-6 ">
              <p className="text-lg text-zinc-400 font-semibold ">Comments</p>
              <h2 className="text-2xl font-bold text-green">32</h2>
            </div>
          </div>

          <div className="relative h-full flex flex-col items-center 2xl:items-start gap-10 h-[230px] w-[125px] md:w-3/12 xl:w-1/6 bg-white p-10 shadow-lg rounded-2xl ">
            <Image
              src="/categories.png"
              width={100}
              height={150}
              alt="Picture of the author"
              className="absolute top-[-30px] "
            />

            <div className="flex flex-col gap-1 absolute bottom-6 ">
              <p className="text-lg text-zinc-400 font-semibold ">Categories</p>
              <h2 className="text-2xl font-bold text-purple-500">32</h2>
            </div>
          </div>
          <div className="relative h-full flex flex-col items-center 2xl:items-start gap-10 h-[230px] w-[125px] md:w-3/12 xl:w-1/6 bg-white p-10 shadow-lg rounded-2xl ">
            <Image
              src="/like.png"
              width={100}
              height={150}
              alt="Picture of the author"
              className="absolute top-[-30px] "
            />

            <div className="flex flex-col gap-1 absolute bottom-6 ">
              <p className="text-lg text-zinc-400 font-semibold ">Likes</p>
              <h2 className="text-2xl font-bold text-red-500">32</h2>
            </div>
          </div>
          {/* Total Post, comments, likes Card section ends    */}
        </div>

        {/* Graph and Resnt Blog section starts  */}
        <div className="flex gap-20">
          {/* Graph section Starts  */}
          <div className="bg-white w-3/5 rounded-2xl">
            <Charts />
          </div>
          {/* Graph section ends  */}

          {/* Recent blog section starts  */}
          <div className="flex flex-col w-5/12 h-[560px] bg-white rounded-2xl p-10 gap-5 overflow-y-scroll">
            <div className="flex justify-between mb-3">
              <h2 className="text-2xl text-zinc-600 font-bold">Recent Blogs</h2>
              <a
                href=""
                className="text-blue-500 flex font-semibold border-blue-500 border px-2 items-center"
              >
                + Add New
              </a>
            </div>
            <RecentBlogs/>
            <RecentBlogs/>
            <RecentBlogs/>
            <RecentBlogs/>
            <RecentBlogs/>
            <RecentBlogs/>
            <RecentBlogs/>
            <RecentBlogs/>
            <RecentBlogs/>

          </div>
          {/* Recent Blog section ends  */}
        </div>
        {/* Graph and recent blog section ends  */}
      </div>
    </div>
  );
};

export default PublisherAdmin;
