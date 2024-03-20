import React from "react";
import Image from "next/image";
import DashboardHeading from "../../dashboardHeading/page";
import ProfileIcons from "./profileIcons/page";
import ProfileTopArticlesCard from "./profiletopArticlesCard/page";
import ProfileCategoriesCard from "./profileCategoriesCard/page";

const DashboardProfileForm = () => {
  return (
    <div className="flex flex-col gap-6 p-10 w-[23%]  border-2">
      <DashboardHeading heading={"Admin Profile"} />
      <div className="flex flex-col items-center jsutify-center gap-3">
      <Image
        src="/ManProfile.jpg"
        width={100}
        height={100}
        alt="Picture of the author"
        className="text-white rounded-full w-50 h-50"
      />
      <h2 className="text-md font-bold ">Saad Ali</h2>
      <div className="flex items-center justify-center gap-4">
        <ProfileIcons src={"/Apps.png"}/>
        <ProfileIcons src={"/Apps.png"}/>
        <ProfileIcons src={"/Apps.png"}/>
      </div>
      </div>

      <DashboardHeading heading={"Top Articles"}/>

      <div className="flex flex-col gap-2">
      <ProfileTopArticlesCard heading={"Apple Store"} desc={"10:57 AM"} readingTime={"5 mints"} src={"/Apps.png"}/>
      <ProfileTopArticlesCard heading={"Apple Store"} desc={"10:57 AM"} readingTime={"5 mints"} src={"/Apps.png"}/>
      <ProfileTopArticlesCard heading={"Apple Store"} desc={"10:57 AM"} readingTime={"5 mints"} src={"/Apps.png"}/>
      <ProfileTopArticlesCard heading={"Apple Store"} desc={"10:57 AM"} readingTime={"5 mints"} src={"/Apps.png"}/>
      <ProfileTopArticlesCard heading={"Apple Store"} desc={"10:57 AM"} readingTime={"5 mints"} src={"/Apps.png"}/>
      </div>
      <DashboardHeading heading={"Categories"} />
      <div className="flex gap-2">
        <ProfileCategoriesCard heading={"Fashion"} NoOfArticles={"321"} src={"/Apps.png"} />
        <ProfileCategoriesCard heading={"Fashion"} NoOfArticles={"321"} src={"/Apps.png"} />
        <ProfileCategoriesCard heading={"Fashion"} NoOfArticles={"321"} src={"/Apps.png"} />

      </div>
    </div>

    
  );
};

export default DashboardProfileForm;
