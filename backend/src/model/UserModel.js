import mongoose from "mongoose";

const userSchema = mongoose.Schema({
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
    default: 0,
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
  // profilePic: {
  //   type: String,
  //   default: "",
  // },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
