import { v2 as cloudinary } from "cloudinary";
import { config } from "dotenv";

config();

export default cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  cloud_api: process.env.CLOUDINARY_API_KEY,
  cloud_secret: process.env.CLOUDINARY_API_SECRET,
});
