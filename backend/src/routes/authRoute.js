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
  handleRefresh,
} from "../controller/authController.js";
import userAuth from "../middleware/auth.middleware.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/send-verify-otp", userAuth, sendOTP);
authRouter.post("/verify-email", userAuth, verifyEmail);
authRouter.get("/is-auth", userAuth, isAuthenticated);
authRouter.post("/send-reset-otp", sendPasswordResetOtp);
authRouter.post("/reset-password", resetPassword);
authRouter.get("/refresh", handleRefresh);

export default authRouter;
