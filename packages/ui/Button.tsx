import * as React from "react";

interface Props {
  text: string;
  className?: string;
  onClick?: () => void;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export const Button: React.FC<Props> = ({ text, className, onClick }) => {
  return (
    <button
      className={classNames(
        "text-soft-pink bg-soft-white rounded-lg px-10 py-2 border hover:text-soft-white hover:bg-soft-pink hover:border-soft-white",
        className
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
