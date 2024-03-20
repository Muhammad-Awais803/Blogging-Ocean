import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import UserModel from "@/Backend/models/User";
import connectDb from "@/Backend/middleware/db";
require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY;

const userLoginHandler = async (request) => {
  try {
    // Extract the login credentials from the request body
    const { email, password } = await request.json();


    const existingUser = await UserModel.findOne({ email });
    if (!existingUser) {
      return NextResponse.json(
        {
          message: "User not found",
        },
        {
          status: 404,
        }
      );
    }


    if (existingUser.password !== password) {
      return NextResponse.json(
        {
          message: "Invalid credentials",
        },
        {
          status: 401,
        }
      );
    }


    const payload = {
      userId: existingUser._id,
      userEmail: existingUser.email,
    };


    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "9h" });


    return NextResponse.json(
      {
        message: "User login successful",
        token: token,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error during user login:", error);
    return NextResponse.json(
      {
        message: "Failed to perform user login",
      },
      {
        status: 500,
      }
    );
  }
};

export const POST = connectDb(userLoginHandler);