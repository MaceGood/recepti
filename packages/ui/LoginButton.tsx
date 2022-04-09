import * as React from "react";
import Image from "next/image";

interface Props {
  text: string;
  className?: string;
  onClick?: () => void;
  src: string;
  alt: string;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export const LoginButton: React.FC<Props> = ({
  text,
  className,
  onClick,
  src,
  alt,
}) => {
  return (
    <div
      onClick={onClick}
      className={classNames(
        "text-soft-pink bg-soft-white rounded-lg px-6 sm:px-10 py-2 border hover:text-soft-white hover:bg-soft-pink hover:border-soft-white hover:cursor-pointer flex items-center max-w-sm",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={40}
        height={40}
        className="sm:w-10 sm:h-10 w-6 h-6"
      />

      <p className="ml-8 text-lg sm:text-xl"> {text}</p>
    </div>
  );
};
