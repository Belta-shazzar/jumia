import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

export const validateSignInInput = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(36).required(),
  });
    
  const { error, value } = schema.validate(req.body, { abortEarly: false })

  const errorMessage: Array<String> = []

  error?.details.forEach(errorDeet => {
   errorMessage.push(errorDeet.message)
  })


  if (error) {
    console.log(error.details)
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ success: false, message: errorMessage })
  }

  next()
};
