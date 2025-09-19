import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import postRoutes from "./routes/Post.js";
import GeneratePhoto from "./routes/GeneratePhoto.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api/post", postRoutes);
app.use("/api/GeneratePhoto", GeneratePhoto);

//Default path
app.get("/", async (req, res) => {
  res.status(200).json({ message: " Hello World! \n Server is running!" });
});

//connect to MongoDB
const connectDB = async () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB connected!"))
    .catch((err) => {
      console.log("Failed to connect MongoDB Server");
      console.log(err);
    });
};


//error Hnadler
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
  });
});

//Start Server
const PORT = process.env.PORT || 8080;
const startServer = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    connectDB();
  } catch (error) {
    console.log(error);
  }
};

startServer();
