import { DBConnect } from "../dbConnector";

import { TokensEntity } from "entities";

export const getTokensRepository = async () => {
  const connection = await DBConnect.getConnection();

  return connection.getRepository(TokensEntity);
};
