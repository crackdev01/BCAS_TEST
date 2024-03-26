import express from "express";

import tokensRouter from "./tokens.router";

const appRoutes = express.Router();

appRoutes.use("/tokens", tokensRouter);

export default appRoutes;
