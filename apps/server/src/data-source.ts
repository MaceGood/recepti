import path from "path";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "mace",
  password: "mace",
  database: "recipes",
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [path.join(__dirname, "./src/migrations/*")],
});
