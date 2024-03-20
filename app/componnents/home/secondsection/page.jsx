import React from "react";
import Image from "next/image";

const SecondSection = (props) => {
  return (
    <div className=" md:flex-col flex lg:flex-row items-center gap-5  ">
      <div className=" lg:w-[70px] xl:w-[100px]">
        <Image
          src={props.image}
          width={100}
          height={300}
          alt="Picture of the author"
          className="w-full rounded-full"
        />
      </div>
      <div className="flex flex-col gap-1 text-center lg:text-start ">
        <p className="text-sm text-zinc-500"> Category</p>
        <h2 className="text-lg font-bold w-full">Saad ali</h2>
        <div className="flex gap-5 ">
          <p className="text-sm text-zinc-500">3 Sep</p>
          <p className="text-sm text-zinc-500">5 min read</p>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
