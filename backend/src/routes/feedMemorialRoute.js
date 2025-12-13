import express from "express";
import { getPublicMemorials } from "../controller/publicMemorialController.js";
import verifyJWT from "../middleware/verifyJWT.js";

const feedMemorialRouter = express.Router();

feedMemorialRouter.get("/feedMemorial", verifyJWT, getPublicMemorials);

export default feedMemorialRouter;
