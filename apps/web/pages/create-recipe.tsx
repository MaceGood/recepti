import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button, DragAndDrop, Input } from "ui";
import Head from "next/head";
import { Navbar } from "ui";
import { useCreateRecipeMutation } from "../generated/graphql";

const CreateRecipe: NextPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [createRecipe] = useCreateRecipeMutation();
  const [options, setOptions] = useState<{
    // createdBy: number;
    name: string;
    category: string;
    image: string;
    recipe: string;
    timeToPrepare: string;
  }>({
    // createdBy: 0, // get user id
    name: "",
    category: "",
    image: "",
    recipe: "",
    timeToPrepare: "",
  });

  if (status === "unauthenticated") router.push("/login");

  return (
    <div className="w-full min-h-screen mx-auto bg-soft-white px-10 py-6 text-dark">
      <Head>
        <title>Create Recipe - Recepti</title>
        <meta name="home" content="Recepti" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <h1 className="text-3xl font-medium mt-10 mb-6">Create your Recipe</h1>

      <div>
        <Input
          placeholder="Name"
          className="ml-4 mt-2"
          value={options.name}
          onChange={(e) =>
            setOptions({ ...options, name: String(e.target.value) })
          }
        />
        <Input
          placeholder="Category"
          className="ml-4 mt-2"
          value={options.category}
          onChange={(e) =>
            setOptions({ ...options, category: String(e.target.value) })
          }
        />
        <Input
          placeholder="Time to prepare"
          className="ml-4 mt-2"
          type="number"
          value={options.timeToPrepare}
          onChange={(e) =>
            setOptions({ ...options, timeToPrepare: String(e.target.value) })
          }
        />
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="m-4">
          <Input
            placeholder="Recipe"
            type="textarea"
            value={options.recipe}
            onChange={(e) =>
              setOptions({ ...options, recipe: String(e.target.value) })
            }
          />
          <Button
            text="Publish"
            onClick={async () => {
              await createRecipe({ variables: { options: options } });
              setOptions({
                // createdBy: 0,
                name: "",
                category: "",
                image: "",
                recipe: "",
                timeToPrepare: "",
              });
              router.push("/recipes");
            }}
          />
        </div>

        <DragAndDrop />
      </div>
    </div>
  );
};

export default CreateRecipe;
