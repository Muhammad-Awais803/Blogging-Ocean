// Import necessary modules and models
import { NextResponse } from "next/server";
import connectDb from "../../../Backend/middleware/db.js";

require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY;

const fetchUsersHandler = async (request) => {
  try {
    // Extract the token from the request
    return NextResponse.json(
        {
          message: "success",
        },
        {
          status: 200,
        }
      );
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch users",
      },
      {
        status: 500,
      }
    );
  }
};

export const GET = connectDb(fetchUsersHandler);