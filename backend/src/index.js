import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
const PORT = process.env.PORT;
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("server is running on PORT: " + PORT);
  connectDB();
});
