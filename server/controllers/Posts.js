import Post from "../models/Post.js";
import { createError } from "../error.js";
import * as dotenv from "dotenv";
import { v2 as Cloudinary } from "cloudinary";

dotenv.config();
Cloudinary.config({
  cloud_name: process.env.CLoudinary_Name,
  api_key: process.env.CLoudinary_API_Key,
  api_secret: process.env.CLoudinary_API_Sec,
});

export const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({});
    console.log("posts route hit");
    return res.status(200).json({ success: true, data: posts });
  } catch (err) {
    return next(
      createError(err.status, err?.response?.data?.err.message || err.message)
    );
  }
};

export const createPost = async (req, res, next) => {
  try {
    const { name, prompt, photo } = req.body;
    const photourl = await Cloudinary.uploader.upload(photo,{
    folder: "imaginex",
});
    const newPost = await Post.create({ name, prompt, photo: photourl?.secure_url });
    return res.status(201).json({ success: true, data: newPost });  

  } catch (error) {
    return next(
        console.log("   error in create post controller",error),
      createError(err.status, err?.response?.data?.err.message || err.message)
    );
  }
};
