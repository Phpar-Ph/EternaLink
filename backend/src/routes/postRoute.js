import express from "express";
import userAuth from "../middleware/userAuth.js";
import {
  createMemorial,
  addCommentToMemorial,
  addReactionToMemorial,
} from "../controller/memorialController.js";

const postRouter = express.Router();

postRouter.post("/memorial", userAuth, createMemorial);
postRouter.post("/:postId/react", userAuth, addReactionToMemorial);
postRouter.post("/:postId/comment", userAuth, addCommentToMemorial);

export default postRouter;
