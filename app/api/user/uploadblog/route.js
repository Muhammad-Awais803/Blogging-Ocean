import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import ArticleModel from "@/Backend/models/Article";
import connectDb from "@/Backend/middleware/db";
require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY;

const uploadBlogHandler = async (request) => {
    try {
      const formData = await request.json();
      console.log('data', formData); // Check if formData is received correctly
  
      // Extract token from the request headers
      const token = request.headers.get("Authorization").split("Bearer ")[1];
  
      if (!token) {
        return NextResponse.json(
          {
            message: "Authentication failed. Token not provided.",
          },
          {
            status: 401,
          }
        );
      }
  
      // Verify the token
      let decodedToken;
      try {
        decodedToken = jwt.verify(token, SECRET_KEY);
      } catch (error) {
        return NextResponse.json(
          {
            message: "Invalid token.",
          },
          {
            status: 401,
          }
        );
      }
  
      const { userId } = decodedToken;
  
      // Assuming blogData is a part of formData
      const newBlog = new ArticleModel({
        ...formData,
        userId,
      });
  
      // Save the new blog post to the database
      const savedBlog = await newBlog.save();
  
      console.log("New blog post:", savedBlog);
      return NextResponse.json(
        {
          savedBlog,
        },
        {
          status: 200,
        }
      );
    } catch (error) {
      console.error("Error uploading blog:", error);
      return NextResponse.json(
        {
          message: "Failed to upload blog",
        },
        {
          status: 500,
        }
      );
    }
  };
  

export const POST = connectDb(uploadBlogHandler);