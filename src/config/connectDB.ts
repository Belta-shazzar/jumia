import mongoose from "mongoose";

export const connectDb = (url: string) => {
  try {
    mongoose.set("strictQuery", true);
    return mongoose
      .connect(url)
      .then(() => console.log("CONNECTED TO THE DATABASE...")
      );
  } catch (error) {
    console.log(error);
  }
};