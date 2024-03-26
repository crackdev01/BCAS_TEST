import { Request, Response } from "express";
import httpStatus from "http-status";

import { MESSAGES } from "consts";
import { tokensService } from "services";
import { errorHandlerWrapper } from "utils/errorHandler.wrapper";
import { NotFoundError } from "errors";

type Params = {
  id: number;
};

type ResBody = unknown;
type ReqBody = unknown;
type ReqQuery = unknown;

/**
 * @api {get} /tokens/:id
 * @Param {number} id A unique identifier for each token record
 * @apiSuccess (200) {object} Data matching id from token list
 */

export const getTokenHandler = async (
  req: Request<Params, ResBody, ReqBody, ReqQuery>,
  res: Response
) => {
  const { id } = req.params;

  const result = await tokensService.getToken(id);

  if (result) {
    res.status(httpStatus.OK).json(result);
  } else {
    throw new NotFoundError(MESSAGES.DATA_NOT_EXIST);
  }
};

export const getToken = errorHandlerWrapper(getTokenHandler);
