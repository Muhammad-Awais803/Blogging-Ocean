import React from "react";
import Image from "next/image";

const UsersCard = () => {
  return (
    <div className="flex flex-col items-center justify-center w-60 h-80 bg-white gap-1 rounded-xl">
      <Image
        src="/ManProfile.jpg"
        width={100}
        height={150}
        alt="Picture of the author"
        className="text-white rounded-full"
      />
      <h2 className="text-xl ">Saad Ali</h2>
      <p className="text-base text-zinc-500 "> soem tkenfasc</p>
    </div>
  );
};

export default UsersCard;
