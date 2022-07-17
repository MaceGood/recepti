import * as React from "react";
import Image from "next/image";

function classNames(...classes: any[]): string {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  text: string;
  image: string;
  className?: string;
  onClick?: () => void;
}

export const BannerCard: React.FC<Props> = ({
  text,
  image,
  className,
  onClick,
}) => {
  return (
    <div
      className={classNames(
        className,
        "flex flex-col hover:border hover:border-dark bg-light-pink rounded-lg p-4 cursor-pointer text-dark w-full md:max-w-xs"
      )}
      onClick={onClick}
    >
      <div className="w-3 h-3">
        <Image src="/x.svg" width={10} height={10} />
      </div>

      <div className="flex flex-col items-center hover:animate-pulse">
        <Image src={image} width={120} height={160} />

        <p className="text-xl">{text}</p>
      </div>
    </div>
  );
};
