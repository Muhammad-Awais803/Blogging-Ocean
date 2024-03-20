import React from "react";
import Image from "next/image";
import SocialIcons from "./socialicons/page";

const BlogsDetailSideBar = () => {
  return (
    <div className="flex flex-col w-3/12 h-screen p-4 items-center gap-5 sticky top-0">
      <div className="flex flex-col w-full items-center justify-center gap-2" >
        <Image
          src="/ManProfile.jpg"
          width={100}
          height={100}
          alt="Picture of the author"
          className=" rounded-full"
        />

        <h2 className="flex text-sm font-bold w-full items-center justify-center ">Saad Ali</h2>
      </div>

      <p className="text-base text-center text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        nesciunt aliquam cupiditate, voluptate delectus asperiores fuga illum
        tenetur provident quibusdam.
      </p>
      <div className="flex gap-2 items-center justify-center">
        <Image
          src="/linkedin.png"
          width={30}
          height={30}
          alt="Picture of the author"
        />
         <Image
          src="/facebook.png"
          width={30}
          height={30}
          alt="Picture of the author"
        />
        <Image
          src="/instagram.png"
          width={30}
          height={30}
          alt="Picture of the author"
        />
        <Image
          src="/twitter.png"
          width={30}
          height={30}
          alt="Picture of the author"
        /> 
      </div>
    </div>
  );
};

export default BlogsDetailSideBar;
