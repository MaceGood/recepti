import React from "react";
import Image from "next/image";

type Props = {
  text: string;
  image: string;
};

export const Recipe: React.FC<Props> = ({ image, text }) => {
  return (
    <div className="flex flex-col hover:border hover:border-dark bg-light-pink rounded-lg p-4 cursor-pointer text-dark w-full md:max-w-xs m-4">
      <div className="flex flex-col">
        <Image src={image} width={300} height={200} className="rounded-lg" />

        <p className="text-xl my-8">
          {text?.length >= 25 ? text.slice(0, 25) + "..." : text}
        </p>
      </div>
    </div>
  );
};
