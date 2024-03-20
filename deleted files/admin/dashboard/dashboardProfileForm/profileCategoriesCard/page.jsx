import React from "react";
import Image from "next/image";

const ProfileCategoriesCard = (props) => {
  return (
    <div className="flex flex-col h-28 w-20 py-3 pl-3 pr-4 bg-red-300 rounded-2xl justify-between">
      <Image
        src={props.src}
        width={20}
        height={30}
        alt="Picture of the author"
        className="text-white"
      />
      <div className="flex flex-col ">
        <h2 className="text-xs ">{props.heading}</h2>
        <h2 className="text-xs font-bold ">{props.NoOfArticles}</h2>
      </div>
    </div>
  );
};

export default ProfileCategoriesCard;
