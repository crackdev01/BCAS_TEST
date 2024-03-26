import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

import { CoreEntity } from "./Core.entity";

/**
 * @description Tokens Entity for tokens table.
 */

@Entity({
  name: "tokens",
})
export class TokensEntity extends CoreEntity {
  @PrimaryGeneratedColumn("increment", { type: "bigint" })
  id: number;

  @Column({ name: "name", nullable: true })
  name: string;

  @Column({ name: "ticker", nullable: true })
  ticker: string;

  @Column({ name: "description", nullable: true })
  description: string;
}
