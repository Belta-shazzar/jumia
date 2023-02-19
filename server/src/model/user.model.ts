import mongoose from "mongoose";
import { IUser } from "../types/entity.types";
import bcrypt from "bcryptjs"

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
      enum: ["MALE", "FEMALE"],
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: [true, "password field cannot be empty"],
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (this: any) {
  if (this.isNew) {
    const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_GENSALT!));
    this.password = await bcrypt.hash(this.password, salt)
  }
})

export default mongoose.model("User", UserSchema);
