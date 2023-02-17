import { IUser } from "./../types/entity.types";
import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import { Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

export const createJWT = (user: any) => {
  return jwt.sign(
    { userId: user._id, firstName: user.first_name },
    process.env.JWT_SECRET!,
    { expiresIn: process.env.JWT_LIFETIME!, issuer: "Jumia_clone" }
  );
};

export const JWTAuth = async (req: any, res: Response, next: NextFunction) => {
  try {
    // check header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer")) {
      throw new Error();
    }
    const token = authHeader.split(" ")[1];

    const payload: any = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = { userId: payload.userId, name: payload.firstName };
    next();
  } catch (error) {
    res.status(StatusCodes.UNAUTHORIZED).json({ success: false, message: "Invalid Authentication" })
  }
};
