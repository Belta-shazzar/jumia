import { Request, Response, NextFunction } from "express";
import userModel from "../model/user.model";
import { validateSignInInput } from "../middleware/input.validator";

export const signIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  
};
