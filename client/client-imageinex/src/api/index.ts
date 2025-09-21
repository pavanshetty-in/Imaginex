import axios from "axios";

//Base API end point
const API = axios.create({ baseURL: "https://imaginex-po2n.onrender.com/api" });

interface Post {
  name: string;
  prompt: string;
  photo: string;
}
interface Prompt {
  prompt: string;
}

export const GetPosts = async () => await API.get("/post/");
export const CreatePost = async (post: Post) => await API.post("/post/", post);
export const GeneratePhoto = async (prompt: Prompt) => await API.post("/GeneratePhoto/",prompt);
