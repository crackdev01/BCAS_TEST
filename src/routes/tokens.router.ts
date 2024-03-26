import { tokensController } from "controllers";
import express from "express";

const tokensRouter = express.Router();

tokensRouter.post(
  "/",
  tokensController.createTokenValidator(),
  tokensController.createToken
);

export default tokensRouter;
