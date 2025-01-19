import "reflect-metadata";
import { DataSource } from "typeorm";

import * as dotenv from "dotenv";
import { User } from "./entity/User.entity";

dotenv.config();

const { POSTGRES_HOST, DB_PORT, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DATABASE, NODE_ENV } =
  process.env;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: POSTGRES_HOST,
  port: parseInt(DB_PORT || "5432"),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DATABASE,
  ssl:true,

  synchronize: NODE_ENV === "dev" ? false : false,
//logging logs sql command on the treminal
  logging: NODE_ENV === "dev" ? false : false,
  entities: [User],
  migrations: [__dirname + "/migration/*.ts"],
  subscribers: [],
});