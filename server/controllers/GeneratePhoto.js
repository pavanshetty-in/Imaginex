import * as dotenv from "dotenv";
import { createError } from "../error.js";
import { Client } from "@gradio/client";

dotenv.config();

const app = await Client.connect("black-forest-labs/FLUX.1-dev", {
  hf_token: process.env.HuggingFace_API_Key,
});

// const result = await app.predict("/infer", {
//   prompt: "Hello World Image",
//   // seed: 0,
//   // randomize_seed: true,
//   // width: 256,
//   // height: 256,
//   // guidance_scale: 1,
//   // num_inference_steps: 1,
// });

const getImageAsBuffer = async(imageUrl)=>{

    const response = await fetch(imageUrl);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64 = buffer.toString('base64');
    const dataUri = `data:image/webp;base64,${base64}`;

    return dataUri;
}

// // Process or upload the buffer directly
// const uploadResult = await cloudinary.uploader.upload(
//     `data:image/webp;base64,${imageBuffer.toString('base64')}`,
//     { folder: 'processed' }
// );

export const generatePhoto = async (req, res, next) => {
  try {

    const { prompt } = req.body;
    console.log("Prompt received in backend:", prompt);
    const response = await app.predict("/infer", { prompt: prompt });
    console.log("response from flux", response.data[0]);
    const imageBuffer = await getImageAsBuffer(response.data[0]?.url);
    return res.status(200).json({ photo: imageBuffer});
  } catch (error) {
    return next(
      createError(error.status, error?.response?.data?.err.message || error.message)
    );
  }
};
