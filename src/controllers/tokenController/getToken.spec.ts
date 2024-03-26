import { Request, Response } from "express";
import httpStatus from "http-status";
import { getTokenHandler } from "./getToken";
import { tokensService } from "../../services";
import { TokensEntity } from "entities";

describe("getTokenHandler", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(() => {
    req = {
      params: {
        id: "1",
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it("should get a token and return the result", async () => {
    const mockResult: TokensEntity = {
      id: 1,
      name: "Test Token",
      ticker: "Test",
      description: "This is a test token",
      createdAt: undefined,
      updatedAt: undefined,
    };

    jest.spyOn(tokensService, "getToken").mockResolvedValue(mockResult);

    await getTokenHandler(req as Request<any, any, any, any>, res as Response);

    expect(tokensService.getToken).toHaveBeenCalledWith(req.params.id);
    expect(res.status).toHaveBeenCalledWith(httpStatus.OK);
    expect(res.json).toHaveBeenCalledWith(mockResult);
  });
});
