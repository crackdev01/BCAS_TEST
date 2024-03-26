import { TokensEntity } from "entities";
import { getTokensRepository } from "utils";

/**
 * Creates a new token entity in the database with the provided name, ticker, and description.
 * @param {string} name The name of the token.
 * @param {string} ticker The ticker symbol of the token.
 * @param {string} description The description of the token.
 * @returns {object} A Promise that resolves to the created token entity.
 */

export const createToken = async (
  name: string,
  ticker: string,
  description: string
): Promise<TokensEntity | null> => {
  const tokensRepository = await getTokensRepository();
  const tokens = new TokensEntity();
  tokens.name = name;
  tokens.ticker = ticker;
  tokens.description = description;
  await tokensRepository.save(tokens);
  return tokens;
};
