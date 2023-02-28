import Joi from "joi";
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

export const validateSignInInput = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    first_name: Joi.string().trim().min(3).required(),
    middle_name: Joi.string().trim().min(3),
    last_name: Joi.string().trim().min(3).required(),
    phone_number: Joi.string().required(), //.pattern(new RegExp("")),
    email: Joi.string().email().required(),
    gender: Joi.string().valid("MALE", "FEMALE"),
    dob: Joi.date(),
    password: Joi.string().min(8).max(36).required(),
  });
    
  const { error, value } = schema.validate(req.body, { abortEarly: false })

  const errorMessages: Array<String> = []

  error?.details.forEach(errorDeet => {
   errorMessages.push(errorDeet.message)
  })


  if (error) {
    console.log(error.details)
    return res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({ success: false, message: errorMessages })
  }

  next()
};
