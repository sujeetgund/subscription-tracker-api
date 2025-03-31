import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
  throw new Error(
    "Please add DB_URI environment variable in .env.<development/production>.local file"
  );
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`Connected to database in ${NODE_ENV} mode`)
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectToDatabase;
