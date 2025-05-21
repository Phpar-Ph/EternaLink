import mongoose from "mongoose";

// --- User Schema ---
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    verifyOtp: {
      type: String,
      default: "0",
    },
    verifyOtpExpireAt: {
      type: Number,
      default: 0,
    },
    isAccountVerified: {
      type: Boolean,
      default: false,
    },
    resetOtp: {
      type: String,
      default: "",
    },
    resetOtpExpireAt: {
      type: Number,
      default: 0,
    },
    rememberMe: {
      type: Boolean,
      default: false,
    },
    memorialPosts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Memorial",
      },
    ],
  },
  { timestamps: true }
);

// --- Models ---

const User = mongoose.models.User || mongoose.model("User", userSchema);

// --- Exports ---
export default User;
