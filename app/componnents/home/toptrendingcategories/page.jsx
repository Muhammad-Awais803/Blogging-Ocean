import React from "react";
import Image from "next/image";

const TopTrendingCategories = (props) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center ">
      <Image
        src={props.image}
        width={300}
        height={19}
        alt="Picture of the author"
        className="flex items-center rounded-xl"
      />
      <div className="flex flex-col ">
        <h2 className="text-xl font-bold">Category</h2>
        <p className="text-base text-zinc-400 font-semibold">20 Articles</p>
      </div>
    </div>
  );
};

export default TopTrendingCategories;
