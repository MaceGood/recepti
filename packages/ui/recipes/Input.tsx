import React, {
  DetailedHTMLProps,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

type Props = {
  placeholder: string;
  type?: HTMLInputTypeAttribute;
  className?: string;
  value?: any;
  onChange?: (e) => void;
};

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export const Input: React.FC<Props> = ({
  placeholder,
  type,
  className,
  value,
  onChange,
}) => {
  return (
    <>
      {type === "textarea" ? (
        <textarea
          className={classNames(
            className,
            "border-0 outline-0 bg-light-pink placeholder:text-dark text-dark w-full px-2 py-3 max-w-2xl rounded-md focus:ring ring-soft-purple"
          )}
          id=""
          name=""
          rows={10}
          cols={50}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        ></textarea>
      ) : (
        <input
          className={classNames(
            className,
            "border-0 outline-0 bg-light-pink placeholder:text-dark text-dark w-full px-2 py-3 max-w-xs rounded-md focus:ring ring-soft-purple"
          )}
          type={type}
          {...(type === "number" && { min: 0 })}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </>
  );
};
