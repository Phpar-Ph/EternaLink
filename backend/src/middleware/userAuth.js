import jwt from "jsonwebtoken";

export const userAuth = async (res, req, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.id) {
      req.userId = decoded.id;
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized Login" });
    }
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: error.message });
  }
};
