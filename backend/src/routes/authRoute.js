import express from "express";
import {
  register,
  login,
  logout,
  sendOTP,
  verifyEmail,
  isAuthenticated,
  sendPasswordResetOtp,
  resetPassword,
} from "../controller/authController.js";
import userAuth from "../middleware/userAuth.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/send-verify-otp", userAuth, sendOTP);
authRouter.post("/verify-email", userAuth, verifyEmail);
authRouter.get("/is-auth", userAuth, isAuthenticated);
authRouter.post("/send-reset-otp", sendPasswordResetOtp);
authRouter.post("/reset-password", resetPassword);

export default authRouter;
