// import { EMAIL_RESET_OTP_TEMPLATE } from "../config/EmailTemplate.js";
import User from "../model/userSchema.js";
import Memorial from "../model/memorialSchema.js";

export const getUserData = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.json({
        success: false,
        message: "User does not exist",
      });
    }
    // Then find all memorials created by this user
    const memorials = await Memorial.find({ createdBy: req.userId })
      .select(
        "name birthDate datePassing location createdAt relationship  profilePhoto coverPhoto message "
      )
      .sort({ createdAt: -1 });

    return res.json({
      success: true,
      userData: {
        name: user.name,
        email: user.email,
        memorialPosts: memorials || [],
      },
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};
