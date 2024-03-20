import React from "react";

const Filter = () => {
  return (
    <div className="flex flex-col gap-3 px-3 md:px-5 lg:px-10 xl:px-56 mt-10">
      <h2 className="text-2xl font-semibold ">Blogs</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing. was a sometime</p>
      <div className="flex justify-between w-full ">
        <div className="flex gap-6">
          <h2 className="text-md font-semibold p-2 bg-gray-100 rounded-xl ">
            All
          </h2>
          <h2 className="text-md font-semibold p-2 bg-gray-100 rounded-xl">
            Travelling
          </h2>
          <h2 className="text-md hidden md:flex font-semibold p-2 bg-gray-100 rounded-xl">
            Art
          </h2>
          <h2 className="text-md hidden md:flex font-semibold p-2 bg-gray-100 rounded-xl">
            Singing
          </h2>
          <h2 className="text-md hidden md:flex font-semibold p-2 bg-gray-100 rounded-xl">
            Cycling
          </h2>
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
        <div></div>
      </div>
    </div>
  );
};

export default Filter;
