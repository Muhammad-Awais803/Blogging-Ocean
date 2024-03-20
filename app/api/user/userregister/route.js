import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import UserModel from "@/Backend/models/User";
import connectDb from "@/Backend/middleware/db";
require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY;

const userRegisterHandler = async (request) => {
  try {
    // Extract the registration details from the request body
    const { fullName, email, password } = await request.json();

    // Check if the user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        {
          message: "User already exists",
        },
        {
          status: 400,
        }
      );
    }

    // Create a new user
    const newUser = new UserModel({
      fullName,
      email,
      password,
    });

    // Save the new user to the database
    await newUser.save();

    // Create a payload for the JWT token
    const payload = {
      userId: newUser._id,
      userEmail: newUser.email,
    };

    // Generate and sign the JWT token
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "9h" }); // Token expires in 9 hours

    // Return the token in the response
    return NextResponse.json(
      {
        message: "User registered successfully",
        token: token,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Error during user registration:", error);
    return NextResponse.json(
      {
        message: "Failed to register user",
      },
      {
        status: 500,
      }
    );
  }
};

export const POST = connectDb(userRegisterHandler);