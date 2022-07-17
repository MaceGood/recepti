import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateRecipeOptions = {
  category: Scalars["String"];
  // createdBy: Scalars['Float'];
  image: Scalars["String"];
  name: Scalars["String"];
  recipe: Scalars["String"];
  timeToPrepare: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createRecipe: Recipes;
};

export type MutationCreateRecipeArgs = {
  options: CreateRecipeOptions;
};

export type Query = {
  __typename?: "Query";
  getAllRecipes: Array<Recipes>;
};

export type Recipes = {
  __typename?: "Recipes";
  category: Scalars["String"];
  // createdBy: Scalars['Float'];
  id: Scalars["Float"];
  image: Scalars["String"];
  name: Scalars["String"];
  recipe: Scalars["String"];
  timeToPrepare: Scalars["String"];
};

export type CreateRecipeMutationVariables = Exact<{
  options: CreateRecipeOptions;
}>;

export type CreateRecipeMutation = {
  __typename?: "Mutation";
  createRecipe: {
    __typename?: "Recipes";
    id: number;
    // createdBy: number,
    name: string;
    category: string;
    image: string;
    recipe: string;
    timeToPrepare: string;
  };
};

export const CreateRecipeDocument = gql`
  mutation CreateRecipe($options: CreateRecipeOptions!) {
    createRecipe(options: $options) {
      id
      # createdBy
      name
      category
      image
      recipe
      timeToPrepare
    }
  }
`;
export type CreateRecipeMutationFn = Apollo.MutationFunction<
  CreateRecipeMutation,
  CreateRecipeMutationVariables
>;

/**
 * __useCreateRecipeMutation__
 *
 * To run a mutation, you first call `useCreateRecipeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRecipeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRecipeMutation, { data, loading, error }] = useCreateRecipeMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useCreateRecipeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateRecipeMutation,
    CreateRecipeMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateRecipeMutation,
    CreateRecipeMutationVariables
  >(CreateRecipeDocument, options);
}
export type CreateRecipeMutationHookResult = ReturnType<
  typeof useCreateRecipeMutation
>;
export type CreateRecipeMutationResult =
  Apollo.MutationResult<CreateRecipeMutation>;
export type CreateRecipeMutationOptions = Apollo.BaseMutationOptions<
  CreateRecipeMutation,
  CreateRecipeMutationVariables
>;
