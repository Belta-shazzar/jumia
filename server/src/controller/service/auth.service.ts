import { IUser } from "./../../types/entity.types";
import User from "../../model/user.model";
import bcrypt from "bcryptjs";

export const getByMail = async (email: string) => {
  return await User.findOne({ email: email });
};

export const authenticateUser = async (email: string, password: string) => {
  try {
    const user = await getByMail(email);

    if (!user) {
      throw new Error("Email does not exist");
    }

      const checkPassword = await bcrypt.compare(password, user.password);
      
      if (!checkPassword) {
          throw new Error("incorrect password");
      }

      return user;
  } catch (error) {
      console.log(error)
  }
};
