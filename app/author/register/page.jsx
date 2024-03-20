"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { userRegister } from "@/store/reducer/user/userRegisterReducer";

const Register = () => {
  const router = useRouter();
  const [registerVal, setRegisterVal] = useState("Register");
  const [errorVal, setErrorVal] = useState("");
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    setErrorVal("");
    setRegisterVal("Please wait...");
    dispatch(userRegister(data))
      .then((response) => {
        // Extract the response data from the 'data' property
        const responseData = response.data;
        const { token, isuser } = responseData;

        // Store the token and isuser status in the local storage
        localStorage.setItem("token", token);

        // Redirect to the appropriate dashboard based on the isuser status
        if (response) {
          setRegisterVal("Register");
          router.push("http://localhost:3000/author/dashboard");
        } else {
          setRegisterVal("Register");
        }
      })
      .catch((error) => {
        setRegisterVal("Register");
        setErrorVal("user Already Exist.");
        console.log("Registration failed:", error.message);
      });
  };
  

  return (
    <div className="flex items-center justify-center h-screen bg-bglogin ">
      <div className="flex flex-col items-center justify-center bg-white bg-opacity-40 w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 h-[700px] rounded-3xl gap-6">
        <h2 className="text-xl font-semibold">Sign-Up</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full name"
              className="px-3 w-[300px] h-[40px] rounded-full"
              {...register("fullName", { required: true })}
            />
            <input
              type="email"
              placeholder="Email"
              className="px-3 w-[300px] h-[40px] rounded-full"
              {...register("email", { required: true })}
            />
            <input
              type="password"
              placeholder="Password"
              className="px-3 w-[300px] h-[40px] rounded-full"
              {...register("password", { required: true })}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="px-3 w-[300px] h-[40px] rounded-full"
              {...register("confirmPassword", { required: true })}
            />
          </div>
          {/* SignUp Button Starts  */}
          <button
            type="submit"
            className="bg-signupbutton text-white px-8 py-1 rounded-full"
          >
            SIGN UP
          </button>
          {/* SignUp Button Ends  */}

          {/* or SignUp with field starts  */}
          <div className="flex gap-2 items-center text-sm">
            <div className="flex items-center">_______</div>
            <p>or Sign Up with</p>
            <div className="flex items-center">_______</div>
          </div>
          {/* or SignUp with field ends  */}
        </form>

        {/* SignUp with google and facebook field starts  */}
        <div className="flex flex-col gap-4">
          <div className="flex bg-white px-4 items-center justify-center rounded-full">
            <p>Sign Up with</p>
            <Image
              src="/search.png"
              width={40}
              height={150}
              alt="Picture of the author"
              className="text-white"
            />
          </div>
          <div className="flex gap-2 flex bg-white px-4 items-center justify-center rounded-full">
            <p>Sign Up with</p>
            <Image
              src="/search.png"
              width={40}
              height={150}
              alt="Picture of the author"
              className="text-white"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <p>Already have an account?</p>
          <Link href="" className="text-blue-500 underline">
            Sign in
          </Link>
        </div>
        {/* SignUp with google and facebook field ends*/}
      </div>
    </div>
  );
};

export default Register;
