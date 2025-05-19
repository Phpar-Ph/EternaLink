import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./src/routes/authRoute.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
connectDB();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/auth", authRouter);
// app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
