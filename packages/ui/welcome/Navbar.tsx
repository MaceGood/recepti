import * as React from "react";
import { Button } from "../Button";
import NavbarMenu from "./NavbarMenu";

type Props = {
  onClick: () => void;
};

export const Navbar: React.FC<Props> = ({ onClick }) => {
  return (
    <div className="flex justify-between text-soft-white items-center select-none">
      <h1 className="font-medium text-2xl">Recepti</h1>

      <div className="hidden md:flex text-lg items-center">
        <p className="mr-10 cursor-pointer hover:text-soft-blue">Home</p>
        <p className="mr-10 cursor-pointer hover:text-soft-blue">Recipes</p>
        <Button text="Login" onClick={onClick} />
      </div>

      <div className="md:hidden flex">
        <NavbarMenu onClick={onClick} />
      </div>
    </div>
  );
};
