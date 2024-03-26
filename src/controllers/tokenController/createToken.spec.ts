import { Request, Response } from "express";
import httpStatus from "http-status";
import { createTokenHandler } from "./createToken";
import { tokensService } from "../../services";
import { TokensEntity } from "entities";


describe("createTokenHandler", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;

  beforeEach(() => {
    req = {
      body: {
        name: "Test Token",
        ticker: "TEST",
        description: "This is a test token",
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it("should create a token and return the result", async () => {
    const mockResult: TokensEntity  = {
      id: 1,
      name: "Test Token",
      ticker: "Test",
      description: "This is a test token",
      createdAt: undefined,
      updatedAt: undefined
    };

    jest.spyOn(tokensService, "createToken").mockResolvedValue(mockResult);


    await createTokenHandler(req as Request, res as Response);

    expect(tokensService.createToken).toHaveBeenCalledWith(
      req.body.name,
      req.body.ticker,
      req.body.description
    );
    expect(res.status).toHaveBeenCalledWith(httpStatus.OK);
    expect(res.json).toHaveBeenCalledWith(mockResult);
  });
});