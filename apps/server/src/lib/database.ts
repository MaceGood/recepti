import path from "path";
import { DataSource } from "typeorm";
import { Recipes } from "../entity/Recipes";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "mace",
  password: "mace",
  database: "recipes",
  synchronize: true,
  logging: true,
  entities: [Recipes],
  subscribers: [],
  migrations: [path.join(__dirname, "./src/migrations/*")],
});
