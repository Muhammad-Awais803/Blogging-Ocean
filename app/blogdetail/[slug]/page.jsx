"use client";
import BlogHeroSection from "@/app/componnents/blogdetail/blogherosection/page";
import BlogRestPage from "@/app/componnents/blogdetail/blogrestpage/page";
import BlogsDetailSideBar from "@/app/componnents/blogdetail/blogsdetailsidebar/page";
import { usePathname } from "next/navigation";
import React from "react";

const BlogDetail = () => {
  return (
    <div className="flex flex-col">
      <BlogHeroSection />
      <div className="flex px-60">
        <BlogsDetailSideBar />
        <BlogRestPage />
      </div>
    </div>
  );
};

export default BlogDetail;
