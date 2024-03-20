import React from "react";
import Image from "next/image";

const FirstBlog = (props) => {
  return (
    <div className="relative w-full md:w-[689px] lg:w-[700px] xl:w-[700px] 2xl:w-[900px] ">
      <Image
        src={props.image}
        width={700}
        height={300}
        alt="Picture of the author"
        className=" w-full"
      />
      <div className="h-full w-full bg-black absolute top-0 opacity-30"></div>
      <div className="flex flex-col absolute bottom-6 text-white gap-5 px-10">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl md:text-3xl w-full md:w-4/5 font-bold underline ">
            This the picture with man standing with ring light
          </h2>
          {/* <p className="text-lg ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
            deserunt autem magni maiores ipsum esse? Adipisci hic natus
            temporibus incidunt!
          </p> */}
        </div>
        {/* Publish date and comments starts  */}
        <div className="flex justify-between md:gap-16 md:justify-end text-zinc-300">
          <p className="text-base">10-02-2000</p>
          <p className="text-base ">0 Comments </p>
        </div>
        {/* Publish date and comments ends  */}
      </div>
      <div className="flex absolute top-4 right-4 gap-5 ">
        <p className="flex bg-zinc-200 rounded-full px-2 py-1 items-center">
          Category
        </p>
        <div className="flex items-center rounded-full px-2 py-1 bg-red-100 items-center justify center gap-2 px-2">
        <Image
              src="/heart.png"
              width={17}
              height={19}
              alt="Picture of the author"
              className="flex items-center"
            />
          <p className="flex items-center ">
            0
          </p>
        </div>
        <p className="flex text-sm px-2 py-1 bg-parrotgreen rounded-full items-center">
          {" "}
          5 min read{" "}
        </p>
      </div>
    </div>
  );
};

export default FirstBlog;
