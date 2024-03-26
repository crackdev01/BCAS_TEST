import { tokensController } from "controllers";
import express from "express";

const tokensRouter = express.Router();

tokensRouter.post(
  "/",
  tokensController.createTokenValidator(),
  tokensController.createToken
);

tokensRouter.get(
  "/:id",
  tokensController.getToken
)

export default tokensRouter;
