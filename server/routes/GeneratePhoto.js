import express from "express";
import { generatePhoto } from "../controllers/GeneratePhoto.js";

const router = express.Router();
router.post("/", generatePhoto);


export default router;