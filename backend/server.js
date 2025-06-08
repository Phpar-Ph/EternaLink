import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./src/routes/authRoute.js";
import userRouter from "./src/routes/userRoute.js";
import memorialRouter from "./src/routes/memorialRoute.js";
import { createRouteHandler } from "uploadthing/express";
import uploadRouter from "./src/routes/router.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
connectDB();

const allowedOrigins = [
  "http://localhost:5173",
  "https://eternalink-fronend.onrender.com",
];

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/memorial", memorialRouter);
app.use(
  "/api/uploadthing",
  createRouteHandler({
    router: uploadRouter,
  })
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
