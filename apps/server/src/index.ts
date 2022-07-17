import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./lib/database";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { RecipeResolver } from "./resolvers/Recipes";

async function main() {
  const app = express();
  const port = 4000;

  AppDataSource.initialize();

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [RecipeResolver],
      validate: false,
    }),
  });

  await server.start();

  const corsOptions = {
    origin: ["http://localhost:3000", "https://studio.apollographql.com"],
  };

  server.applyMiddleware({ app, cors: corsOptions });

  app.listen(port, () =>
    console.log(
      `app running on url: http://localhost:${port}${server.graphqlPath}`
    )
  );
}

main().catch((error) => console.log(error));
