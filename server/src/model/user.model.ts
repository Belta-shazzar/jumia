import mongoose from "mongoose";
import { IUser } from "../types/entity.types";

const UserSchema = new mongoose.Schema<IUser>(
  {
    first_name: {
      type: String,
      required: true,
      trim: true,
    },
    middle_name: {
      type: String,
      trim: true,
    },
    last_name: {
      type: String,
      required: true,
      trim: true,
    },
    phone_number: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "email field cannot be empty"],
      unique: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    password: {
      type: String,
      required: [true, "password field cannot be empty"],
    },
  },
  { timestamps: true }
);

// UserSchema.pre("save", async () => {
//   if (this)
// })

export default mongoose.model("User", UserSchema);
