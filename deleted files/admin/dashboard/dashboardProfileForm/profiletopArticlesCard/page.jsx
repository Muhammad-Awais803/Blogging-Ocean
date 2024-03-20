import React from "react";
import Image from "next/image";

const ProfileTopArticlesCard = (props) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-2">
        <div className="flex items-center w-fit rounded-xl p-2 bg-zinc-300 ">
          <Image
            src={props.src}
            width={20}
            height={150}
            alt="Picture of the author"
            className="text-white"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-xs font-bold ">{props.heading}</h2>
          <p className=" text-xs ">{props.desc}</p>
        </div>
      </div>
      <h2 className="flex items-center text-xs font-bold">{props.readingTime}</h2>
    </div>
  );
};

export default ProfileTopArticlesCard;
