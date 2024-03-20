import React from "react";
import BlogCard from "../../home/blogCard/page";
import Image from "next/image";

const BlogsHeroSection = () => {
  return (
    <div className="w-full h-[300px] md:h-[300px] lg:h-[500px] text-white relative bg-zinc-700 bg-blend-overlay bg-[url('/ocean.jpg')]">
      <div className="flex flex-col md:flex-row gap-3 px-3 w-full md:px-5 lg:px-10 xl:px-20 pb-10 justify-between absolute bottom-0">
        {/* latest blog title description and category starts  */}
        <div className="w-80 flex flex-col justify-center gap-2">
          <h2 className="text-xs">Category</h2>
          <h2 className="text-2xl font-md">Lorem ipsum dolor sit amet </h2>
          <p className="text-xs ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            veniam.
          </p>
        </div>
        {/* Latest blog's author name, date, picture and reading time are mentioned  */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 w-52 items-center">
            <Image
              src="/ManProfile.jpg"
              width={40}
              height={40}
              alt="Picture of the author"
              className="rounded-full"
            />
            <h2 className="text-md ">Authors Name</h2>
          </div>
          <div className="flex justify-between">
            <p>10 Jan, 2023</p>
            <p>15 min read</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsHeroSection;
