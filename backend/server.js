import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./src/routes/authRoute.js";
import userRouter from "./src/routes/userRoute.js";
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
connectDB();

const allowedOrigins = [
  "http://localhost:5173",
  "https://eternalink-fronend.onrender.com/",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
