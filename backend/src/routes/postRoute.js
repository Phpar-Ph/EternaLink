import express from "express";
import userAuth from "../middleware/userAuth.js";
import {
  createMemorial,
  addCommentToMemorial,
  getMemorialProfile,
  addReactionToMemorial,
} from "../controller/memorialController.js";

const postRouter = express.Router();

postRouter.post("/memorial", userAuth, createMemorial);
postRouter.post("/:postId/react", userAuth, addReactionToMemorial);
postRouter.post("/:postId/comment", userAuth, addCommentToMemorial);
postRouter.get("/memorial-profile/:id", userAuth, getMemorialProfile);

export default postRouter;
