import express from "express";
import { signIn } from "../../controller/auth.controller";
import { validateSignInInput } from "../../middleware/input.validator"

const route = express.Router();

route.use("/sign-in", validateSignInInput, signIn);



export default route;