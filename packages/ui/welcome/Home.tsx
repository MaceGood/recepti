import React from "react";
import { Button } from "../Button";
import Image from "next/image";

type Props = {};

export const Home: React.FC<Props> = ({}) => {
  return (
    <div>
      <div className="md:flex md:flex-row flex flex-col-reverse w-full items-center justify-evenly my-12">
        <div className="font-medium text-soft-white">
          <div className="lg:text-5xl lg:leading-snug text-4xl  leading-snug">
            <p>Let’s Start</p>
            <p>Cooking With</p>
            <p>Popular Recipes.</p>
          </div>
          <Button text="Explore Recipes" className="mt-6 text-2xl" />
        </div>
        <Image
          src="/explore-menu.svg"
          alt="Explore Recipes"
          width={450}
          height={450}
        />
      </div>

      <div className="md:flex md:flex-row flex flex-col  w-full items-center justify-evenly  my-12">
        <Image
          src="/healthy.svg"
          alt="Explore Healthy Recipes"
          width={450}
          height={450}
        />
        <div className="font-medium text-soft-white">
          <div className="text-5xl leading-snug">
            <p>Cook Healthy.</p>
            <p>Stay Healthy.</p>
          </div>
          <Button text="Explore Healthy Recipes" className="mt-6 text-2xl" />
        </div>
      </div>

      <p className="text-soft-white">Recepti © 2022</p>
    </div>
  );
};
