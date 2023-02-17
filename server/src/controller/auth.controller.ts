import { IUser } from "./../types/entity.types";
import { createJWT } from "./../config/jwt.config";
import { StatusCodes } from "http-status-codes";
import { Request, Response, NextFunction } from "express";
import UserModel from "../model/user.model";

const SERVER_ERROR = "an error occurred";

export const signIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await UserModel.create({ ...req.body });

    const jwt = createJWT(user);

    res
      .status(StatusCodes.CREATED)
      .json({ success: true, data: { first_name: user.first_name }, jwt });
  } catch (error) {
    throw new Error(error as any);
  }
};
