import Image from "next/image";
import React from "react";

const TrendingBlogCard = (props) => {
  return (
    <div className="flex items-center shadow-lg p-1 justify-between ">
      {/* Heading and description starts */}
      <div className="flex flex-col px-2 gap-4 w-3/6 md:w-3/6 xl:w-4/5 2xl:w-3/5">
        <h2 className="text-lg font-bold underline">
          This is the image of a man Along
        </h2>
        {/* <p className="text-base ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
          dolorem!
        </p> */}
        <div className="flex items-center md:gap-10 lg:gap-16">
        <div className="flex gap-3 items-center hidden md:flex lg:hidden xl:flex">
          <Image
            src="/ManProfile.jpg"
            width={30}
            height={40}
            alt="Picture of the author"
            className="rounded-full"
          />
          <h2 className="text-base font-semibold text-zinc-600 ">Users name</h2>
        </div>
          <p className="text-sm px-2 py-1 bg-parrotgreen rounded-full">
            5 min read
          </p>
        </div>
        <div className="flex items-center gap-10 text-zinc-500">
          <p className="text-sm">10 Jan,2023 </p>
          <p className="text-sm px-2 rounded-full">0 likes </p>
          <p className="text-sm px-2 rounded-full">0 comments </p>

        </div>
        
      </div>

      {/* Heading and description ends */}

      {/* Image Starts */}
      <Image
        src={props.image}
        width={150}
        height={300}
        alt="Picture of the author"
        className="rounded-md py-"
      />
      {/* Image ends */}
    </div>
  );
};

export default TrendingBlogCard;
