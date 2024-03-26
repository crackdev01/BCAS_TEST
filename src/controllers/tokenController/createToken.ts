import { Request, Response } from "express";
import { body } from "express-validator";
import httpStatus from "http-status";

import { tokensService } from "services";
import { errorHandlerWrapper } from "utils/errorHandler.wrapper";

/**
 * 
 * @description The body in Requset validation.
 */
export const createTokenValidator = () => {
  return [body("name").notEmpty().withMessage({ title: "Name is required" })];
};

type Params = unknown;
type ResBody = unknown;
type ReqBody = {
  name: string;
  ticker: string;
  description: string;
};
type ReqQuery = unknown;

/**
 * @api {post} /tokens
 * @reqBody {string} name 
 * @reqBody {string} ticker 
 * @reqBody {string} description 
 * @apiSuccess (201) {object} data the created tokens
 */

export const createTokenHandler = async (
  req: Request<Params, ResBody, ReqBody, ReqQuery>,
  res: Response
) => {
  const { name, ticker, description } = req.body;
  const result = await tokensService.createToken(name, ticker, description);
  res.status(httpStatus.OK).json(result);
};

export const createToken = errorHandlerWrapper(createTokenHandler);
