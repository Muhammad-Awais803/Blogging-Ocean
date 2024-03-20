import React from "react";
import BlogsHeroSection from "../componnents/blogspage/blogsherosection/page";
import Filter from "../componnents/blogspage/blogsfilter/page";
import BlogsPageCard from "../componnents/blogspage/blogspagecard/page";

const Blogs = () => {
  return (
    <div>
      <BlogsHeroSection />
      <Filter />
      <div className="flex md:px-5 pt-4 lg:px-10 xl:px-20  gap-5 my-10 bg-gray-100 justify-center flex-wrap">
        <BlogsPageCard />
        <BlogsPageCard />
        <BlogsPageCard />
        <BlogsPageCard />
        <BlogsPageCard />
        <BlogsPageCard />
        <BlogsPageCard />
        <BlogsPageCard />
        <BlogsPageCard />


      </div>
    </div>
  );
};

export default Blogs;
