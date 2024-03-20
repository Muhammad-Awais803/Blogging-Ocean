import React from "react";
import Image from "next/image";

const TopBlog = (props) => {
  return (
    <div className="flex lg:w-full xl:w-4/5 2xl:w-3/5 justify-end relative">
      <div className=" w-full md:w-4/5 lg:w-[700px] xl:w-[700px] 2xl:w-[700px]">
        <Image
          src={props.image}
          width={700}
          height={300}
          alt="Picture of the author"
          className="rounded-xl w-full"
        />
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
            <p className="flex items-center ">0</p>
          </div>
          <p className="flex text-sm px-2 py-1 bg-parrotgreen rounded-full items-center">
            {" "}
            5 min read{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col absolute left-12 right-12 bottom-2 md:left-0 lg:left-0 xl:left-16 2xl:left-28 lg:top-20 md:w-[380px] lg:w-[450px] md:h-[185px] lg:h-[300px] rounded-xl shadow-lg p-5 bg-white bg-opacity-80 gap-2 lg:gap-4">
        <h2 className="text-xl font-bold underline md:w-[100] lg:w-[200px] ">
          {" "}
          Uncovering Your Passion{" "}
        </h2>
        <p className="text-sm hidden md:flex">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, eum
          cupiditate necessitatibus suscipit omnis repellat at ea
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/ManProfile.jpg"
              width={50}
              height={19}
              alt="Picture of the author"
              className="flex items-center rounded-full"
            />
            <div className="flex flex-col ">
              <h2 className="text-lg font-bold">Saad ali</h2>
              <div className="flex gap-2">
                <p className="text-sm items-center text-zinc-500 justify-center">
                  23 Sep
                </p>
                <p className="text-sm items-center text-zinc-500 justify-center">
                  5 min read{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="p-2 rounded-full bg-white ">
            <Image
              src="/share.png"
              width={20}
              height={19}
              alt="Picture of the author"
              className="flex items-center "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBlog;
