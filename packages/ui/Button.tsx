import * as React from "react";
import { useRouter } from "next/router";

interface Props {
  text: string;
  className?: string;
  onClick?: () => void;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export const Button: React.FC<Props> = ({ text, className, onClick }) => {
  const router = useRouter();
  return (
    <button
      className={classNames(
        router.pathname === "/create-recipe"
          ? "text-soft-white bg-soft-pink hover:text-soft-pink hover:bg-soft-white hover:border-soft-pink"
          : "text-soft-pink bg-soft-white hover:text-soft-white hover:bg-soft-pink hover:border-soft-white",

        className,
        "rounded-lg px-10 py-2 border"
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
