import mongoose from "mongoose";

export const ConnectDb = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI)
    console.log("connected")

  } catch (error) {
    throw new Error(error);
  }
};
