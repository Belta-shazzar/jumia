import express from "express";
import { signIn, checkMail } from "../../controller/auth.controller";
import { validateSignInInput } from "../../middleware/input.validator"

const route = express.Router();

route.post("/sign-in", validateSignInInput, signIn);
route.post("/check-mail", checkMail)



export default route;