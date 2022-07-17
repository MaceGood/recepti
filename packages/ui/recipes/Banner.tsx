import * as React from "react";
import Image from "next/image";
import { BannerCard } from "./BannerCard";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export const Banner: React.FC = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div className="flex w-full items-center">
      <div className="hidden md:flex">
        <Image src="/recipes.svg" width="700" height="500" />
      </div>

      <div className="text-dark flex-1 p-8">
        <h2 className="text-4xl font-medium">Find the food you Love.</h2>

        <div className="flex flex-col md:flex-row m-6 justify-center">
          <BannerCard text="Explore all categories" image="/categories.svg" />
          <BannerCard
            onClick={() =>
              session?.user
                ? router.push("/create-recipe")
                : router.push("/login")
            }
            text="Create your own recipe"
            image="/create-recipe.svg"
            className="md:ml-10 md:my-0 my-10"
          />
        </div>
      </div>
    </div>
  );
};
