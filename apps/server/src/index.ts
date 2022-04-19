import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./data-source";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/user";

async function main() {
  const app = express();
  const port = 4000;

  AppDataSource.initialize();

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
      validate: false,
    }),
  });

  await server.start();
  server.applyMiddleware({ app });

  app.listen(port, () =>
    console.log(
      `app running on url: http://localhost:${port}${server.graphqlPath}`
    )
  );
}

main().catch((error) => console.log(error));
