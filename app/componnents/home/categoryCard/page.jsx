import React from "react";
import Image from "next/image";

const CategoryCard = (props) => {
  return (
    <div className="relative w-[280px] bg-zinc-700 ">
      <Image
        src="/Man.jpg"
        width={280}
        height={300}
        alt="Picture of the author"
        className="mix-blend-overlay"
      />
      <div className="flex w-full h-full items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="text-2xl font-bold text-white ">{props.title}</h2>
          
      </div>
    </div>
  );
};

export default CategoryCard;
