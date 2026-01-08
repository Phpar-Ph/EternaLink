import express from "express";
import userAuth from "../middleware/auth.middleware.js";
import { getUserData } from "../controller/userController.js";
import verifyJWT from "../middleware/verifyJWT.js";

const userRouter = express.Router();

userRouter.get("/:username", verifyJWT, getUserData);

export default userRouter;
