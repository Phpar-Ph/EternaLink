import express from "express";
import userAuth from "../middleware/userAuth.js";
import {
  createMemorial,
  addCommentToMemorial,
  getMemorialProfile,
  addReactionToMemorial,
  createBiography,
  getMemorialProfileData,
} from "../controller/memorialController.js";
import verifyJWT from "../middleware/verifyJWT.js";
const memorialRouter = express.Router();

memorialRouter.post("/createMemorial", verifyJWT, createMemorial);
memorialRouter.post("/:postId/react", verifyJWT, addReactionToMemorial);
memorialRouter.post("/:postId/comment", verifyJWT, addCommentToMemorial);
memorialRouter.get("/memorial-profile/:id", verifyJWT, getMemorialProfile);
memorialRouter.post("/addBiography", verifyJWT, createBiography);
memorialRouter.get("/getMemorial/:id", verifyJWT, getMemorialProfileData);

export default memorialRouter;
