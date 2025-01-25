import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
const PORT = process.env.PORT;
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log("server is running on PORT: " + PORT);
  connectDB();
});
