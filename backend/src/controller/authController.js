import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../model/userSchema.js";
const expireToken = "15m";
// Register

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  // check if user entered all fields
  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please fill all the fields",
    });
  }
  try {
    // check if input user email already exist
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exist",
      });
    }
    // change password from plain text to hash save to database
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();

    //  ACCESS token 15min
    const accessToken = jwt.sign(
      { id: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: expireToken }
    );

    // REFRESH TOKEN 7Days
    const refreshToken = jwt.sign(
      { id: user._id },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    // Add token to cookie
    // res.cookie("refreshToken", refreshToken, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    //   maxAge: 24 * 60 * 60 * 1000,
    // });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true, // 🔒 Prevent JS access to cookie
      secure: process.env.NODE_ENV === "production", // 🔒 Only send over HTTPS in production
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // ⚠️ "none" requires `secure: true`
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });
    // Send Welocome Email to User
    //  const mailOptions = {
    //   from: process.env.SENDER_EMAIL,
    //   to: email,
    //   subject: "Welcome to our app! 🎉",
    //   html: EMAIL_WELCOME_TEMPLATE.replace("{{name}}", name).replace(
    //     "{{email}}",
    //     email
    //   ),
    // };
    // await transporter.sendMail(mailOptions);
    res.status(200).json({
      success: true,
      message: "User created successfully",
      user: {
        name: user.name,
        email: user.email,
      },
      accessToken,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Login
export const login = async (req, res) => {
  const { email, password, rememberMe } = req.body;
  // Check if user fill up all the input fields
  if (!email || !password) {
    res.status(400).json({
      success: false,
      message: "Please fill all the field",
    });
  }
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User does not exist",
      });
    }
    //    Compare the hash password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid Password",
      });
    }
    //  ACCESS token 15min
    const accessToken = jwt.sign(
      { id: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: expireToken }
    );

    // REFRESH TOKEN 7Days
    const refreshToken = jwt.sign(
      { id: user._id },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    // add token to cookie
    // res.cookie("refreshToken", refreshToken, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    //   maxAge: 24 * 60 * 60 * 1000,
    // });
 res.cookie("refreshToken", refreshToken, {
      httpOnly: true, // 🔒 Prevent JS access to cookie
      secure: process.env.NODE_ENV === "production", // 🔒 Only send over HTTPS in production
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // ⚠️ "none" requires `secure: true`
      maxAge: rememberMe ? 30 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000, // if remeberME set to 30 day else 1 day
    });
   
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user: {
        name: user.name,
        email: user.email,
      },
      accessToken,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// logout
export const logout = async (req, res) => {
  try {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.status(200).json({
      success: true,
      message: "User logged out successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// send OTP to the user for verification
export const sendOTP = async (res, req) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    if (user.isAccountVerified) {
      return res.json({
        success: false,
        message: "Account is already verified",
      });
    }
    const otp = String(Math.floor(Math.random() * 900000));
    user.verifyOtp = otp;
    user.verifyOtpExpireAt = Date.now() + 24 * 60 * 1000;
    await user.save();

    // Send OTP to email
    //  const mailOptions = {
    //       from: process.env.SENDER_EMAIL,
    //       to: user.email,
    //       subject: "Account Verification OTP",
    //       html: EMAIL_SEND_OTP_TEMPLATE.replace("{{name}}", user.name).replace(
    //         "{{otp}}",
    //         otp
    //       ),
    //     };

    //     await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Otp sent successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Verify email
export const verifyEmail = async (req, res) => {
  const { otp } = req.body;
  if (!otp) {
    res.json({
      success: false,
      message: "OTP is required",
    });
  }
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.json({
        success: false,
        message: "user does not exist",
      });
    }
    if (user.verifyOtp !== otp || user.verifyOtp === "") {
      res.json({
        success: false,
        message: "Invalid OTP",
      });
    }
    if (user.verifyOtpExpireAt < Date.now()) {
      return res.json({
        success: false,
        message: "Otp expired",
      });
    }
    user.isAccountVerified = true;
    user.verifyOtp = "";
    user.verifyOtpExpireAt = 0;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Account verified successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Check if user is Authenticated
export const isAuthenticated = async (req, res) => {
  try {
    return res.json({
      success: true,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Send password reset OTP
export const sendPasswordResetOtp = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.json({
      success: false,
      message: "Email is required",
    });
  }
  try {
    const user = await User.findOne(email);
    if (!user) {
      return res.json({
        success: false,
        message: "User not found for password reset",
      });
    }
    const otp = String(Math.floor(Math.random() * 900000));
    user.resetOtp = otp;
    user.resetOtpExpireAt = Date.now() + 15 * 60 * 1000;
    await user.save();

    // Send OTP to email
    //  const mailOptions = {
    //       from: process.env.SENDER_EMAIL,
    //       to: user.email,
    //       subject: "Password Reset Request",
    //       html: EMAIL_RESET_OTP_TEMPLATE.replace("{{name}}", user.name).replace(
    //         "{{otp}}",
    //         otp
    //       ),
    //     };
    //     await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Otp sent successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// reset password
export const resetPassword = async (req, res) => {
  const { otp, email, newPassword } = req.body;
  if (!otp || !email || !newPassword) {
    return res.json({
      success: false,
      message: "OTP, Email and new password are required",
    });
  }
  try {
    const user = await User.findOne(email);
    if (!user) {
      return res.json({
        success: false,
        message: "User does not exist",
      });
    }

    if (user.resetOtp !== otp || user.resetOtp === "") {
      return res.json({
        success: false,
      });
    }
    if (user.resetOtpExpireAt < Date.now()) {
      return res.json({
        success: false,
        message: "Otp expired",
      });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.resetOtp = "";
    user.resetOtpExpireAt = 0;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Password reset successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// REFRESH
export const handleRefresh = async (req, res) => {
  try {
    const cookies = req.cookies;

    if (!cookies?.refreshToken) {
      return res.status(401).json({
        success: false,
        message: "No refresh token provided",
      });
    }

    const refreshToken = cookies.refreshToken;
    // Verify refresh token
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    // Find user
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    // Generate new access token
    const accessToken = jwt.sign(
      { id: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: expireToken }
    );
    console.log("successfully");

    res.json({
      success: true,
      accessToken,
    });
  } catch (error) {
    res.status(403).json({
      success: false,
      message: "Invalid Refresh token",
    });
  }
};
