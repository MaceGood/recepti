import {
  Arg,
  Field,
  FieldResolver,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import { Recipes } from "../entity/Recipes";

@InputType()
export class CreateRecipeOptions {
  @Field()
  name: string;
  @Field()
  recipe: string;
  @Field()
  timeToPrepare: string;
  @Field()
  category: string;
  @Field()
  image: string;
  // @Field()
  // createdBy: number;
}

@Resolver(Recipes)
export class RecipeResolver {
  @Query(() => [Recipes])
  async getAllRecipes() {
    return await Recipes.find();
  }

  @Mutation(() => Recipes)
  async createRecipe(@Arg("options") options: CreateRecipeOptions) {
    const createdRecipe = await Recipes.create({
      name: options.name,
      category: options.category,
      timeToPrepare: options.timeToPrepare,
      recipe: options.recipe,
      image: options.image,
      // createdBy: options.createdBy,
    }).save();

    return createdRecipe;
  }

  // @Query()
  // async deleteRecipe(@Arg("id", () => Number) id: number) {
  //   return await Recipes.delete({ id: id });
  // }
}
