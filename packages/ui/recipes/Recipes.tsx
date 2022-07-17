import React from "react";
import { Recipe } from "..";
import Image from "next/image";

type Props = {};

export const Recipes: React.FC<Props> = ({}) => {
  return (
    <div className="p-8 text-dark">
      <div>
        <p className="text-2xl font-medium">Recipes</p>
        <div className="flex flex-wrap w-full justify-start">
          <Recipe text={"baklava i talumba"} image={"/baklava.png"} />
        </div>

        <div className="w-full flex justify-center my-8">
          <div className="rounded-full justify-center bg-light-pink hover:border-dark hover:border cursor-pointer items-center flex">
            <Image src="/down.svg" width={50} height={50} />
          </div>
        </div>
      </div>

      <div>
        <p className="text-2xl font-medium">Healthy Recipes</p>
        <div className="flex flex-wrap w-full justify-start">
          <Recipe text={"baklava i talumba"} image={"/baklava.png"} />
        </div>

        <div className="w-full flex justify-center my-8">
          <div className="rounded-full justify-center bg-light-pink hover:border-dark hover:border cursor-pointer items-center flex">
            <Image src="/down.svg" width={50} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
};
