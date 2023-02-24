import express from "express";
import { signUp, checkMail, signIn } from "../../controller/auth.controller";
import { validateSignInInput } from "../../middleware/input.validator"

const route = express.Router();

route.post("/sign-up", validateSignInInput, signUp);
route.post("/check-mail", checkMail)
route.post("/sign-in", signIn)



export default route;