import express from "express";
import authRoute from "./routes/auth.route"


const route = express.Router()

route.use("/auth", authRoute)

export default route