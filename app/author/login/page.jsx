"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { userLogin } from "@/store/reducer/user/userLoginReducer";


const Login = () => {
    const router = useRouter();
    const [loginVal, setLoginVal] = useState("Login");
    const [errorVal, setErrorVal] = useState("");
  
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
  
    const onSubmit = (data) => {
      setErrorVal("");
      setLoginVal("please wait...");
      dispatch(userLogin(data))
        .then((response) => {
          // Extract the response data from the 'data' property
          const responseData = response.data;
          const { token } = responseData;
  
          // Store the token and teamLead status in the local storage
          localStorage.setItem("token", token);
         
          // Redirect to the appropriate dashboard based on the teamLead status
          if (response) {
            setLoginVal("Login");
            router.push("http://localhost:3000/author/dashboard");
          } else {
            setLoginVal("Login");
            router.push("http://localhost:3000/");
          }
        })
        .catch((error) => {
          setLoginVal("Login");
          setErrorVal("Invalid credentials");
          console.log("Login failed:", error.message);
        });
    };

    
    return (
        <div className="flex items-center justify-center h-screen bg-bglogin ">
          <div className="flex flex-col items-center justify-center bg-white bg-opacity-40 w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 h-[700px] rounded-3xl gap-6">
            <h2 className="text-xl font-semibold">Sign-In</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center gap-6">
              <div className="flex flex-col gap-4">
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
                <div className="flex gap-2">
              <p className="pl-3">Forget your password?</p>
              <Link href="" className="text-blue-500 underline">
                Click here 
              </Link>
              
            </div>
                
              </div>
              {/* SignUp Button Starts  */}
              <button
                type="submit"
                className="bg-signupbutton text-white px-8 py-1 rounded-full"
              >
                SIGN In
              </button>
              {/* SignUp Button Ends  */}
    
              </form>
            <div className="flex gap-2">
              <p>Don't have an account?</p>
              <Link href="" className="text-blue-500 underline">
                Sign Up
              </Link>
            </div>
            {/* SignUp with google and facebook field ends*/}
          </div>
        </div>
      );
}

export default Login
