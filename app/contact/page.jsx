"use client"
import React from "react";
import Image from "next/image";
import {useForm} from "react-hook-form";
const Contact = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex py-10 px-3 md:px-10 lg:px-10 2xl:px-40 bg-zinc-100 h-full md:h-screen items-center flex-col md:flex-row ">
      <div className="relative overflow-hidden flex flex-col justify-center shadow-xl hidden md:flex text-white bg-theme py-10 items-center md:rounded-r-0 md:rounded-l-2xl md:items-start  md:h-[750px] xl:h-[700px] gap-3 w-full md:w-1/2 px-3 md:px-10 lg:px-20">
        <h2 className="text-2xl font-bold ">Contact Us</h2>
        <p className="text-base text-center md:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas eum
          quisquam repudiandae! Itaque voluptate numquam esse facilis, eaque
          blanditiis unde?
        </p>
        <div className=" flex items-center gap-2">
          <div className="border border-white rounded-full p-2 justify-center items-center">
            <Image
              src="/email.png"
              width={15}
              height={50}
              alt="Picture of the author"
              className=" "
            />
          </div>
          <p className="text-base font-bold ">awaishabib803@gmail.com</p>
        </div>
        <div className="p-28 bg-gradient-to-tl from-white bg-opacity-5 rounded-full absolute right-[-40px] bottom-[-45px]"></div>
        <div className="p-28 bg-gradient-to-br from-white bg-opacity-5 rounded-full absolute left-[-40px] top-[-45px]"></div>
      </div>
      <div className="flex flex-col bg-white px-5 lg:px-10 shadow-xl py-6 md:py-3 xl:py-6 w-full md:w-1/2 md:h-[750px] xl:h-[700px] md:rounded-r-2xl gap-8 ">
        <h2 className="text-xl font-semibold md:w-full lg:w-3/4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center gap-6"
        >
          <div className="flex flex-col gap-4 ">
            <div className=" flex flex-col xl:flex-row gap-3 justify-between ">
              <div className="flex flex-col">
                <p className="text-xm ">First Name</p>
                <input
                  type="text"
                  name="firstName"
                  id=""
                  {...register("firstName", { required: true })}
                  placeholder="Muhammad"
                  className=" xl:w-[280px] 2xl:w-[300px] h-[40px] border-2 px-2 "
                />
              </div>
              <div className="flex flex-col">
                <p className="text-xm ">Last Name</p>
                <input
                  type="text"
                  name="LastName"
                  {...register("lastName", { required: true })}
                  id=""
                  placeholder="Awais"
                  className="xl:w-[280px] 2xl:w-[300px] h-[40px] border-2 px-2"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-xm ">Email</p>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                id=""
                placeholder="awais803@gmail.com"
                className=" w-full h-[40px] border-2 px-2"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-xm ">Subject</p>
              <input
                type="text"
                name="subject"
                {...register("subject", { required: true })}
                id=""
                placeholder="Type your subject here"
                className=" w-full h-[40px] border-2 px-2"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-xm ">Your Message</p>
              <textarea
                name="message"
                {...register("message", { required: true })}
                id=""
                cols="30"
                rows="10"
                placeholder="Type your Message here"
                className="border-2 px-2 "
              ></textarea>
            </div>
            <button
              className="bg-theme text-white px-3 py-2 w-fit rounded-lg"
              type="submit"
            >
              {" "}
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
