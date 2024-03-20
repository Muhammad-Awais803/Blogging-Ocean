import React from "react";
import Image from "next/image";

const BlogsPageCard = (props) => {
  return (
    <div className="flex w-[350px] box-shadow-lg bg-white flex-col rounded-xl shadow-2xl">
      <Image
        src={props.image}
        width={400}
        height={100}
        alt="Picture of the author"
        className=""
      />
      <div className="flex flex-col p-3 gap-2">
        <div className="flex items-center justify-between">
          <p className="text-sm">10 Jan,2023 </p>
          <p className="text-sm px-2 py-1 bg-parrotgreen rounded-full"> 5 min read </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-bold leading-5 ">
            Lorem ipsum dolor sit amet consectetur.
          </h2>
          <p className="text-base leading-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, ea! Aspernatur sint natus deleniti minus mollitia
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <Image
            src="/ManProfile.jpg"
            width={40}
            height={40}
            alt="Picture of the author"
            className="rounded-full"
          />
          <h2 className="text-md font-semibold ">Users name</h2>
        </div>
      </div>
    </div>
  );
};

export default BlogsPageCard;
