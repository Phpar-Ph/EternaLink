import mongoose from "mongoose";

// --- User Schema ---
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
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
    avatar: {
      url: { type: String, default: "" },
    },
    // memorialPosts: [
    //   {
    //     post: {
    //       type: mongoose.Schema.Types.ObjectId,
    //       ref: "Memorial",
    //       required: true,
    //     },
    //   },
    // ],
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
